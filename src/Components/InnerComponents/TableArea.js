import React, { useContext, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UserContext from '../../context/user/UserContext';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Full Name', width: 150 },
    
    {
        field: 'gender',
        headerName: 'Gender',
        width: 100,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        description: 'The Teachers phone number is here.',
        width: 160,
        sortable:false
    },
    {
        field: 'address',
        headerName: 'Address',
        description: 'The Teachers address is here.',
        width: 160,
    },
    {
        field: 'grade',
        headerName: 'Grade',
        description: 'The grade is here.',
        width: 160,
    },
    ];



export default function TableArea() {

    const context  = useContext(UserContext);
    const {teachersinfo,getTeachers} = context;

    let info = [];

    useEffect(()=>{
        getTeachers()
    },[])
    
    if(localStorage.getItem('token')){
        teachersinfo.forEach((value,index)=>{
            info.push({
                id: ++index, 
                name: value.name, 
                gender: value.gender, 
                phone: value.phone, 
                address: value.address,
                grade: value.grade,
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
    );
    
}