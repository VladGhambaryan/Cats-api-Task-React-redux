import store from "./store";

const thunkFunction=()=>{
    return(dispatch)=>{
        dispatch(thunkFunction)
        fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
            .then(res=>res.json())
            .then((resp)=>{
                const data = resp
            })

    }


}
store.dispatch(thunkFunction)