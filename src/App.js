import React,{useRef} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Whatson from './Components/Whatson';
import Vibe from './Components/Vibe';
import Bookatable from './Components/bookatable';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Displaymenu from './Components/displaymenu';
function App() {
  const bobbyRef = useRef(null);
  const handleClick = () => {
    const ref = bobbyRef.current; // Assuming you have a useRef for the Bobby component named "bobbyRef"
  
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/menu">
            <Displaymenu />
          </Route>
          <Route path="/">
          <Navbar handleClick={handleClick}/>      
          <About
        about="About"
        culinary="Your Culinary Haven"
        description="At FlavorFusion, we are passionate about bringing together a symphony of flavors and culinary inspirations to create a truly unforgettable dining experience. Our restaurant is a haven for food lovers, a place where artistry meets taste buds and where every dish is a masterpiece."
      />
      <Whatson/>
      <Vibe/>
      <Bookatable/>          
      </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
