import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { ContainerAuth, ContentAuth } from "../styles/pages/auth";
import { Form } from "../styles/pages/pagesDash";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useContext(AuthContext);
  async function handleSignIn(data: IFormInputs) {
    try {
      await signIn(data);
    } catch (err: any) {
      if (err.message === "Request failed with status code 401") {
        alert("Usuário não autorizado!");
      } else if (err.message === "Request failed with status code 500") {
        alert("Erro na requisição da api");
      } else {
        alert(err.message);
      }
    }
  }
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

            <button type="submit">Entrar</button>
          </Form>
        </main>
      </ContentAuth>
    </ContainerAuth>
  );
}
