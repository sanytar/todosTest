import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { allTodo } from './redux/actions/todoAc'
import Form from './components/Form/Form';
import Greet from './components/Greet/Greet';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import Current from './components/Current/Current';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTodo())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Greet />} />
        <Route path={'/add'} element={<Form />} />
        <Route path={'/todos'} element={<Todos />} />
        <Route path={'todos/:id'} element={<Current />} />
      </Routes>
    </div>
  );
}

export default App;
