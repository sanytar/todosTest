const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001
const { Todo } = require('./db/models')

const morgan = require('morgan');




app.use(cors())
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/all', async (req, res) => {
  const allTodo = await Todo.findAll({ raw: true })
  res.json(allTodo)
})

app.post('/done', async (req, res) => {
  const { id } = req.body
  const current = await Todo.findByPk(id)
  await Todo.update({ status: !current.status }, { where: { id } })
})

app.post('/add', async (req, res) => {
  const { title } = req.body
  const newTodo = await Todo.create({ title, status: false })
  res.json(newTodo)
})

app.delete('/delete', async (req, res) => {
  const { id } = req.body
  await Todo.destroy({ where: { id } })
  res.sendStatus(222)
})

app.put('/change', async (req, res) => {
  const { title, id } = req.body
  console.log(req.body);
  await Todo.update({ title }, { where: { id } })
  const current = await Todo.findByPk(id)
  res.json(current)
})


app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
})
