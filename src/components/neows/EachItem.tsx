import { FC } from "react";
import { JsonNeows } from "../../services/neows";

const EachItem: FC<{ data: JsonNeows }> = ({ data }) => {
  if (!data) return null;

  if (data) {
    const days = Object.keys(data.near_earth_objects);

    console.log(data.near_earth_objects);

    return (
      <div>
        <ul>
          {days.map((eachDay) => (
            <li className="mb-5">
              <div>
                <p className="font-bold">{eachDay.split("-").reverse().join("/")}</p>
                <ul>
                  {data.near_earth_objects[eachDay].map((oi) => (
                    <a href={oi.nasa_jpl_url} target="_blank">
                      <li className="mb-6 bg-gray-900 p-1 rounded-md">
                        <h3 className="text-center text-lg font-bold">
                          {oi.name.replace("(", "").replace(")", "")}{" "}
                        </h3>

                        <p>
                          Tamanho:{" "}
                          {oi.estimated_diameter.meters.estimated_diameter_max.toFixed(
                            2
                          )}
                          m
                        </p>
                        <p>
                          Distancia mínima:{" "}
                          {parseFloat(
                            oi.close_approach_data[0].miss_distance.astronomical
                          ).toFixed(2)}
                          au
                        </p>
                        <p>
                          Velocidade média:{" "}
                          {parseFloat(
                            oi.close_approach_data[0].relative_velocity
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
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default EachItem;
