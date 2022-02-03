import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Router from "next/router";
import { Dashboard } from "../../../components/Layout/dashboard";
import { ContentDefault, TitlePage } from "../../../styles/commonStyles";
import { Form } from "../../../styles/pages/pagesDash";

interface IFormInputs {
  name_company: string;
  contact_one: string;
  contact_two: string;
  category: string;
  zip_code: string;
  address: string;
  district: string;
  number_house: string;
  city: string;
  state: string;
}

const schema = yup
  .object({
    name_company: yup.string().required(),
    contact_one: yup.string().required(),
    contact_two: yup.string().required(),
    category: yup.string().required(),
    zip_code: yup.string().required(),
    address: yup.string().required(),
    district: yup.string().required(),
    number_house: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  })
  .required();

export default function EditCompany() {
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
    <Dashboard title="Editar">
      <ContentDefault>
        <TitlePage>
          <h1>Dados empresarias</h1>
          <p>Atualize os dados de sua empresa</p>
        </TitlePage>
        <main>
          <Form onSubmit={handleSubmit(handleMessageSupport)}>
            <div>
              <div>
                <label>Nome da sua Empresa</label>
                <input {...register("name_company")} />
                <p>{errors.name_company?.message}</p>
              </div>

              <div>
                <label>Telefone 01</label>
                <input {...register("contact_one")} />
                <p>{errors.contact_one?.message}</p>
              </div>

              <div>
                <label>Telefone 02</label>
                <input {...register("contact_two")} />
                <p>{errors.contact_two?.message}</p>
              </div>
              <div>
                <label>Categoria</label>
                <input {...register("category")} />
                <p>{errors.category?.message}</p>
              </div>
            </div>

            <div>
              <div>
                <label>CEP</label>
                <input {...register("zip_code")} />
                <p>{errors.zip_code?.message}</p>
              </div>

              <div>
                <label>Endereço</label>
                <input {...register("address")} />
                <p>{errors.address?.message}</p>
              </div>

              <div>
                <label>Bairro</label>
                <input {...register("district")} />
                <p>{errors.district?.message}</p>
              </div>

              <div className="flex">
                <div>
                  <label>Cidade</label>
                  <input {...register("city")} />
                  <p>{errors.city?.message}</p>
                </div>

                <div>
                  <label>Estado</label>
                  <input {...register("state")} />
                  <p>{errors.state?.message}</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <button className="secondary" type="reset">
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </Form>
        </main>
      </ContentDefault>
    </Dashboard>
  );
}
