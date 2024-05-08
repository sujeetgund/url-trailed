"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";

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

// Zod Validation
const FormSchema = z.object({
  longLink: z
    .string()
    .min(9, "Link must be at least 9 characters long.")
    .includes("https://", { message: "We only shorten secured links." }),
});

function ShortLinkForm() {
  // Hook Form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      longLink: "",
    },
  });

  // Handle Submit
  function handleShortLinkSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleShortLinkSubmit)}
        className="max-w-xl w-full mx-auto space-y-6 border p-8 shadow-lg"
      >
        <FormField
          control={form.control}
          name="longLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-semibold">
                Shorten a long URL
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter long link here" {...field} />
              </FormControl>
              <FormDescription className="italic">
                This link will be shortened by URL Trailed.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Shorten URL
        </Button>
      </form>
    </Form>
  );
}

export default ShortLinkForm;
