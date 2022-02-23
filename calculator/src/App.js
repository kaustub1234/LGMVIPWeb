import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  }

  const clearDisplay = () =>{
    setResult('');
  }

  const calculate = () =>{
    setResult(eval(result).toString());
  }

  return (
    <div className="wrapper">
      <div className="App">
        <input type="text" placeholder="0" value={result}/>
        <div className="OperatorContainer">
          <input type="button" placeholder="0" value='0' onClick={clickHandler} />
          <input type="button" placeholder="0" value='1' onClick={clickHandler} />
          <input type="button" placeholder="0" value='2' onClick={clickHandler} />
          <input type="button" className="operator" placeholder="0" value='+' onClick={clickHandler}/>

          <input type="button" placeholder="0" value='3' onClick={clickHandler} />
          <input type="button" placeholder="0" value='4' onClick={clickHandler} />
          <input type="button" placeholder="0" value='5' onClick={clickHandler} />
          <input type="button" className="operator" placeholder="0" value='-' onClick={clickHandler} />

          <input type="button" placeholder="0" value='6' onClick={clickHandler} />
          <input type="button" placeholder="0" value='7' onClick={clickHandler} />
          <input type="button" placeholder="0" value='8' onClick={clickHandler} />
          <input type="button" className="operator" placeholder="0" value='*' onClick={clickHandler} />

          <input type="button" placeholder="0" value='9' onClick={clickHandler} />
          <input type="button" placeholder="0" value='.' onClick={clickHandler} />
          <input type="button" placeholder="0" value='%' onClick={clickHandler} />
          <input type="button" className="operator" placeholder="0" value='/' onClick={clickHandler} />
          <input type="button" className="operator clear" placeholder="0" value='clear' onClick={clearDisplay}/>
          <input type="button" className="operator equals" placeholder="0" value='=' onClick={calculate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
