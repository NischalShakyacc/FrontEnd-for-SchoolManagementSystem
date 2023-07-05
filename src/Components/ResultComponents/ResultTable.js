import React, { useContext, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import StudentContext from '../../context/studentinfo/StudentContext';
//import AddresultOpen from './AddresultOpen';
import '../Styles/Button.css'


export default function ResultTable() {

    const {classID} = useParams();
    
    let info = [];

    const context = useContext(StudentContext);
    const {studentinfo,getStudents} = context;
    
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }else{
            
        getStudents(classID);  
        }
    },[]);

    const columns = [
        
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'username', headerName: 'Username', width: 100 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        {
            field: "addresult",
            headerName: "Add Result",
            sortable: false,
            renderCell: ({ row }) =>
                <NavLink to={"/addresult/"+ row.idreal+"/" +row.name}><button className='action-button-add'>+ Add result </button></NavLink>
                ,
            width: 160
        },
        {
            field: "viewresult",
            headerName: "View Results",
            sortable: false,
            renderCell: ({ row }) =>
                <NavLink to={"/viewresult/"+ row.idreal+"/" +row.name}>  
                    <button className='action-button-view'><i className="fa-regular fa-eye"></i>
                    View Result
                    </button>
                </NavLink>
                ,
            width: 160
        },
    ];
    
    if(localStorage.getItem('token')){
        studentinfo.forEach((value,index)=>{
            info.push({
                id: ++index, 
                username: value.username,
                name: value.name,       
                addresult: '' ,
                viewresult: '' ,
                idreal : value.username, //thischange was value._id
            })
        })
    }

    return (
        <>
        <div style={{ height: 475, width: '95%' }}>
        <DataGrid
            rows={info}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 10 },
            },
            }}
            pageSizeOptions={[5, 10, 50]}
        />
        </div>
    </>
    )
}
