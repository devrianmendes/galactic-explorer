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
              <li className="mb-6 bg-gray-900 p-1 rounded-md" key={eachData.title}>
                <h3 className="text-center text-lg font-bold">{eachData.title}</h3>
                <p className="text-center mb-2">
                  {eachData.date.split("-").reverse().join("/")}
                </p>
                <div className="mb-2">
                  <img src={eachData.url} alt={eachData.title} />
                  {eachData.copyright ? (
                    <p className="text-xs text-gray-500">
                      Créditos: {eachData.copyright}.
                    </p>
                  ) : null}
                </div>
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
