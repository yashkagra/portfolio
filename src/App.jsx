// @ts-ignore
import style from  "./App.module.css";
import { About } from "./componets/About/About"
import { Navbar } from "./componets/navbar/Navbar";
import { Hero } from "./componets/hero/hero";
import { Projects } from './componets/projects/Projects';
import {Contact} from './componets/Contact/Contact';
import React from "react";

function App() {
 return <div className ={style.App}> 
 <Navbar/>
 <Hero />
 <About />
 <Projects />
 <Contact />
 </div>
}

export default App
