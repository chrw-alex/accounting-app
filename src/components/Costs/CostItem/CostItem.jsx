import style from './CostItem.module.css'
import ItemDate from './ItemDate/ItemDate'

const CostItem = ({ date, description, amount }) => {
  return (
    <div className={style.item}>
      <ItemDate date={date} />
      <div className={style.description}>{description}</div>
      <div className={style.amount}>{'$' + amount}</div>
    </div>
  )
}

export default CostItem