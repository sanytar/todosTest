import { DELETE_TODO, DONE_TODO, CHANGE_TODO, GET_ALL_TODO, ADD_TODO } from '../types'

export const todoReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_TODO: {
      return payload
    }

    case ADD_TODO: {
      return [...state, payload]
    }

    case DONE_TODO: {
      return state.map((el) => {
        if (el.id === payload) {
          return {
            ...el,
            status: !el.status
          }
        } else {
          return el
        }
      })
    }

    case DELETE_TODO: {
      return state.filter((el) => el.id !== payload)
    }

    case CHANGE_TODO: {
      return state.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            title: payload.title,
          }
        } else {
          return el
        }
      })
    }

    default: {
      return state
    }
  }
}
