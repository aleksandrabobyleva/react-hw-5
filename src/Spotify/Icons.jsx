import React from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Icons.module.css'
export default function Buttons() {
  return (
    <div className={styles.container}>
      <ReactSVG src= './src/assets/Apple.svg' />
      <ReactSVG src= './src/assets/Google.svg' />
      <ReactSVG src= './src/assets/X.svg' />
    </div>
  )
}
