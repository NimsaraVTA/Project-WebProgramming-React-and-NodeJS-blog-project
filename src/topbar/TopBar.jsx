import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
    const user = true;
    return (

        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" style={{ textDecoration: "none", color:"inherit" }} >HOME</Link></li>
                    <li className="topListItem"><Link to="/about" style={{ textDecoration: "none", color: "inherit" }} >ABOUT</Link></li>
                    <li className="topListItem"><Link to="/contact" style={{ textDecoration: "none", color: "inherit" }} >CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" style={{ textDecoration: "none", color: "inherit" }} >WRITE</Link></li>
                    <li className="topListItem"><Link to="/login" style={{ textDecoration: "none", color: "inherit" }} >LOGOUT</Link></li>
                </ul>
            </div>
            <div className="topRight">

                {
                    user ? (

                    <img className="topImg" src="https://images.unsplash.com/photo-1616740795271-abd6ce1a5a5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdyaXRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                
                    ) : (
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link to="/login" style={{ textDecoration: "none", color: "inherit" }} >LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                    <Link to="/register" style={{ textDecoration: "none", color: "inherit" }} >REGISTER</Link>
                                </li>
                            </ul>
                            )
                        
                        }

                <i className="topSearchIcon fas fa-search"></i>

                
            </div>
        </div>
        
        )

}