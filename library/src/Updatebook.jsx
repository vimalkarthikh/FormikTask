import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Updatebook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    isbn: '',
    publishDate: '',
  });

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://651278f1b8c6ce52b395a8ec.mockapi.io/books/${id}`)
      .then((response) => {
        const { title, author, isbn, publishDate } = response.data;
        setInitialValues({ title, author, isbn, publishDate });
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publishDate: Yup.string().required('Publish Date is required'),
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
              .put(`https://651278f1b8c6ce52b395a8ec.mockapi.io/books/${id}`, values)
              .then(() => {
                navigate('/books'); // Redirect to the book list after successful update
              })
              .catch((error) => {
                console.error('Error updating book:', error);
              });
          }}
        >
          {(formikProps) => (
            <Form className='frmb'>
                
      <h1>Update Book</h1>
              <div className='uform'>
                <label htmlFor='title'>TITLE</label>
                <Field className='ff' type='text' id='title' name='title' />
                <ErrorMessage name='title' component='div' />
              </div >

              <div className='uform'>
                <label htmlFor='author'>Author</label>
                <Field type='text' className='ff' id='author' name='author' />
                <ErrorMessage name='author' component='div' />
              </div>

              <div className='uform'>
                <label htmlFor='isbn'>ISBN</label>
                <Field type='text' id='isbn' className='ff' name='isbn' />
                <ErrorMessage name='isbn' component='div' />
              </div>

              <div className='ubtn'>
                <label htmlFor='publishDate'>Publish Date</label>
                <Field type='date' id='publishDate' className='ff' name='publishDate' />
                <ErrorMessage name='publishDate' component='div' />
              </div>
<br/>
              <div>
                <button
                  className='btn btn-success'
                  type='submit'
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </button>

                <Link className='btn btn-danger' to='/books'>
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
  );
}

export default Updatebook;
