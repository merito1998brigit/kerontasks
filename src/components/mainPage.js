import React from 'react'
import axios from "axios";
import { User } from "react-feather";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default function Mainpage() {
const [data,setData]=React.useState([])

React.useEffect(()=>{
   fetchData();
},[])
  const fetchData= async ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      if(response.data){
        console.log(response.data)
        setData(response.data)
      }
    })
    .catch((error)=>{
      console.log("data not fetching!!")
    })
  }

    return (
        <>
        <div className="container justify-content-center align-items-center d-flex" style={{height:'fit-content',padding:'20px'}}>
           <div className="card shadow p-3 mb-5 bg-white rounded" style={{width:'50%',marginTop:'50px',padding:'30px'}}>
            {
              data?<div className="row">
                { data.map(item=>(
                    <div className="col" style={{paddingRight:'20px', marginTop:'10px',borderRadius:'5px'}}>
                     <Link to={{pathname:`/user/${item.id}`}}>   
                       <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:'gray',borderRadius:'50%',width:"50px",height:'50px'}}><User color='#ffffff' size="20"/></div>
                       <p style={{fontWeight:'bolder'}}>{item.name}</p>
                    </Link>  
                    </div>
                ))
                }
                </div>:<p>Data not Found!!</p>
            }
           </div>
        </div>
     </>
    )
}
