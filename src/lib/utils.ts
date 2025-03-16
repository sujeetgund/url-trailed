import { toast } from "@/components/ui/use-toast";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A function to copy text to clipboard
export function handleCopy(text: string) {
  navigator.clipboard.writeText(text);
  toast({
    title: "Copied",
    description: "Shortened URL copied to clipboard.",
  });
}
