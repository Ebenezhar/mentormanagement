import React from 'react'

function Students() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Students List</h1>
            <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i className="fas fa-download fa-sm text-white-50" /> Add Students
            </a>
        </div>
  )
}

export default Students