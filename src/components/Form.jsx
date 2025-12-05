import React from 'react'

function Form({dates}) {
  
  // createDate(document.getElementById('name'),Document.getElementById('date'),Document.getElementById('image'))

  return (
    
    <div>

      <label htmlFor=""><p>name</p>

        <input type="text" id='name' required />

      </label>

      <label htmlFor=""><p>date</p>

        <input type="date" name="" id="date" required/>

      </label>

      <label htmlFor=""><p>image url</p>

          <input type="text" id='image' />
        
      </label>

      {}

    </div>    

    

  )
}

export default Form