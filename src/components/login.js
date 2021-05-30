import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import register from '../register'

const validateFields = values=>{
  const errors= {}

  if (!values.email){
    errors.email = 'Email requerido'
  }
  if (!values.password){
    errors.password = 'Contraseña requerida'
  } else if(values.password.length < 4 || values.password.length > 12){
    errors.password = 'La contraseña debe tener entre 4 y 12 caracteres'
  }
  return errors
}
const initialValues = {
  email: "",
  password: "",
}
const Login = ({handleSubmit}) => {
  const [registered, setRegistered] = useState(false)

  if (registered){
    return alert(`<h2>Se ha registrado correctamente!</h2>`)
  }

  const _handleSubmit = (e) =>{
    e.preventDefault()
    handleSubmit({...e})
  }

  return (
      <div className="container">
          <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={(values, {setFieldError} )=> {
              return register(values)
              .then(()=>{
                setRegistered(true)
              })
              .catch(()=>{
                setFieldError('email', 'El email no es válido')
              })
            }}
            >
            {({ values, errors, isSubmitting }) => (
              <Form className="form" onSubmit={_handleSubmit}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    className='form-control'
                    name="email"
                    placeholder="Ingrese su mail"
                  />
                  <ErrorMessage className="alert alert-danger" name="email" component="div"/>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    className="form-control form-control-md"
                    name="password"
                    placeholder="Ingrese su contraseña"
                  />
                  <ErrorMessage className="alert alert-danger" name="password" component="div"/>
                  <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                    Iniciar sesión
                  </button>
                    
              </Form>
            )}
          </Formik>
      </div>
  );
};

export default Login;
