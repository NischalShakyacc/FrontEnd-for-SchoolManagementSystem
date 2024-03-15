import React, { useState,useEffect } from "react";
import ResultContext from "./ResultContext";
import AlertMessage from "../../Components/AlertMessage";
import emailjs from '@emailjs/browser'

const ResultState = (props) =>{
    //mail information
    const serviceId = "service_8j7ajgu";
    const templateId = "template_lks4yih";
    const publicKey = "Lr2uqPaOU1GVb5ccJ";

    const host = "http://localhost:5000"

const resultsInitial=[
    {
    "_id": "6481b68ab89d9cbc921d30f3",
    "user": "647cb6ce2cc7d31b3b0c9fbc",
    "resulttitle": "Mid Term Result",
    "remarks": " mid term result Keep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep UpKeep Up",
    "subject1": "English",
    "subject2": "Science",
    "subject3": "Scence2",
    "subject4": "Maths",
    "subject5": "EPH",
    "subject6": "Social",
    "subject7": "Nepali",
    "subject8": "Nepali 2",
    "mark1": "90",
    "mark2": "40",
    "mark3": "60",
    "mark4": "70",
    "mark5": "90",
    "mark6": "80",
    "mark7": "80",
    "mark8": "80",
    "total": "750",
    "percentage": "99",
    "date": "2023-06-08T11:07:54.420Z",
    "__v": 0
    },
    {
    "_id": "6481b6b3b89d9cbc921d30f8",
    "user": "647cb6ce2cc7d31b3b0c9fbc",
    "resulttitle": "Final Term Result",
    "remarks": "Keep Up",
    "subject1": "English",
    "subject2": "Science",
    "subject3": "Scence2",
    "subject4": "Maths",
    "subject5": "EPH",
    "subject6": "Social",
    "subject7": "Nepali",
    "subject8": "Nepali 2",
    "mark1": "90",
    "mark2": "40",
    "mark3": "60",
    "mark4": "70",
    "mark5": "90",
    "mark6": "80",
    "mark7": "80",
    "mark8": "80",
    "total": "750",
    "percentage": "99",
    "date": "2023-06-08T11:08:35.731Z",
    "__v": 0
    }
];

const [results, setResults] = useState(resultsInitial);


    // * Get all the results
    const getResults = async (id) =>{
        //API call
        const response = await fetch(`${host}/api/result/fetchallresult/${id}`,{
            method: 'GET',
            headers :{
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setResults(json)
    }

    // Alert handler for Result Mailing
    const [resultmail, setResultmail] = useState(false);
    useEffect(()=>{
        if(resultmail){
            setTimeout(()=>{
                setResultmail(false)
            },[4000])
        }
    },[resultmail])
    // * Add results
    const addResult = async (
        user,
        resulttitle, 
        remarks, 
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
        subject6,
        subject7,
        subject8,
        mark1,
        mark2,
        mark3,
        mark4,
        mark5,
        mark6,
        mark7,
        mark8,
        total, 
        percentage) =>{
        //setResults(results.push(result));
        
        const response = await fetch(`${host}/api/result/addresult`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({
                user,
                resulttitle, 
                remarks, 
                subject1,
                subject2,
                subject3,
                subject4,
                subject5,
                subject6,
                subject7,
                subject8,
                mark1,
                mark2,
                mark3,
                mark4,
                mark5,
                mark6,
                mark7,
                mark8,
                total, 
                percentage})
            });
        
        const json = await response.json();
        
        if(json.success){
            //send mail
            const config = {
                from_name: 'Delight School',
                from_email: '019bim027@sxc.edu.np',
                to_name: 'Students',
                message: `Your result of ${resulttitle} has been published please check the school website to view the result.
                \n `
                /*
                SecureToken : "7bfe5e2e-86df-4190-9d57-d0ac78a325cb",
                To : '019bim027@sxc.edu.np',
                From : "nischalshakyacc@gmail.com",
                Subject : `Delight School: ${notice.title}`,
                Body : notice.usernotice + '\n For more details check website.Click the link [http://localhost:3000/notice]'*/
            }
            emailjs.send(serviceId, templateId, config, publicKey)
            .then((result) => {
                console.log(result.text);
                alert("Result has been mailed.")
            }, (error) => {
                console.log(error.text);
            });
            
        }

        //adding note
        
        const addedResult = {
            "_id": json._id,
            "user": user,
            "resulttitle": resulttitle,
            "remarks": remarks,
            "subject1": subject1,
            "subject2": subject2,
            "subject3": subject3,
            "subject4": subject4,
            "subject5": subject5,
            "subject6": subject6,
            "subject7": subject7,
            "subject8": subject8,
            "mark1": mark1,
            "mark2": mark2,
            "mark3": mark3,
            "mark4": mark4,
            "mark5": mark5,
            "mark6": mark6,
            "mark7": mark7,
            "mark8": mark8,
            "total": total,
            "percentage": percentage,
            "date": json.date,
            "__v": 0
        }
        setResults(results.concat(addedResult))
    }

    // * Add Delete
    // Alerts
    
    const [showMessage,setShowMessage] = useState(false);
    const [showErrorMessage,setErrorShowMessage] = useState(false);

    //Reset Update Alerts
    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 2500);
        }
    }, [showMessage]);
    useEffect(() => {
        if (showErrorMessage) {
            setTimeout(() => {
                setErrorShowMessage(false);
            }, 2500);
        }
    }, [setErrorShowMessage]);

    const deleteResult = async (id) =>{
        //API call
        const response = await fetch(`${host}/api/result/deleteresult/${id}`,{
            method: 'DELETE',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        if(json.success){
            let newResults =  results.filter((results) => {return results._id !== id})
            setResults(newResults);
            setShowMessage(true);
        }else{
            setErrorShowMessage(true);
        }
        
    }


    return(
        <>
        <ResultContext.Provider value={
            {
                results, 
                setResults,
                addResult,
                deleteResult,
                getResults
            }
            }>
            {props.children}
        </ResultContext.Provider>
        <div>
            {showMessage && <AlertMessage severe="success" timeout="2500" message="Result Deleted successfully!" />}

            {showErrorMessage && <AlertMessage severe="error" timeout="2500" message="Sorry. Result could not be Deleted! Please Try Again." />}

            {resultmail && <AlertMessage severe="info" timeout="2500" message="Result published emssage has been sent successfully via email." />}
        </div>
        </>
    )
}

export default ResultState;