import React from "react";
import NoticeContext from "./NoticeContext";

const NoticeState = (props) =>{
    

    return(
        <NoticeContext.Provider value={{}}>
            {props.children}
        </NoticeContext.Provider>
    )
}

export default NoticeState;