import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'
import { DataGrid } from '@mui/x-data-grid';
import AlertMessage from '../../Components/AlertMessage';

export default function GroupResult() {

    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[])

    //Alert State
    const [created, setCreated] = useState(false);
    const [notcreate, setNotcreate] = useState(false);

    //function to conver object keys to lowercase string
    const lowerize = (obj) =>
    Object.keys(obj).reduce((acc, k) => {
        acc[k.toLowerCase()] = obj[k];
        return acc;
    }, {});

    const createResult = async (row) =>{
        const convertedObj = lowerize(row);
        console.log(convertedObj);
        
        try{
        const response = await fetch(`http://localhost:5000/api/result/addresult`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify(convertedObj)});
        
        const json = await response.json();
        
        if(json.success){
            setCreated(true)
            //send mail
            const config = {
                SecureToken : "7bfe5e2e-86df-4190-9d57-d0ac78a325cb",
                To : '019bim027@sxc.edu.np',
                From : "nischalshakyacc@gmail.com",
                Subject : `Delight School: Your result has been published.`,
                Body : `Your result has been published please check the school website to view the result.`
            }
            if(window.Email){
                window.Email.send(config).then(()=> alert("Email Sent"))
            }
        }else{
            setNotcreate(true)
        }
        }
        catch(error){
            console.log(error);
        }
    }

    const readExcel = (file)=>{
        
        const promise = new Promise((resolve, reject)=>{
            const fileReader = new FileReader(file);
            fileReader.readAsArrayBuffer(file)

            fileReader.onload = (e)=>{
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray,{type:'buffer'});

                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror = ((error)=>{
                reject(error);
            })
        })

        promise.then((data)=>{
            
            // For columns
            const columnNames = Object.keys(data[0])
            let columns = [{
                field: "action",
                headerName: "Action",
                sortable: false,
                renderCell: ({ row }) =>
                <button className='action-btn' onClick={()=>{return createResult(row)}}><i className="fa-solid fa-user-plus"></i>Publish</button>,
                width: 150
            }];
            
            columnNames.forEach((value) => {
                columns.push({
                    field: value, 
                    headerName: value, 
                    width: 100,
                    sortable: false 
                })
            });
            setColumns(columns);

            let rows = [];

            data.forEach((value,index) => {
                rows.push({
                    create : 'Create',
                    id: ++index,
                    ...value
                });
            });
            setRows(rows);
            
        })
    }
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    //Setting to false again
    useEffect(() => {
    if (created) {
        setTimeout(() => {
            setCreated(false);
        }, 1000);
    }
    if (notcreate) {
        setTimeout(() => {
            setNotcreate(false);
        }, 1000);
    }
    }, [created, notcreate]);

    return (
        <div id='innerHero'>
        <h2>Create Multiple Accounts</h2>
        <div className='rsteps'>
            <div className='step rstep1'>
                <img src={require('../../images/rstep1.png')} alt='stepImage' />
            </div>
            <div className='step rstep2'>
                <img src={require('../../images/rstep2.png')} alt='stepImage' />
            </div>
            <div className='step rstep3'>
                <img src={require('../../images/rstep3.png')} alt='stepImage' />
            </div>
            <div className='step rstep4'>
                <img src={require('../../images/rstep4.png')} alt='stepImage' />
            </div>
        </div>

        <div className='formPart'>
            <label className='excelLabel'>Upload An Excel File</label>
                <input 
                className='custom-file-input'
                type="file" 
                onChange={(e)=>{
                    const file = e.target.files[0];
                    readExcel(file);
                }}
                accept='.xlsx, .xls'
                />
        </div>
        <div className='dataPart'>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[5, 10, 50]}
            />
        </div>
        {created && <AlertMessage severe="success" timeout="2000" message="Result Published successfully!"/>}
        {notcreate && <AlertMessage severe="warning" timeout="2000" message="Check Data !"/>}
        </div>
        
    )
}
