import {useState} from 'react'
import {data} from '../data'

import List from './List-Component'
import Form from './Form'



function Main() {
        
        const [dates, setDates] = useState(data)

        const removeDate = (id) =>
        {


                
                setDates(dates.filter((date)=> date.id !== id))



        }

        return (
        
                <div>

                        <Form dates={dates}/>

                        {/* {console.log(dates)} */}
                        <List dates={dates} removeDate={removeDate}/>

                </div>
  
        )

}

export default Main