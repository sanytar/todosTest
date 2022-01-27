import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Current() {
  const { id } = useParams()
  console.log(id);
  const todo = useSelector(state => state.todos)
    .find(el => el.id === +id)

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.status ? 'Сделано' : 'Не сделано'}</p>
    </div>
  )
}

export default Current
