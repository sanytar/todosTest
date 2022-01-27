import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'

function Todos() {
  const todos = useSelector(state => state.todos)


  return (
    <ul className="list-group container">
      {todos.map((el, index) => <Item key={el.id} index={index}{...el} />)}
    </ul>
  )
}

export default Todos
