import { CardSection } from '../../components/CardSection/CardSection';
import { Header } from '../../components/Header/Header';
import { MoviesContainer } from './styles';

export const Movies = () => {
  return (
    <>
      <Header />
      <MoviesContainer>
        <CardSection />
      </MoviesContainer>
    </>
  )
}
