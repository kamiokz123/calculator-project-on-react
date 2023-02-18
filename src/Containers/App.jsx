import './App.css';
import Button from '../Components/Button';
import { useState } from 'react';


function App() {

  const [cal, setCal] = useState({
    num:"0",
    total:"0",
    isinit:true,
    oprt:""
  });



  function handleNumber(value){

    let newValue=value;

    if (!cal.isinit) {
      newValue=cal.num+value;
    }
    setCal({num:newValue,total:cal.total,isinit:false,oprt:cal.oprt});
  }

  function handleOperator(value){
    let total1=calculation();

    setCal({
      num:"0",
      total:total1.toString(),
      isinit:true,
      oprt:value
    })
  }

  function handleClear(){
    setCal({
    num:"0",
    total:"0",
    isinit:true,
    oprt:""
   });

  }


  function calculation() {
    let total=parseInt(cal.total);

    switch (cal.oprt) {
      case "+":
        total+=parseInt(cal.num);
        break;
      case "-":
        total-=parseInt(cal.num);
        break;
      case "*":
        total*=parseInt(cal.num);
        break;
      case "/":
        total/=parseInt(cal.num);
        break;
    
      default:
        total=parseInt(cal.num);
        break;
    }
    return total;
  }
  

  function render_display(){
    return cal.num;
  }
  return (
    <div className='app-container'>
      <div className="display">{render_display()}
      <div className='total'>Result : {cal.total}
      </div>
      </div>
      
      <Button  value="9" onClick={handleNumber}/>
      <Button value="8" onClick={handleNumber}/>
      <Button value="7" onClick={handleNumber}/>
      <Button className="btn" value="/" onClick={handleOperator}/>

      <Button value="6" onClick={handleNumber}/>
      <Button value="5" onClick={handleNumber}/>
      <Button value="4" onClick={handleNumber}/>
      <Button className="btn" value="*" onClick={handleOperator}/>

      <Button value="3" onClick={handleNumber}/>
      <Button value="2" onClick={handleNumber}/>
      <Button value="1" onClick={handleNumber}/>
      <Button className="btn" value="-" onClick={handleOperator}/>

      <Button value="C" onClick={handleClear}/>
      <Button value="0" onClick={handleNumber}/>
      <Button value="=" onClick={handleOperator}/>
      <Button className="btn" value="+" onClick={handleOperator}/>

    </div>
  );
}

export default App;
