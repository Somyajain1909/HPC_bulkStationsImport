import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav style={{'backgroundColor':'#5FA29E'}} className="navbar ">
  <div className="container-fluid">
    <a className="navbar-brand" style={{'color':'white','fontSize':'17px','fontWeight':'600'}} href="/">
    Dimiour
    </a>
    <a className="navbar-brand" style={{'color':'white','fontSize':'17px'}} href="/">
    HPC Bulk import of gas stations
    </a>
  </div>
</nav>
    </div>
  )
}

export default Navbar
