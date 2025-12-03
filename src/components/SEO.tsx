import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

/**
 * Componente SEO para actualizar dinámicamente los meta tags del documento.
 * Actualiza title, description, Open Graph y Twitter Card meta tags.
 */
const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://www.oyamasushi.restaurant/Sushi/SuAlaska.webp",
  ogType = "website",
  keywords,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute(attribute === "property" ? "content" : "content", content);
      } else {
        element = document.createElement("meta");
        if (selector.includes("property=")) {
          element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
        } else if (selector.includes("name=")) {
          element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
        }
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', "name", description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', "name", keywords);
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', "property", title);
    updateMetaTag('meta[property="og:description"]', "property", description);
    updateMetaTag('meta[property="og:type"]', "property", ogType);
    updateMetaTag('meta[property="og:image"]', "property", ogImage);

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:title"]', "name", title);
    updateMetaTag('meta[name="twitter:description"]', "name", description);
    updateMetaTag('meta[name="twitter:image"]', "name", ogImage);

    // Update canonical URL if provided
    if (canonicalUrl) {
      updateMetaTag('meta[property="og:url"]', "property", canonicalUrl);
      updateMetaTag('meta[name="twitter:url"]', "name", canonicalUrl);
      
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonicalLink) {
        canonicalLink.href = canonicalUrl;
      } else {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        canonicalLink.href = canonicalUrl;
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, canonicalUrl, ogImage, ogType, keywords]);

  return null; // This component doesn't render anything
};

export default SEO;
