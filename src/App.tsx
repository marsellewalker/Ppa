import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./ppa/Home";
import WhoWeAre from "./ppa/Who We Are";
import Events from "./ppa/Events";
import Contact from "./ppa/Contact";
import Header2 from "./header/header";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <Router>
        <Header2/>  
        <div>
          <h1>
            Paisley <span className="highlight">Puppet </span>Adventures
          </h1>
      </div>
       
        <switch>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Who We Are" Component={WhoWeAre} />
            <Route path="/Events" Component={Events} />
            <Route path="/Contact" Component={Contact} />
          </Routes>
        </switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
