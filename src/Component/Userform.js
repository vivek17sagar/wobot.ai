import React,{useRef, useState} from 'react'
import '../CascadingStyleSheet/userform.css';

const Userform = () => {

    const[data,setData] = useState({
        username: "",
        companyname: "",
        industry: "",
        locations: ""
    })

    const[error,setError] = useState({
        username: false,
        companyname: false,
        industry: false,
        locations: false,
        done: false
    })

    const ref = useRef();

    function handleChange(key,value,col){
        if(col!==undefined){
        for(let i = 0; i<(ref.current).children.length; i++){
            if(i===col){
                (ref.current).children[i].style.backgroundColor = "#3766e8";
                (ref.current).children[i].style.color = "white";
                }else{
                    (ref.current).children[i].style.backgroundColor = "#f0f0f0";
                    (ref.current).children[i].style.color = "gray";
                }
        }
    }
        setData({...data,[key]:value})
        setError({ username: false,
            companyname: false,
            industry: false,
            locations: false,
            done: false})
    }

    function handleSubmit(e){
        e.preventDefault();
        
        if(data.username.length<1){
            setError({...error,["username"]:true});
        }
        else if(data.companyname.length<1){
            setError({...error,["companyname"]:true});
        }
        else if(data.industry==""||data.industry=="select"){
            setError({...error,["industry"]:true});
        }
        else if(data.locations.length<1){
            setError({...error,["locations"]:true});
        }else{
            setError({...error,["done"]:true});
            setData({
                username: "",
                companyname: "",
                industry: "",
                locations: ""
            })
            for(let i = 0; i<(ref.current).children.length; i++){
                (ref.current).children[i].style.backgroundColor = "#f0f0f0";
                (ref.current).children[i].style.color = "gray";
            }
        }
    }

   
  return (
    <div className='Userform'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Your Name</label><br/>
                {error.username===true?<div className='error'>fill username please</div>:null}
                <input type='text' placeholder='e.g. John Smith' value={data.username} className='username' onChange={(e)=>handleChange("username",e.target.value)} name='username'/>
            </div>
            <div>
                <label htmlFor="companyname">Company name</label><br/>
                {error.companyname===true?<div className='error'>fill companyname please</div>:null}
                <input type='text' placeholder='e.g. Alpha Inc' value={data.companyname} className='companyname' onChange={(e)=>handleChange("companyname",e.target.value)}/>
            </div>
            <div>
                <label htmlFor="industry-select">Industry</label><br/>
                {error.industry===true?<div className='error'>select industry please</div>:null}
                <select className='industry-select' value={data.industry} onChange={(e)=>handleChange("industry",e.target.value)}>
                    <option>Select</option>
                    <option>QSR</option>
                    <option>DriveThru</option>
                    <option>Car Wash</option>
                </select>
            </div>
            <div>
                <label htmlFor="companyname">Number of locations</label><br/>
                {error.locations===true?<div className='error'>select locations please</div>:null}
                <div className='locations' ref={ref}>
                    <div className='number' onClick={(e)=>handleChange("locations","1-20",0)}>1-20</div>
                    <div className='number' onClick={(e)=>handleChange("locations","21-50",1)}>21-50</div>
                    <div className='number' onClick={(e)=>handleChange("locations","51-200",2)}>51-200</div>
                    <div className='number' onClick={(e)=>handleChange("locations","201-500",3)}>201-500</div>
                    <div className='number' onClick={(e)=>handleChange("locations","500+",4)}>500+</div>
                </div>
            </div>
            <div>
                <button type='submit'>Get Started</button>
            </div>
            {error.done===true?<div className='done'>Sucessful Submitted !!!</div>:null}
        </form>
        
    </div>
  )
}

export default Userform