import React, { useEffect , useState} from 'react'
import HeaderComponent from './InnerComponents/HeaderComponent'
import { useNavigate } from 'react-router-dom'
import FilledEnrollment from './FilledEnrollment';
import ConfirmDeleteEnroll from './ConfirmDeleteEnroll';

export default function EnrollmentReport() {

    
    const navigate = useNavigate();
    const [enroll,setEnroll] = useState(
        [{
        _id:"1",
        accessrequirements: "NO",
        busaddress: "Yes",
        city: "Lalitpur",
        country: "Nepal",
        date: "2023-06-06",
        dob: "2023-06-06",
        emergencyaddress: "98555",
        emergencyname: "asdasd",
        emergencyphone: "9999",
        fathername: "Nabin",
        fatherphone: "9841401174",
        filler: "Nischal Shakya",
        firstName: "nischal",
        gender: "Male",
        grade: "10",
        guardianname: "Nabin",
        guardianphone: "9841401174",
        lastName: "Shakya",
        middleName: "man ",
        mothername: "Arina",
        motherphone: "9849103495",
        nation: "nepalese",
        officename: "Silver",
        officephone: "5534701",
        prevschool: "delight",
        prevschooladdress: "thasikhel",
        prevschoolphone: "55348888",
        relation: "Father",
        streetAddress: "Gwarko",
        wardno: "7"
    }]
    )

    useEffect(() =>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }else{
            fetchEnrolls();
        }
    },[]);

    const fetchEnrolls = async () => {

        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/enroll/getenrolls', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        const data = await response.json();
        setEnroll(data);
    }
    
    return (
        <div id='innerHero'>
            <HeaderComponent
                name='Admission  Report'
                description='View all new Admission  forms here.'
            />

            {enroll.length === 0 ? "No enrollments to display.":""}
            {
                enroll.map((value,index)=>{
                return(
                    
                    <div className="accordion" id="accordionExample" key={value._id}  style={{width:'95%'}}>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id={"heading".concat(index)}>
                        <button className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={"#collapse".concat(index)}
                        aria-expanded="false" 
                        aria-controls={"collapse".concat(index)}>
                        {"Enrollment Form of " + value.firstName + " " + value.lastName}
                        <div 
                        style={
                            {paddingLeft:'1rem',fontSize:'0.7rem',color:'var(--clr--grey)'}}>
                            {new Date(value.date).toDateString()}
                        </div>
                        </button>
                    </h2>
                    <div className='actionitems'>
                        <ConfirmDeleteEnroll
                            enrollId = {value._id} 
                        />
                    </div>
                        <div id={"collapse".concat(index)} className="accordion-collapse collapse accord" 
                        aria-labelledby={"heading".concat(index)}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            
                            <FilledEnrollment 
                                data  = {value}
                                className = {index}
                            />
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                })
            }
            
        </div>
    )
}
