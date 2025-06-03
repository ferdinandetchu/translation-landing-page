
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { cn } from "@/lib/utils";
import { CalendarIcon, Send, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import React, { useState, useEffect } from "react";
import type { LocaleDictionary } from '@/dictionaries/types';


export function BookingFormSection({ dictionary }: { dictionary: LocaleDictionary }) {
  
  const bookingFormSchema = z.object({
    name: z.string().min(2, { message: dictionary.bookingFormNameMinError }),
    email: z.string().email({ message: dictionary.bookingFormEmailError }),
    phone: z.string().optional(),
    service: z.string({ required_error: dictionary.bookingFormServiceError }),
    preferredDate: z.date().optional(),
    message: z.string().max(500, { message: dictionary.bookingFormMessageMaxError }).optional(),
  });
  
  type BookingFormValues = z.infer<typeof bookingFormSchema>;

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [minCalendarDate, setMinCalendarDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setMinCalendarDate(new Date(new Date().setHours(0, 0, 0, 0)));
  }, []);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      preferredDate: undefined,
      message: "",
    },
  });

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Booking Data:", data);
    toast({
      title: dictionary.bookingFormSuccessToastTitle,
      description: dictionary.bookingFormSuccessToastDescription,
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <SectionWrapper id="booking" className="bg-primary/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
          {dictionary.bookingFormReady} <span className="text-accent">{dictionary.bookingFormStartedAccent}</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {dictionary.bookingFormSubtitle}
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.bookingFormFullNameLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={dictionary.bookingFormFullNamePlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.bookingFormEmailLabel}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={dictionary.bookingFormEmailPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.bookingFormPhoneLabel}</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder={dictionary.bookingFormPhonePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.bookingFormServiceLabel}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={dictionary.bookingFormServicePlaceholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dictionary.servicesData.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>{dictionary.bookingFormDateLabel}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>{dictionary.bookingFormDatePlaceholder}</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      {minCalendarDate === undefined ? (
                        <div className="p-3 flex items-center justify-center" style={{width: '288px', height: '333px'}}>
                           <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        </div>
                      ) : (
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < minCalendarDate}
                          initialFocus
                        />
                      )}
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.bookingFormMessageLabel}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={dictionary.bookingFormMessagePlaceholder}
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {dictionary.bookingFormMessageDescription}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" variant="accent" size="lg" disabled={isSubmitting || minCalendarDate === undefined}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" /> }
              {isSubmitting ? dictionary.bookingFormSubmitting : dictionary.bookingFormSubmitButton}
            </Button>
          </form>
        </Form>
      </div>
    </SectionWrapper>
  );
}
