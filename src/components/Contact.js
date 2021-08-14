import React from 'react'
//add image for each contact  

const Contact = () => {
    return(
        <div id='contact'>
            <h4>Contact</h4>

            <div className="email">
                <a href="mailto:jck13mad@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="./images/email.png" alt="email jck13mad@gmail.com" />
                </a>
            </div>

            <div className="github">
                <a href="https://github.com/jck13mad?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src="./images/github.png" alt="github" />
                </a>
            </div>

            <div className="linkedin">
                <a href="https://www.linkedin.com/in/john-madden-063078188/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/linkedin.png" alt="linkedin" />
                </a>
            </div>
        </div>
    )
}

export default Contact