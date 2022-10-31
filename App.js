// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="main_div">
//       <div className="center">
//         <div className="display">
//             <input type="text" />
//         </div>
//         <div className="buttons">
//           <button>c</button>
//           <button>()</button>
//           <button>%</button>
//           <button>/</button>
//         </div>
//         <div className="buttons">
//           <button>7</button>
//           <button>8</button>
//           <button>9</button>
//           <button>*</button>
//         </div>
//         <div className="buttons">
//           <button>4</button>
//           <button>5</button>
//           <button>6</button>
//           <button>-</button>
//         </div> 
//         <div className="buttons">
//           <button>1</button>
//           <button>2</button>
//           <button>3</button>
//           <button>+</button>
//         </div> 
//         <div className="buttons">
//           <button>+/-</button>
//           <button>0</button>
//           <button>.</button>
//           <button>=</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    
  }
   const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0,result.length - 1));
  }

  const calculate = () => {
    setResult(eval(result).toString());
  }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">clear</button>
          { <button className="highlight" onClick={backspace} id="backspace" >C</button> }
          <button className="highlight" name="%" onClick={handleClick} >%</button>
          <button className="highlight" name="/" onClick={handleClick} >/</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick} >8</button>
          <button name="9" onClick={handleClick} >9</button>
          <button className="highlight" name="*" onClick={handleClick} >*</button>
          <button name="4" onClick={handleClick} >4</button>
          <button name="5" onClick={handleClick} >5</button>
          <button name="6" onClick={handleClick} >6</button>
          <button className="highlight" name="-" onClick={handleClick} >-</button>
          <button name="1" onClick={handleClick} >1</button>
          <button name="2" onClick={handleClick} >2</button>
          <button name="3" onClick={handleClick} >3</button>
          <button className="highlight" name="+" onClick={handleClick} >+</button>
          { <button name="+/-" onClick={handleClick} >+/-</button> }
          <button name="0" onClick={handleClick} >0</button>
          <button name="." onClick={handleClick} >.</button>
          <button className="highlight" onClick={calculate} id="result" >=</button>


        </div>
      </div>
    </>
  )
}
export default App;
