import {useState} from 'react'
import cl from './Conunter.module.scss'

export const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button className={cl.button} onClick={() => setCount(p => p + 1)}>up</button>
    </div>
  )
}