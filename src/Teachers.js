import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './usercontext';

function Teachers() {
    const userContextData = useContext(UserContext);
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let userData = await axios.get("https://62c29ac6ff594c65675fe6f0.mockapi.io/teachers");
        userContextData.setTeachers(userData.data);
    }
    const handleDelete = async (id) => {
        let ask = window.confirm('Are you sure you want to delete this Id ?')
        if (ask) {
            await axios.delete(`https://62c29ac6ff594c65675fe6f0.mockapi.io/teachers/${id}`)
            fetchData();
        }
    }
    return (

        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Teachers Tab</h1>
            </div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link to="/portal/TeachersList/CreateTeachers" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"><i className="fa-solid fa-user"></i> Add Teacher</Link>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Teachers List</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Department</th>
                                    <th>Age</th>
                                    <th>Salary</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Department</th>
                                    <th>Age</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    userContextData.teachers.map((teacher) => {
                                        return <tr>
                                            <td>{teacher.name}</td>
                                            <td>{teacher.subject}</td>
                                            <td>{teacher.department}</td>
                                            <td>{teacher.age}</td>
                                            <td>{teacher.salary}</td>
                                            <td>
                                                <Link to={`/portal/TeachersList/EditTeacher/${teacher.id}`} className='btn btn-info mr-1'>Edit</Link>
                                                <button onClick={() => handleDelete(teacher.id)} className='btn btn-danger mr-1'>Delete</button>
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

export default Teachers