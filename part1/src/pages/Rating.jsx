import { useState } from 'react'
import Statistics from '../components/Statistics'

const Rating = () => {
     // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [All, setAll] = useState(0)
  const all = good + neutral + bad
  const average = ((good * 1) + (bad * -1)) / (good + neutral +bad)
  const percentage = (good/all) * 100
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => {setGood(good + 1)}}>good</button>
      <button onClick={() => {setNeutral(neutral + 1)}}>neutral</button>
      <button onClick={() => {setBad(bad + 1)}}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} percentage={percentage} all={all}/>
      
    </div>
  )
}

export default Rating