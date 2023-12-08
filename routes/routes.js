
const express = require('express');
// const express =

// This line declares a constant variable named express.
// require('express')

// The right side of the assignment uses the require function to import the 'express' module. In Node.js, require is used to include external modules or libraries.

const router = express.Router()
// const router = express.Router(): This line creates an instance of an Express Router.

module.exports = router;
// module.exports = router;: This line exports the router instance so that it can be used in other parts of your application.
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    // this is a route that helps to update http path
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// router.delete('/delete/:id', async (req, res) => {: Defines a route for handling HTTP DELETE requests at the path '/delete/:id'. It's an asynchronous function that takes the request and response objects.

// const id = req.params.id;: Extracts the 'id' parameter from the request parameters.

// const data = await Model.findByIdAndDelete(id);: Uses Mongoose to find a document by its ID and delete it. The result is stored in the variable data.

// res.send(Document with ${data.name} has been deleted..);: Sends a response indicating that the document with a specific name has been deleted. It uses template literals to include the name from the deleted document.

// } catch (error) {: Begins a block for handling errors that might occur in the try block.

// res.status(400).json({ message: error.message }): If an error occurs, sends a JSON response with a 400 status code and an error message.

// }): Closes the try-catch block and the route handler.
// model
// const Model = require('../models/model');
const Model = require('../models/models');

// In this case, it's importing a module from the relative path '../models/models'
// 
//Post Method
