import React from 'react'
import type {State} from '../utils/CounterContext'
import styles from '../styles/Home.module.css'

const Display = ({count}: State) => {
  return (
    <div className={styles.display}>
        {count}
    </div>
  )
}

export default Display