import React from 'react'

function Header() {
    return (
        <div className="container-fluid" style={{backgroundColor:'#3e51b7',color:'whitesmoke',padding:'10px'}}>
          <div className="row" style={{fontWeight:'bold'}}>
            <div className="col-9">
               <h3>Welcome User Details</h3>
            </div>
            <div className="col-3 justify-content-end d-flex align-items-end">
                <p>hello</p>    
            </div>
          </div>
        </div>
    )
}

export default Header