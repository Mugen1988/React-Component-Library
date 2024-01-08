import React from 'react';
import ReactDOM from 'react-dom/client';
import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {
  return (
    <>
      <Badges />
      <br/>
      <Banners />
      <br/>
      <Cards />
      <br/>
      <Testimonials />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
