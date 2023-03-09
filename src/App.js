import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Costs from './components/Costs/Costs'
import CostsForm from './components/CostsForm/CostsForm'
import costsData from './data/costs'
import Diagram from './components/Diagram/Diagram'

const App = () => {

  const [costs, setCosts] = useState([...costsData])
  const [year, setYear] = useState('2022')

  const addCost = (descr, amount, date) => {
    const newCost = {
      id: uuidv4(),
      description: descr,
      amount,
      date: new Date(date)
    }

    setCosts([newCost, ...costs])
    costsData.unshift(newCost)
  }

  const filterCostsByYear = (year) => {
    setYear(year)
  }

  const filteredCosts = costsData.filter((cost) => cost.date.getFullYear() === +year)

  const diagramData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  for (const cost of filteredCosts) {
    const costMonth = cost.date.getMonth()
    diagramData[costMonth].value += cost.amount
  }

  return (
    <div className='App'>
      <CostsForm addCost={addCost} />
      <Diagram costs={filteredCosts} diagramData={diagramData} />
      <Costs costs={filteredCosts} filterCostsByYear={filterCostsByYear} year={year} />
    </div>
  )
}

export default App
