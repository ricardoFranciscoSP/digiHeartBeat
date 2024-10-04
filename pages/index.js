
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Home from './home';


export default function App() {
  const [animationEnded, setAnimationEnded] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationEnded(true);
  };
  
  return (
    <div className="App">
      { animationEnded ? <Home /> : <Loading onAnimationEnd={handleAnimationEnd}  />}    
  </div>
  )
}

