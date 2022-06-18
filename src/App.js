import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

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
      setname("ashot");s
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
    </div>
  );
}

export default App;
