import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic  = ({value,text}) => <td>{text} {value}</td>

const DisplayTitle = ({text}) => <h1>{text}</h1>

const Statistics  = ({good,bad, neutral,all,average, positive}) => {

  if (all === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }

  return (
  
  <div>
    <table>
      <tbody>
        <tr><Statistic  value ={good} text='Good' /></tr>
        <tr><Statistic  value ={neutral} text='Neutral' /></tr>
        <tr><Statistic  value ={bad} text='Bad' /></tr>
        <tr><Statistic  value ={all} text='All' /></tr>
        <tr><Statistic  value ={average} text='Average' /></tr>
        <tr><Statistic  value ={positive} text='Positive' /></tr>
      </tbody>
    </table>
  </div>)
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [all, setAll] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPositive(((good + 1 ) * 100) / (all + 1))
    setAverage((((good + 1) - bad))  / (all + 1))
  }

  const clickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setPositive((good * 100) / (all + 1))
    setAverage((good - (bad + 1 )) / (all + 1))
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPositive((good * 100) / (all + 1))    
    setAverage((good - bad ) / (all + 1))
  }

  return (
    <div>
      <div>
      <DisplayTitle text='Give Feedback' />
      <br></br>
      <Button handleClick={clickGood} text="good" />
      <Button handleClick={clickNeutral} text="neutral" />
      <Button handleClick={clickBad} text="bad" />
      </div>
      <br></br>
      <div>
      <DisplayTitle text='Statistics' />  
      <br></br>
      <Statistics good = {good} neutral={neutral} bad={bad} all = {all} average={average} positive={positive}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)