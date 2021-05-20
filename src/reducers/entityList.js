const entityReducer = (state = [], action) =>{
    switch(action.type){
        case 'ADD' :
            state.push(action.entity_list);
            return state;
        
        default:
            return state;
    }

}
export default entityReducer;