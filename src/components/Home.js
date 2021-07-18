import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-1">
                <div className="home-1" style={{backgroundImage: `url(./images/skylinegradient.jpg)`}}>
                    {/* <div className="circle " style={{backgroundImage: `url(./images/circle.png)`}}> */}
                <div id='home'>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <h1>Jack Madden</h1>
                    <br />
                    {/* <img src="/images/avatar.png" alt="Jack" id="avatar" /> */}
                    <h2>Full-Stack Software Engineer</h2>
                    <br /><br /><br />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home