# Kinder School Website - Frontend

A modern, vibrant, and interactive website designed for a Kindergarten School. Built with **Next.js 14**, this project features a friendly user interface, responsive design, and a modular architecture to support easy scalability and maintenance.

## 🚀 Features

- **Responsive Landing Page**: Engaging Hero section with Swiper.js slider, animations, and key highlights.
- **Modular Architecture**: Component-based structure (Hero, Enquiries, Features) for better code organization.
- **Academics Module**: Detailed curriculum breakdown (Nursery to Primary) with interactive tabs and deep linking support.
- **Faculty Directory**: "Our Team" page displaying faculty profiles in a responsive grid layout.
- **Interactive Gallery**: Masonry-style image grid with a custom lightbox for viewing high-resolution images.
- **Admissions Portal**: Step-by-step admission process guide and online enquiry form.
- **Contact Integration**: Full-width Google Maps integration and contact details.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/) (Radix UI based)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Slider**: [Swiper.js](https://swiperjs.com/)
- **Forms**: React Hook Form + Zod Validation
- **Font**: [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts)

## 📂 Project Structure

This project follows a modular MVC-adapted pattern for Next.js:

```
src/
├── app/                  # App Router pages (Views)
│   ├── academics/        # Academics page
│   ├── admissions/       # Admissions page
│   ├── faculty/          # Faculty & Staff page
│   ├── gallery/          # Image Gallery
│   └── contact/          # Contact page
├── components/
│   ├── ui/               # Reusable Shadcn/UI components (Buttons, Cards, Dialogs)
│   └── modules/          # Feature-specific components
│       ├── home/         # Home page sections (Hero, Facilities, etc.)
│       ├── gallery/      # GalleryGrid, Lightbox
│       └── faculty/      # FacultyGrid, Cards
├── lib/                  # Utility functions
└── services/             # API calls and mock data
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd school/frontend
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `.next` folder.

## 🎨 Design Philosophy

- **Pastel Aesthetic**: Uses a palette of soft blues, greens, and yellows to evoke a sense of calm and playfulness suitable for early education.
- **Accessibility**: Ensures high contrast text, semantic HTML, and keyboard navigability.
- **User Experience**: Focuses on fast load times, smooth transitions, and intuitive navigation.

## 📄 License

This project is licensed under the MIT License.
