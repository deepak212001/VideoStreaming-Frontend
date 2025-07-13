import React from 'react'
import './User.css'
import SideNavbar from '../../Component/SideNavbar/SideNavbar.jsx';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';


const User = ({ sideNavbar }) => {
    return (
        <div className='profile'>
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
                    </div>
                    <div className="profile_top_section_About">
                        <div className="profile_top_section_About_Name">UserChannelName</div>
                        <div className="profile_top_section_info">
                            @username . 4 videos
                        </div>
                        <div className="profile_top_section_info">
                            About the channel 
                        </div>
                    </div>
                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">

                        <Link to={'/watch/8989'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-1-1</div>
                            </div>

                        </Link>
                        <div className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-1-1</div>
                            </div>

                        </div>
                        <div className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-1-1</div>
                            </div>

                        </div>
                        <div className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-1-1</div>
                            </div>

                        </div>
                        <div className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-1-1</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default User