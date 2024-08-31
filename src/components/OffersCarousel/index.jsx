import { useEffect, useState } from 'react';
import api from '../../services/api';
import Carousel from 'react-multi-carousel';
import { Container, Title } from './styles';
import 'react-multi-carousel/lib/styles.css';

import { formatPrice } from '../../utils/formatPrice.js'; 
import { CardProduct } from '../CardProduct';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);  // Define o estado loading
    const [error, setError] = useState(null);  // Define o estado error para manejar erros

    useEffect(() => {
        async function loadProducts() {
            try {
                const { data } = await api.get('/products');

                const onlyOffers = data
                    .filter(product => product.offer)
                    .map(product => ({
                        currencyValue: formatPrice(product.price),
                        ...product,
                    }));

                setOffers(onlyOffers);
            } catch (err) {
                setError('Erro ao carregar as ofertas');  // Atualiza o estado de erro se a requisição falhar
            } finally {
                setLoading(false);  // Define loading como false após a requisição
            }
        }

        loadProducts();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
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

    return (
        <Container>
            <Title>Ofertas do Dia</Title>
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Carousel
                    responsive={responsive}
                    infinite
                    partialVisible={false}
                    itemClass="carousel-item"
                >
                    {offers.map((product) => (
                        <CardProduct key={product.id} product={product} /> 
                    ))}
                </Carousel>
            )}
        </Container>
    );
}
