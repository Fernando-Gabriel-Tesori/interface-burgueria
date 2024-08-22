import { useEffect, useState } from 'react';
import api from '../../services/api';
import Carousel from 'react-multi-carousel';
import { Container, ContainerItems, Title } from './styles';
import 'react-multi-carousel/lib/styles.css';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Função assíncrona para carregar as categorias
        const loadCategories = async () => {
            try {
                const { data } = await api.get('/categories'); // Defina o endpoint correto para buscar as categorias
                setCategories(data);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            }
        };

        loadCategories();
    }, []);

    // Configurações responsivas para o carrossel
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
            items: 3, // Ajustado para 3 itens no tablet para uma melhor exibição
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='carousel-item'
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <p>{category.name}</p>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}

