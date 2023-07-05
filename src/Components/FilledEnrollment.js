import React, { useEffect } from 'react';
import './Styles/EnrollmentReport.css';
import logo from '../images/logo.jpg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';

export default function FilledEnrollment(props) {

    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[]);

    const enroll = props.data;
    const pdfGenerate = () => {
        const capture = document.querySelector('.report'.concat(props.className));
        html2canvas(capture,{
            scale:3,
            dpi:200
        }).then((canvas)=>{
            const imgData = canvas.toDataURL('image/jpeg');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData,'JPEG', 0, 0, componentWidth, componentHeight);
            doc.save('EnrollmentReport.pdf')
        })
    }

    return (
        <>
            <button onClick={pdfGenerate} className='export-btn'>
                <i className="fa-solid fa-download"></i>Export PDF
            </button>

            <article className={'report'+props.className}>
                <div className='report'>
                    <section className='topsection'>
                    <div className='top-left'>
                        <div className='logoreport'>
                            <img src={logo} alt='logo' />
                        </div>
                        <span className='logotext'>
                            Learn to Serve
                        </span>
                    </div>

                    <div className='top-mid'>
                        <h1 className='schoolTitle'>Delight School</h1>
                        <h2 className='schoolInfo'>Dholahiti, Lalipur</h2>
                        <h2 className='schoolInfo'>Phone No: 5525053, 2230331</h2>
                    </div>
                    <div className='ppphoto'>
                    </div>
                    </section>

                    <div className='liner'></div>

                    <section className='reportbody'>
                        <div className='datasection'>
                            <h1 className='reporthead'> Applicant Information </h1>

                            <table className='infosection' style={{border: '1px solid black'}}>
                            <tbody>
                                <tr>
                                    <td className='tableLabel'>First Name</td>
                                    <td className='tableData'>{enroll.firstName}</td>
                                    <td className='tableLabel'>Middle Name</td>
                                    <td className='tableData'>{enroll.middleName}</td>
                                    <td className='tableLabel'>Last Name</td>
                                    <td className='tableData'>{enroll.lastName}</td>
                                </tr>

                                <tr>
                                    <td className='tableLabel'>Street Address</td>
                                    <td colSpan={2} className='tableData'>{enroll.streetAddress}</td>
                                    <td className='tableLabel'>Ward No:</td>
                                    <td colSpan={2} className='tableData'>{enroll.wardno}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>City</td>
                                    <td colSpan={2} className='tableData'>{enroll.city}</td>
                                    <td className='tableLabel'>Country</td>
                                    <td colSpan={2} className='tableData'>{enroll.country}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>Date of Birth</td>
                                    <td colSpan={2} className='tableData'>{new Date(enroll.dob).toDateString()}</td>
                                    <td className='tableLabel'>Gender</td>
                                    <td colSpan={2} className='tableData'>{enroll.gender}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>Father's Name</td>
                                    <td colSpan={2} className='tableData'>{enroll.fathername}</td>
                                    <td className='tableLabel'>Phone:</td>
                                    <td colSpan={2} className='tableData'>{enroll.fatherphone}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>Mother's Name</td>
                                    <td colSpan={2} className='tableData'>{enroll.mothername}</td>
                                    <td className='tableLabel'>Phone:</td>
                                    <td colSpan={2} className='tableData'>{enroll.motherphone}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>Office's Name</td>
                                    <td colSpan={2} className='tableData'>{enroll.officename}</td>
                                    <td className='tableLabel'>Phone:</td>
                                    <td colSpan={2} className='tableData'>{enroll.officephone}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>Guardian</td>
                                    <td className='tableData'>{enroll.guardianname}</td>
                                    <td className='tableLabel'>Guardian's Relation</td>
                                    <td className='tableData'>{enroll.relation}</td>
                                    <td className='tableLabel'>Phone:</td>
                                    <td className='tableData'>{enroll.guardianphone}</td>
                                </tr>
                                <tr>
                                    <td className='tableLabel'>Emergency Contact</td>
                                    <td className='tableData'>{enroll.emergencyphone}</td>
                                    <td className='tableLabel'>Person's Name</td>
                                    <td className='tableData'>{enroll.emergencyname}</td>
                                    <td className='tableLabel'>Address:</td>
                                    <td className='tableData'>{enroll.emergencyaddress}</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className='tableLabel'>Previous School Attended, If Any:</td>
                                    <td colSpan={3} className='tableData'>{enroll.prevschool}</td>
                                </tr>

                                <tr>
                                    <td colSpan={2} className='tableLabel'>Previous School Address</td>
                                    <td className='tableData'>{enroll.prevschooladdress}</td>
                                    <td colSpan={2} className='tableLabel'>Previous School Contact</td>
                                    <td className='tableData'>{enroll.prevschoolphone}</td>
                                </tr>

                                <tr>
                                    <td colSpan={3} className='tableLabel'>Any access requirements?</td>
                                    <td colSpan={3} className='tableData'>{enroll.accessrequirements}</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className='tableLabel'>School Transport Location</td>
                                    <td colSpan={3} className='tableData'>{enroll.busaddress}</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='datasection'>
                        <div className='liner'></div>
                        <h1 className='reporthead'> Disclaimer and Signature</h1>
                        <p className='disclaimer'>
                            I certify that my answers are true and complete to the best of my knowledge.
                        </p>
                        <p className='disclaimer'>
                            We hereby agree to the rules and regulation mentioned in the prospectus of the school and fully entrust the school authorities and deciding the pupil's registration.
                        </p>
                        </div>
                    </section>
                    <section className='bottomsection'>
                        <div className='signatures'>
                            <div className='lines'></div>
                            <div>Signature</div>
                        </div>
                        <div className='signatures'>
                            <div className='lines'></div>
                            <div>Parent's Signature</div>
                        </div>
                        <div className='signature'>
                            <div> {new Date(enroll.date).toDateString()}</div>
                            <div className='lines'></div>
                            <div>Date</div>
                        </div>
                    </section>
                </div>
                

            </article>
        </>
    )
}
