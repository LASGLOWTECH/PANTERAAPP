
# Panthera Restolounge — Next.js Web App

A modern, responsive web application for **Panthera Restolounge**, built with [Next.js](https://nextjs.org) and MongoDB.  

This app features a public-facing website showcasing the restaurant's **menu, gallery, events, reservations, and testimonials**, along with a **protected admin dashboard** for managing content and reservations.

---

## Features

### Public Site
- **Home Page**: Hero section with animated slideshow of featured dishes.  
- **Menu Page**: Full menu with categories, prices (₦ Naira), and PDF download support.  
- **Gallery Page**: Showcase images of the restaurant and events.  
- **Events Page**: Display upcoming events.  
- **Reservations Page**: Users can book tables online.  
- **Testimonials Page**: Customer reviews and experiences.  

### Admin Dashboard
- **Secure Login**: JWT-protected admin routes.  
- **Menu Management**: Add, edit, delete menu items.  
- **Gallery Management**: Upload and manage images.  
- **Events Management**: Add and edit events.  
- **Reservations Management**: View and manage user bookings.  
- **Testimonials Management**: Add and moderate reviews.

### Utilities
- **PDF Download**: Users can download the full menu with proper Naira formatting.  
- **Image Uploads**: Multer-based image uploads for admin content.  
- **Email Notifications**: Nodemailer integration for booking confirmations.  
- **WhatsApp Notifications**: Optional notifications via WhatsApp Cloud API.

---

## Project Structure

```

panthera-restolounge/
├── app/                  # Next.js app directory
│   ├── (public)/         # Public-facing pages
│   ├── admin/            # Protected admin dashboard
│   ├── api/              # API routes (menu, auth, reservations, etc.)
│   ├── globals.css       # Global styles
│   ├── layout.js
│   └── provider.js       # JWT auth provider
├── components/           # Reusable UI components
├── lib/                  # Database, auth, email, utils
├── models/               # MongoDB schemas
├── public/               # Static assets and uploads
├── .env.local            # Local environment variables
├── .env.production       # Production environment variables
├── package.json
├── middleware.js         # Protect admin routes
└── README.md

````

---

## Getting Started

### Prerequisites
- Node.js (v18+)  
- MongoDB instance (local or cloud)  
- npm, yarn, or pnpm  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/panthera-restolounge.git
cd panthera-restolounge
````

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your_email@example.com
MAIL_PASS=your_email_password
WHATSAPP_TOKEN=your_whatsapp_cloud_token
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Usage

### Public Site

* Navigate the menu, gallery, and events sections.
* Use **Fast Preview** to view the full menu modal.
* Download the menu PDF with Naira prices.
* Submit table reservations via the reservations page.

### Admin Dashboard

* Access `/admin/login` to log in.
* Manage menu items, gallery images, events, testimonials, and reservations.
* Upload images via Multer-powered upload widgets.
* Ensure proper JWT authentication to access protected routes.

---

## Deployment

This app is optimized for **Vercel** deployment:

```bash
vercel deploy
```

Or follow the [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying) for custom deployment options.

---

## Technologies Used

* [Next.js](https://nextjs.org) — React framework for server-side rendering and static sites
* [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS for styling
* [Framer Motion](https://www.framer.com/motion/) — Animations for slideshows and modals
* [MongoDB](https://www.mongodb.com) — Database for menu, events, testimonials, and reservations
* [jsPDF](https://github.com/parallax/jsPDF) — PDF generation for full menu downloads
* [Nodemailer](https://nodemailer.com/) — Email notifications
* [Multer](https://www.npmjs.com/package/multer) — File uploads
* [JWT](https://jwt.io/) — Authentication for admin dashboard

---

## License

This project is **MIT Licensed**.

---

## Author

**Omozemoje Augustine Oisasoje**
[Instagram](https://www.instagram.com/lasglowtech) | [GitHub](https://github.com/your-username) | [Portfolio](https://lasglowtech.com)

```

✅ This README:  
- Explains **public site and admin features** clearly.  
- Highlights **technologies and setup instructions**.  
- Includes **PDF menu download, Naira pricing, and image uploads**.  
- Professional and ready for GitHub or deployment documentation.  

If you want, I can **also add a “Screenshots & GIF section” with sample images of the menu modal and slideshow** for a more visually appealing README.  

Do you want me to do that next?
```
