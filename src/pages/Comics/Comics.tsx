import { CardSection } from '../../components/CardSection/CardSection'
import { Header } from '../../components/Header/Header'
import { ComicsContainer } from './styles'

export const Comics = () => {
  return (
    <>
      <Header />
      <ComicsContainer>
        <CardSection />
      </ComicsContainer>
    </>
  )
}
