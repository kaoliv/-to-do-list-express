require('./config/database')
const express = require('express')
const path = require('path')
const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const homeRouter = require('./src/routes/home')
const methodOverride = require('method-override')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', homeRouter)
app.use('/checklists', checkListRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)

app.listen(3000, () => {
  console.log('Servidor iniciado! em http://localhost:3000')
})

