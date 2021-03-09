import React, { useState } from "react";
import ytAPI from "../utils/ytAPI";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";
import Card from "../components/Card";
import Torches from "../components/Torches";
import "./torch.css";
import Container from "../components/Container";


class Youtube extends React.Component {
    state = {
        videos: [{ "kind": "youtube#searchResult", "etag": "3gZEVXrdVMvS2yVCMF2HhGCWWDU", "id": { "kind": "youtube#video", "videoId": "EpR4Txswh6E" }, "snippet": { "publishedAt": "2017-04-06T13:36:17Z", "channelId": "UCW-thz5HxE-goYq8yPds1Gw", "title": "Gaming Culture: What ever happened with Text Adventure Games ? (Interactive Fiction)", "description": "Before the graphical adventure games, there was the text based adventure games. Also called Interactive Fiction Games, this was the genesis of a whole new ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/EpR4Txswh6E/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/EpR4Txswh6E/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/EpR4Txswh6E/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "GaminGHD", "liveBroadcastContent": "none", "publishTime": "2017-04-06T13:36:17Z" } }, { "kind": "youtube#searchResult", "etag": "gtgeLFe4Wi-9GenxripN2Jx0KtM", "id": { "kind": "youtube#video", "videoId": "ecN6UWrosL0" }, "snippet": { "publishedAt": "2020-04-25T12:00:15Z", "channelId": "UCU9G7Cw5hN_vyyFdPFJ3F0Q", "title": "An introduction to Text-Based Adventure Games", "description": "There are many kinds of video games, but these were some of the first. But have you ever heard of them? Like what you see? Become a patron!", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/ecN6UWrosL0/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/ecN6UWrosL0/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/ecN6UWrosL0/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Hogwa5h Gaming", "liveBroadcastContent": "none", "publishTime": "2020-04-25T12:00:15Z" } }, { "kind": "youtube#searchResult", "etag": "dEruyrAC_7v3QNL5vjsmfCb1i-g", "id": { "kind": "youtube#video", "videoId": "LRhbcDzbGSU" }, "snippet": { "publishedAt": "2011-03-10T21:59:06Z", "channelId": "UCtXKDgv1AVoG88PLl8nGXmw", "title": "GET LAMP: The Text Adventure Documentary", "description": "Google Tech Talk (more below) March 7, 2011 Presented by Jason Scott. ABSTRACT Jason Scott will talk about making the documentary and we'll be ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/LRhbcDzbGSU/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/LRhbcDzbGSU/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/LRhbcDzbGSU/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Google TechTalks", "liveBroadcastContent": "none", "publishTime": "2011-03-10T21:59:06Z" } }, { "kind": "youtube#searchResult", "etag": "mHzq6DzwOStim8shbnsELjj3pOo", "id": { "kind": "youtube#video", "videoId": "_nuS86ITjIM" }, "snippet": { "publishedAt": "2017-08-05T09:00:02Z", "channelId": "UCwX8RD5ivBjTm1QHIv7fm_Q", "title": "SanctuaryRPG - (Classic Text Adventure Game)", "description": "Sanctuary RPG: Black Edition on Steam: http://store.steampowered.com/app/328760/SanctuaryRPG_Black_Edition/ SanctuaryRPG: Black Edition is a humorous ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/_nuS86ITjIM/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/_nuS86ITjIM/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/_nuS86ITjIM/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Nookrium", "liveBroadcastContent": "none", "publishTime": "2017-08-05T09:00:02Z" } }, { "kind": "youtube#searchResult", "etag": "cjuB7effchZ6_6BX61Dul7s_Rp0", "id": { "kind": "youtube#video", "videoId": "DEcFCn2ubSg" }, "snippet": { "publishedAt": "2018-12-25T17:15:01Z", "channelId": "UC4JX40jDee_tINbkjycV4Sg", "title": "Choose Your Own Adventure Game in Python (Beginners)", "description": "How to make a text based choose your own adventure game in python. This tutorial is meant for beginners with very little experience programming in python.", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/DEcFCn2ubSg/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/DEcFCn2ubSg/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/DEcFCn2ubSg/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Tech With Tim", "liveBroadcastContent": "none", "publishTime": "2018-12-25T17:15:01Z" } }],
        selectedVideo: null
    }
    
    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    render() {

        return (
           
           <Container>
            <div id="torch">
                <Torches />
            </div>
            <div id="card">
            <Card>
            <div id="box">
                <h1> Recommended videos </h1>
        
                <div className='ui grid'>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div id="selected_video" className="col-sm-6">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div id="video_choices" className="col-sm-6">
                                <VideoList handleVideoSelect={this.handleVideoSelect}
                                    videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </Card>
            </div>
            
            <div id="torches">
                <Torches />
            </div>
            </Container>
            
           
        )
    }
}

export default Youtube;



