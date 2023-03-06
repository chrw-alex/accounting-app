import CostItem from './CostItem/CostItem'
import style from './Costs.module.css'

const Costs = ({ costs }) => {
  return (
    <div className={style.costs}>
      {costs.map(({ id, date, description, amount }) => {
        return (<CostItem key={id} date={date} description={description} amount={amount} />)
      })}
    </div>
  )
}

export default Costs