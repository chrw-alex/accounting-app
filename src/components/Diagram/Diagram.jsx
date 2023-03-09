import DiagramBar from './DiagramBar/DiagramBar'
import style from './Diagram.module.css'

const Diagram = ({ diagramData }) => {

  const dataSetsValues = diagramData.map((data) => data.value)
  const maxMonthCosts = Math.max(...dataSetsValues)

  console.log(diagramData)

  return (
    <div className={style.diagram}>
      {diagramData.map(({ label, value }) => {
        return <DiagramBar key={label} label={label} value={value} maxValue={maxMonthCosts} />
      })}
    </div>
  )
}

export default Diagram