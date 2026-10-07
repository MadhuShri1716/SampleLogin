import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
        <nav className="nav">
            <h2>LearnHub</h2>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/Assessment">Assessment</Link>
                <Link to="/Profile">Profile</Link>
            </div>
        </nav>
        </>
    )
}
export default Navbar;