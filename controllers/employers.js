const express = require('express')
const router = express.Router()
//import employer model
const Employer = require('../models/employer')
const Region = require('../models/region')
const pasport = require('passport')

// auth check to be called before any CUD method
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/auth/login')
}

//GET: /employers/ show list
router.get('/', (req, res) => {
    //query the model to fecth & pass the data to the view
    Employer.find((err, employers) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('employers/index', {
                title: 'Employers',
                employers: employers,
                user: req.user
            })
        }

    })

})


//GET: employers/create => show blank employer form
router.get('/create', isAuthenticated, (req, res) => {
    //get regions for Form dropdown
    Region.find((err, regions) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('employers/create', {
                title: 'Add Employer',
                regions: regions,
                user: req.user
            })
        }
    }).sort('name')

})


//POST: /employers/create => process form submission
router.post('/create', isAuthenticated, (req, res) => {
    //create a new employer document from the fields in the form post
    Employer.create(req.body, (err, newEmployer) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/employers')
        }
    })
})

// GET /employers/delete/abc123 => remove selected employer
router.get('/delete/:_id', isAuthenticated, (req, res) => {
    Employer.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/employers')
        }
    })
})

// GET: /employers/edit/abc123 => display populated form for editing
router.get('/edit/:_id', isAuthenticated, (req, res) => {
    //get regions for Form dropdown
    Region.find((err, regions) => {
        if (err) {
            console.log(err)
        }
        else {
            //fetch selected employer for display
            Employer.findById(req.params._id, (err, employer) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.render('employers/edit', {
                        title: 'Employer Details',
                        regions: regions,
                        employer: employer,
                        user: req.user
                    })
                }
            })

        }
    }).sort('name')
})

// POST: /employers/edit
router.post('/edit/:_id', isAuthenticated, (req, res) => {
    Employer.findByIdAndUpdate({ _id: req.params._id }, req.body, null, (err, employer) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/employers')
        }
    })
})

//make public
module.exports = router