import React,{useEffect, useState} from 'react'
import './Corona.css';
const Corona = () => {

    const[data,setUpdate] = useState([]);

       const getCovidData = async() =>
       {
          
            const api = await fetch("https://api.covid19india.org/data.json");
            const data = await api.json();
            //console.log(data.statewise[21]);
           setUpdate(data.statewise[21]);
         
       }
    useEffect(() => {

        getCovidData();
        }, [])


    return (
        <>
            <center>
           <h1>🔴LIVE</h1> 
           <h2><u>COVID19 CORNA TRACKING APP</u></h2>
           </center>   
           <input type="text" id="country" name="country"/>  
           <div className="row">
         <div className="column">
           <div className="card1">
            <h2><span>OUR</span>&nbsp;COUNTRY</h2>
            <h1>INDIA</h1>
           
             </div>
               </div>

            <div className="column">
             <div className="card2">
             <h2><span>TOTAL</span>&nbsp;RECOVERED</h2>
             <h1>{data.recovered}</h1>
             </div>
            </div>
  
          <div className="column">
           <div className="card3">
           <h2><span>TOTAL</span>&nbsp;CONFIRMED</h2>
             <h1>{data.confirmed}</h1>
             </div>
              </div>
  
            <div className="column">
                <div className="card4">
                <h2><span>TOTAL</span>&nbsp;DEATH</h2>
                 <h1>{data.deaths}</h1>
                </div>
            </div>
            
             <div className="column">
                <div className="card5">
                <h2><span>TOTAL</span>&nbsp;ACTIVE</h2>
                 <h1>{data.active}</h1>
                </div>
            </div>

            <div className="column">
                <div className="card6">
                <h2><span>LAST</span>&nbsp;UPDATE</h2>
                 <h1>{data.lastupdatedtime}</h1> 
   
                </div>
            </div>
            </div>
        </>
    )
}

export default Corona