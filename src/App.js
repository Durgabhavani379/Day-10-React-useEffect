import React,{useState,useEffect} from'react';
function App() {
  const[data,setData]=useState(true);
  const[count,setCount]=useState(0);
 useEffect(()=>{
    return console.log("effect called");
 },[count,data])
  return (
    <div className="App">
      <h1>this is UseEffect</h1>
      <h2 >{count}</h2>
      <button type="button" onClick={()=>{setCount(count+1);}}>Count</button>
      <h3 onClick={()=>{setData(!data)}}>

      {data? "open" :"close"}</h3>
    </div>
  );
}

export default App;
