import {useState} from 'react'
import data from '../data'

import List from './List-Component'
import Form from './Form'

function Main() {
  
        const [dates, setDates] = useState(data)

        const createDate = (firstName, lastName, date, event) =>
        {

                let id = dates.length

                let check = true

                dates.filter((date)=> {if(date.id === id) check = false})

                if (check)
                {

                        dates.push({"id":id,"firstName":firstName,"lastName":lastName,"date":date,"event":event})

                }



        }

        const removeDate = (id) =>
        {

                dates.filter((date)=> date.id !== id)

        }

        return (
        
                <div>

                        <Form createDate={createDate} dates={dates}/>

                        <List dates={dates} removeDate={removeDate}/>

                </div>
  
        )

}

export default Main