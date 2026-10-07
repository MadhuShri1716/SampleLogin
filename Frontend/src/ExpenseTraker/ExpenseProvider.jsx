import ExpenseContext from "./ExpenseContext";
const ExpenseProvider=({children})=>{
    const companyName="ABC Technologies";
    const Application="Expense Tracker";
    return(
        <>
        <ExpenseContext.Provider value={{companyName,Application}}>
            {children}

        </ExpenseContext.Provider>
        </>
    )
};
export default ExpenseProvider;