import axios from "axios"
import { useState } from "react"

const Weather=()=>{
   

            const [input,setinput] = useState(" ")
            const [weather,setweather] = useState(" ")
            const [temp,settemp] =useState(" ")
            const [des,setdes] = useState(" ")
          
         const weatherinfo =(evt)=>{
               
                  setinput(evt.target.value)
         }

           const check =()=>{
              
                 var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c3a453341a514c5be612b23d09f9f363`)

                  data.then(function(succ){
                       
                        setweather (succ.data.weather[0].main)
                        setdes(succ.data.weather[0].description)
                       settemp(succ.data.main.temp )
                  })
            
             
               
           }
     
    return(<>

             <div className="flex  justify-center text-center font-serif " >
                       <div className="bg-green-300 p-4 border rounded-md">
                          <h1 className="text-3xl   text-white">Weather Report</h1>
                          <p> I can give you a Weather report about your city</p>
                       <input  value={input} onChange={weatherinfo} className="mt-2 border rounded-md" placeholder="Enter your city"></input>
                       <br></br>
                       <button onClick={check} className="mt-2 bg-black text-white p-1 border rounded-sm">check</button>
                       <h1>Weather : {weather} </h1>
                       <h1>Temperature : {temp} </h1>
                       <h1>Description : {des}</h1>
                       </div>
             </div>
    </>)
    
}

export default Weather