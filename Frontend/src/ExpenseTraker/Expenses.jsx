import { useState,useRef, useReducer, useCallback, useMemo, useContext } from "react";
import ExpenseProvider from "./ExpenseProvider";
import {ExpenseReducer,intialExpenses} from "./ExpenseReducer";
import ExpenseContext from "./ExpenseContext";

const Expenses=()=>{
    const {companyName,Application}=useContext(ExpenseContext);
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState(0);
    const [category,setCategory]=useState("");
    const [expenses,dispatch]=useReducer(ExpenseReducer,intialExpenses);
    const handleAdd=useCallback(()=>{
        dispatch({
            type:"ADD",
            payload:{
                id:Date.now(),
                title:title,
                amount:amount,
                category:category
            }
        })
        setTitle(" ");
        setAmount(" ");
        setCategory(" ");
    },[title,amount,category]);
    const handleDelete=useCallback((id)=>{
        dispatch({type:"DELETE",
            payload:id
        }
            
        )
    },[]);

    const TotalExpenses=useMemo(()=>{
       let total=0;
        for(let i=0;i<expenses.length;i++){
              total+=Number(expenses[i].amount);
        }
        return total;
       
    },[expenses]);
    const HighestExpenses=useMemo(()=>{
        let High=0;
        for(let i=0;i<expenses.length;i++){
           if(High<expenses[i].amount){
            High=expenses[i].amount;
           }
        }
        return High;

    },[expenses])
    const NumberOfExpenses=useMemo(()=>{
        return expenses.length;
    },[expenses]);
    return(
        <>
        <div>
            <h1>Personal Expense Tracker</h1>
            <p>CompanyName:{companyName}</p>
             <br />
             <p>Application:{Application}</p>
            <p>Total Expenese:{TotalExpenses} </p>
            <br />
            <p>Highest Expense:{HighestExpenses}</p>
            <br>
            </br>
            <p>Number of Expenses :{NumberOfExpenses}</p>
            <br></br>

            <h3>Add Expenses</h3>
            <input type="text"  value={title} placeholder="Enter the Title" onChange={(e)=>{
                setTitle(e.target.value);
            }} ></input>
            <br />
            <input type="number" value={amount} placeholder="Enter the amount" onChange={(e)=>{
                setAmount(Number(e.target.value));
            }}></input>
            <select onChange={(e)=>{
                setCategory(e.target.value)
            }}>
                <option value="" >Select a Category</option>
                <option value="Food">Food</option>
                <option value="Transport">TransPort</option>
                <option value="Medical" >Medical</option>
            </select>
            <br />


            <button onClick={handleAdd}>Add Expenses</button>
            <br>
            </br>
            <h2>Expenses</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            expenses.map((item,index)=>(
                              <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.amount}</td>
                                    <td><button onClick={()=>{handleDelete(item.id)}}> Delete</button></td>
                                    
                                </tr>
                               
                            ))

                           

                        }
                    
                </tbody>
            </table>
            
        </div>
        </>
    )

};
export default Expenses;