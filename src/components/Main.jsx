import {useState} from 'react'
import {data} from '../data'

import List from './List-Component'
import MonthBirthdays from './Month-birthday'
import TodayBirthdays from './Today-birthdays'
// import Form from './Form'



function Main() {
        
        const [dates, setDates] = useState(data)

        const removeDate = (id) =>
        {


                
                setDates(dates.filter((date)=> date.id !== id))



        }

        return (
        

                <div  style={{display:"flex", backgroundColor:"lightpink", justifyContent:"space-evenly", flexDirection:"row", flexWrap:"wrap"}}>

                        <div>

                                <h1>Birthdays Today</h1>
                                <TodayBirthdays data={dates}/>

                                <h2>Birthdays this month</h2>
                                <MonthBirthdays data={dates}/>

                        </div>

                        <div>


                                {/* {console.log(dates)} */}
                                <h1>All Birthdays</h1>
                                <List dates={dates} removeDate={removeDate}/>

                        </div>

                </div>
  
        )

}

export default Main