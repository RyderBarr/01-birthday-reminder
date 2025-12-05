import {useState} from 'react'

import SingleDate from './SingleDate'

const List = ({dates, removeDate}) => 
{

  return(

    <div style={{display:"flex", backgroundColor:"lightpink", justifyContent:"space-evenly", flexDirection:"row", flexWrap:"wrap"}}>
      {/* date is empty */}
      {/* {console.log(dates)} */}
      {dates.map((date)=>{
                
        return( 

          <SingleDate 

            key={date.id}         
            removeDate={removeDate}
            {...date}
                        
          />
                        
        )
                
      })}
                
    </div>

  )

}

export default List