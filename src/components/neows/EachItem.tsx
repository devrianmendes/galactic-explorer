import { FC } from "react";
import { AsteroidObject } from "../../services/neows";
import SecondaryTitle from "../SecondaryTitle";

const EachItem: FC<{ data: AsteroidObject[]; date: string }> = ({
  data,
  date,
}) => {
  if (!data) return null;

  return (
    <div>
      <ul>
        <li className="mb-5">
          <div>
            <SecondaryTitle title={date.split("-").reverse().join("/")} />
            <ul>
              {data.map((eachObject) => (
                <a href={eachObject.nasa_jpl_url} target="_blank">
                  <li className="mb-6 bg-gray-900 p-1 rounded-md">
                    <SecondaryTitle
                      title={eachObject.name.replace("(", "").replace(")", "")}
                    />

                    <p>
                      Tamanho:{" "}
                      {eachObject.estimated_diameter.meters.estimated_diameter_max.toFixed(
                        2
                      )}
                      m
                    </p>
                    <p>
                      Distancia mínima:{" "}
                      {parseFloat(
                        eachObject.close_approach_data[0].miss_distance
                          .astronomical
                      ).toFixed(2)}
                      au
                    </p>
                    <p>
                      Velocidade média:{" "}
                      {parseFloat(
                        eachObject.close_approach_data[0].relative_velocity
                          .kilometers_per_hour
                      ).toFixed(0)}
                      km/h
                    </p>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EachItem;
