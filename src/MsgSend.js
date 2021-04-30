
import React , { useContext,useState }from 'react'
import { MsgContext } from './contexts/MsgContext';
function MsgSend() {
    
    const {setMsg ,setShowProfile} = useContext( MsgContext);
    console.log("valu is",setShowProfile);
    return (
        <div>
           <input
           type="text"
           placeholder="enter message"
           onChange={(event)=>{
            setMsg(event.target.value);
           }}
           /> 
           <button onClick={()=>{
            setShowProfile(true);
        }}
        >send</button>
        </div>
    )
}

export default MsgSend
/*  onclick={()=>{
               setShowProfile(true);
           }

           //destructure the varible got from msg context
           } */