import { FormEvent, useRef, useState } from "react";

import "./App.css";
import { ApodProps, ApodResponse, getApod } from "./services/apod";

function App() {
  let date = useRef<HTMLInputElement>(null);
  const endDate = useRef<HTMLInputElement>(null);
  const count = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<ApodResponse[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apodData: ApodProps = {
      date: date.current!.value,
      endDate: date.current!.value,
      count: count.current!.checked,
    };

    const response = await getApod(apodData);
    response && setData(response);

    date.current!.value = '';
    endDate.current!.value = '';
    count.current!.checked = false;
  };

  data && console.log(data)

  return (
    <main>
      <h1>APOD - Astronomy Picture of the Day</h1>
      <p>
        Um dos mais populares serviços da NASA é o APOD (ou Foto Astronomica do
        Dia) e é tão popular quando um vídeo do Justin Bieber.
      </p>
      <p>
        Com ele, você pode selecionar um(ou mais) dia(s) e descobrir qual imagem
        foi eleita como a melhor do dia:
      </p>
      <ul>
        {data.map((eachData) => (
          <li>
            <img src={eachData.hdurl} alt="IMG"/>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
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
    </main>
  );
}

export default App;
