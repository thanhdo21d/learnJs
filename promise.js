// var Promise = new Promise(
//     function(resolve, reject) {
//         // thanh cong : resolve()
//         // that bai : reject()
       
       
//         // resolve([
//         //    { 
//         //     id:1,
//         //     name : 'thanh do'
//         //     }
//         // ]);

//         // reject(
//         //     'loi roi ban oi'
//         // );
//         resolve();
//     }
// );

// Promise

//             // thanh cong
//         // .then(function(){
//         //    return new Promise(function(resolve){
//         //     setTimeout(resolve,3000)
            
//         //    });
//         //  })
      
//         // .then(function(){
//         //     console.log()
            
//         // })
//         // // that bai
//         // .catch(function(error){
//         //     console.log(error)
//         // })

//         // // trang thai khi hoan thanh 
//         // .finally(function(){
//         //     console.log('done!');
//         // })

// /////////////////////////////
//         function sleep (ms){
//             return new Promise (function(resolve){
//                 setTimeout(resolve, ms);
//             });

//         }
        
//         sleep(1000)
//         .then(function(){
//             console.log(1)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log(2)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log(3)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log(4)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log(5)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log(6)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log(7)
//             return sleep(1000) 
//         })
//         .then(function(){
//             console.log()
             
//         })


var Promise = new Promise(function(resolve, reject){
         // resolve : thanh cong
         // reject : that bai
         reject(
           'loi roi nhe'
         )
})

    Promise
    // resolve 
    .then(function(resolve){
        console.log(resolve)
    })
    // reject
    .catch(function(reject){
        console.log(reject)
    })

  



