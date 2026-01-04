# STEP Digital Landing Page

A modern, Apple-inspired landing page built with Next.js 14, featuring stunning animations, 3D effects, and glassmorphism design.

## 🌟 Features

- **Apple-Inspired Design**: Clean, minimalist design with premium feel
- **Smooth Animations**: Framer Motion powered animations throughout
- **3D Effects**: Interactive 3D card transforms and parallax effects
- **Glassmorphism**: Modern glass morphism UI elements
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance Optimized**: Fast loading, code splitting, lazy loading
- **SEO Ready**: Meta tags, semantic HTML, and optimized for search engines
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **TypeScript**: Fully typed for better developer experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdullrhhmann/step-digital-landing.git
cd step-digital-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deployment

### Development

```bash
npm run dev
```

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm run start
```

Starts the production server after building.

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality.

## 📁 Project Structure

```
step-digital-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Hero section with 3D elements
│   ├── Introduction.tsx    # Introduction section
│   ├── ProblemSolution.tsx # Problem/Solution grid
│   ├── Differentiators.tsx # What makes us different
│   ├── Services.tsx        # Services grid with 3D cards
│   ├── Achievements.tsx    # Stats with counter animation
│   ├── Industries.tsx      # Industry solutions
│   ├── Testimonials.tsx    # Client testimonials
│   ├── FinalCTA.tsx        # Final call-to-action
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.mjs         # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#0046A8",  // Your primary color
    dark: "#003380",     // Darker shade
    light: "#3D7ACC",    // Lighter shade
  },
  accent: {
    DEFAULT: "#FFD700",  // Your accent color
    dark: "#E5C100",     // Darker shade
  },
}
```

### Content

Edit component files in the `components/` directory to update:
- Text content
- Images
- Links
- Services
- Testimonials
- Contact information

### Animations

Adjust animation settings in component files:
- Duration: Change `duration` values in motion components
- Delays: Modify `delay` values for stagger effects
- Effects: Update motion properties like `y`, `x`, `opacity`, `scale`, etc.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud
- Docker containers

Build command: `npm run build`
Start command: `npm run start`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1023px (2 columns)
- **Desktop**: 1024px+ (full layout, 3+ columns)

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion support for users with motion sensitivity

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email info@stepdigital.com or open an issue in the repository.

---

Built with ❤️ by STEP Digital
