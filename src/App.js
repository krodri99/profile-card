import './App.css';
import profilepic from "./images/kats-avatar.jpg";
import likeicon from "./images/Like-Button.png";
import linkedin from "./images/LinkedIn-Icon.png";
import { useState } from 'react';
import Display from "./component/display";
import Count from "./component/count";

function App() {

  const [skill, setSkill] = useState("")

  const [count, setCount] = useState(0);

  const handleName = ()=>{
    setSkill("My name is Katherine")
  }

  const handleSkill = ()=>{
    setSkill("I'm a Frontend Developer")
}

  return (
    <>
  <div className="card">

      <img className="avatar" src={profilepic} alt= "avatar"/>

      <h1 className="h1">Hello!</h1>

      <Display tech = {skill}/>

      <div className="btns">
      <button onClick = {handleName} className="name-btn">Name</button>
      <button onClick = {handleSkill} className="skill-btn">Skill</button>
      </div>

      <div>
      <Count tech1 = {count}/> &nbsp;
      <img onClick = {() => setCount(count + 1)} className="like-btn" src={likeicon} alt="Like Button"/>
      </div>

      <div>
      <td onClick={()=> window.open("http://www.linkedin.com/in/katherine-rodriguez-071b071ab")}><img className="linkedin" src={linkedin} alt="LinkedIn Button"/></td>
      </div>


  </div>
    </>
  );
}

export default App;