import "./globals.css";
import localFont from "next/font/local";

const josefin = localFont({
  src: [
    { path: "./fonts/josefin/JosefinSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "./fonts/josefin/JosefinSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },

    { path: "./fonts/josefin/JosefinSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "./fonts/josefin/JosefinSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-Italic.ttf", weight: "400", style: "italic" },

    { path: "./fonts/josefin/JosefinSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "./fonts/josefin/JosefinSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "./fonts/josefin/JosefinSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/josefin/JosefinSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "Panthera Restolounge",
  description: "Panthera Restolounge reservation and dining experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
