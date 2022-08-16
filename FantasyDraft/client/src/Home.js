import React from "react";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

    return (
        <>
            <div className="homeWrapper">
                    <h1 className="homeHeader">Draft Master&trade;</h1>
                    <p className="homeSubHeader">The #1 Draft Tool for Fantasy Football</p>
                    <div className="homeButton">
                        <Link to={'/players'}>
                            <Button color="primary" type="button">Get Started</Button>
                        </Link>
                    </div>
            </div>
        </>
    )
}