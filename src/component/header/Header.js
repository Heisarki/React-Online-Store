import React from 'react'
import header from './header.module.css'

export default function Header() {
  return (
    <div className={`${header.container} ${"Global_centered"}`}>
        <h1>Header</h1>
    </div>
  )
}
