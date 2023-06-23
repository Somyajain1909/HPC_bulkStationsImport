import React from 'react'
import csv from '../images/csv.png'
import loading from '../images/loading.png'

const Input = () => {
   

  return (
    <div style={{'marginLeft':"3%",'marginTop':"3%",'fontWeight':'580','fontSize':'18px'}}>
      <br/>
      <img src={csv} style={{'height':'41px'}} alt='csv icon'/>
      &nbsp;&nbsp;&nbsp;Upload CSV file
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;

      <label for="csvFile" class="custom-file-upload">
  <input type="file" id="csvFile" accept=".csv"/>
  Upload file
</label>
         <br/> <div style={{'height':'15px'}}></div>
         <div style={{'display':"flex"}}>
          <div><img src={loading} style={{'height':'41px'}} alt='loading icon'/>
          &nbsp;&nbsp;   Upload progress
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</div>
         
      <div class="progress" style={{'width':'550px','marginTop':'9.5px'}}>
       
  <div class="progress-bar" role="progressbar" style={{'width': '75%','backgroundColor':'#5fa29e'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  
  </div>
</div>
<div style={{'fontWeight':'400','marginTop':'2px'}} >&nbsp;&nbsp; 75% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<button className='custom-file-upload' style={{'width':'150px'}}>Cancel</button>

</div>

     

    </div>
  )
}

export default Input
