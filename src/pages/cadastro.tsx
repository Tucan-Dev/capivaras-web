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
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    name: yup.string().required("O campo nome é obrigatório"),
    surname: yup.string(),
    phone: yup.string().required("O campo de contato é obrigatório"),
    email: yup
      .string()
      .required("O campo  de e-mail é obrigatório")
      .email("Digite um e-mail válido"),
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

export default function SignUp() {
  const [isLogging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (data: IFormInputs) => {
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
            Opa, já sou cadastrado!{" "}
            <Link href="/cadastro">
              <a>Entrar</a>
            </Link>
          </p>
        </header>

        <main>
          <Form onSubmit={handleSubmit(handleSignUp)}>
            <div>
              <label>Nome completo</label>
              <input type="text" {...register("name")} />
              <p>{errors.name?.message}</p>
            </div>

            <div>
              <label>Apelido</label>
              <input type="text" {...register("surname")} />
              <p>{errors.surname?.message}</p>
            </div>

            <div>
              <label>Contato</label>
              <input
                type="tel"
                {...register("phone", {
                  onChange: (e) => setValue("phone", maskPhone(e.target.value)),
                })}
              />
              <p>{errors.phone?.message}</p>
            </div>

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
