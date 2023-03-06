import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Costs from './components/Costs/Costs'
import CostsForm from './components/CostsForm/CostsForm'
import costsData from './data/costs'

const App = () => {

  const [costs, setCosts] = useState([...costsData])

  const addCost = (descr, amount, date) => {
    const newCost = {
      id: uuidv4(),
      description: descr,
      amount,
      date: new Date(date)
    }

    setCosts([newCost, ...costs])
  }

  return (
    <div className='App'>
      <CostsForm addCost={addCost} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
