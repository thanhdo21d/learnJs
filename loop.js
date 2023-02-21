// vong lap 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
    for (let i =0; i<number.length; i++){
        body code
    }
*/

// for (let i = 0; i < number.length; i++) {
//     console.log(`the index i ${i}`);
// }

/*
length : 5
    i = 0;
    i < 5 -> true 
    i ++ -> i = 1
    result : 0

    i = 1 ;
    i < 5 -> true
    i ++ -> i = 2
    result : 1

    i = 2 ;
    i < 5 -> true
    i ++ -> i = 3
    result : 2

    i = 3 ;
    i < 5 -> true
    i ++ -> i = 4
    result : 3

    i = 4 ;
    i < 5 -> true
    i ++ -> i = 5
    result : 4

    i = 5 ;
    i < 5 -> false
    loop end

*/
// for (let i = 0; i < number.length; i++) {
//     // i++ -> i = i + 1
//     // i = i + 2 se duoc gia tri (0, 2,4,6,8)
// }


for (let i = 0; i < number.length; i++) {
 // neu gia tri = 8 thi dung vong lap
//  console.log(number[i])//1,2,3,4,5,6,7,8
//  if(number[i]=== 8){
//     break;
//  }

 // neu gia tri = 8 thi bo qua nhung vong lap van chay tiep
 if(number[i]=== 8){
    continue; // bo qua gia tri do 
 }
 console.log(number[i])//1,2,3,4,5,6,7,9
 
}