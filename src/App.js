import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import Footer from "./components/Footer/Footer";
import {originals,action,comdey} from './urls';
import './App.css';
function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={action} title='Action' isSmall   />
    <RowPost url={comdey} title='Comedy' isSmall   />
    <Footer/>

    </div>
  );
}

export default App;
