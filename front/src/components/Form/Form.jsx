import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/todoAc'
import Alert from '../Alert/Alert'

function Form() {
  const [input, setInput] = useState('')
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2500)
  }, [alert])

  const dispatch = useDispatch()

  const changeHandler = (e) => setInput(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()
    setAlert(true)
    setInput('')
    dispatch(addTodo(input))
  }


  return (
    <>
      <div className='py-5 d-flex justify-content-center'>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Надо сделать...</label>
            <input onChange={changeHandler} value={input} type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Добавить</button>
        </form>

      </div>
      <div className='py-5 d-flex justify-content-center'>
        {alert ? <Alert /> : null}
      </div>
    </>
  )
}

export default Form
