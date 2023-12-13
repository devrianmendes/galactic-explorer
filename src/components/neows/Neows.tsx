import { useRef, useState } from "react";
import { JsonNeows, getNeows } from "../../services/neows";
import Title from "../MainTitle";
import Button from "../../UI/Button";
import EachItem from "./EachItem";
import SmallText from "../SmallText";
import Loading from "../loading/Loading";

const Neows = () => {
  const startDate = useRef<HTMLInputElement>(null);
  const [neowsData, setNeowsData] = useState<JsonNeows>(null);
  const [loading, setLoading] = useState(false);

  const handleGetNeows = async () => {
    if (startDate.current) {
      try {
        setLoading(true);
        const response = await getNeows(startDate.current.value);
        setNeowsData(response);

        startDate.current.value = "";
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section>
      <Title title="NeoWs" subtitle="Objetos Próximos a Terra" />
      <p className="mb-2">
        NeoWs é um serviço de informação de asteroides próximos a terra.
      </p>
      <p className="mb-2">
        Com o NeoWs você pode procurar por asteroides baseados na data de maior
        aproximação da terra.
      </p>

      <p className="mb-2">
        Ao selecionar uma data, você verá uma lista de objetos que se
        aproximaram da terra nos 7 dias seguintes:
      </p>
      <div className="flex mb-2">
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
      <SmallText content="Dica: Clicando em cada card, você verá mais detalhes no site da NASA!" />
      <div className="flex mb-5">
        <Button content="Encontrar objetos" action={handleGetNeows} />
      </div>
      {loading ? <Loading /> : <EachItem data={neowsData} />}
    </section>
  );
};

export default Neows;
