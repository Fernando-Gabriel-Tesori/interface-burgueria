import { useEffect, useState } from 'react';
import api from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  Container,
  Title,
} from './styles';
import { CardProduct } from '../CardProduct';

export function OffersCarousel() {
  const [offerList, setOfferList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function loadOffers() {
      try {
        const { data } = await api.get('/products');
        // Filtrando produtos com ofertas
        const onlyOffers = data.filter((product) => product.offer);
        setOfferList(onlyOffers);
      } catch (err) {
        setErrorMessage('Erro ao carregar ofertas.');
      } finally {
        setIsLoading(false);
      }
    }
    loadOffers();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  if (isLoading) {
    return <p>Carregando ofertas...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (offerList.length === 0) {
    return <p>Nenhuma oferta disponível no momento.</p>;
  }

  return (
    <Container>
      <Title>Ofertas do dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {offerList.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
