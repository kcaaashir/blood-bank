const Donor = require('../models/donor')


/**
   * search data from db 
   * takes data from req body and add to the db
*/
exports.create = async( req, res) => {
    try{
        const donorData = req.body;
        let data = await Donor.create(donorData);
         res.json({
            status: 'success',
            message: 'Donor created sucessfully',
            payload: data
        })
    }catch(ex) {
        res.status(400).json({
            status: 'failed',
            message: ex
        })
    }
}



/**
   * takes blood_group and location from query param and return data sucessfully
*/

exports.searchDonor = async( req, res) => {
    try{
        let order = req.body.order ? req.body.order : 'desc';
        let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
        let bloodGroup = req.query.blood_group;
        let location = req.query.location;
        let data = await Donor.find({
            blood_group: {$regex: bloodGroup, $options:'i'},
            location: {$regex: location, $options:'i'}
        })
        .sort([[sortBy, order]]);
        res.json({
            status: 'success',
            message: 'Donor retrieved sucessfully',
            payload: data
        })
    } catch(ex) {
         res.status(400).json({
            status: 'failed',
            message: ex
        })
    }
}