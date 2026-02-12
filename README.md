# Shattered Skies - Book Launch Website

<div align="center">
  <img src="public/placeholder.svg" alt="Shattered Skies Book Cover" width="200" />
  <br /><br />
  <p><strong>The official book launch website for "Shattered Skies" by Aarav Sen</strong></p>
</div>

---

## 📚 About the Project

**Shattered Skies** is a modern book launch website built to showcase and promote the novel by Aarav Sen. The website provides visitors with information about the book, the author, purchasing options, and a newsletter signup for updates.

### Key Features

- 📖 **Home Page** - Book showcase with cover, synopsis, and call-to-action
- 👤 **About Page** - Author biography and background information
- 🛒 **Buy Page** - Purchase links and availability across platforms
- 📰 **Newsletter Page** - Email subscription for updates and announcements
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Modern UI** - Clean, professional design with smooth animations

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and development server |
| **TypeScript** | Type-safe JavaScript |
| **React** | UI component library |
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | Accessible UI component library |
| **Vercel** | Deployment platform |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <your-git-url>

# Navigate to project directory
cd shattered-skies-launch-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
shattered-skies-launch-main/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/              # Static assets
│   │   ├── author-photo.jpg
│   │   └── book-cover.jpg
│   ├── components/          # React components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NavLink.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── ui/              # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ... (more UI components)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── pages/               # Page components
│   │   ├── About.tsx
│   │   ├── Buy.tsx
│   │   ├── Home.tsx
│   │   ├── Index.tsx
│   │   ├── Newsletter.tsx
│   │   └── NotFound.tsx
│   ├── App.css              # Global styles
│   ├── App.tsx              # Main app component
│   ├── index.css            # CSS imports
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Customization

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add a route in `App.tsx`
3. Add navigation in `Header.tsx`

### Modifying Styles

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes or `src/App.css`

### Updating Book Information

- Book details: `src/pages/Home.tsx`
- Author info: `src/pages/About.tsx`
- Purchase links: `src/pages/Buy.tsx`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

---

## 🚀 Deployment

### Deploy to Vercel

The project is pre-configured for Vercel deployment:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will auto-detect settings from `vercel.json`
4. Deploy!

### Deploy to Other Platforms

- **Netlify**: Use the Vite output directory (`dist`)
- **GitHub Pages**: Build with `npm run build` and deploy the `dist` folder
- **Custom Server**: Build with `npm run build` and serve the `dist` folder

---

## 📄 License

This project is private and intended for the "Shattered Skies" book launch.

---

## 📞 Support

For questions about the book or website, please contact the author through official channels.

---

<div align="center">
  <p>Built with ❤️ for book lovers</p>
  <p><strong>Shattered Skies</strong> by Aarav Sen</p>
</div>
