import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Contacts from "./contacts";

function App() {
  let [name, setname] = useState("xachik")
  console.log(name,123);
     function x(event){
        console.log(event)
        setname(event.target.value);
      }
    useEffect(()=>{
        console.log("chto delaet useEffect");
    })
    useEffect(()=>{
      console.log("2 useEffect");
      setname("ashot");
  },[])
  useEffect(()=>{
    console.log("name");
},[name])
  return (
    <div className="App">
      <form>
        <input type="text" name="name" value={name} onChange={x}/>
        <input type="submit"  value="name" />
      </form> 

      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path = '/Contacts' element = {<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
