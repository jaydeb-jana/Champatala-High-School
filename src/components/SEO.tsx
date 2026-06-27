import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  breadcrumbs?: Array<{ label: string; path: string }>;
}

export function SEO({
  title = 'Champatala High School',
  description = 'Champatala High School is a prestigious, government-sponsored co-educational higher secondary institution established in 1947, dedicated to academic excellence in Purba Medinipur, West Bengal.',
  keywords = 'Champatala High School, Champatala School, High School in Contai, Purba Medinipur School, Government Sponsored School in West Bengal, Higher Secondary School, Best School in Contai, West Bengal Board of Secondary Education',
  url = 'https://champatalahighschoolhs.netlify.app', // Default domain
  image = 'https://i.ibb.co/Z1h5mv0B/unnamed.webp',
  type = 'website',
  breadcrumbs = []
}: SEOProps) {
  const fullTitle = title === 'Champatala High School' ? title : `${title} | Champatala High School`;
  
  // Base School & EducationalOrganization Schema
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization"],
    "name": "Champatala High School",
    "url": "https://champatalahighschoolhs.netlify.app",
    "logo": "https://i.ibb.co/TxDpdYX9/Screenshot-20260619-115704.png",
    "image": image,
    "description": description,
    "foundingDate": "1947",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.O. Champatala, Block - Deshapran, Sub-Division - Contai",
      "addressLocality": "Purba Medinipur",
      "addressRegion": "West Bengal",
      "postalCode": "721442",
      "addressCountry": "IN"
    },
    "telephone": "+91 9564069896",
    "email": "chschampatala@gmail.com",
    "sameAs": [
      "https://www.facebook.com/share/1ECp41ZPCV/",
      "https://youtube.com/@champatalahighschool5930"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admin Office",
      "telephone": "+91 9564069896",
      "email": "chschampatala@gmail.com",
      "availableLanguage": ["English", "Bengali", "Hindi"]
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://champatalahighschoolhs.netlify.app${crumb.path}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Champatala High School" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Champatala High School" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ChampatalaSchool" />
      
      {/* Canonical URL for SEO */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(schoolSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
