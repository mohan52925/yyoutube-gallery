import React from 'react'
import Project1 from './MyProjects/Project1'
import "./App.css"

 function App() {
  const VideoData= [{
    id: 1,
    title: "Spending $1,000,000 In 24 Hours",
    thumbnailUrl: "https://i.ytimg.com/vi/bs0SWXbty18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGvJFt0JPj2iuymCsta4nRunik5Q",
    views: "300M",
    likes:"125K",
    channelName: "Mr.Beast",
    channelLogoUrl: "https://yt3.ggpht.com/ytc/AOPolaSe-ifBRtdfb67uDM8kaHdhdPdQny-MaSRdBfT2NA=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    title: "Back With A BANG At Old Trafford 💥 | Man Utd 3-1 RC Lens | 2023/24 Pre-Season",
    thumbnailUrl: "https://i.ytimg.com/vi/jmBhg8Xck5o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAqO9Lh1l_6Lspr3dnC7zgr49SZ_w&quot;",
    views: "2.7M",
    likes:"125K",
    channelName: "Manchester united",
    channelLogoUrl: "https://yt3.ggpht.com/Pvon4M2yIxYu-NC3jXGBlo4o4SIL_BK68Sq_7AeB_CGt9osi8ygVSs9PnjswahPVTLqnJytvJQ=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 3,
    title: "Top 10 Friday Night SmackDown moments: WWE Top 10, Aug. 4, 2023",
    thumbnailUrl: "https://i.ytimg.com/vi/52mTwztStlw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC0mEmaDQVG3RCJbaF1BU5CsAjsbw&quot",
    views: "8M",
    likes:"125K" ,
    channelName: "WWE",
    channelLogoUrl: "https://yt3.ggpht.com/ytc/AOPolaQcQDFLtp0LQV32mRLOOlX3UEb2_26vXpDFelHlwhY=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 4,
    title: "Unbreakable Bonds: Forever Friends (Video Jukebox) | Woh Din | Tera Yaar Hoon Main | Dosti",
    thumbnailUrl: "https://i.ytimg.com/vi/z0vOhkzefCE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBPlJqzsCCvttoPjxXOxOQKqSw4tA&quot",
    views: "5M",
    likes:"165K"  ,
    channelName: "T series",
    channelLogoUrl: "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    id: 5,
    title: "Zanda Banda",
    thumbnailUrl: "https://i.ytimg.com/vi/nuaxkTOSPX8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9gGP6EkJ8jH2cCVVVYoIYJ9oyNw&quot",
    views: "16M",
    likes:"725K",
    channelName: "T series",
    channelLogoUrl: "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    id: 6,
    title: "Naa ready",
    thumbnailUrl: "https://i.ytimg.com/vi/szvt1vD0Uug/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBCa0_Yh2rCvwR30nadzGQ-sOe2RA&quot",
    views: "65M",
    likes:"125K",
    channelName: "Sony music india",
    channelLogoUrl: "https://yt3.ggpht.com/cE8QOPMlZBkzDHCp-7F35Rtahl64oPrdKaKZ2AgAdBs0tiOw1e9SVAEaPsa6RVGmKRW8leV8=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
    id: 7,
    title: "LEO title Promo",
    thumbnailUrl: "https://i.ytimg.com/vi/qN3wfuPYTI4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAfRJXvKNYA4BXy0m5fkEcQmSjBoQ&quot;",
    views: "34",
    likes:"525K",   
    channelName: "Sony music india",
    channelLogoUrl: "https://yt3.ggpht.com/cE8QOPMlZBkzDHCp-7F35Rtahl64oPrdKaKZ2AgAdBs0tiOw1e9SVAEaPsa6RVGmKRW8leV8=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
    id: 8,
    title: "Utopia - My eyes",
    thumbnailUrl: "https://i.ytimg.com/vi/pildU9lK6vM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0-mifT2jmuZ4Xt8Kls4VqQXNkOg&quot",
    views: "4M",
    likes:"185K" ,
    channelName: "Travis scott",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/AOPolaSAOImmdAXpGL9hhYUoJ-6s6Gz9hcTBrK9q7dyYnw=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
    id: 9,
    title: "FC 2024",
    thumbnailUrl: "https://i.ytimg.com/vi/63BIm4JRL7c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBuUVQf9jfWTTpAmdhpgvUWMoDkJg&quot",
    views: "1M",
    likes:"185K" ,
    channelName: "EA sports",
    channelLogoUrl: "https://yt3.ggpht.com/LPMctm8FbwAuirFV7HCSEh7WBLuoUNr7tt02AxRyyRUC4GeRSEa7NUiPahR0HfHVOhpXGd12Dg=s68-c-k-c0x00ffffff-no-rj"
    },
    {
    id: 10,
    title: "Clash of Clans",
    thumbnailUrl: "https://i.ytimg.com/vi/YLcN7OtBqis/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg9bf5KgGx4My4Sh9423Ce9crV-A",
    views: "80K",
    likes:"525K",
    channelName: "Beackers lab",
    channelLogoUrl: "https://yt3.ggpht.com/ytc/AOPolaSlHu3juG20PaPc11P6WADv7Lk1ClbC2V5PuGFJKw=s68-c-k-c0x00ffffff-no-rj"
    }, 
    {
    id: 11,
    title: "Clash of Clans",
    thumbnailUrl: "https://i.ytimg.com/vi/YLcN7OtBqis/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg9bf5KgGx4My4Sh9423Ce9crV-A",
    views: "80K",
    likes:"155K",
    channelName: "Beackers lab",
    channelLogoUrl: "https://yt3.ggpht.com/ytc/AOPolaSlHu3juG20PaPc11P6WADv7Lk1ClbC2V5PuGFJKw=s68-c-k-c0x00ffffff-no-rj"
    }, ]
  return (
  <div className='Data-tag'>

{ 
  VideoData.map((Video)=>{
   return( <Project1 Videos={Video}/>)
  })
 }
  </div>
  )
}
export default App
