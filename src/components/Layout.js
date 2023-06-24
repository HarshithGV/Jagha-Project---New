import { Outlet, Link } from "react-router-dom";
 
const Layout = () => {
    return(
 <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>                
            </li>
            <li>
            <Link to="/States">States</Link>
            </li>
            <li>
            <Link to="/Districts">Districts</Link>
            </li>
            <li>
            <Link to="/Taluk">Taluks</Link>
            </li>
            <li>
            <Link to="/Place">Places</Link>
            </li>
        </ul>
    </nav>
    
<Outlet/>
 </>
 
    )
};

export default Layout;