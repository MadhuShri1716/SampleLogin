import { useNavigate } from "react-router-dom";
const Logout=()=>{
    const navigate=useNavigate();
    return(
        <>
        <button onClick={()=>{
            localStorage.removeItem('token');
            navigate('/login');
        }}>Logout</button>
        </>
    )
}
export default Logout;