import React, { useState } from 'react'
import './Signup.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
  const [singUpFiled, setSignUpField] = useState({ "name": "", "username": "", "password": "", "about": "", "profilePic": uploadedImageUrl });

  const handleOnChangeInput = (event, name) => {
    setSignUpField({
      ...singUpFiled, [name]: event.target.value
    })
  }
  console.log(singUpFiled)

  const uploadImage = async (e) => {
    console.log("Uploading")
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    // youtube-clone
    data.append('upload_preset', 'youtube-clone');
    console.log("data", files)
    try {
      // cloudName="deepak2199"
      // setProgressBar(true)
      const response = await axios.post("https://api.cloudinary.com/v1_1/deepak2199/image/upload", data)
      // setProgressBar(false)
      console.log(response)
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({
        ...singUpFiled, "profilePic": imageUrl
      })
    } catch (err) {
      console.log("error : ", err)
    }


  }

  return (
    <div className='signUp'>
      <div className="signup_card">


        <div className="signUp_title">
          <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input type="text" className="signUp_Inputs_inp" placeholder='Name' value={singUpFiled.name} onChange={(e) => (handleOnChangeInput(e, "name"))} />
          <input type="text" className="signUp_Inputs_inp" placeholder='Username' value={singUpFiled.username} onChange={(e) => (handleOnChangeInput(e, "username"))} />
          <input type="text" className="signUp_Inputs_inp" placeholder='Password' value={singUpFiled.password} onChange={(e) => (handleOnChangeInput(e, "password"))} />

          <div className="image_upload_signup">
            <input type="file" onChange={uploadImage} />
            <div className="image_upload_signup_div">
              <img src={uploadedImageUrl} alt="" className="image_default_signUp" />
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn">SignUp</div>
            <Link to={'/'} className="signUpBtn">Cancel</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup