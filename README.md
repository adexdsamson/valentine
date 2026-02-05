# Valentine's Day Web Application

A romantic, interactive web application designed to create a memorable digital experience for Valentine's Day. This project guides the user through a journey starting from a playful proposal, leading to a nostalgic photo gallery, and culminating in a personalized, auto-typing love letter.

## ✨ Features

- **Interactive Proposal:** A landing page with a "Yes" and "No" button. The "No" button playfully evades clicks or shrinks, while the "Yes" button grows, encouraging the positive choice.
- **Immersive Swipe Gallery:** A Spotify Wrapped-style photo gallery that users can swipe through. Each slide supports a unique background image, a romantic message, and synchronized background music.
- **Auto-Typing Love Letter:** A final page that reveals a heartfelt message with a realistic typing animation and emotional background music.
- **Responsive Design:** Fully optimized for both desktop and mobile devices, ensuring a smooth experience on any screen.
- **Audio Integration:** Seamless audio playback with support for specific start/end times and per-slide tracks.

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router](https://reactrouter.com/)

## 📂 Folder Structure

Here's an overview of the project's file structure to help you navigate:

```
valentine/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Project assets (images, svg)
│   ├── data/            # Data models and static data files
│   │   └── galleryData.ts # Interface definitions for gallery data
│   ├── hooks/           # Custom React hooks
│   │   └── useAudio.ts  # Audio management logic
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # Helper functions (e.g., time formatting)
│   ├── pages/           # Main application pages
│   │   ├── LandingPage.tsx   # The proposal page
│   │   ├── SwipeGallery.tsx  # The photo carousel
│   │   └── LoveLetter.tsx    # The final letter page
│   ├── App.tsx          # Main app component & routing setup
│   ├── config.ts        # CENTRAL CONFIGURATION FILE (Edit this!)
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.tsx         # Application entry point
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🚀 Getting Started

Follow these steps to get the project running locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd valentine
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Open the link shown in the terminal (usually `http://localhost:5173`) to view the app.

## 🎨 Customization

The project is designed to be easily customizable. Most changes can be made in a single file!

### 1. Update Content (`src/config.ts`)

Open `src/config.ts` to modify:
- **Landing Page:** Change the headline and the playful "No" button texts.
- **Gallery:** Update the `gallery` array to add your own photos, messages, and music.
    - `imageUrl`: Link to your photo.
    - `message`: The caption for the photo.
    - `audioUrl`: Link to the background music for that slide.
    - `audioStartTime` / `audioEndTime`: (Optional) Clip the audio to a specific section.
- **Love Letter:** Update the text of the final letter.

### 2. Adding Images & Audio

- **Images:** You can host images externally (e.g., Cloudinary, Imgur) and use the URL, or place them in the `public/` folder and reference them like `/my-image.jpg`.
- **Audio:** Similar to images, use external URLs or local files in `public/`.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

## 📄 License

MIT License © 2026
