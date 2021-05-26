import React, { useState, useEffect } from 'react'
import './App.css';
import Video from "./Video.js"
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    // fires ones when the component load and whenever videos changes, but never after
    db.collection('videos').onSnapshot( snapshot => setVideos(snapshot.docs.map(doc => doc.data())))
  },[])

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares}) => (
            <Video 
            url= {url}
            channel= {channel} 
            description= {description}
            song= {song}
            likes={likes} 
            messages={messages} 
            shares={shares}
          />
          )
        )} 
        {/* <Video
        url= "https://v16.tiktokcdn.com/100d15ccf7176a1791418036595637c7/60ae4638/video/tos/useast2a/tos-useast2a-ve-0068c002/0d093075898c4512b04915e04b61e539/?a=1233&br=3794&bt=1897&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105260659250101151531120D145A91&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anI6eTtyNmZzNDMzNzczM0ApOWZoNDM6aWQ2Nzw5NWVlaWdfYWhjNGFtc3FgLS1kMTZzczU1MDUuYWEzYy1eNDZjYzM6Yw%3D%3D&vl=&vr="
        channel= "@hello-it's-me" 
        description= "footer desc" 
        song= "waiting for love - avicii"
        likes={123} 
        messages={321} 
        shares={123}
        /> */}
        {/* <Video 
        url= "https://v16.tiktokcdn.com/0473e5da63f19ce9972460505d1b177b/60ae6867/video/tos/alisg/tos-alisg-pve-0037c001/12a4069eaaa6430c96ef2d89e565cc1f/?a=1233&br=1238&bt=619&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=1&er=&l=2021052609251401011515104200003A7D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajdxaDhseWVyNTMzODczM0ApPDg2Ozg4ZTxoNzNlZThkNWc1anEzXjYtbmpgLS1kMTRzcy5gNS5iXzMzLzVeL2JjLjI6Yw%3D%3D&vl=&vr="
        channel= "@hello-it's-me" 
        description= "footer desc" 
        song= "waiting for love - avicii"
        likes={123} 
        messages={321} 
        shares={123}
        /> */}
        {/* <Video 
        url='https://v16.tiktokcdn.com/f7af97fcb653ba309350568a70fc678f/60ae686a/video/tos/alisg/tos-alisg-pve-0037/809c236f5d1c46279321d9572c4890cf/?a=1180&br=770&bt=385&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=2021052609251401011515104200003A7D&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amQ2eDo1eDp1NTMzODgzM0ApO2dnMzM4NTs3N2dlNGZpaWdxYDFwb2Fja2lgLS1kLzRzc15hYi5fYTAwNV8zYV8tNV46Yw%3D%3D&vl=&vr='
        channel= "@hello-it's-me" 
        description= "footer desc" 
        song= "waiting for love - avicii"
        likes={123} 
        messages={321} 
        shares={123}
        /> */}
        {/* <Video 
        url= "https://v9-id.tiktokcdn.com/1b7fc541256ff7993f755d25dbe5e392/60ae69f6/video/tos/useast2a/tos-useast2a-ve-0068c001/28c213eb63d84e639761c12cfe9d9b63/?a=1233&br=2454&bt=1227&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105260931180102341082236500C7E8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajs2ZWtmbmZqNTMzNzczM0ApaDo1OWRkOTw7N2Q0ZDxoM2dgMmdjbG9lb2dgLS1kMTZzcy4vM19iYDNfYi8vYWIuMi46Yw%3D%3D&vl=&vr="
        channel= "@hello-it's-me" 
        description= "footer desc" 
        song= "testtttttt"
        likes={123} 
        messages={321} 
        shares={123}
        /> */}
        {/* <Video 
        url="https://v53.tiktokcdn.com/a42b6916bdc713d99fefa9f156acfdb4/60ae69dc/video/tos/alisg/tos-alisg-pve-0037/b0b12e3da02e4a97a4cbc769a5086970/?a=1180&br=2496&bt=1248&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202105260931180102341082236500C7E8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRoaDVtd2wzNTMzODgzM0ApM2U7Nmk0NGQ8N2g4PDQ4ZWczcmRoaGttMF5gLS1kLzRzc19jYTMtNDI0MjUwNDMvNTU6Yw%3D%3D&vl=&vr="
        channel= "@hello-it's-me" 
        description= "footer desc" 
        song= "waiting for love - avicii"
        likes={123} 
        messages={400} 
        shares={200}
        /> */}
      </div>
    </div>
  );
}

export default App;
