import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import './footer/footer.css'
import './header/header.css'
import './searchbar/Search css.css'
import './PagesCSS/contact.css'
import './PagesCSS/events.css'
import './PagesCSS/home.css'
import './PagesCSS/whoarewe.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
