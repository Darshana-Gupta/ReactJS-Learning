import "./App.css";
import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Profile from './Profile.js';

//import {ThemeContext, LocaleContext} from './context';



function MyButton({countValue,eventHandler}) {
  

  return (
    <div>
      <button onClick={eventHandler}>
        Clicked {countValue} times
      </button>
    </div>
  )
}

export default function MyApp() {
  const person = {
    name: "Darshana Gupta Checking",
    theme: {
      backgroundColor : 'black',
      color : 'pink'
    }

  }
  /*const[count,setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton countValue={count} eventHandler={handleClick} />
      <MyButton countValue={count} eventHandler={handleClick} />
    </div>
  );*/
  return (
    <div style={person.theme}>
    <h3> {person.name} seeing Beautiful Sunset </h3>
    <Profile />
    <ul>
      <li> Learn React </li>
      <li> Focus on coding </li>
      <li> Do lots of hands-on </li>
    </ul>
    </div>
  )
}
