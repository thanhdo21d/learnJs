  
        // (map(callback,value,array))
  var course = [
        {
            lop : 2,
            ten : 'datlt',
            truong : 'fptpoly'
                
        },
        {
            lop : 3,
            ten : 'tuva',
            truong : 'fptpoly'
                
        },
        {
            lop : 4,
            ten : 'tuannda3',
            truong : 'fptpoly'
                
        },
        {
            lop : 5,
            ten : 'dovtph',
            truong : 'fptpoly'
                
        },
        {
            lop : 6,
            ten : 'oanhppp',
            truong : 'fptpoly'
                
        },
        {
            lop : 7,
            ten : 'giangnl',
            truong : 'fptpoly'
                
        },
        {
            lop : 8,
            ten : 'huynl',
            truong : 'fptpoly'
                
        },

  ]
// de bai  dung ham map thay doi lop = 'ten lop', ten = ' ho va ten' , truong = 'cao dang '+ fptpoly
// them tien hoc = so tien + lop


         var newCourse = course.map(function(course){
            return {
                lop : `lop  : ${course.lop}`,
                ten : `ho va ten : ${course.ten}`,
                truong : `cao dang thuc hanh : ${course.truong}`,
                tienhoc: `gia tien :${course.lop}`
            }
            
         })
         console.log(newCourse)













