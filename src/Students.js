import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './usercontext';

function Students() {
    let studentsList = useContext(UserContext);

    useEffect(() => {
        let fetchData = async () => {
            let userData = await axios.get("https://62c29ac6ff594c65675fe6f0.mockapi.io/students");
            studentsList.setStudents(userData.data)
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student Tab</h1>
            </div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link to="/portal/StudentList/CreateStudents" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"><i className="fa-solid fa-user"></i> Add Student</Link>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Student List</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    studentsList.students.map((student) => {
                                        return <tr>
                                            <td>{student.name}</td>
                                            <td>{student.class}</td>
                                            <td>{student.section}</td>
                                            <td>{student.age}</td>
                                            <td>{student.gender}</td>
                                            <td>
                                                <Link to={`/portal/StudentList/EditStudent/${student.id}`} className='btn btn-info mr-1'>Edit</Link>
                                                {/* <Link to={`/portal/Users/EditUser/${user.id}`} className='btn btn-info mr-1'>Edit</Link>
                                                <button onClick={() => handleDelete(user.id)} className='btn btn-danger mr-1'>Delete</button> */}
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Students