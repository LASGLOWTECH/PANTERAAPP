// 1️⃣ Metadata goes first — OUTSIDE the component
export const metadata = {
  metadataBase: new URL('https://pantherarestlounge.com'), 
  // ---------------------
  title: "Panthera Restolounge – Fine Dining • Lounge • Cocktails | Abuja",
  description:
    "Discover Panthera Restolounge, where elegance meets gourmet cuisine. Enjoy fine dining, drinks, reservations, events, and unforgettable nightlife in Abuja.",

  openGraph: {
    title: "Panthera Restolounge – Fine Dining • Lounge • Cocktails | Abuja",
    description:
      "Discover Panthera Restolounge, where elegance meets gourmet cuisine.",
    url: "https://pantherarestlounge.com",
    siteName: "Panthera Restolounge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Panthera Restolounge - Fine Dining | Abuja",
    description:
      "Experience elegance, world-class cuisine, cocktails, and premium dining at Panthera Restolounge.",
    images: ["/og-image.jpg"],
  },
};

import Layout from "@/components/Layout";
import SiteLoader from "@/components/SiteLoader";
import ScrollTop from "@/components/scrolltop";

// 2️⃣ Component + Schema Script comes after metadata
export default function PublicLayout({ children }) {
  return (
    <Layout>
      <SiteLoader />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Panthera Restolounge",
            image: "https://pantherarestlounge.com/og-image.jpg",
            "@id": "https://pantherarestlounge.com",
            url: "https://pantherarestlounge.com",
            telephone: "+234 000 000 0000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1A Danube Street, Maitama, Abuja",
              addressLocality: "Abuja",
              addressRegion: "FCT",
              addressCountry: "NG",
            },
            servesCuisine: ["African", "Continental", "Cocktails", "Grill"],
            priceRange: "₦₦.",
            openingHours: ["Mo-Su 10:00-23:00"],
            acceptsReservations: true,
            menu: "https://pantherarestlounge.com/menu",
          }),
        }}
      />

      {children}
      <ScrollTop />
    </Layout>
  );
}
