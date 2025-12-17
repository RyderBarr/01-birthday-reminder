
import SingleDate from "./SingleDate"

const TodayBirthdays = ({data = []}) => {

        return (

                <div style={{display:"flex", backgroundColor:"lightpink", justifyContent:"space-evenly", flexDirection:"row", flexWrap:"wrap",alignItems:"center"}}>

                        {data.map((date)=>{

                                let today = new Date(date.date)
                                let now = new Date(Date.now())

                                if (today.getDay() === now.getDay()-1 && today.getMonth() === now.getMonth())
                                {

                                        return(

                                                <SingleDate 

                                                        key={date.id}         
                                                        {...date}
                                                                
                                                />


                                        )

                                }

                        })}

                </div>
  
        )

}

export default TodayBirthdays