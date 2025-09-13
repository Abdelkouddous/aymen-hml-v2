# Aymen HML — Developer Portfolio

A modern, responsive developer portfolio to showcase projects, skills, and experience. Built with React and Bootstrap, with a clean theme featuring warm orange accents.

## Features

- Responsive design for desktop and mobile
- Sections: Home, About, Skills, Tools, Resume, Projects, Contact
- Projects slideshow with themed navigation
- Smooth interactions and subtle animations
- Easy to customize content and styles

## Tech Stack

- React (Create React App)
- React Bootstrap / Bootstrap
- React Icons
- react-slideshow-image
- react-tsparticles
- Additional utilities: styled-components, @mui/material, axios, etc.

See all dependencies in package.json.

## Getting Started

Prerequisites:

- Node.js and npm installed

Clone the repository:

```bash
git clone https://github.com/aymen-hml/aymen-hml.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

Eject (not recommended unless necessary):

```bash
npm run eject
```

## Project Structure

- public/ — static assets and HTML template
- src/
  - components/ — UI components (About, Home, Navbar, Projects, etc.)
  - components/Projects — Project cards, slideshow, themed navigation
  - Assets/ — images, icons, PDF CV
  - style.css, App.css — global styles and theme
  - index.js — app entry

## Customization

- Update content in src/components (About, Projects data, Resume)
- Modify theme colors and effects in src/style.css (search for #ffbd3a, #ffd37b, #ffca5f)
- Replace assets (logos, images) in src/Assets/

## Contributing

Contributions are welcome! Please:

- Open an issue to discuss proposed changes
- Submit a PR with a clear description of updates

## License

This project is licensed under the terms of the LICENSE file included in this repository.

## Acknowledgements

- Built with Create React App
- UI components powered by React Bootstrap
- Icons provided by react-icons
