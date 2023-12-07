import { FC } from "react";
import { ApodResponseProps } from "../../services/apod";

const EachItem: FC<{content: ApodResponseProps}> = ({content}) => {

  if(!content) return null;
  return (
  <>
     {content ? (
       Array.isArray(content) ? (
         content.map((eachData) => (
           <li key={eachData.title}>
             <h3>{eachData.title}</h3>
             <img src={eachData.url} alt={eachData.title} />
             <p>{eachData.explanation}</p>
           </li>
         ))
       ) : (
         <>
           <h3>{content.title}</h3>
           <img src={content.url} alt={content.title} />
           <p>{content.explanation}</p>
         </>
       )
     ) : null}
  </>
  )
};

export default EachItem;
