import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateStudents() {
  let navigation = useNavigate();
  let [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      section: '',
      age: '',
      // gender: '',
    },
    validate: (values) => {
      const errors = {};
      let pattern = new RegExp(/^[a-zA-Z\-]+$/)
      if (!values.name) {
        errors.name = 'Please enter the name'
      } else if (values.name.length < 5) {
        errors.name = 'Length must be greater than 5'
      } else if (values.name.length > 20) {
        errors.name = 'Length must be less than 20'
      } else if (!pattern.test(formik.values.name)) {
        errors.name = 'Enter the valid name'
      }
      if (!values.section) {
        errors.section = "Please Enter the section"
      }
      if (!values.age) {
        errors.age = "Please Enter the age";
      } else if (values.age < 5) {
        errors.age = "Please Enter the valid age";
      } else if (values.age > 25) {
        errors.age = "Please Enter the valid age";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.post('https://62c29ac6ff594c65675fe6f0.mockapi.io/students', values);
      navigation('/portal/StudentList')
    }
  })

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control" />
            {
              formik.errors.name ? <span style={{ color: 'red' }}> {formik.errors.name}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Section</label>
            <input
              type="text"
              name="section"
              onChange={formik.handleChange}
              value={formik.values.section}
              className="form-control" />
            {
              formik.errors.section ? <span style={{ color: 'red' }}> {formik.errors.section}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control" />
            {
              formik.errors.age ? <span style={{ color: 'red' }}> {formik.errors.age}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Gender</label><br></br>
            <input type="radio" id="male" name="gender" value="Male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" />
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="Female" />
            <label for="female">Female</label>
          </div>
        </div>
      </form>
    </div>



    // <div className="container">
    //   <form onSubmit={formik.handleSubmit}>
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <label>Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           onChange={formik.handleChange}
    //           value={formik.values.name}
    //           className={`form-control ${formik.errors.name ? 'error-border' : ''} `} />
    //         {
    //           formik.errors.name ? <span style={{ color: 'red' }}> {formik.errors.name}</span> : null
    //         }
    //       </div>
    //       <div className="col-lg-6">
    //         <label>Class</label>
    //         <input type="text"
    //           name="class"
    //           onChange={formik.handleChange}
    //           value={formik.values.class}
    //           className={`form-control ${formik.errors.class ? 'errors-border' : ''}`} />
    //         {
    //           formik.errors.class ? <span style={{ color: 'red' }}> {formik.errors.class}</span> : null
    //         }
    //       </div>
    //       <div className='col-lg-6'>
    //         <label>Section</label>
    //         <input type="text" name='section' 
    //         onChange={formik.handleChange} 
    //         value={formik.values.section} 
    //         className={`form-control ${formik.errors.section ? 'errors-border' : ''}`}>
    //           {
    //             formik.errors.section ? <span style={{ color: 'red' }} >{formik.errors.section}</span> : null
    //           }
    //         </input>
    //       </div>
    //       <div className='col-lg-6'>
    //         <label>Age</label>
    //         <input type='number' 
    //         name='age' onChange={formik.handleChange} 
    //         value={formik.values.age} 
    //         className={`form-control ${formik.errors.age ? 'errors-border' : ''}`}>
    //           {
    //             formik.errors.age ? <span style={{ color: 'red' }}>{formik.errors.age}</span> : null
    //           }
    //         </input>
    //       </div>
    //       <div className='col-lg-6'>
    //         <label>Gender</label>
    //         <input type='text' name='gender'
    //          onChange={formik.handleChange} 
    //          value={formik.values.gender} 
    //          className={`form-control ${formik.errors.gender ? 'errors-border' : ''}`}>
    //           {
    //             formik.errors.gender ? <span style={{ color: 'red' }}>{formik.errors.gender}</span> : null
    //           }
    //         </input>
    //       </div>
    //     </div>
    //     <div className="col-lg-6">
    //       <input type={'submit'} value='Submit' className="btn btn-primary mt-5"  />
    //     </div>
    //   </form>
    // </div>
  )
}

export default CreateStudents