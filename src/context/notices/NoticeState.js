import React from "react";
import NoticeContext from "./NoticeContext";

const NoticeState = (props) =>{
    const state = "nischal"

    return(
        <NoticeContext.Provider value={state}>
            {props.children}
        </NoticeContext.Provider>
    )
}

export default NoticeState;