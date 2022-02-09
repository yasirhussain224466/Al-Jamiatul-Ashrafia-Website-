

const SwDev = () => {
    let devUrl = `${process.env.PUBLIC_URL}/sw.js`

    if ('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register(devUrl)
        .then((reg)=>{
            console.log("App is register successfull ", reg.scope)
        })
    })
    }
    else {
        console.log("Not Supported")
    }
}

export default SwDev
