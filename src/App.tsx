import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'


function App() {
  
  const [expense, setExpense] = useState([])

  return (
    <div>
      <Form expense={expense} setExpense={setExpense}/>
      <Table expense={expense} setExpense={setExpense}/>
    </div>
  )
}

export default App
