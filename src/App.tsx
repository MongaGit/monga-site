import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FullScreenGif from "./FullScreenGif";
import './App.css'

function App() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundImage: "url('/bg.gif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
    }} />
  );
}

export default App;
