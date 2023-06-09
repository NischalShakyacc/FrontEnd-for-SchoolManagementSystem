import React, { useContext, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import StudentContext from '../../context/studentinfo/StudentContext';
import { useParams } from 'react-router-dom';
import StudentModalBox from './StudentModalBox';

export default function StudentTable() {

    const {classID} = useParams();

    const context  = useContext(StudentContext);
    const {studentinfo,getStudents} = context;

    let info = [];

    useEffect(()=>{
        getStudents(classID);
    },[])

    //columns
    const columns = [
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        renderCell: ({ row }) =>
            <StudentModalBox
            heading = "Delete Student Account?"
            question = {"Are you sure you want to delete " + row.name +  "'s account?"}
            action = "Delete"
            todo = 'delProfile'
            userid = {row.idreal}
            />,
            width: 70
    },
    { field: 'id', headerName: 'ID', width: 50 },

    { field: 'name', headerName: 'Full Name', width: 150,},
    {
        field: 'gender',
        headerName: 'Gender',
        width: 100,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        description: 'The students phone number is here.',
        width: 160,
        sortable:false
    },
    {
        field: 'address',
        headerName: 'Address',
        description: 'The students address is here.',
        width: 160,
    },
    {
        field: 'fathername',
        headerName: "Father's Name",
        description: " Father's name is here.",
        width: 160,
    },
    {
        field: 'fatherphone',
        headerName: "Father's Number",
        description: " Father's Phone number is here.",
        width: 160,
    },
    {
        field: 'mothername',
        headerName: "Mother's Name",
        description: " Mother's name is here.",
        width: 160,
    },
    {
        field: 'motherphone',
        headerName: "Mother's Number",
        description: " Mother's Phone number is here.",
        width: 160,
    }
    ];
    
    //rows
    if(localStorage.getItem('token')){
        studentinfo.forEach((value,index)=>{
            info.push({
                delete: 'Del' ,
                id: ++index, 
                name: value.name, 
                gender: value.gender, 
                phone: value.phone, 
                address: value.address,
                grade: value.grade,

                fathername : value.fathername,
                fatherphone : value.fatherphone,
                mothername: value.mothername,
                motherphone : value.motherphone,
                idreal : value._id,
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