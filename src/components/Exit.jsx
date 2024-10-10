import { useNavigate } from "react-router-dom";

export default function Exit(){
    const navigate = useNavigate()
    const handleLogout = () => {
        
        localStorage.clear()
        navigate("/");
      };

      
    return(
        <>
        <button className="btn btn-accent text-lg" name="Logout" onClick={handleLogout}>Exit</button>
        </>
    )
}