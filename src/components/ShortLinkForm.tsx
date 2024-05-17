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

// Shadcn UI Components
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
import Link from "next/link";

// Zod Validation
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    originalUrl: string;
    shortId: string;
  }>({
    originalUrl: "",
    shortId: "",
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
    setResponse({
      originalUrl: "",
      shortId: "",
    });
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/shorten-url", data);
      setResponse(response.data?.data);
      toast({
        title: "Success",
        description: "URL shortened successfully.",
      });
    } catch (error) {
      const axiosErrors = error as AxiosError;
      toast({
        title: "Error",
        description: (
          <pre className="mt-1 w-[340px] rounded-md p-1">
            <code className="text-white">
              {JSON.stringify(axiosErrors.message, null, 2)}
            </code>
          </pre>
        ),
        variant: "destructive",
        duration: 2000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Copy Button
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/r/${response.shortId}`
    );
    toast({
      title: "Copied",
      description: "Shortened URL copied to clipboard.",
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
        <div className="max-w-xl w-full mx-auto space-y-6 border p-8 shadow-lg bg-white text-[#343A40] rounded-lg">
          <Form {...form}>
            <form className="space-y-4">
              {/* Original URL */}
              <FormItem>
                <FormLabel className="text-lg font-semibold flex items-center space-x-1">
                  <Link2 className="font-extrabold" />
                  <span>Your long URL</span>
                </FormLabel>
                <FormControl>
                  <Input disabled value={response.originalUrl} />
                </FormControl>
              </FormItem>

              {/* Shortened URL */}
              <FormItem>
                <FormLabel className="text-lg font-semibold flex items-center space-x-1">
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
            <Button className="" onClick={handleCopy}>
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
              className="max-w-xl w-full mx-auto space-y-6 border p-8 shadow-lg bg-white text-[#343A40] rounded-lg"
            >
              {/* Input Link */}
              <FormField
                control={form.control}
                name="originalUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold flex items-center space-x-1">
                      <Link2 className="font-extrabold" />
                      <span>Shorten a long URL</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter long link here"
                        className="text-[#343A40]"
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
                  <div className="flex items-center space-x-2">
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
