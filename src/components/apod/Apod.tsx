import { useRef, useState } from "react";
import {
  type ApodProps,
  getApod,
  ApodResponseProps,
} from "../../services/apod";
import EachItem from "./EachItem";
import loadingImg from "../../assets/loading.gif";
import Title from "../MainTitle";
import Button from "../../UI/Button";
import Paragraph from "../Paragraph";

const Apod = () => {
  const date = useRef<HTMLInputElement>(null);
  const endDate = useRef<HTMLInputElement>(null);
  const count = useRef<HTMLInputElement>(null);
  // const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApodResponseProps>(null);

  const handleGetApod = async () => {
    if (date.current && endDate.current && count.current) {
      const apodData: ApodProps = {
        date: date.current.value,
        endDate: endDate.current.value,
        count: count.current.checked,
      };

      try {
        setLoading(true);
        // setError(false);
        const response = await getApod(apodData);
        response && setData(response);

        date.current.value = "";
        endDate.current.value = "";
        count.current.checked = false;
        setLoading(false);
        setIsChecked(false);
      } catch (err) {
        // setError(true);
        console.log(err);
      }
    }
  };
  return (
    <section>
      <Title title="APOD" subtitle="Foto Astronômica do Dia" />
      <Paragraph>
        Um dos mais populares serviços da NASA é o APOD (ou Foto Astronômica do
        Dia) e é tão popular quando um vídeo do Justin Bieber.
      </Paragraph>
      <Paragraph>
        Com ele, você pode selecionar um dia e ver a imagem que foi selecionada
        pela equipe da NASA para representar essa data, ou também pode
        selecionar uma data inicial e uma final para ver uma lista com todas as
        imagens do período selecionado.
      </Paragraph>
      <form className="mb-5 w-full" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-1">
          <label className="w-1/4 inline-block" htmlFor="date">
            Data:{" "}
          </label>
          <input
            className="w-2/4 rounded-sm text-gray-950 px-1"
            type="date"
            name="date"
            id="date"
            ref={date}
            disabled={isChecked ? true : false}
          />
        </div>
        <div className="mb-1">
          <label className="inline-block w-1/4" htmlFor="endDate">
            Data final:{" "}
          </label>
          <input
            className="w-2/4 rounded-sm text-gray-950 px-1"
            type="date"
            name="endDate"
            id="endDate"
            ref={endDate}
            disabled={isChecked ? true : false}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="count"
            id="count"
            ref={count}
            onClick={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="count">
            {" "}
            Ou marque aqui e veja uma lista com 10 imagens aleatórias!
          </label>
        </div>
        <div className="flex">
          <Button content="Buscar imagens" action={handleGetApod} />
        </div>
      </form>
      {loading ? <img src={loadingImg} alt="" /> : <EachItem content={data} />}
    </section>
  );
};

export default Apod;
