import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Event Horizon`;
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
};
