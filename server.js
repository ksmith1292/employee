const employees = require('./employees.js')


const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>')
});

app.get('/employees', (req,res) => {
  res.send('<h1>Employees</h1>')
})
app.get('/api/v1/employees', (req,res) => {
  res.send(employees)
})

app.get('/api/v1/employees/:employeeId', (req, res) => {
  const {employeeId} = req.params
  const foundEmployee = employees.find((individualEmployee)=> {
    return individualEmployee.id === Number (employeeId)
  })
  res.send(foundEmployee)
})

app.get('employees/random', (res,req) => {
  res.send('<h1>Employees</h1>')
})

app.listen(3000)