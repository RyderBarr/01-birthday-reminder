

function Form({dates = [], setDates}) {
  
  const handleSubmition = (e) => {

    e.preventDefault()

    const form = e.target
    const info = new FormData(form)

    const date = Object.fromEntries(info.entries())
    console.log(dates)

    setDates(dates.push(date))
    console.log(dates.length, dates)

  }

  return (
    
    <form method='post' onSubmit={handleSubmition}>

      <input type="number" name="id" value={dates.length+1} style={{display:"none"}}/>

      <label>
        
        name: <input type="text" name="name" defaultValue="John Doe" required />

      </label>

      <label htmlFor="">
        
        date:<input type="date" name="date" defaultValue={Date.now()} required/>

      </label>

      <label htmlFor="">
        
        image url:<input type="text" name="image"  />
        
      </label>

      <button type="submit"> add </button>
      {/* <button> add </button> */}

    </form>    

    

  )
}

export default Form