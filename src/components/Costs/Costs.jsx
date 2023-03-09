import CostItem from './CostItem/CostItem'
import CostsFilter from './CostsFilter/CostsFilter'
import style from './Costs.module.css'

const Costs = ({ costs, filterCostsByYear, year }) => {
  return (
    <div className={style.costs}>
      <CostsFilter year={year} filterCostsByYear={filterCostsByYear} />
      {costs.length === 0 ? <p className={style.noCosts}>В этом году не было расходов</p> : costs.map(({ id, date, description, amount }) => {
        return (<CostItem key={id} date={date} description={description} amount={amount} />)
      })}
    </div>
  )
}

export default Costs