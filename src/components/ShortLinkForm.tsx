"use client";

import {
  Link2,
  LoaderCircle,
  Wand,
  SquareArrowOutUpRight,
  Copy,
} from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import axios, { AxiosError } from "axios";

import React, { useState } from "react";

// Import Shadcn UI Components
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
import { toast } from "@/components/ui/use-toast";
import { handleCopy } from "@/lib/utils";
import { handleSubmit } from "@/app/actions";

// Zod Schema for Validation
const FormSchema = z.object({
  originalUrl: z
    .string()
    .min(9, "Link must be at least 9 characters long.")
    .url({ message: "Please enter a valid URL." })
    .includes("https://", { message: "We only shorten secured links." }),
});

type FormFields = z.infer<typeof FormSchema>;

function ShortLinkForm() {
  // React States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [response, setResponse] = useState<{
    originalUrl: string | undefined;
    shortId: string | undefined;
    message?: string | undefined;
  }>({
    originalUrl: undefined,
    shortId: undefined,
    message: undefined,
  });

  // Hook Form
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      originalUrl: "",
    },
  });

  // Handle Submit
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // Reset Response
    setResponse({
      originalUrl: "",
      shortId: "",
      message: "",
    });
    setIsSubmitting(true);

    // Handle Submit
    const response = await handleSubmit(data);

    // Handle Error
    if (response.success === false) {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }

    // Set Response
    setResponse({
      originalUrl: response.originalUrl,
      shortId: response.shortId,
      message: response.message,
    });

    // Reset Form
    setIsSubmitting(false);

    // Show Success Toast
    toast({
      title: "Success",
      description: "URL shortened successfully.",
    });
  };

  // Handle Shorten Another Link Button
  const handleShortenAnotherLink = () => {
    form.reset();
    setResponse({
      originalUrl: "",
      shortId: "",
    });
  };

  return (
    <>
      {response.originalUrl && response.shortId ? (
        <div className="max-w-5xl mx-auto space-y-6 p-4 py-8 sm:p-8 shadow-md backdrop:blur-sm bg-transparent/10 rounded-none sm:rounded-lg">
          <Form {...form}>
            <form className="space-y-4">
              {/* Original URL */}
              <FormItem>
                <FormLabel className="text-lg font-semibold flex items-center gap-2">
                  <Link2 className="font-extrabold" />
                  <span>Your long URL</span>
                </FormLabel>
                <FormControl>
                  <Input disabled value={response.originalUrl} />
                </FormControl>
              </FormItem>

              {/* Shortened URL */}
              <FormItem>
                <FormLabel className="text-lg font-semibold flex items-center gap-2">
                  <Wand className="font-extrabold" />
                  <span>URL Trailed</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled
                    value={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/r/${response.shortId}`}
                  />
                </FormControl>
              </FormItem>
            </form>
          </Form>

          {/* Buttons */}
          <div className="flex items-center space-x-3 -mt-2">
            {/* Go to link button */}
            <Button variant={"outline"} asChild>
              <a href={`/r/${response.shortId}`} target="_blank">
                <SquareArrowOutUpRight className="h-4 w-4" />
              </a>
            </Button>

            {/* Copy link button */}
            <Button
              className=""
              onClick={() => {
                handleCopy(
                  `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/r/${response.shortId}`
                );
              }}
            >
              <Copy className="h-4 w-4 mr-2" />
              <span>Copy</span>
            </Button>

            {/* Shorten another link */}
            <Button
              variant={"default"}
              className="w-full"
              onClick={handleShortenAnotherLink}
            >
              Shorten Another Link
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-5xl mx-auto space-y-6 p-4 py-8 sm:p-8 shadow-md backdrop:blur-sm bg-transparent/10 rounded-none sm:rounded-lg"
            >
              {/* Input Link */}
              <FormField
                control={form.control}
                name="originalUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold flex items-center gap-2">
                      <Link2 className="font-extrabold" />
                      <span>Shorten a long URL</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter long link here"
                        autoComplete="false"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="italic">
                      This link will be shortened by URL Trailed.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit Button */}
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoaderCircle className="animate-spin" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Shorten URL"
                )}
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  );
}

export default ShortLinkForm;
