import React , {useState, useEffect, Fragment} from 'react';
import Layout from './Layout';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createDonor, getDonor} from './ApiCore';
import './style.css'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: '25px',
      width: '40px',
    },
  },
}));


const AddDonor = () => {

    

    const[values, setValues] = useState({
        name: '',
        age: '',
        sex:'',
        blood_group: '',
        location: '',
        phone: ''
    })
    

    const {
        name,
        age, 
        sex,
        blood_group,
        location,
        phone
        
    } = values

    const [donorData, setDonorData] = useState([])
    const [ error, setError] = useState(false)
    const [ success, setSuccess] = useState(false)
    const [searchField, setSearchField] = useState({
        address :'',
        bloodGroup: ''
    })

    const {address, bloodGroup} = searchField

    const init = () => {
        getDonor('','').then(data=>{
          if(data && data.status == "failed"){
              console.log(data)
          }else{
              setDonorData(data.payload)
          }
       })
    }
   

    useEffect(() => {
        init()
       
    }, [])

    const classes = useStyles();

    const handleChange = name => event => {
        setError('')
        setSuccess('')
        const value = event.target.value
        setValues({...values, [name]:value})
    }

     const handleSearchChange = name => event => {
          setError('')
        setSuccess('')
        const value = event.target.value
        setSearchField({...searchField, [name]:value})
    }

    const submitForm = (e) => {
        e.preventDefault();
        createDonor(values)
        .then(data=>{
             if(data && data.status === 'failed'){
                 setError(true)
            }else{
                setSuccess(true)
               setValues({
                    name: '',
                    age: '',
                    sex:'',
                    blood_group: '',
                    location: '',
                    phone: ''
               })
               
               init()
            }
        })
    }

    const submitSearchForm = (e) => {
        e.preventDefault()
        getDonor(bloodGroup, address)
        .then(data=>{
            if(data && data.status === 'failed'){
                console.log(data)
            }else{
                setDonorData(data.payload)
            }
        })
    } 


    // show message on success
    const showSuccess = () =>{
        if(success === true) {
            return <h3 className="text-success info-message">Donor data is created</h3>
        }
    }
    // show message on error
    const showError = () =>{
        if(error === true) {
            return <h3 className="text-danger info-message">Please provide all data</h3>
        }
    }


// table to display the donor data
    const table = () =>{
        return(
           <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">location</th>
                                <th scope="col">Phone</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {donorData && donorData.map((p,i)=>(
                                <tr key={i}>
                                    <td>
                                        {p.name}
                                    </td>
                                    <td>
                                        {p.age}
                                    </td>
                                    <td>
                                        {p.sex}
                                    </td>
                                    <td>
                                        {p.blood_group}
                                    </td>
                                    <td>
                                        {p.location}
                                    </td>
                                    <td>
                                        {p.phone}
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }


 return(
    <Fragment>
            <Layout>
                <div className="ml-2 mb-2">
                    <h2 style={{fontSize:"28px"}}>Add Donor Info</h2>
                    {showError()}
                    {showSuccess()}

                    <form className={classes.root}   noValidate autoComplete="off">
                        <span className="mr-4">
                            <TextField 
                                value={name} 
                                onChange={handleChange('name')} 
                                id="standard-basic" 
                                label="Name" />
                        </span>
                        <span className="mr-4">
                            <TextField 
                                value= {age} 
                                onChange={handleChange('age')} 
                                id="standard-basic" 
                                type="number" 
                                label="Age" />
                        </span>
                        <span className="mr-4">
                            <TextField 
                                value={sex} 
                                onChange={handleChange('sex')} 
                                id="standard-basic" 
                                label="sex" />
                        </span>
                        <span className="mr-4">
                            <TextField 
                                value={blood_group} 
                                onChange={handleChange('blood_group')} 
                                id="standard-basic" 
                                label="Blood Group" />
                        </span>
                        <span className="mr-4">
                            <TextField 
                                value={location} 
                                onChange={handleChange('location')} 
                                id="standard-basic" 
                                label="Location" />
                        </span>
                        <span className="mr-4">
                            <TextField 
                                value={phone} 
                                onChange={handleChange('phone')} 
                                type="number" 
                                id="standard-basic" 
                                label="Phone No" />
                        </span>
                    
                            <Button 
                                size="small"
                                className="button"
                                width="40px"
                                variant="contained" 
                                color="primary"
                                onClick={submitForm}>
                                
                                Save
                            </Button>
                    </form>
                </div>
            
            </Layout>
            <div style={{overflow: "none",  borderCollapse: "separate",borderSpacing: "15px" , border: "5px solid lightblue"}}>
                <div className="ml-2">
                    <h2 style={{fontSize:"28px", textAlign:"center"}}>Donor Info Table</h2>
                    <span className="mb-4">Enter search data here</span>
                    <form>
                        <div className="mb-4">
                            <span className="mr-4">
                                <TextField 
                                    value={address} 
                                    onChange={handleSearchChange('address')} 
                                    id="outlined-helperText" variant="outlined" 
                                    label="Location" />
                            </span>
                            <span className="mr-4">
                                <TextField 
                                    value={bloodGroup} 
                                    onChange={handleSearchChange('bloodGroup')} 
                                    id="outlined-helperText" 
                                    variant="outlined" 
                                    label="Blood Group" />
                            </span>
                            <Button 
                                    size="small"
                                    className="button"
                                    variant="contained" 
                                    color="primary"
                                    onClick={submitSearchForm}>
                                    
                                    Search
                            </Button>
                        </div>
                    </form>
                    {table()}
                </div>
            </div>
    </Fragment>
 )
}

export default AddDonor;