import { useState } from 'react';
import { CardContainer, CardDescription, FullCardDescription} from './styles'

export interface CardProps {
  name: string;
  about: string;
  movies?: string[];
  rating?: number;
  image: string;
  gradient: boolean;
  setGradient: (gradient: boolean) => void;
}

export interface CardDescriptionProps {
  charAbout: boolean;
}

export const Card = (props: CardProps) => {
  const [fullDescription, setFullDescription] = useState(false)

  function handleClick() {
    setFullDescription(!fullDescription);
    props.setGradient(!props.gradient);
  }

  console.log(fullDescription)

  return (
    <>
    <CardContainer {...props}>
      {fullDescription ?
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
