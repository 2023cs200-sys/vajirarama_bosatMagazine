# vajirarama-bosat

A React JavaScript project for BOSAT — Buddhist Wisdom & Cultural Heritage Magazine.

## Getting started

```bash
cd client
npm install
npm run dev
```

## Project structure

```
client/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts, icons, videos
│   ├── components/     # Reusable UI components
│   │   ├── common/     # Container, BosatMark, Divider, etc.
│   │   ├── layout/     # Navbar, Footer
│   │   └── ui/         # shadcn/ui components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Route page components
│   ├── routes/         # Route configuration
│   ├── services/       # API service modules
│   ├── styles/         # CSS files
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Root app component
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js
```

## Backend connection

Services in `src/services/` are pre-configured to connect to `http://localhost:3001/api`.
Update the `API_BASE` constant in each service file to point to your backend.
