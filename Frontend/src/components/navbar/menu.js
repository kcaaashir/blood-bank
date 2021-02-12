import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    } else {
        return {
            color:'black'
        }
    }
}

const Menu = ({history}) => {


return(
    <div className="sticky-top top-menu" style={{borderBottom: "1px solid #dee2e6"}}>
        <ul style={{height: "45px"}} className="nav nav-tabs bg-white">

              <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/addDonor')} to="/addDonor">
                    Manage Donor
                </Link>
            </li>
        </ul>
       
        
    </div>
)
}

export default withRouter(Menu);

