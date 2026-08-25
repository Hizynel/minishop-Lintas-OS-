import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

function Header(){
    const { user,logout } = useAuth();
    const navigate = useAuth();

    function logoutUser (){
        logout();
        navigate("/login")
    }
    return(
        <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">MiniShop</h1>
            <nav className="flex gap-4">
                <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium">
                <button>Beranda</button>
                </Link>
                <Link to="/keranjang" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium">
                    <button>Keranjang</button>
                </Link>
                {user ? (
                    <button onClick={logoutUser} className="text-red-500 hover:text-red-600 font-medium">
                        Logout
                    </button>
                ) : (
                    <>
                    <Link to="/Register" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium">
                        <button>Register</button>
                    </Link>
                    <Link to="/Login" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium">
                        <button>Login</button>
                    </Link>
                    </>
                )}
                
            </nav>
        </header>
    );
}

export default Header;