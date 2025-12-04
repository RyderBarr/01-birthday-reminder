import React from 'react'

const SingleDate = ({id,firstName, image, removeDate}) =>
{

  return(

    <div className="item" style={{background:"lightpink", width:"auto", textAlign:"center", margin:"3px"}}>

      <h4 style={{margin:"5px"}}>{firstName}'s birthday </h4>
      <button style={{margin:"5px"}} onClick={()=> removeDate(id)}>Remove</button>
      <div style={{margin:"5px"}}>
          <img src={image} alt="" />
      </div>

    </div>

  )

}

export default SingleDate