import style from './DiagramBar.module.css'

const DiagramBar = ({ label, value, maxValue }) => {

  let barFillHeight = '0%'

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%'
  }

  return (
    <div className={style.bars}>
      <div className={style.bar}>
        <div className={style.fill} style={{ height: barFillHeight }}></div>
      </div>
      <div className={style.label}>{label}</div>
    </div>
  )
}

export default DiagramBar