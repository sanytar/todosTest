import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTodo } from '../../redux/actions/todoAc'

function ChangeTodo({ title, id, setEdit, edit }) {

  const dispatch = useDispatch()

  const [input, setInput] = useState(title)

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(changeTodo({ title: input, id }))
    setEdit(!edit)
  }

  return (
    <form className='py-5 d-flex justify-content-center' onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Изменить на...</label>
        <input onChange={changeHandler} value={input} type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Изменить</button>
    </form>
  )
}

export default ChangeTodo
