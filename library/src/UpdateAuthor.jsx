import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function UpdateAuthor() {
    const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    authorname: '',
    bio: '',
    dob: '',
  });

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://651278f1b8c6ce52b395a8ec.mockapi.io/author/${id}`)
      .then((response) => {
        const { authorname, bio, dob } = response.data;
        setInitialValues({ authorname, bio, dob });
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const validationSchema = Yup.object().shape({
    authorname: Yup.string().required('Authorname is required'),
    bio: Yup.string().required('Biography is required'),
    dob: Yup.string().required('Birth Date is required'),
  });


  return (
    <div className='ubk'>
    
    {isDataLoaded ? (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // Handle form submission here
          axios
            .put(`https://651278f1b8c6ce52b395a8ec.mockapi.io/author/${id}`, values)
            .then(() => {
              navigate('/author'); // Redirect to the book list after successful update
            })
            .catch((error) => {
              console.error('Error updating book:', error);
            });
        }}
      >
        {(formikProps) => (
          <Form className='frmb'>
            <h1 className='ua'>Update Author</h1>
            <div className='uform'>
              <label htmlFor='authorname'>Name</label>
              <Field className='ff' type='text' id='authorname' name='authorname' />
              <ErrorMessage name='authorname' component='div' />
            </div>

            <div className='uform'>
              <label htmlFor='bio'>Biography</label>
              <Field className='ff' type='text' id='bio' name='bio' />
              <ErrorMessage name='bio' component='div' />
            </div>

            <div className='uform'>
              <label htmlFor='dob'>Birth Date</label>
              <Field className='ff' type='date' id='dob' name='dob' />
              <ErrorMessage name='dob' component='div' />
            </div>
<br></br>
            <div className='ubtn'>
              <button
                className='btn btn-success'
                type='submit'
                disabled={formikProps.isSubmitting}
              >
                Submit
              </button>

              <Link className='btn btn-danger' to='/author'>
                Back
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  )
}

export default UpdateAuthor