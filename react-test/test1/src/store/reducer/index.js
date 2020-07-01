let defaultState = {
    payLoad:{
        num:100
    }
};

export default (state=defaultState,action)=>{
    if(action.type === "NUM_ADD"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.payLoad.num += action.value;
        return newState; 
    }
    if(action.type === "NUM_DEL"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.payLoad.num -= action.value;
        return newState;
    }
    return state;
}