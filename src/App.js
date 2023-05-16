import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import SideBar from "./components/side-bar/SideBar";
import Testemonials from "./components/testemonials/Testemonials";
import Blogs from "./components/blogs/Blogs";
import Pricing from "./components/pricing/Pricing";
import Contacts from "./components/contacts/Contacts";
function App() {
  return (
   <>
   <SideBar/>
   <main className="main">
    <Home/>
    <About/>
    <Services/>
    <Resume/>
    <Portfolio/>
    <Pricing/>
    <Testemonials/>
    <Blogs/>
    <Contacts/>
   </main>
   </>
  );
}

export default App;
