import React,{useState} from 'react'
import { Button } from '@material-ui/core'

const Testing = () => {
    const [state, setstate] = useState(0)

    const setData=()=>{
        setstate(state + 1)
        // console.log("hello ")
    }
    // console.log(state)
    return (
        <div>
            <Button onclick={()=>setData()}>Click me</Button>
            <button onClick={()=>setData()}>Click me </button>
            
        </div>
    )
}

export default Testing
