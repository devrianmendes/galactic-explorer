import { FC } from "react";
import { ApodResponseProps } from "../../services/apod";

const EachItem: FC<{ content: ApodResponseProps }> = ({ content }) => {

  if (!content) return null;
  return (
    <>
      {content ? (
        Array.isArray(content) ? (
          <ul>
            {content.map((eachData) => (
              <li className="mb-6" key={eachData.title}>
                <h3 className="text-center text-lg">{eachData.title}</h3>
                <p className="text-center">{eachData.date.split('-').reverse().join('/')}</p>
                <img src={eachData.url} alt={eachData.title} />
                {eachData.copyright ? <p className="text-xs text-gray-500">Imagem registrada por {eachData.copyright}.</p> : null}
                <p>{eachData.explanation}</p>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <h3>{content.title}</h3>
            <img src={content.url} alt={content.title} />
            <p>{content.explanation}</p>
          </>
        )
      ) : null}
    </>
  );
};

export default EachItem;
