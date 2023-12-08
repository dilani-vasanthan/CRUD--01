
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
// await is used within async functions to pause execution until a Promise is settled (either resolved or rejected).
// The try block is used to enclose a block of code where exceptions (errors) might occur.
// If an error occurs within the try block, the control is passed to the catch block.

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
// e('/delete/:id', async (req, res) => {: Defines a route for handling HTTP DELETE requests at the path '/delete/:id'. It's an asynchronous function that takes the request and response objects.

// const id = req.params.id;: Extracts the 'id' parameter from the request parameters.

// const data = await Model.findByIdAndDelete(id);: Uses Mongoose to find a document by its ID and delete it. The result is stored in the variable data.

// res.send(Document with ${data.name} has been deleted..);: Sends a response indicating that the document with a specific name has been deleted. It uses template literals to include the name from the deleted document.

// } catch (error) {: Begins a block for handling errors that might occur in the try block.

// res.status(400).json({ message: error.message }): If an error occurs, send

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

// router.patch('/update/:id', async (req, res) => {: This line sets up the HTTP patch request route with the URL '/update/:id'. The req and res parameters are instances of the Express.js Request and Response objects, respectively.

// try {: This line starts a try-catch block. The purpose of this block is to catch any errors that might occur while processing the HTTP request.

    // const id = req.params.id;: This line retrieves the id parameter from the URL. In Express.js, URL parameters are accessed through the req.params object.
    
    // const updatedData = req.body;: This line retrieves the body of the HTTP request, which contains the data to be updated.
    
    // const options = { new: true };: This line creates an options object with the new property set to true. This option tells the findByIdAndUpdate function to return the updated document.
    
    // const result = await Model.findByIdAndUpdate(id, updatedData, options);: This line updates the document in the database that matches the given id. The findByIdAndUpdate function takes three arguments: the id of the document to update, the updatedData to be applied, and the options object.
    
    // res.send(result);: This line sends the updated document as the response to the HTTP request.
    
    // } catch (error) {: This line starts the catch block of the try-catch structure.
    
    // res.status(400).json({ message: error.message });: This line sends an HTTP response with a status code of 400 (Bad Request) and a JSON object containing the error message.
    
    // });: This line ends the router.patch route definition.

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
