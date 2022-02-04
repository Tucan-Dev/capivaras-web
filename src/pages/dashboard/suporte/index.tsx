import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Router from "next/router";
import { Dashboard } from "../../../components/Layout/dashboard";
import {
  ContentDefault,
  FormContact,
  TitlePage,
} from "../../../styles/commonStyles";
import { Form } from "../../../styles/pages/pagesDash";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export default function Support() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleMessageSupport = (data: IFormInputs) => {
    console.log(data);
    alert("Mensagem enviada, retornaremos o mais breve possível");
    Router.reload();
  };
  return (
    <Dashboard title="Suporte">
      <ContentDefault>
        <TitlePage>
          <h1>Suporte</h1>
          <p>Entre em contato com a gente se existir qualquer dúvida</p>
        </TitlePage>
        <main>
          <FormContact onSubmit={handleSubmit(handleMessageSupport)}>
            <div>
              <label>Nome</label>
              <input {...register("name")} placeholder="Nome completo" />
              <p>{errors.name?.message}</p>
            </div>

            <div>
              <label>E-mail</label>
              <input {...register("email")} placeholder="Seu melhor e-mail" />
              <p>{errors.email?.message}</p>
            </div>

            <div>
              <label>Messagem</label>
              <textarea
                rows={10}
                {...register("message")}
                placeholder="Digite sua mensagem aqui"
              />
            </div>

            <button type="submit">Enviar</button>
          </FormContact>
        </main>
      </ContentDefault>
    </Dashboard>
  );
}
