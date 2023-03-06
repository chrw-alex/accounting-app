import style from './CostsFilter.module.css'

const CostsFilter = ({ year, filterCostsByYear }) => {
  return (
    <div className={style.costsFilter}>
      <span>Выберите год</span>
      <select className={style.select} value={year} onChange={(e) => filterCostsByYear(e.target.value)}>
        <option value='Все'>Все</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
        <option value='2025'>2025</option>
        <option value='2026'>2026</option>
      </select>

    </div>
  )
}

export default CostsFilter