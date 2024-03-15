import React,{useEffect, useState} from 'react'
import * as XLSX from 'xlsx'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../../Components/AlertMessage';
import '../../Components/Styles/GroupStep.css'

export default function GroupAccount() {

    //Alert State
    const [created, setCreated] = useState(false);
    const [notcreate, setNotcreate] = useState(false);

    //function to conver object keys to lowercase string
    const lowerize = (obj) =>
    Object.keys(obj).reduce((acc, k) => {
        acc[k.toLowerCase()] = obj[k];
        return acc;
    }, {});

    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[])

    const createAccount = async (row) =>{
        const convertedObj = lowerize(row);
        
            try {
                const response = await fetch("http://localhost:5000/api/auth/createuser", {   
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json',
                    'auth-token' : localStorage.getItem('token')
                    },
                    body: JSON.stringify(convertedObj)
                });

                if(!response){
                    console.log('Server Not responding');
                }

                const json = await response.json();
                if(json.success){
                    setCreated(true)
                }else{
                    setNotcreate(true)
                }
            } catch (error) {
                console.log(error.message)
            }
        
    }
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

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
                <button className='action-btn' onClick={()=>{return createAccount(row)}}><i className="fa-solid fa-user-plus"></i>Create</button>,
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

    //Setting to false again
    useEffect(() => {
    if (created) {
        setTimeout(() => {
            setCreated(false);
        }, 2500);
    }
    if (notcreate) {
        setTimeout(() => {
            setNotcreate(false);
        }, 2500);
    }
    }, [created, notcreate]);

    return (
        <div id='innerHero'>
        <h2>Create Multiple Accounts</h2>
        <div className='steps'>
            <div className='step step1'>
                <img src={require('../../images/step1.png')} alt='stepImage' />
            </div>
            <div className='step step2'>
                <img src={require('../../images/step2.png')} alt='stepImage' />
            </div>
            <div className='step step3'>
                <img src={require('../../images/step3.png')} alt='stepImage' />
            </div>
            <div className='step step4'>
                <img src={require('../../images/step.png')} alt='stepImage' />
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
        {created && <AlertMessage severe="success" timeout="2500" message="Account created successfully!"/>}
        {notcreate && <AlertMessage severe="warning" timeout="2500" message="Check Credentials !"/>}
        </div>
    )
}
