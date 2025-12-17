
import SingleDate from "./SingleDate"

const MonthBirthdays = ({data = []}) => {

        return (

                <div style={{display:"flex", backgroundColor:"lightpink", justifyContent:"space-evenly", flexDirection:"row", flexWrap:"wrap",alignItems:"center"}}>

                        {data.map((day)=>{

                                let today = new Date(day.date)
                                let now = new Date(Date.now())

                                if (today.getMonth() === now.getMonth())
                                {

                                        return(

                                                <SingleDate 

                                                        key={day.id}         
                                                        {...day}
                                                                
                                                />


                                        )

                                }

                        })}

                </div>
  
        )

}

export default MonthBirthdays