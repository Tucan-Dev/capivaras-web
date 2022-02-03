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
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("E-mail é obrigatório")
      .email("Digite uma e-mail válido"),
    password: yup.string().required("Senha é obrigatório"),
  })
  .required();

export default function SignIn() {
  const [isLogging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data: IFormInputs) => {
    setLogging(true);
    console.log(data);
    alert("Entrando");
  };
  return (
    <ContainerAuth>
      <ContentAuth>
        <header>
          <h1>Olá, seja bem-vindo!</h1>
          <p>
            Opa, você ainda não tem conta?{" "}
            <Link href="/cadastro">
              <a>Cadastrar agora!</a>
            </Link>
          </p>
        </header>

        <main>
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <label>E-mail</label>
              <input type="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>

            <div>
              <label>Senha</label>
              <input type="password" {...register("password")} />
              <p>{errors.password?.message}</p>
            </div>

            <div className="forgot">
              <Link href="/esqueci-minha-senha">
                <a>esqueci minha senha!</a>
              </Link>
            </div>

            <button type="submit">
              {isLogging ? <ClipLoader color="#fff" /> : "Entrar"}
            </button>
          </Form>
        </main>
      </ContentAuth>
    </ContainerAuth>
  );
}
