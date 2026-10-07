
const UserProfile=()=>{
    const user=JSON.parse(localStorage.getItem("user"));
     if (!user) {
        return <h2>User not logged in</h2>;
    }
    return(
        <>
        <img src="\src\assets\hero.png" width={20} height={30}></img>
        
        <h2>Hi {user.name}</h2>
        <p>{user.email}</p>

        
        </>
    )
}
export default UserProfile;