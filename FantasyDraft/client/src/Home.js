import React from "react";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

    return (
        <>
            <div className="homeWrapper">
                    <h1 className="homeHeader">Draft Master</h1>
                    <p className="homeSubHeader">The #1 Draft Tool for Fantasy Football</p>
                    <br></br>
                    {/* <p className="homeSubHeader2">Use our Expert's Rankings to Build Custom Draft Boards and Maximize your Draft</p> */}
                    <div className="homeButton">
                        <Link to={'/players'}>
                            <Button color="primary" type="button">Get Started</Button>
                        </Link>
                    </div>
            </div>
        </>
    )
}