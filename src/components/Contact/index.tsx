import React from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Image from "next/image";

import { Title } from "../Title";

import ImgContact from "../../assets/images/modelo_3.png";
import { Container } from "./styles";
import { FormContact } from "../../styles/commonStyles";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required("O campo nome é obrigatório"),
    email: yup
      .string()
      .email("O e-mail é inválido")
      .required("O campo e-mail é obrigatório"),
    message: yup.string().required(),
  })
  .required();

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div id="contact">
      <Title title="Alguma dúvida? Mande uma mensagem para nós!" />

      <Container>
        <FormContact onSubmit={handleSubmit(onSubmit)}>
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
            <label>Mensagem</label>
            <textarea
              rows={10}
              {...register("message")}
              placeholder="Digite sua mensagem aqui"
            />
          </div>

          <button type="submit">Enviar</button>
        </FormContact>

        <div className="image">
          <Image
            src={ImgContact}
            alt="Picture of the author"
            objectFit="contain"
          />
        </div>
      </Container>
    </div>
  );
}
