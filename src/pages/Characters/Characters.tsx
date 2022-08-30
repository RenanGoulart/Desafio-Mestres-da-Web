import { Header } from '../../components/Header/Header'
import { CardSection } from '../../components/CardSection/CardSection';
import { CharactersContainer } from './styles'

export const Characters = () => {
  return (
    <>
      <Header />
      <CharactersContainer>
        <CardSection />
      </CharactersContainer>
    </>
  );
}
