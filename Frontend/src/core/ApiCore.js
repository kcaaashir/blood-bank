
import { Donor_API } from '../config'


/*
* takes data of donor from req body and create the donor
*/
export const  createDonor = async(value) => {
    return fetch(`${Donor_API}/donor/add`,{
        method: "POST",
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(value)
        
    }).then(response => {
            return response.json()
     }).catch( err => {
            console.log(err)
        })
}

/*
* takes location and blood group from search feild and returns related data
*/
export const getDonor = (bloodGroup, location) => {
    return fetch(`${Donor_API}/donor/search?blood_group=${bloodGroup}&location=${location}`,{
        method: "GET",
        headers: {
                "Content-Type": "application/json"
            },
    }).then(response => {
            return response.json()
     }).catch( err => {
            console.log(err)
        })
}