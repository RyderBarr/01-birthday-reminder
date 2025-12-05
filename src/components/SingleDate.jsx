import React from 'react'

const SingleDate = ({id,firstName, date, image, removeDate}) =>
{

  let birthDay = new Date(date)
  console.log(date)
  console.log(birthDay)
  console.log(birthDay.getMonth) 
  console.log(birthDay.getDay) 

  return(

    <div className="item" style={{background:"antiquewhite", width:"auto", textAlign:"center", margin:"3px"}}>

      <h3 style={{margin:"5px"}}>{firstName}'s birthday </h3>
      <h4>{date}</h4>
      <button style={{margin:"5px"}} onClick={()=> removeDate(id)}>Remove</button>
      <div style={{margin:"5px"}}>
          <img src={image} alt="" />
      </div>

    </div>

  )

}

export default SingleDate