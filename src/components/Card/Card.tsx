import { useState } from 'react';
import { CardContainer, CardDescription, FullCardDescription} from './styles'

export interface CardProps {
  name: string;
  about: string;
  movies?: string[];
  rating?: number;
  image: string;
}

export interface CardDescriptionProps {
  charAbout: boolean;
}

export const Card = (props: CardProps) => {
  const [charAbout, setCharAbout] = useState(false);

  function handleClick() {
    setCharAbout(!charAbout)
  }

  console.log(charAbout)

  return (
    <>
    <CardContainer {...props} >
      {charAbout ?
      <FullCardDescription />
      :
      <CardDescription>
        <h2>{props.name}</h2>
        <p>{props.about}</p>
        <p onClick={handleClick}>ver detalhes</p>
      </CardDescription>
      }
    </CardContainer>
    </>
    
  );

}
