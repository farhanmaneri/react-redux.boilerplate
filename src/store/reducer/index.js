const INITIAL_STATE = {
    user:[{
    name: 'farhan',
    email: 'farhanmaneri@gmail.com'
}]}


export default ( state = INITIAL_STATE,action)=>{
    switch(action.type){   
        case 'SETDATA':
    return({
        ...state,
        user:[...state.user,action.user]
    })
   
}  
    return state;
} 