// for(let i=0,k=1;i<6;i++)
// {
//     let s="";
    
//     for(let j=0;j<i+1;j++)
//     {
//         if(k==13)
//         {
//             k=1;
//         }
//         s=s+k+" "
//         k=k+2
//     }
//     console.log(s)
// }
let ar=[1,2,3,4,5,6,5,4,3,8,9,0,7,5]
let new_arr=[...new Set(ar)]
console.log(new_arr)
