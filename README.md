# 🍔 Ertan Eats

A modern full-stack web app built with **Next.js**, **Supabase**, and **Material UI (MUI)** that displays videos from @newyorkturk on Instagram and American Turk on Youtube who goes to different restaurants throughout New York City and showcases the food and hospitality there. Can be found [here](https://ertaneats.vercel.app/)! I created this website to better hone in on my PostgreSQL and this is my first project with Supabase. I wanted to get better and connecting to databases and actually displaying information on a site. 

---

## 🚀 Features

- **YouTube Shorts Display**  
  Embedded short-form videos associated with each restaurant.
- **Dynamic Food Ordered List**  
  Fetches food items and ratings from Supabase for each restaurant.
- **Supabase Integration**  
  Real-time data fetched directly from your Supabase database.
- **Fully Responsive**  
  Optimized for desktop and mobile viewing.

---

## 🧩 Tech Stack
- **Next.js 15+**: framework for the frontend
- **Supabase**: database and API
- **MUI**: UI components and theming
- **Vercel**: deployment platform

---

## 🔍 How It Works
- Upon loading the site, users are greeting with the landig page, they can either enter the site or go to Ertan's Instagram.
- Once the user enters the site, they are then greeted with all of the restaurants that Ertan has visited in NYC, starting from his earliest one all the way to the most recent one.
- Each card has the restaurant name, address, cuisine, website, and number of michelin stars. This data is fulled from Supabase where I have a table called restaurant.
- When a user clicks "Read + View More", a dialog opens up where they can see the video associated with that restaurant and what food was ordered + the rating. This is also pulled from Supabase where I have a table called youtube_short and another called food_ordered.
- The youtube_short table just stores the ID for each short. And the food_ordered is the food and rating for each restaurant. Both of these tables have a foreign key linked to the id in the restaurant table. 
