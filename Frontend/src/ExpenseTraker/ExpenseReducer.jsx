import ExpenseContext from "./ExpenseContext";
const intialExpenses=[];
const ExpenseReducer=(state,action)=>{
 if(action.type==="ADD"){
    return [...state,action.payload]
 }  
 if(action.type==="DELETE"){
    return state.filter((item)=>{
        return item.id!==action.payload
    })
 } 
 return state;

};
export {ExpenseReducer,intialExpenses};