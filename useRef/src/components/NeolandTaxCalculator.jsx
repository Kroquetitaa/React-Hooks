import { useRef, useState } from "react"


export const NeolandTaxCalculator = () => {
  const [total, setTotal] = useState(0);
  const grossIncomeRef = useRef(null);
  const taxPercentRef = useRef(null);


  const getNetIncome = () => {
    const grossIncome = grossIncomeRef.current.value;
    const taxPercent = taxPercentRef.current.value;

    const total = grossIncome - ((grossIncome * taxPercent) / 100);
    setTotal(total);
  }

  return (<>
    <label htmlFor="gross-income">Sueldo Bruto</label>
    <input
      type="number"
      id="gross-income"
      name="gross-income"
      placeholder="gross income"
      defaultValue={0}
      min={0}
      ref={grossIncomeRef}
    />
    <label htmlFor="tax">Impuestos en %</label>
    <input
      type="number"
      id="tax"
      name="tax"
      placeholder="tax"
      defaultValue={0}
      min={0}
      ref={taxPercentRef} />
    <button onClick={getNetIncome} >Sueldo Neto!</button>


    <div>
      {total}
    </div>
  </>)
}