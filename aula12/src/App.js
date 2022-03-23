import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import InputMask from "react-input-mask";
import Swal from 'sweetalert2'
 
const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'Muito curto!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  telefone: Yup.string()
    .matches(/\([0-9]{2}\) (?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/, {message: "telefone inválido!"})
    .required("Requerid"),
  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {message: "CPF inválido"})
    .required("Required"),
  peso: Yup.string()
    .matches(/^\d+(?:\.\d+)?$/, { message: "valor inválido"})
    .required("Required"),
  altura: Yup.string()
    .matches(/^\d+(?:\.\d+)?$/, { message: "valor inválido"})
    .required("Required"),

});

function scaleIMC(imc){

  if (imc > 18.5 && imc <= 24.9) {
    return "NORMAL";
  } else if (imc > 24.9 && imc <= 29.9) {
    return "SOBREPESO";
  } else {
    return "OBESIDADE";
  }
}

function App() {
  return (
    <div className="App">
      <Formik
      initialValues={{
        nome:"",
        email:"",
        nascimento:"",
        telefone:"",
        cpf:"",
        peso:"",
        altura:"",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values)=> 
        Swal.fire({
          icon: 'success',
          title: 'Cadastro Realizado.',
          text: 'Aproveite todas novidades do nosso programa.',
        })
      }
      >
       {({values, errors, resetForm, handleChange}) =>
        <Form>

          <div className="container-header">
            <h1>Cadastro de Pacientes</h1>

            <div className="container-button">
              <button type="submit">Submit</button>
              <button onClick={resetForm}>Limpar Campos</button>
            </div>
          </div>

          <div className="container-input">
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" />
            <ErrorMessage component="span" name="nome" />
          </div>

          <div className="container-input">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage component="span" name="email" />
          </div>

          <div className="container-input">
            <label htmlFor="nascimento">Data de nascimento</label>
            <Field id="nascimento" name="nascimento" type="date" />
            <ErrorMessage component="span" name="nascimento" />
          </div>
          <div className="container-input">
            <label htmlFor="telefone">Telefone</label>
            <InputMask
            autoComplete="off"
            name="telefone" 
            mask="(99) 99999-9999" 
            onChange={handleChange} 
            value={values.telefone} />
            <ErrorMessage component="span" name="telefone" />
          </div>
          <div className="container-input">
            <label htmlFor="cpf">CPF</label>
            <InputMask
            autoComplete="off"
            name="cpf" 
            mask="999.999.999-99" 
            onChange={handleChange} 
            value={values.cpf} />
            <ErrorMessage component="span" name="cpf" />
          </div>
          
          <div className="container-input">
            <label htmlFor="peso">Peso</label>
            <Field id="peso" name="peso" type="text" />
            <ErrorMessage component="span" name="peso" />
          </div>
          
          <div className="container-input">
            <label htmlFor="altura">Altura</label>
            <Field id="altura" name="altura" type="text" />
            <ErrorMessage component="span" name="altura" />
          </div>

          { values.peso && values.altura ? (

            <>
              <h1>IMC = {(values.peso / (values.altura**2)).toFixed(2)}</h1> 

              <h3>{scaleIMC(values.peso / (values.altura**2))}</h3>
            </>
            
          ) :
          (<h1>---</h1>)}
        </Form>
       }
      </Formik>
    </div>
  );
}

export default App;
