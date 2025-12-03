import {useState} from 'react'

import SingleDate from './SingleDate'

const List = ({dates, removeDate}) => 
{

  return(

    <div style={{display:"flex",backgroundColor:"antiquewhite",flexDirection:"row"}}>
      {/* date is empty */}
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