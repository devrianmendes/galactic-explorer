import { useRef, useState } from "react";
import { JsonNeows, getNeows } from "../../services/neows";
import Title from "../Title";
import Button from "../../UI/Button";
import EachItem from "./EachItem";

const Neows = () => {
  const startDate = useRef<HTMLInputElement>(null);
  const [neowsData, setNeowsData] = useState<JsonNeows>(null);

  const handleGetNeows = async () => {
    if (startDate.current)
      setNeowsData(await getNeows(startDate.current.value));
    // await getNeows('2023-12-01');
  };

  return (
    <section>
      <Title title="NeoWs" subtitle="Objetos Próximos a Terra" />
      <p className="mb-2">NeoWs é um serviço de informação de asteroides próximos a terra.</p>
      <p className="mb-2">
        Com o NeoWs você pode procurar por asteroides baseados na data de maior
        aproximação da terra.
      </p>

      <p className="mb-2">
        Ao selecionar uma data, você verá uma lista de objetos que se
        aproximaram da terra nos 7 dias seguintes:
      </p>
      <div className="flex">
        <label className="inline-block w-1/4" htmlFor="neowsDate">
          Data:{" "}
        </label>
        <input
          className="w-2/4 rounded-sm text-gray-950 px-1"
          type="date"
          name="neowsDate"
          ref={startDate}
        />
      </div>
      <p className="text-xs text-gray-500">Você pode clicar em cada card para ver mais detalhes no site da nasa!</p>
      <div className="flex mb-5">
        <Button content="Encontrar objetos" action={handleGetNeows} />
      </div>
      <EachItem data={neowsData} />
    </section>
  );
};

export default Neows;
