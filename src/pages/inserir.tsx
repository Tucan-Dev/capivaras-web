import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Link from "next/link";

import ClipLoader from "react-spinners/ClipLoader";

import { ContainerAuth, ContentAuth } from "../styles/pages/auth";
import { Form } from "../styles/pages/pagesDash";
import { useState } from "react";

interface IFormInputs {
  code: string;
}

const schema = yup
  .object({
    code: yup
      .string()
      .required("O campo de código é obrigatório")
      .max(4, "Código inválido")
      .min(4, "Código inválido"),
  })
  .required();

export default function InsertCode() {
  const [isLogging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleInsertCode = (data: IFormInputs) => {
    setLogging(true);
    console.log(data);
    alert("Entrando");
  };
  return (
    <ContainerAuth>
      <ContentAuth>
        <header>
          <h1>Insira o código aqui</h1>
          <p>
            Enviamos um código para o seu e-mail para redefinição de sua senha
          </p>
        </header>

        <main>
          <Form onSubmit={handleSubmit(handleInsertCode)}>
            <div>
              <label>Código</label>
              <input type="text" {...register("code")} />
              <p>{errors.code?.message}</p>
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
