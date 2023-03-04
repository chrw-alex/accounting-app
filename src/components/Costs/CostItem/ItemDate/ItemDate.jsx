import style from './ItemDate.module.css'

const ItemDate = ({ date }) => {

  const month = date.toLocaleString('ru-RU', { month: 'long' })
  const year = date.getFullYear()
  const day = date.toLocaleString('ru-RU', { day: '2-digit' })

  return (
    <div className={style.date}>
      <div>
        <div className={style.month}>{month}</div>
        <div className={style.year}>{year}</div>
      </div>
      <div className={style.day}>{day}</div>
    </div>
  )
}

export default ItemDate