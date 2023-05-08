import React, { useState } from "react";
import ResultContext from "./ResultContext";

const ResultState = (props) =>{
    
const resultsInitial=[
    {
    "_id": "64525a08dbb2891993671499",
        "user": "6443ddec555711926c9adbe1",
        "name": "title forxczxc result",
        "userresult": "My rekjnkjsasdasdult Sucks",
        "date": "2023-05-03T12:56:40.111Z",
        "__v": 0
    },
    {
        "_id": "64586d3da9a8ea845f031a3a",
        "user": "6443ddec555711926c9adbe1",
        "name": "title forxczxc result",
        "userresult": "New Result 123456789",
        "date": "2023-05-08T03:32:13.926Z",
        "__v": 0
    },
    {
        "_id": "645871bb8d56a957db29f2c5",
        "user": "6443ddec555711926c9adbe1",
        "name": "title forxczxc result",
        "userresult": "New Result 123456789",
        "date": "2023-05-08T03:51:23.145Z",
        "__v": 0
    },
    {
        "_id": "645875883cdc4231d8be3ceb",
        "user": "6443ddec555711926c9adbe1",
        "name": "title forxczxc result",
        "userresult": "New Result 123456789",
        "date": "2023-05-08T04:07:36.930Z",
        "__v": 0
    }
];

const [results, setResults] = useState(resultsInitial);
console.log(results)

    return(
        <ResultContext.Provider value={{results, setResults}}>
            {props.children}
        </ResultContext.Provider>
        
    )
}

export default ResultState;