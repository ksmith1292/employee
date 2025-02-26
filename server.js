const employees = require('./employees.js')


const express = require('express');
const app = express();
app.use(express.json());
let idNumber = 3;



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


app.post('/employees', (req, res, next) => {
  console.log(req.body)
  const { name } = req.body;
  if(!name) {
  
const error = new Error("name not provided");
next(error)
}


   employees.push({
    id: idNumber,
    name
  })

  idNumber++
  res.send(employees)
})

app.use((err, req, res) => {
  console.log(err)
});

app.listen(3000)