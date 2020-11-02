
const set_data = ()=>{
    return(dispatch)=>{
        dispatch({
            type:'SETDATA',
            user:[{name:'ali', email:'ali@gmail.com'}] ,
        })
        
    }
}


export {
    set_data,
   
}