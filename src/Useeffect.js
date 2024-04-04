// import axios from 'axios'
// import React, { useEffect,useState} from 'react'

// export default function Useeffect() {
//     const[user,setuser]=useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
//             setuser(response.data)
//             console.log(user)
//             user.map((e)=>{
//                 console.log(e.name)
//             })
//         })
      
//     })
//     return (
//         <div>
//             <h1>Count</h1>
//             {
//               user.map((e)=>{
//                 return(
//                     <div key={e.id}>
//                     <p>{e.name}</p>
//                     <h1>{e.address.street}</h1>
//                 </div>
//                 )
                
//               })
//             }
//         </div>
//     )
// }
