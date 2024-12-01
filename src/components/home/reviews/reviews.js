import React from 'react';
import './reviews.css';

const commentsData = [
    {
        name: 'Nazarii Skibytskyi',
        comment: "This retro-themed website is a nostalgic masterpiece! The vibrant neon design" +
            " and pixel art really take me back to the golden age of gaming. Love it!",
    },
    {
        name: 'Solovei Vilen',
        comment: "The combination of the glowing grid background and " +
            "the 8-bit cartridge designs is pure genius. It feels like I'm browsing a virtual arcade!",
    },
    {
        name: 'Hrynkiv Maksym',
        comment: "Such a cool concept! The aesthetic is spot-on, and the attention to " +
            "detail on the retro cartridges is incredible. Can't wait to see more features added!",
    },
];

const Comments = () => {
    return (
        <div className="comments-container">
            <h2>Last reviews</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {commentsData.map((currentComment, index) => (
                    <div className="comments-box" key={index}>
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-info">
                                    <div className="name-user">
                                        <strong>{currentComment.name}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="client-comments">
                                <p>{`“${currentComment.comment}”`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;