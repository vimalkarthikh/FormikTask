import React, { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publishDate: Yup.string().required('Publish is required'),
});



function Addbook()  {
  const initialValues = {
  title: '',
  author: '',
  isbn:'',publishDate:''
};



return (
 <div className='ubk'>
   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      // Handle form submission here
      axios.post('https://651278f1b8c6ce52b395a8ec.mockapi.io/books',values);
      actions.resetForm();
      actions.Navigate('/books');

      console.log(values);
      actions.setSubmitting(false); // Don't forget to setSubmitting(false) when done
    }}
  >
    {(formikProps) => (
      <Form className='frmb'>
        <h1>Add Book

        </h1>
        <div>
          <label htmlFor="title">Title</label>
          <Field className='ff' type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <Field className='ff' type="text" id="author" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>

        <div>
          <label htmlFor="isbn">ISBN</label>
          <Field type="text" className='ff' id="isbn" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>

        <div>
          <label htmlFor="publishDate">Publish Date</label>
          <Field type="date" id="publishDate" className='ff' name="publishDate" />
          <ErrorMessage name="publishDate" component="div" />
        </div>

        <div>
          <br/>
        <button className='btn btn-success' type="submit" disabled={formikProps.isSubmitting}>
          Submit
        </button>

        <Link className='btn btn-danger' to='/books'>Back</Link>
        </div>

      </Form>
    )}
  </Formik>
 </div>
);
    }
export default Addbook