import React, { Fragment } from 'react'
import Menu from '../components/navbar/menu'

const Layout = ({ children}) =>{
return (
    <Fragment>
      <Menu />
        <div style={{overflow: "none",  borderCollapse: "separate",borderSpacing: "15px" , border: "5px solid lightblue"}}>
            <div>
                {children}
            </div> 
        </div>
     </Fragment>
 )
}


export default Layout;