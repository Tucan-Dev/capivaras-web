import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Link from "next/link";

import ClipLoader from "react-spinners/ClipLoader";

import { useState } from "react";
import { ContainerAuth, ContentAuth } from "../styles/pages/auth";
import { Form } from "../styles/pages/pagesDash";
import { maskPhone } from "../utils/masks";
import { ValidatedPassword } from "../utils/validations";

interface IFormInputs {
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    password: yup
      .string()
      .matches(ValidatedPassword, {
        message: "Sua senha não tem os requisitos mínimos de segurança",
      })
      .required("O campo de senha é obrigatório"),
    confirmPassword: yup
      .string()
      .required("A confirmação de senha é obrigatória")
      .oneOf([yup.ref("password"), null], "A confirmação de senha nao confere"),
  })
  .required();

export default function RedefinitionPassword() {
  const [isLogging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleRedefinitionPassword = (data: IFormInputs) => {
    setLogging(true);
    console.log(data);
    alert("Entrando");
  };
  return (
    <ContainerAuth>
      <ContentAuth>
        <header>
          <h1>Redefinição de senha</h1>
          <p>Digite uma senha tops e seguindo os requisitos mínimos! </p>
        </header>

        <main>
          <Form onSubmit={handleSubmit(handleRedefinitionPassword)}>
            <div>
              <label>Senha</label>
              <input type="password" {...register("password")} />
              <p>{errors.password?.message}</p>
            </div>

            <div>
              <label>Confirme sua senha</label>
              <input type="password" {...register("confirmPassword")} />
              <p>{errors.confirmPassword?.message}</p>
            </div>

            <button type="submit">
              {isLogging ? <ClipLoader color="#fff" /> : "Cadastrar"}
            </button>
          </Form>
        </main>
      </ContentAuth>
    </ContainerAuth>
  );
}
