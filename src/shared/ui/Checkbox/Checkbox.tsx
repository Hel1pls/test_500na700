"use client"
import React, { useState } from 'react'
import styles from './checkbox.module.scss'

type Props = {
  label?: React.ReactNode
  title?: boolean
  muted?: boolean
  dashed?: boolean
  defaultChecked?: boolean
}

export const Checkbox: React.FC<Props> = ({ label, title = false, muted = false, dashed = false, defaultChecked = false }) => {
  const [checked, setChecked] = useState<boolean>(!!defaultChecked)

  return (
    <div className={dashed ? styles.checkboxDashedContainer : ''}>
      <label className={styles.checkboxWrapper}>
        <input
          className={styles.checkboxInput}
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          aria-checked={checked}
        />

        <span className={`${styles.checkboxBox} ${checked ? styles.checkboxBoxChecked : ''}`}>
          {checked ? (
            <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12l4 4L19 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : null}
        </span>

        <span className={`${styles.checkboxLabel} ${title ? styles.checkboxTitle : ''} ${muted ? styles.checkboxNormal : ''}`}>
          {label}
        </span>
      </label>
    </div>
  )
}

export default Checkbox
