# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern and Responsive Design** - Looks great on all devices
- **Dark/Light Mode** - Toggle between dark and light themes
- **Smooth Animations** - Using Framer Motion for beautiful transitions
- **Easily Customizable** - Edit content in a simple JSON file
- **SEO Friendly** - Properly structured for search engines
- **Accessible** - Follows web accessibility best practices

## 📋 Sections

- Hero
- About
- Skills
- Projects
- Experience & Education
- Testimonials
- Contact

## 🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Content Customization

All the portfolio content is stored in a single file: `src/data/portfolio.json`. You can easily edit this file to update the content of your portfolio without touching any code.

The JSON file includes sections for:

- Personal information
- Skills
- Experience
- Education
- Projects
- Testimonials
- Contact information

### Style Customization

#### Theme Colors

You can customize the colors in `src/styles/variables.css`. The portfolio uses CSS variables for easy theming.

#### Tailwind Configuration

For more advanced styling changes, you can modify the Tailwind configuration in `tailwind.config.js`.

### Adding New Sections

If you want to add new sections:

1. Create a new component in `src/components/sections/`
2. Add the data for this section in `src/data/portfolio.json`
3. Update the `Home.tsx` file to include your new section

## 📱 Project Structure

```
portfolio/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   ├── sections/  # Page sections
│   │   └── ui/        # Reusable UI components
│   ├── data/          # Data files
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # CSS files
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js # Tailwind configuration
└── vite.config.ts     # Vite configuration
```

## 📄 License

This project is open-source and available under the MIT License.

## 🙏 Credits

- Built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)
