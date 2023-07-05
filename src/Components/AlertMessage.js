import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./Styles/AlertMessage.css"

export default function AlertMessage(props) {
    const [showAlert, setShowAlert] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
        setShowAlert(false);
        }, props.timeout);
        
        return () => clearTimeout(timer);
    }, [props.timeout,props]);

    if (!showAlert) {
        return null;
    }
    return (
    <div className='alert-container'>
        <Stack sx={{ width: '95%' }} spacing={2}>
            <Alert severity={props.severe}>{props.message}</Alert>
        </Stack>
    </div>
    )
}
