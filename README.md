# Satellyte

A space explorer built on NASA's open APIs. See the astronomy picture of the day, search
NASA's image library, check the weather on Mars and track asteroids passing close to Earth.

**Live demo:** [satellyte.vercel.app](https://satellyte.vercel.app)

![Home page with the astronomy picture of the day](screenshots/home.jpg)

## Features

- **Picture of the day** as the home page background, with its title and description
- **Image search** across NASA's media library, with a full-size view for each result
- **Mars weather** from the InSight lander: temperature, wind speed and season
- **Asteroid tracker** listing near-Earth objects for any date range up to 7 days, with size,
  miss distance and speed
- Responsive layout from mobile to desktop

| Mars weather | Asteroid tracker |
|---|---|
| ![Mars weather page](screenshots/mars.jpg) | ![Asteroid tracker](screenshots/asteroids.jpg) |

<img src="screenshots/mobile.jpg" alt="Mars page on mobile" width="260">

## Tech stack

- React with Vite
- React Router for pages and nested routes
- Tailwind CSS
- A custom `useApi` hook for fetching, loading and error states
- 3 different NASA apis

## What I learned

- How to handle really huge objects with complex layers
- Making custom React hooks
- More about error handling.

## Running locally

1. Get a free API key at [api.nasa.gov](https://api.nasa.gov)
2. Copy `.env.example` to `.env` and add your key
3. Install and start:

```bash
npm install
npm run dev
```

The InSight mission ended in 2022, so the Mars page shows the last data the lander sent back.
