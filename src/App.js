import React, {useState} from 'react';
import questions from './questions.json';
import Display from './Display';
import './index.css';
import MenuAppBar from './snack';

const App = () => {
  const [marks,setMarks]= useState([]);
  let tempmarks=[];
const changeHandler = (value,index) =>{
  tempmarks=marks;
    tempmarks[index]=value;
    
    setMarks([...tempmarks]);
}

  return(
      <div><MenuAppBar/>
       
        
        <center>
              {questions.map((question,index) => {
                return(
                    <Display question={question} key={index} index={index} changeHandler={changeHandler} />
                
                    )
                })}
                <a href="" onClick={() => alert("Your Score Is "+marks.reduce((a,b) => a+b,0)+"/10")}>End</a>
        </center>
      </div>

  )
}
export default App