import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IOSHE Pakistan | Environmental Consultancy & ISO Certification",
    template: "%s | IOSHE Pakistan"
  },
  description: "Leading environmental consultancy in Islamabad offering EIA/IEE, ISO 14001, ISO 45001, OHS training, and certification services across Pakistan.",
  keywords: [
    "Environmental Impact Assessment Pakistan",
    "ISO 14001 Certification Islamabad",
    "ISO 45001 OHS Training",
    "EIA IEE Consultancy Pakistan",
    "ISO Certification Services Islamabad",
    "Environmental Consultancy Pakistan",
    "OHS Training Pakistan",
    "ISO 37001 Anti-Bribery",
    "Climate Governance Pakistan",
    "Environmental Management System",
    "ISO Certification Islamabad",
    "EIA Pakistan"
  ],
  authors: [{ name: "IOSHE Pakistan" }],
  creator: "IOSHE Pakistan",
  publisher: "IOSHE Pakistan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ioshe.org.pk",
  },
  openGraph: {
    title: "IOSHE Pakistan | Environmental Consultancy & ISO Certification",
    description: "Expert environmental assessments, ISO certifications, and OHS training services in Islamabad and across Pakistan.",
    url: "https://ioshe.org.pk",
    siteName: "IOSHE Pakistan",
    images: [
      {
        url: "https://ioshe.org.pk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IOSHE Pakistan - Environmental Consultancy & ISO Certification",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IOSHE Pakistan | Environmental Consultancy & ISO Certification",
    description: "Expert environmental assessments, ISO certifications, and OHS training services in Pakistan.",
    images: ["https://ioshe.org.pk/twitter-image.jpg"],
  },
  verification: {
    google: "", // Add your Google Search Console code here after verification
  },
  category: "environmental consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         {/* Basic favicon */}
      
  <link rel="icon" type="image/png" sizes="16x16" href="/IOS_16x.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/IOS_32x.png" />
  
  {/* Apple Touch Icon (circle will be preserved) */}
  <link rel="apple-touch-icon" sizes="180x180" href="/IOS_Apple.png" />
  
  {/* Android/Chrome */}
  <link rel="manifest" href="/site.webmanifest" />
  
  {/* Optional: Theme color matches your brand */}
  <meta name="theme-color" content="#21473E" />
         <meta name="geo.region" content="PK-IS" />
  <meta name="geo.placename" content="Islamabad" />
  <meta name="geo.position" content="33.6844;73.0479" />
  <meta name="ICBM" content="33.6844, 73.0479" />
  
  {/* Language & Region */}
  <meta httpEquiv="Content-Language" content="en" />
  <meta name="language" content="English" />
  
  {/* Author & Copyright */}
  <meta name="author" content="IOSHE Pakistan" />
  <meta name="copyright" content="IOSHE Pakistan" />
  <meta name="owner" content="IOSHE Pakistan" />
  
  {/* Mobile & App */}
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="IOSHE Pakistan" />
  <meta name="format-detection" content="telephone=no" />
  
  {/* Additional SEO */}
  <meta name="revisit-after" content="7 days" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="General" />
  <meta name="coverage" content="Worldwide" />
  
  {/* Prevent Google from showing sitelinks searchbox (optional) */}
  <meta name="google" content="nositelinkssearchbox" />
  
  {/* Facebook Domain Verification */}
  <meta property="fb:app_id" content="your-app-id" />
  
  {/* LinkedIn */}
  <meta property="linkedin:owner" content="ioshe-pakistan" />      
        {/* Preconnect for faster external resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/IOSHE_Final.png" as="image" />
        
        {/* JSON-LD Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "IOSHE Pakistan",
              "url": "https://ioshe.org.pk",
              "logo": "https://ioshe.org.pk/IOSHE_Final.png",
              "image": "https://ioshe.org.pk/og-image.jpg",
              "description": "Leading environmental consultancy and ISO certification services provider in Islamabad, Pakistan. Specializing in EIA/IEE, ISO 14001, ISO 45001, and OHS training.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Islamabad",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@ioshe.org.pk"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ioshe-pakistan",
                "https://www.facebook.com/ioshepaksitan"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Professional Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Environmental Impact Assessment (EIA)",
                      "description": "Comprehensive environmental impact studies for industrial and infrastructure projects"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Initial Environmental Examination (IEE)",
                      "description": "Concise environmental reviews for secondary level operations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ISO 14001 Certification",
                      "description": "Environmental Management System implementation and certification support"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ISO 45001 OHS Training",
                      "description": "Occupational Health and Safety management training and certification"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ISO 37001 Anti-Bribery",
                      "description": "Anti-bribery management system implementation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Environmental Audits",
                      "description": "Compliance audits and environmental performance assessment"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IOSHE Pakistan",
              "url": "https://ioshe.org.pk",
              "logo": "https://ioshe.org.pk/IOSHE_Final.png",
              "email": "info@ioshe.org.pk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Islamabad",
                "addressCountry": "Pakistan"
              }
            })
          }}
        />
      </head>
      <body className="bg-[#F4F1EA] text-[#24312D]">
        {children}
      </body>
    </html>
  );
}