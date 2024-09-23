const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors")
const Student = require('../models/studentModel')

exports.homepage = catchAsyncErrors(async(req,res,next)=>{
    
        res.json({ message:'Homepage'})
    
})

exports.studentsignup =catchAsyncErrors(async(req,res,next)=>{
        const student = await new Student(req.body).save()
        res.status(201).json(student)
       
})