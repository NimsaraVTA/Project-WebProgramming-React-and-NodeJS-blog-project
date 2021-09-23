import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {

    return (

        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://i.pinimg.com/originals/4b/e9/ec/4be9ec219e4f213fa2d4acd81f6c40a4.jpg" alt="" />
                <p style={{ textAlign: "justify" }}>Hey! I am Thathsarani. I live in Sri Lanka. I am a currently diploma stutent in ICT.
                 So, this is the first blog that I created by using react and node js.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGEORIES</span>
                <div className="sidebarList">
                    <div className="sidebarListItem">Life</div>
                    <div className="sidebarListItem">Music</div>
                    <div className="sidebarListItem">Fashion</div>
                    <div className="sidebarListItem">Beauty</div>
                    <div className="sidebarListItem">Sport</div>
                    <div className="sidebarListItem">Food</div>
                </div>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle"><Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>SETTING</Link></span>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
        
        )

}