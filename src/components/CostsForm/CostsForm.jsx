import { useState } from 'react'

import style from './CostsForm.module.css'

const CostsForm = ({ addCost }) => {

  const [descr, setDescr] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addCost(descr, amount, date)

    setDescr('')
    setAmount('')
    setDate('')
  }

  const clearFormHandler = () => {
    setDescr('')
    setAmount('')
    setDate('')
  }

  return (
    <div className={style.costsForm}>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <div className={style.formInner}>
          <label htmlFor='descr' className={style.label}>Введите название</label>
          <input type='text' id='descr' className={style.input} value={descr} onChange={(e) => setDescr(e.target.value)} />
        </div>
        <div className={style.formInner}>
          <label htmlFor='amount' className={style.label}>Введите сумму</label>
          <input type='number' min='0.01' step='0.01' id='amount' className={style.input} value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className={style.formInner}>
          <label htmlFor='date' className={style.label}>Введите дату</label>
          <input type='date' min='2023-01-01' max='2026-12-31' id='date' className={style.input} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className={style.actions}>
          <button type='submit' className={style.button} >Добавить расход</button>
          <button type='button' className={style.button} onClick={clearFormHandler}>Отмена</button>
        </div>
      </form>
    </div>
  )
}

export default CostsForm