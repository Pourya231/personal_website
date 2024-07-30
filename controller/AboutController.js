const aboutController = (req,res) =>{
    res.render('about',
        {title : 'personal information', 
        name : 'pourya alvani',
        message : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Error perferendis fugit, totam possimus, eos praesentium sit est voluptate,
          eveniet distinctio accusantium vel? Mollitia, 
     fugit doloribus quasi fugiat nobis aspernatur nihil!`,
        imgsrc : 'PIC001.jpg'
    })}

module.exports = aboutController