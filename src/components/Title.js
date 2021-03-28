import React from "react";
import {Typography} from "@material-ui/core";


export default function Title(props) {
    return {
        h1: <Typography variant="h1" color="primary">{props.title}</Typography>,
        h2: <Typography variant="h4" color="primary" >{props.title}</Typography>,
    }[props.level]
}
