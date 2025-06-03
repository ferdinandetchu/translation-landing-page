
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { runFlow } from '@genkit-ai/next/client';
import type { TranslateTextInput, TranslateTextOutput } from '@/ai/flows/tone-of-voice-translator';
import { translateText as translateTextFlow } from '@/ai/flows/tone-of-voice-translator';
import type { LocaleDictionary } from '@/dictionaries/types';

export function AiSamplerSection({ dictionary }: { dictionary: LocaleDictionary }) {
  const [inputText, setInputText] = useState<string>('Hello, we are pleased to inform you about our new service offering.');
  const [selectedToneValue, setSelectedToneValue] = useState<string>(dictionary.tonesOfVoice[0].value);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiResult, setApiResult] = useState<TranslateTextOutput | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!inputText.trim() || !selectedToneValue) {
      toast({
        title: dictionary.aiSamplerInputMissingToastTitle,
        description: dictionary.aiSamplerInputMissingToastDescription,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setApiResult(null);
    setApiError(null);

    try {
      const flowInput: TranslateTextInput = { text: inputText, tone: selectedToneValue };
      const result = await runFlow(translateTextFlow, flowInput);
      
      if (result) {
        setApiResult(result);
      } else {
        const errorMsg = dictionary.aiSamplerErrorToastDescription;
        setApiError(errorMsg);
         toast({
          title: dictionary.aiSamplerErrorToastTitle,
          description: errorMsg,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('AI Sampler Error:', error);
      const errorMessage = error instanceof Error ? error.message : dictionary.aiSamplerErrorToastDescription;
      setApiError(errorMessage);
      toast({
        title: dictionary.aiSamplerGenericErrorToastTitle,
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const selectedToneObject = dictionary.tonesOfVoice.find(t => t.value === selectedToneValue);
  const selectedToneLabel = selectedToneObject ? selectedToneObject.label : selectedToneValue;

  return (
    <SectionWrapper id="ai-sampler" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
          {dictionary.aiSamplerExperience} <span className="text-accent">{dictionary.aiSamplerTitleAccent}</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {dictionary.aiSamplerSubtitle}
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{dictionary.aiSamplerCardTitle}</CardTitle>
          <CardDescription>{dictionary.aiSamplerCardDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="source-text" className="block text-sm font-medium text-foreground">{dictionary.aiSamplerSourceTextLabel}</label>
            <Textarea
              id="source-text"
              placeholder={dictionary.aiSamplerSourceTextPlaceholder}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
              className="focus:ring-accent focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="tone-select" className="block text-sm font-medium text-foreground">{dictionary.aiSamplerSelectToneLabel}</label>
            <Select value={selectedToneValue} onValueChange={setSelectedToneValue}>
              <SelectTrigger id="tone-select" className="w-full focus:ring-accent focus:border-accent">
                <SelectValue placeholder={dictionary.aiSamplerSelectTonePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {dictionary.tonesOfVoice.map((tone) => (
                  <SelectItem key={tone.value} value={tone.value}>
                    {tone.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleSubmit} disabled={isLoading} className="w-full" variant="accent">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            {dictionary.aiSamplerTranslateButton}
          </Button>

          {apiResult && (
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold font-headline text-primary">{dictionary.aiSamplerResultTitle}</h3>
              {!apiResult.isApplicable && (
                <Alert variant="destructive" className="bg-destructive/10 border-destructive/30 text-destructive">
                   <AlertTriangle className="h-4 w-4 !text-destructive" />
                  <AlertTitle>{dictionary.aiSamplerToneNotApplicableTitle}</AlertTitle>
                  <AlertDescription>
                    {dictionary.aiSamplerToneNotApplicableDescription.replace('{selectedToneLabel}', selectedToneLabel)}
                  </AlertDescription>
                </Alert>
              )}
               <Card className="bg-primary/5 border-primary/20">
                 <CardContent className="p-4">
                    <p className="text-foreground">{apiResult.translatedText}</p>
                 </CardContent>
               </Card>
            </div>
          )}
          
          {apiError && (
             <Alert variant="destructive" className="mt-4">
               <AlertTriangle className="h-4 w-4" />
              <AlertTitle>{dictionary.aiSamplerGenericErrorToastTitle}</AlertTitle>
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
