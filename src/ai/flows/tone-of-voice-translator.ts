'use server';
/**
 * @fileOverview AI-powered translation flow that translates text into different tones of voice.
 *
 * - translateText - A function that translates input text into a specified tone of voice.
 * - TranslateTextInput - The input type for the translateText function.
 * - TranslateTextOutput - The return type for the translateText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  tone: z
    .string()
    .describe(
      'The desired tone of voice for the translated text. Options include professional, casual, and humorous.'
    ),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
  translatedText: z.string().describe('The translated text in the specified tone of voice.'),
  isApplicable: z.boolean().describe('Whether the tone is applicable to a business'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
  return translateTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'toneOfVoiceTranslatorPrompt',
  input: {schema: TranslateTextInputSchema},
  output: {schema: TranslateTextOutputSchema},
  prompt: `You are a translation expert specializing in adapting text to different tones of voice.

You will analyze the requested tone, and determine if it is appropriate for business use. If it is not, you will mark the isApplicable output field as false and stop. If it is applicable, you will translate the text into the specified tone of voice.

Text: {{{text}}}
Tone: {{{tone}}}
`,
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
