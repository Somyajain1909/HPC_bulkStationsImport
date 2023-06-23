import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Pass from '../components/Pass'
import Fail from '../components/Fail'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Input/>
      <br/>
      <div style={{'display':'flex'}}>
      <div style={{'width':'62%'}}><Fail/></div>
        <div style={{'width':'35%'}}><Pass/></div>
      </div>
    </div>
  )
}

export default Main
