import { FormEvent, useRef, useState } from "react";
import {
  type ApodProps,
  getApod,
  ApodResponseProps,
} from "../../services/apod";
import EachItem from "./EachItem";

const Apod = () => {
  const date = useRef<HTMLInputElement>(null);
  const endDate = useRef<HTMLInputElement>(null);
  const count = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ApodResponseProps>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apodData: ApodProps = {
      date: date.current!.value,
      endDate: endDate.current!.value,
      count: count.current!.checked,
    };

    try {
      setError(false);
      const response = await getApod(apodData);
      response && setData(response);

      date.current!.value = "";
      endDate.current!.value = "";
      count.current!.checked = false;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <section>
      <h1 className="text-lg font-bold">APOD - Foto Astronômica do Dia</h1>
      <p>
        Um dos mais populares serviços da NASA é o APOD (ou Foto Astronômica do
        Dia) e é tão popular quando um vídeo do Justin Bieber.
      </p>
      <p>
        Com ele, você pode selecionar um(ou mais) dia(s) e descobrir qual imagem
        foi eleita como a melhor do dia:
      </p>
      <ul>
        <EachItem content={data} />
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        {error && <p>CARAI DEU RUIM</p>}
        <label htmlFor="date">Selecione o dia: </label>
        <input type="date" name="date" id="date" ref={date} />
        <p>
          Você também pode selecionar uma data final para ver todas a lista de
          imagens selecionadas:
        </p>
        <input type="date" name="date" id="date" ref={endDate} />
        <input type="checkbox" name="count" id="count" ref={count} />
        <p>Ou selecione aqui e veja aleatóriamente uma lista de 20 imagens!</p>
        <button>Encontrar</button>
      </form>
    </section>
  );
};

export default Apod;
