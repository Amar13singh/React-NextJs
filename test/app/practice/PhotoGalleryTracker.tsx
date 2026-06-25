"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function PhotoGalleryTracker() {
  useEffect(() => {
    posthog.capture("photo_gallery_viewed");
  }, []);

  return null;
}
