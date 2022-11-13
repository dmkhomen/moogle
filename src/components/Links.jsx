import React from 'react'
import { NavLink } from 'react-router-dom'

export const Links = () => {
  const links = [
    {url: "/search", text: "Results"},
    {url: "/news", text: "News"},
    {url: "/images", text: "Images"},
    {url: "/videos", text: "Videos"},
  ]
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
      {links.map( ({url, text}) => (
        <NavLink key={text} to={url} className="mr-2 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700">
          {text}
        </NavLink>
      ))}
    </div>
  )
}
