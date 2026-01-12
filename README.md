# Delete Confirmation Modal

A React project testing overlay layering and centering with a delete account confirmation modal. The modal sits on top of a backdrop (fixed inset-0) and is perfectly centered, training the model to recognize "blocking" interactions.

## Features

- **Modal Overlay**: Fixed positioning with backdrop blur effect
- **Centered Modal**: Perfect alignment using flexbox centering
- **Warning Icon**: SVG icon with red background
- **Responsive Design**: Works on mobile and desktop with Tailwind CSS
- **Future Bug Testing**: Intentional comment marks where bugs can be introduced

## Project Structure

```
├── src/
│   ├── App.jsx         - Main component with modal
│   ├── main.jsx        - React entry point
│   └── index.css       - Tailwind styles
├── index.html          - HTML template
├── vite.config.js      - Vite configuration
├── tailwind.config.js  - Tailwind CSS configuration
└── package.json        - Dependencies
```

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Key Layout Elements

- **Background Content**: Blurred nav and grid layout showing app behind modal
- **Modal Overlay**: Fixed positioning with semi-transparent black backdrop
- **Centering**: Uses `flex items-center justify-center` on overlay container
- **Modal Card**: White rounded card with shadow and warning icon
- **Action Buttons**: Delete (red) and Cancel (gray) buttons with responsive stacking

## Bug Testing Notes

The comment in the code marks where the `flex items-center justify-center` classes can be removed to test modal positioning issues - the modal would jump to top-left without proper centering.
