import React, {useState} from 'react'
// Perhaps this form needs only one input. The date input. 
export default function AgeForm() {

  const inits = {
    day: "",
    month: "", 
    year: ""
  }

  const [inputs, setInputs] = useState(inits)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs =>({
      ...prevInputs,
      [name]: value
    }))
  }

console.log('show inputs here:',inputs)

function handleSubmit(e){
  e.preventDefault()
  console.log("calculating")
  const {day, month, year} = inputs
  console.log(day, month, year)
  setInputs(inits)
}
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='info day'>Day</h3>
        <input 
        placeholder='day'
        type='number' 
        name='day' 
        value={inputs.day} 
        onChange={handleChange} 
        />
        <h3 className='info month'>Month</h3>
        <input 
        placeholder='month'
        type="number" 
        name='month' 
        value={inputs.month} 
        onChange={handleChange} 
        />
        <h3 className='info year'>Year</h3>
        <input 
        placeholder='year'
        type="number" 
        name='year' 
        value={inputs.year} 
        onChange={handleChange} 
        />
        <button>Calculate</button>
      </form>
    </div>
  )
}
