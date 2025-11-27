"use client";

import type { ReactNode } from "react";

import { getStoryblokApi } from "@/lib/storyblok";

interface Props {
  children: ReactNode;
}

export default function StoryblokProvider({ children }: Props) {
  getStoryblokApi();
  return children;
}
