import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Link from "next/link";

import ClipLoader from "react-spinners/ClipLoader";

import { ContainerAuth, ContentAuth } from "../styles/pages/auth";
import { Form } from "../styles/pages/pagesDash";
import { useState } from "react";

interface IFormInputs {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("E-mail é obrigatório")
      .email("Digite uma e-mail válido"),
  })
  .required();

export default function ForgotPassword() {
  const [isLogging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleForgotPassword = (data: IFormInputs) => {
    setLogging(true);
    console.log(data);
    alert("Entrando");
  };
  return (
    <ContainerAuth>
      <ContentAuth>
        <header>
          <h1>Esqueci minha senha!</h1>
          <p>Enviaremos um link para o seu e-mail redefinir sua senha! </p>
        </header>

        <main>
          <Form onSubmit={handleSubmit(handleForgotPassword)}>
            <div>
              <label>E-mail</label>
              <input type="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>

            <button type="submit">
              {isLogging ? <ClipLoader color="#fff" /> : "Enviar"}
            </button>
          </Form>
        </main>
      </ContentAuth>
    </ContainerAuth>
  );
}
