import React from 'react'
import pass from '../images/pass.png'
import Passrow from './Passrow'

const Pass = () => {
    let passArr=[
        "Gas Station B","Gas Station D","Gas Station E","Gas Station F","Gas Station G","Gas Station H","Gas Station I","Gas Station J"
    ]
  return (
    <div style={{'marginTop':'3%','marginLeft':'3%'}}>
    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<img src={pass} style={{'height':'50px'}} alt='loading icon'/><br/>
    &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<b style={{'fontWeight':'600'}}>Gas Station</b>
    <div className=" my-3  mx-3" >
      
      {passArr.length===0&& <div className="container">No stations passed yet.</div>}
    
    {passArr.map((job)=>{
    return <Passrow st_name={job}/>})}
    </div>
    </div>
  )
}

export default Pass
