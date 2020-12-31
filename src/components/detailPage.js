import React from 'react'
import axios from "axios";
import map from "../assets/map.JPG";
import { Link } from "react-router-dom";
import { User, X,Twitter,Facebook,Instagram} from "react-feather";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Detailpage(props) {

     const {match} = props;
     const {params}=match
     const {id} = params

    const [data,setData]=React.useState([])
    const [user,setUser]=React.useState([])
    React.useEffect(()=>{
        fetchData();
     },[])
       const fetchData= async ()=>{
       await  axios.get('https://jsonplaceholder.typicode.com/users')
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
      
    console.log("fetched data",data)
    console.log('merito*****',props.match.params.id)
    let users = data.filter((item)=>item.id == id)

    return (
          <>
          <div className="container justify-content-center align-items-center d-flex" style={{height:'fit-content',padding:'20px'}}>
           <div className="card shadow p-3 mb-5  rounded" style={{width:'90%',marginTop:'50px',padding:'40px',height:'fit-content',backgroundColor:'#4c63fd',color:'white',position:'relative'}}>
           <div className="d-flex justify-content-center align-items-center" style={{position:'absolute',top:'-15px',bottom:'0px',backgroundColor:'gray',borderRadius:'50%',width:"50px",height:'50px'}}><User color='#ffffff' size="20"/></div>
             <div className="row" style={{paddingBottom:'30px'}}>
                  <div className="col d-flex justify-content-end align-items-end">
                    <Link to={{pathname:'/'}}>
                       <X color='#ffffff' size="20" />
                    </Link>   
                  </div>
              </div>
            {
              users.map(item=>(
                  <div className="d-flex">
                      <div className="row">
                         <div className="col-12 d-flex align-items-center">
                             <h4 style={{marginRight:'100px',marginLeft:'30px',marginBottom:'20px'}}>Name:</h4>
                             <h4>{item.username}</h4>
                         </div>

                         <div className="col-12 d-flex align-items-center">
                             <h4 style={{marginRight:'100px',marginLeft:'30px',marginBottom:'20px'}}>UserName:</h4>
                             <h4>{item.username}</h4>
                         </div>
                         <div className="col-12 d-flex align-items-center">
                             <h4 style={{marginRight:'100px',marginLeft:'30px',marginBottom:'20px'}}>Website:</h4>
                             <h4>{item.website}</h4>
                         </div>
                         <div className="col-12 d-flex align-items-center">
                             <h4 style={{marginRight:'100px',marginLeft:'30px',marginBottom:'20px'}}>Company:</h4>
                             <h4>{item.company.name}</h4>
                         </div>
                         <div className="col-12 d-flex align-items-center">
                             <h4 style={{marginRight:'100px',marginLeft:'30px',marginBottom:'20px'}}>Phone:</h4>
                             <h4>{item.phone}</h4>
                         </div>
                      </div>
                      <div className="location d-flex justify-content-center">
                              <img src={map} alt="map" width="100%" height="100%"/>
                      </div>
                  </div>
              ))
            }

              <div className="row" style={{marginTop:'20px'}}>
                  <div className="col-4 " style={{paddingLeft:'35px'}}>
                     <h4>Social Networks</h4>
                  </div>
                  <div className="col-8 d-flex">
                  <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:'#1DA1F2',borderRadius:'50%',width:"40px",height:'40px',marginRight:'10px'}}><Twitter href="" color='#fff' size="20"/></div>
                  <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:'#4267B2',borderRadius:'50%',width:"40px",height:'40px',marginRight:'10px'}}><Facebook href="" color='#fff' size="20"/></div>
                  <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:'#8a3ab9',borderRadius:'50%',width:"40px",height:'40px',marginRight:'10px'}}><Instagram href="" color='#fff' size="20"/></div>
                  </div>
              </div>
             </div>
          </div>
          </>
    )
}
