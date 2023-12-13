import { FC } from "react";
import { JsonNeows } from "../../services/neows";
import SecondaryTitle from "../SecondaryTitle";

const EachItem: FC<{ data: JsonNeows }> = ({ data }) => {
  if (!data) return null;


    const days = Object.keys(data.near_earth_objects);
    
    return (
      <div>
        <ul>
          {days.map((eachDay) => (
            <li className="mb-5" key={eachDay}>
              <div>
                <SecondaryTitle
                  title={eachDay.split("-").reverse().join("/")}
                />
                <ul>
                  {data.near_earth_objects[eachDay].map((eachObject) => (
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
                            eachObject.close_approach_data[0].miss_distance.astronomical
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
          ))}
        </ul>
      </div>
    );
  }

export default EachItem;
