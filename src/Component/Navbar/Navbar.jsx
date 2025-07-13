import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login.jsx'

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
    const [userPic, setUserPic] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain")
    const [model, setModel] = useState(false)
    const [login, setLogin] = useState(false);
    // const [isLogedIn, setIsLogedIn] = useState(false)
    const navigate = useNavigate()


    const handleClickModel = () => {
        setModel(!model)
    }
    const setsideNavbar = () => {
        setSideNavbarFunc(!sideNavbar)
    }
    const handleprofile = () => {
        navigate('/user/123');
        setModel(false);
    }
    const setLoginModel = () => {
        setLogin(false);
    }

    const onclickOfPopUpOption = (button) => {
        setModel(false);

        if (button === "login") {
            setLogin(true);
        } else {
            // localStorage.clear();
            // getLogoutFun();
            // setTimeout(() => {
            //     navigate('/')
            //     window.location.reload();
            // }, 2000);
        }
    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className="navbarHamberger" onClick={setsideNavbar}>
                    <MenuIcon sx={{ color: "white" }} />
                </div>
                <Link to={'/'} className="navbar-youtubeImg">
                    <YouTubeIcon sx={{ fontSize: "34px", color: "red" }} />
                    <div className="navbar-utubeTitle">MyTube</div>
                </Link>
            </div>


            <div className='navbar-center'>
                <div className="navbar-searchBox">
                    <input type="text" placeholder="Search" className='navbar-search' />
                    <div className="navbar-searchIconBox">
                        <SearchIcon sx={{ color: "white" }} />
                    </div>
                </div>
            </div>

            <div className='navbar-right'>
                <Link to={'/123/upload'} className="navbar-icons">
                    <FileUploadIcon sx={{ color: "white" }} />
                </Link>
                <div className="navbar-icons">
                    <NotificationsIcon sx={{ color: "white" }} />
                </div>
                <img onClick={handleClickModel} src={userPic} alt="userPic" className="navbar-user" />
                {model &&
                    <div className="model">
                        <div className="model-option" onClick={handleprofile}>Profile</div>
                        <div className="model-option" onClick={() => onclickOfPopUpOption("login")}>Login</div>
                        <div className="model-option" onClick={() => onclickOfPopUpOption("logout")}>Logout</div>
                    </div>
                }
            </div>
            {
                login && <Login setLoginModel={setLoginModel} />
            }
        </div >
    )
}

export default Navbar