import{useState} from 'react'


export default function Counter2(){

     const[num,setNum]=useState(0);

     return(
        <div>
        <button onClick={()=>setNum(num+1)}>Add+</button>
     
     
     </div>
     
        )   
}