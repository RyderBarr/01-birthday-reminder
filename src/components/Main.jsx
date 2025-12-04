import {useState} from 'react'
// import {data} from '../data'

import List from './List-Component'
import Form from './Form'

let data = [{"id":1,"firstName":"Arty","date":"2025-01-21","image":"http://dummyimage.com/166x100.png/5fa2dd/ffffff"},
{"id":2,"firstName":"Travus","date":"2025-11-04","image":"http://dummyimage.com/109x100.png/5fa2dd/ffffff"},
{"id":3,"firstName":"Liz","date":"2024-12-06","image":"http://dummyimage.com/240x100.png/5fa2dd/ffffff"},
{"id":4,"firstName":"Roxanne","date":"2025-06-09","image":"http://dummyimage.com/123x100.png/5fa2dd/ffffff"},
{"id":5,"firstName":"Seka","date":"2025-06-16","image":"http://dummyimage.com/204x100.png/5fa2dd/ffffff"},
{"id":6,"firstName":"Elvina","date":"2025-02-12","image":"http://dummyimage.com/125x100.png/ff4444/ffffff"},
{"id":7,"firstName":"Heath","date":"2025-07-08","image":"http://dummyimage.com/143x100.png/dddddd/000000"},
{"id":8,"firstName":"Erroll","date":"2025-11-09","image":"http://dummyimage.com/112x100.png/cc0000/ffffff"},
{"id":9,"firstName":"Neila","date":"2025-10-13","image":"http://dummyimage.com/221x100.png/cc0000/ffffff"},
{"id":10,"firstName":"Homer","date":"2025-08-24","image":"http://dummyimage.com/194x100.png/dddddd/000000"}]

function Main() {
        
        const [dates, setDates] = useState(data)

        const createDate = (firstName, date, image) =>
        {

                let id = dates.length

                let check = true

                dates.filter((date)=> {if(date.id === id) check = false})

                if (check)
                {

                        dates.push({"id":id,"firstName":firstName,"date":date,"image":image})

                }

                return dates



        }

        const removeDate = (id) =>
        {


                
                setDates(dates.filter((date)=> date.id !== id))



        }

        return (
        
                <div>

                        <Form createDate={createDate} dates={dates}/>

                        {/* {console.log(dates)} */}
                        <List dates={dates} removeDate={removeDate}/>

                </div>
  
        )

}

export default Main