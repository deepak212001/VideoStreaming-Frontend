import React, { useState } from 'react'
import './VideoUpload.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VideoUpload = () => {

    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "" })
    const [loader, setLoader] = useState(false);

    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }


    const uploadImage = async (e, type) => {
        setLoader(true)
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
            // cloudName="deepak2199"

            const response = await axios.post(`https://api.cloudinary.com/v1_1/deepak2199/${type}/upload`, data)

            console.log(response)
            const url = response.data.url;
            console.log(url)
            let val = type === "image" ? "thumbnail" : "videoLink";
            console.log("type", val)
            setInputField({
                ...inputField, [val]: url
            })

            setLoader(false)


        } catch (err) {
            setLoader(false)
            console.log(err)
        }


    }
    console.log(inputField)

    return (
        <div className='videoUpload'>
            <div className="uploadBox">


                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>
                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" placeholder='Title Of Video' value={inputField.title} onChange={(e) => (handleOnChangeInput(e, "title"))} />
                    <textarea name="" id="" className="uploadFormInputs extra" placeholder='Description' value={inputField.description} onChange={(e) => (handleOnChangeInput(e, "description"))}></textarea>
                    <div>Thumbnail <input type='file' accept='image/*' onChange={(e) => (uploadImage(e, "image"))} /></div>
                    <div>Video <input type='file' accept='video/*' onChange={(e) => (uploadImage(e, "video"))} /></div>

                    {
                        loader && <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    }
                </div>


                <div className="uploadBtns">
                    <Link to={'/'} className="uploadBtn-form">Cancel</Link>
                    <div className="uploadBtn-form" >Upload</div>
                </div>
            </div>
        </div>
    )
}

export default VideoUpload