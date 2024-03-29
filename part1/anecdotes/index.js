import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const DisplayTitle = ({text}) => <h1>{text}</h1>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [maxVote, setMax] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

  const clickRandom = () => {
    setSelected(Math.floor((Math.random() * 6)))   
  }

  const setVotation = () => {
    const copia = [...votes]
    copia[selected] += 1 
    setVotes(copia)

    if ((copia[selected]) > copia[maxVote]){
        setMax(selected)
    }
    
  }

  return (
    <div>
        <DisplayTitle text='Anecdote of the Day' />
        <br></br>
        <div>
            {props.anecdotes[selected]}
        </div>
        <div>
            has {votes[selected]} votes
        </div>
        <div>
            <Button handleClick={setVotation} text="Vote" />
            <Button handleClick={clickRandom} text="Next Anecdote" />
        </div>
        <DisplayTitle text='Anecdote of the Day' />
        <br></br>
        <div>
            {props.anecdotes[maxVote]}
        </div>
        <div>
            has {votes[maxVote]} votes
        </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)