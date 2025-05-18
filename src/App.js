
import './App.css';
import {  use, useState } from 'react';
import { NC,LC,UC, SC } from './data/passChar';

function App() {


  let [uppercase,setUppercase]=useState(false);
  let [lowercase,setLowerrcase]=useState(false);
  let [number,setNumber]=useState(false);
  let [symbol,setSymbol]=useState(false);
  let[passwordlength,setPasswordlength]=useState(10);
  let [fpass,setFpass]=useState('')

  let createPassword=()=>{
    let fianlpass='';
    let charSet='';
    if(uppercase || lowercase|| number|| symbol){
      if(uppercase) charSet+=UC;
      if(lowercase)charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      
      for(let i=0;i<passwordlength;i++){
            fianlpass+=charSet.charAt(Math.floor(Math.random()*charSet.length));
            
      }
        setFpass(fianlpass);

    }else{
      alert("please select on checkbox");
    }
  }
  let copypass =()=>{
    navigator.clipboard.writeText(fpass);
  }

  return (
    <>
     <div className='passwordBox'>
      <h1>Password generator</h1>
      <div className='passwordBoxin'>
        <input type='text' value={fpass} readOnly/> <button onClick={copypass}>Copy</button>
      </div>
      <div className='passLength'>
        <label>Password length:</label>
        <input  type='number' max={20} min={10} value={passwordlength} 
        onChange={(event)=>setPasswordlength(event.target.value)}/>
      </div>
      <div className='passLength'>
        <label>Include Uppercase letters</label>
        <input  type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className='passLength'>
        <label>Include Lowercase Letters</label>
        <input  type='checkbox' checked={lowercase} onChange={()=>setLowerrcase(!lowercase)}/>
      </div>
      <div className='passLength'>
        <label>Include numbers</label>
        <input  type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
      </div>
      <div className='passLength'>
        <label>Include Symbols</label>
        <input  type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
      </div>
      <div className='buttonBox'>
        <button onClick={createPassword}>Generate password</button>
      </div>
      
     </div>
    </>
  );
}

export default App;
