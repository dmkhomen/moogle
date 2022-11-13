import React from 'react'
import { Link } from 'react-router-dom'

import {Search } from "./Search"

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-slate-700 border-slate-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
            <p className="text-2xl bg-slate-300 dark:bg-slate-500 font-bold text-slate-700 dark:text-slate-900 py-1 px-2 rounded">
            🐄 Moogle 
                </p>
            </Link>
            <button type="button" onClick={() => {setDarkTheme(!darkTheme)}} className="text-xl dark:bg-slate-700 text-slate-700 bg-slate-300   rounded-full px-1 py-1 hover:bg-slate-500 dark:hover:bg-slate-500">
                {darkTheme ? "☀️" : "🌒"}
            </button>
        </div>
        <Search />
    </div>
  )
}
