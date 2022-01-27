import { DELETE_TODO, DONE_TODO, CHANGE_TODO, GET_ALL_TODO, ADD_TODO } from '../types'


export const allTodo = () => (dispatch) => {
  fetch('http://localhost:3001/all')
    .then(res => res.json())
    .then(data => dispatch({
      type: GET_ALL_TODO,
      payload: data
    }))
}

export const addTodo = (data) => (dispatch) => {
  fetch('http://localhost:3001/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: data })
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: ADD_TODO,
      payload: data
    }))
}

export const doneTodo = (id) => (dispatch) => {
  fetch('http://localhost:3001/done', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({ id })
  })
    .then(dispatch({
      type: DONE_TODO,
      payload: id
    }))
}

export const deleteTodo = (id) => (dispatch) => {
  fetch('http://localhost:3001/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
    .then(dispatch({
      type: DELETE_TODO,
      payload: id
    }))
}

export const changeTodo = (todo) => (dispatch) => {
  fetch('http://localhost:3001/change', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: CHANGE_TODO,
      payload: data
    }))
}
