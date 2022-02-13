// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { DataGrid } from '@material-ui/data-grid'
// import { Button } from '@mui/material'
// import firebase from './Firebase'


// const url = 'https://al-jamiatul-ashrafia-58938-default-rtdb.firebaseio.com/ContactUsUserInfo.json'
// const getData = async () => {
//     return await axios.get(url)
// }

// const Response = () => {


    // const [handleData, setHandleData] = useState(0)
    // useEffect(()=>{
    //     const fireStore = firebase.database().ref('ContactUsUserInfo');
    //     fireStore.on('value',(res)=>{
    //         const Data = res.val()
    //         console.log(Data)
    //     })
    //  },[])

    // const getAllUser = async () => {
    //     const res = await getData()
    //     const Data = res.data
    //     // console.log(Data)
    //     let userData = []
    //     for (let id in Data) {
    //         userData.push({

    //             id: id,
    //             Name: Data[id].Name,
    //             Email: Data[id].Email,
    //             ContactNo: Data[id].ContactNo,
    //             Country: Data[id].Country,
    //             Message: Data[id].Message

    //         })



    //     }
        // setHandleData(userData)
        // console.log(userData)
        // console.log(handleData)



    // }
    // useEffect(() => {
    //     getAllUser()
        
        

    // }, [])
    
    
       
    // console.log(handleData)
    // const newArray = 

    // return (
    //     <>
    //     <div style={{ height: '100vh', width: '100%' }}>
    //         <DataGrid
    //             columns={[
    //                 { field: 'ID', minWidth: 150 },
    //                 { field: 'Name', minWidth: 150 },
    //                 { field: 'Email', minWidth: 150 },
    //                 { field: 'Contact No', minWidth: 150 },
    //                 { field: 'Country', minWidth: 150 },
    //                 { field: 'Message', minWidth: 150 }
    //             ]}
    //             rows={[

    //                 { id: 1, ID: '01', Name: 'React', Email: 'Material-UI', 'Contact No': '0314855', Country: 'Pakistan', Message: "hello World" },
                    
                    
    //             ]}

    //         />

            
            




    //     </div>
        {/* <Button onclick={()=>setHandleData(handleData + 1)} > click me</Button> <br/> */}
        // </>
//     )
// }

// export default Response
