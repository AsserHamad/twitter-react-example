import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMoneyCheckAlt, faReply, faReplyAll, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FeedTweet.css';

function FeedTweet(props){
    const tweet = props.tweet,
          user = props.users.filter(user => user.id === tweet.userId)[0];
    return (
        <div className="feed-tweet-container">
            <div className="feed-tweet-image">
                <img src={user.img} />
            </div>
            <div className="feed-tweet-info">
                <div className="feed-tweet-user-info">
                    <div className="feed-tweet-user-displayName">{user.displayName}</div>
                    <div className="feed-tweet-user-username-date">{user.username} . {tweet.date}</div>
                </div>
                <div className="feed-tweet-content">
                    {tweet.content}
                    {tweet.img && <img src={tweet.img} />}
                </div>
                <div className="feed-tweet-interaction">
                    <div>
                        <span><FontAwesomeIcon icon={faComment} /></span> {tweet.replies.length}</div>
                    <div>
                        <span><FontAwesomeIcon icon={faRetweet} /></span> {tweet.retweets.retweets + tweet.retweets.quoteRetweets}</div>
                    <div>
                        <span><FontAwesomeIcon icon={faHeart} /></span> {tweet.likes}</div>
                    <div>
                        <span><FontAwesomeIcon icon={faReply} /></span></div>
                </div>
            </div>
        </div>

    )
}

export default FeedTweet;