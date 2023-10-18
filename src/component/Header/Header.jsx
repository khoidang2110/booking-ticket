import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div className="my-3 bg-black px-2 py-5  mt-0 mb-0">
        <NavLink className="mx-3 btn btn-warning" to="/datvebaimot">
          Bài 1
        </NavLink>
        <NavLink className="mx-3 btn btn-warning" to="/datvebaihai">
          Bài 2
        </NavLink>
       
      </div>
  )
}
