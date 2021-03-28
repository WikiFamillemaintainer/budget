import React from "react";


export default function Title(props) {
    return {
        h1: <h1>{props.title}</h1>,
        h2: <h2>{props.title}</h2>,
        h3: <h3>{props.title}</h3>
    }[props.level]
}
