import {Link} from "react-router-dom";

let Navbar=()=>{
    return(
        <nav>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
        </nav>
    )
}

export default Navbar;