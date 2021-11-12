import React from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Image from "next/image";

import { ContainerDefault } from "../../styles/commonStyles";
import { Title } from "../Title";

import ImgContact from "../../assets/images/contact.svg";
import { Container } from "./styles";
import { Fade, Slide } from "react-awesome-reveal";

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
    <ContainerDefault id="contact">
      <Title title="Alguma dúvida? Mande uma mensagem para nós!" />

      <Fade delay={100}>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <button>Enviar</button>
          </form>

          <Image src={ImgContact} width={570} height={460} alt="Contato" />
        </Container>
      </Fade>
    </ContainerDefault>
  );
}
