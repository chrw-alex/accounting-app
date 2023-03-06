import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Costs from './components/Costs/Costs'
import CostsForm from './components/CostsForm/CostsForm'
import costsData from './data/costs'

const App = () => {

  const [costs, setCosts] = useState([...costsData])
  const [year, setYear] = useState('Все')

  const addCost = (descr, amount, date) => {
    const newCost = {
      id: uuidv4(),
      description: descr,
      amount,
      date: new Date(date)
    }

    setCosts([newCost, ...costs])
    costsData.push(newCost)
  }

  const filterCostsByYear = (year) => {
    if (year === 'Все') {
      setYear(year)
      setCosts([...costsData])
    } else {
      setYear(year)
      let filteredCosts
      filteredCosts = costsData.filter((cost) => cost.date.getFullYear() === +year)
      setCosts([...filteredCosts])
    }
  }

  return (
    <div className='App'>
      <CostsForm addCost={addCost} />
      <Costs costs={costs} filterCostsByYear={filterCostsByYear} year={year} />
    </div>
  )
}

export default App
