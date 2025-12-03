import React from 'react'

const SingleDate = ({id,firstName,removeDate,createDate}) =>
{

  return(

    <div className="item" style={{background:"cyan",width:"auto", textAlign:"center", margin:"3px"}}>

      <h4>{firstName}'s birthday </h4>
      <button onClick={()=> removeDate(id)}>Remove</button>
      <div>

      </div>

    </div>

  )

}

export default SingleDate