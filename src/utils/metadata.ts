import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const baseUrl = 'https://prontocleanz.com';
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Pronto Cleanz',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
} 