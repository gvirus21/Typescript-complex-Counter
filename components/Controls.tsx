import React from 'react'
import type { Dispatch } from '../utils/CounterContext'
import styles from '../styles/Home.module.css'
const Controls = ({dispatch}: {dispatch: Dispatch}) => {
  return (
    <div>
        <button className={styles.button} onClick={() => dispatch('decrement')}> - </button>
        <button className={styles.button} onClick={() => dispatch('increment')}> + </button>
    </div>
  )
}

export default Controls