import React from 'react';
import './index.css';


const Display = ({question,index,changeHandler}) => {
    const handler = e => {
        let temp = question.answer === e.target.value?1 : 0 ;
    changeHandler(temp,index);
    }
return(
    <div className='green'>
        <h3 className='space'>{question.no}{" . "}{question.title}</h3>
        <div className='spaces' onChange={handler}>
            <input type="radio" value="A" name={index}/> {question.options} &nbsp;
            <input type="radio" value="B" name={index}/> {question.options} &nbsp;
            <input type="radio" value="C" name={index}/> {question.options} &nbsp;
            <input type="radio" value="D" name={index}/> {question.options} &nbsp;

        </div>
     
    </div>

)
}
export default Display