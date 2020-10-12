import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Feed.css';
import FeedTweet from './FeedTweet/FeedTweet';

function Feed(){
    const tweets = [
        {
        userId: 0,
        date: 'Oct 6',
        retweets: {
            retweets: 3,
            quoteRetweets: 1
        },
        likes: 4,
        content: 'Ft5 for twitch subs anyone?',
        replies: [{
            id: 1,
            replies: 4,
            retweets: 3,
            Likes: 16
        }]
        },{
        userId: 2,
        date: 'Oct 6',
        retweets: {
            retweets: 273,
            quoteRetweets: 200
        },
        likes: 3800,
        content: 'love how good I look today',
        img: 'https://pbs.twimg.com/media/EjmyjJMUYAAiTHo?format=jpg&name=4096x4096',
        replies: [{
            id: 1,
            replies: 4,
            retweets: 3,
            Likes: 16
        }]
        },{
            userId: 3,
            date: 'Oct 6',
            retweets: {
                retweets: 100,
                quoteRetweets: 54
            },
            likes: 4500,
            content: 'Smash Fighter Pass reveals based on hype S: Steve',
            replies: [{
                id: 1,
                replies: 4,
                retweets: 3,
                Likes: 16
            }]
        },{
        userId: 0,
        date: 'Oct 6',
        retweets: {
            retweets: 3,
            quoteRetweets: 1
        },
        likes: 4,
        content: 'Ft5 for twitch subs anyone?',
        replies: [{
            id: 1,
            replies: 4,
            retweets: 3,
            Likes: 16
        }]
        },{
        userId: 2,
        date: 'Oct 6',
        retweets: {
            retweets: 273,
            quoteRetweets: 200
        },
        likes: 3800,
        content: 'love how good I look today',
        img: 'https://pbs.twimg.com/media/EjmyjJMUYAAiTHo?format=jpg&name=4096x4096',
        replies: [{
            id: 1,
            replies: 4,
            retweets: 3,
            Likes: 16
        }]
        },{
            userId: 3,
            date: 'Oct 6',
            retweets: {
                retweets: 100,
                quoteRetweets: 54
            },
            likes: 4500,
            content: 'Smash Fighter Pass reveals based on hype S: Steve',
            replies: [{
                id: 1,
                replies: 4,
                retweets: 3,
                Likes: 16
            }]
        },{
            userId: 0,
            date: 'Oct 6',
            retweets: {
                retweets: 3,
                quoteRetweets: 1
            },
            likes: 4,
            content: 'Ft5 for twitch subs anyone?',
            replies: [{
                id: 1,
                replies: 4,
                retweets: 3,
                Likes: 16
            }]
        },{
            userId: 2,
            date: 'Oct 6',
            retweets: {
                retweets: 273,
                quoteRetweets: 200
            },
            likes: 3800,
            content: 'love how good I look today',
            img: 'https://pbs.twimg.com/media/EjmyjJMUYAAiTHo?format=jpg&name=4096x4096',
            replies: [{
                id: 1,
                replies: 4,
                retweets: 3,
                Likes: 16
            }]
        },{
                userId: 3,
                date: 'Oct 6',
                retweets: {
                    retweets: 100,
                    quoteRetweets: 54
                },
                likes: 4500,
                content: 'Smash Fighter Pass reveals based on hype S: Steve',
                replies: [{
                    id: 1,
                    replies: 4,
                    retweets: 3,
                    Likes: 16
                }]
        }
    ];
    const users = [
        {
        id: 0,
        username: '@Maister_SSB',
        displayName: 'SSG Maister',
        img: 'https://pbs.twimg.com/profile_images/1255220486952366082/hfDzG9AB_400x400.jpg'
        }, {
            id: 1,
            username: '@The_Bruce1',
            displayName: '👻 Booce/BLM 👻',
            img: 'https://pbs.twimg.com/profile_images/1313841046758002691/h2Z3z17o_400x400.jpg'
        },{
            id: 2,
            username: '@Crunchyroll',
            displayName: 'Crunchyroll',
            img: 'https://pbs.twimg.com/profile_images/1309236477482557440/C-IXMSRJ_400x400.jpg'
        },{
            id: 3,
            username: '@IntroSpecktive',
            displayName: '🎃 IntroSpooktive 🎃',
            img: 'https://pbs.twimg.com/profile_images/1245397995295776771/GrODfs_Z_400x400.jpg'
        }
    ]
    return(
        <div className="feed-container">
            <div className="feed-left-container">
                <FontAwesomeIcon className="feed-twitter-icon" icon={faTwitter} />
            </div>
            <div className="feed-middle-container">
                <div className="feed-middle-home">
                    Home
                </div>
                <div className="feed-middle-content">
                    {tweets.map(tweet => {
                        return (
                            <FeedTweet key={Math.random()} tweet={tweet} users={users} />
                        )
                    })}
                </div>
            </div>
            <div className="feed-right-container"></div>
        </div>
    )
}

export default Feed;