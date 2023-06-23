import React from 'react'

const Failrow = (props) => {
  return (
    <div>
      <div style={{'fontWeight':'400px','border':"1px solid #ccc",'height':'30px','display':'flex',justifyContent:'space-between'}}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.st_name}&nbsp;&nbsp;
      <button className='error_tag'>&nbsp;&nbsp;{props.st_error}&nbsp;&nbsp;</button>
    </div>
    </div>
  )
}

export default Failrow
