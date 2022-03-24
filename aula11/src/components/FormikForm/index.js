// import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from 'sweetalert2'
import * as Yup from "yup";


//validações com Yup
const SignupSchema = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Muito curto!')
      .max(70, 'Muito Longo!')
      .required('Required'),
    telefone: Yup.string()
    .matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, {message: " padrão: 999999999"}),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });
  


export default function FormikForm() {

    function alert(values){

        console.log(values)

        return(
            Swal.fire({
                title: 'Confirma seus dados?',
                text: `nome: ${values.nome}, &nbsp  telefone: ${values.telefone}, &nbsp email: ${values.email}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#008000',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim'
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Tudo certo...',
                    'Bem vindo',
                    'success'
                  )
                }
              })
        )
    }

    return (
        <div>
            <h1>Signup</h1>
            <Formik
            initialValues={{
                nome: "",
                email: "",
            }}
            onSubmit={alert}
            validationSchema={SignupSchema}
            >
                {
                    ({ values, errors, touched, isValid}) => (
                        <Form >
                            <div>
                                <label htmlFor="nome">name</label>
                                <Field name="nome" type="text" />
                                <ErrorMessage name="nome" />
                            </div>
                            <div>
                                <label htmlFor="telefone" >telefone</label>
                                <Field name="telefone" type="text" />
                                <ErrorMessage name="telefone" />
                            </div>
                            <div>
                                <label htmlFor="email" >email</label>
                                <Field name="email" type="email" />
                                <ErrorMessage name="email" />
                            </div>
                            <button type="submit" disabled={!isValid}>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}
