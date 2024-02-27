"use client";
import { useContext, useEffect } from 'react';
import {ThemeContext } from '../../context/ThemeContext';

function ThemeToggle() {

  const {theme, toggle}= useContext(ThemeContext);
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
  }, [theme, toggle])

  // console.log(theme);

  return (
    <div className="pe-lg-1 ms-auto me-4">
    <div 
    className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4" 
    >
    <input 
    defaultChecked={theme === "dark" ? "checked" : ""}
    type="checkbox" 
    onChange={toggle}
    className="form-check-input" 
    id="theme-mode"
    />
    <label
    className="form-check-label  d-none d-sm-block"
    htmlFor="theme-mode"
    >
    Light
    </label>
    <label 
    className="form-check-label d-none d-sm-block" 
    htmlFor="theme-mode"
    >
    Dark
    </label>
  </div>
  </div>
  )
}

export default ThemeToggle