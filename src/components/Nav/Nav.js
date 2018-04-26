import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li>
                <a href="/Clicky-Game/">
                    {props.title}
                </a>
            </li>
            <li id="rw">
                {props.guessStatus}
            </li>
            <li>
                Current Score: {props.score}
            </li>
            <li>
                Best Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Nav; 