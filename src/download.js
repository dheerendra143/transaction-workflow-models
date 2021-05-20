import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Download = (props) => {
    const entityList = useSelector(state => state.entity);
    const downloadEntityList = (event) => {
        console.log("event: ", event.target);
        let el = event.target;
        let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({"transactionWorkflow":[...entityList]}));
        el.setAttribute("href", "data:" + data);
        el.setAttribute("download", "data.json");
    }
    return (
        <>
            <a href="#" onClick={(e) => downloadEntityList(e)}>{props.label}</a>
        </>
    )
}

export default Download;