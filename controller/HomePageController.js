const Homepagecontroller = (req,res) =>{
   res.render('index',
    {title : 'personal information', 
    name : 'pourya alvani',
    message : 'Hello World!',
    imgsrc : 'PIC001.jpg'
})
}

module.exports = Homepagecontroller