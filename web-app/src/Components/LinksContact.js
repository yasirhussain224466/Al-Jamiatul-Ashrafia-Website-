import React from 'react'
import {ImPhone} from 'react-icons/im'
import {GrMail} from 'react-icons/gr'


const Links = () => {
    return (
     <>
     <div style={{width:'100%', margin:'0px', padding:'0px'}} className="container">
         <div className="main_COntainer">
             <div style={{fontSize:'14.5px',fontWeight:'600'}} className="IconLinks"><span style={{marginRight:'0px'}}><ImPhone/></span> +0003412584952</div>
             <div style={{fontSize:'14.5px',fontWeight:'600'}} className="IconLinks"><span style={{marginRight:'1px'}}><GrMail/></span>abcdefghijk@gmail.com</div>
         </div>

     </div>
     </>
    )
}

export default Links