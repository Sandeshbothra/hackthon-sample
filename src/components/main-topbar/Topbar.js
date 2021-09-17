import React from "react";

const TopBar = () => {
    return (
        <>
            <div className="ui top fixed menu">
                <div className="item">
                    <h2 className="ui header">
                        <div className="content">
                            Hackathons
                        </div>
                    </h2>
                </div>
            </div>
            <div className="ui main menu placeholder" ></div>
        </>
    )
}

export default TopBar;