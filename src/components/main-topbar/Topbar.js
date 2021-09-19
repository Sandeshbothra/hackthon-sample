import { useContext } from "react";
import './topbar.css';
import { UserContext } from "../../contexts/userContexts";

const TopBar = () => {
    const {user, signOut} = useContext(UserContext);
    return (
        <>
            <div className="ui top fixed menu" style={{backgroundColor:"teal"}}>
                <div className="item">
                    <h2 className="ui header">
                        <div className="content">
                            Hackathons
                        </div>
                    </h2>
                </div>
                {user && 
                    <div className="item right floated">
                        <h5 className="ui header" onClick={() => signOut()}>Signout</h5>
                    </div>
                }
            </div>
            <div className="ui main menu placeholder" ></div>
        </>
    )
}

export default TopBar;