import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
const HomePage = ({ sideNavbar }) => {

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        <Link to={'/watch/1234'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="thimbnail" className='youtube_thumbnailPic' />
            <div className="youtube_timingThumbnail">
              34:19
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user" className='youtube_thumbnail_Profile' />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                this is temp
              </div>
              <Link to={'/user/id'} className="youtube_channelName">
                user 1
              </Link>
              <div className="youtubeVideo_views">
                30 views
              </div>
            </div>
          </div>
      </Link>

      <div className="youtube_video">
        <div className="youtube_thumbnailBox">
          <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="thimbnail" className='youtube_thumbnailPic' />
          <div className="youtube_timingThumbnail">
            34:19
          </div>
        </div>

        <div className="youtubeTitleBox">
          <div className="youtubeTitleBoxProfile">
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user" className='youtube_thumbnail_Profile' />
          </div>

          <div className="youtubeTitleBox_Title">
            <div className="youtube_videoTitle">
              this is temp
            </div>
            <div className="youtube_channelName">
              user 1
            </div>
            <div className="youtubeVideo_views">
              30 views
            </div>
          </div>
        </div>
      </div>

      <div className="youtube_video">
        <div className="youtube_thumbnailBox">
          <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="thimbnail" className='youtube_thumbnailPic' />
          <div className="youtube_timingThumbnail">
            34:19
          </div>
        </div>

        <div className="youtubeTitleBox">
          <div className="youtubeTitleBoxProfile">
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user" className='youtube_thumbnail_Profile' />
          </div>

          <div className="youtubeTitleBox_Title">
            <div className="youtube_videoTitle">
              this is temp
            </div>
            <div className="youtube_channelName">
              user 1
            </div>
            <div className="youtubeVideo_views">
              30 views
            </div>
          </div>
        </div>
      </div>

      <div className="youtube_video">
        <div className="youtube_thumbnailBox">
          <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="thimbnail" className='youtube_thumbnailPic' />
          <div className="youtube_timingThumbnail">
            34:19
          </div>
        </div>

        <div className="youtubeTitleBox">
          <div className="youtubeTitleBoxProfile">
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user" className='youtube_thumbnail_Profile' />
          </div>

          <div className="youtubeTitleBox_Title">
            <div className="youtube_videoTitle">
              this is temp
            </div>
            <div className="youtube_channelName">
              user 1
            </div>
            <div className="youtubeVideo_views">
              30 views
            </div>
          </div>
        </div>
      </div>

      <div className="youtube_video">
        <div className="youtube_thumbnailBox">
          <img src="https://i.ytimg.com/vi/EaLQALGEoNE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7o8hjzjygf7Si8HPfnQ-YgF0yRA" alt="thimbnail" className='youtube_thumbnailPic' />
          <div className="youtube_timingThumbnail">
            34:19
          </div>
        </div>

        <div className="youtubeTitleBox">
          <div className="youtubeTitleBoxProfile">
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user" className='youtube_thumbnail_Profile' />
          </div>

          <div className="youtubeTitleBox_Title">
            <div className="youtube_videoTitle">
              this is temp
            </div>
            <div className="youtube_channelName">
              user 1
            </div>
            <div className="youtubeVideo_views">
              30 views
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}

export default HomePage

