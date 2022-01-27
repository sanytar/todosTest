import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, doneTodo } from '../../redux/actions/todoAc'
import ChangeTodo from '../ChangeTodo/ChangeTodo'
import { Link } from 'react-router-dom'

function Item({ title, id, status, index }) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)


  const doHandler = () => {
    dispatch(doneTodo(id))
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(id))
  }

  const editHandler = () => {
    setEdit(!edit)
  }


  return edit ? (
    <ChangeTodo title={title} id={id} setEdit={setEdit} edit={edit} />
  ) : (
    <div className='d-flex justify-content-between'>
      <Link to={`/todos/${id}`}><li className="list-group-item">{index + 1}. {title}</li></Link>

      <div>{status ? 'Сделано' : 'Не сделано'}</div>
      <div className='d-flex justify-content-end'>
        <button onClick={doHandler} type="button" className={status ? "btn btn-secondary me-3" : "btn btn-success me-3"}>{status ? 'Не сделано' : 'Сделано'}</button>
        <button onClick={deleteHandler} type="button" className="btn btn-danger me-3">Удалить</button>
        <button type="button" onClick={editHandler} className="btn btn-warning me-3">Изменить</button>
      </div>
    </div>
  )
}

export default Item
