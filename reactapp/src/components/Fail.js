import React from 'react'
import fail from '../images/fail.png'
import Failrow from './Failrow'
const Fail = () => {
    let failArr=[
        {'name':'Gas Station A',"error":'inValid format'},
        {'name':'Gas Station C',"error":'Something went wrong'},
        {'name':'Gas Station H',"error":'server problem'}
]
  return (
    <div>
         <div style={{'marginTop':'2%','marginLeft':'3%'}}>
    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<img src={fail} style={{'height':'50px'}} alt='loading icon'/>
    &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<div style={{'display':'flex',justifyContent:'space-between','marginLeft':'42px','marginRight':'42px'}}><b style={{'fontWeight':'600'}}>Gas Station</b><b style={{'fontWeight':'600'}}>Error</b></div>
    <div className=" my-3  mx-3" >
      
      {failArr.length===0&& <div className="container">No stations failed yet</div>}
    
    {failArr.map((job)=>{
    return <Failrow st_name={job.name} st_error={job.error}/>})}
    </div>
    </div>
    </div>
  )
}

export default Fail
