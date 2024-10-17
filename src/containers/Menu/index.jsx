import { useEffect, useState } from "react";
import api from '../../services/api';
import { Banner, Container, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { formatPrice } from '../../utils/formatPrice'; 
import { CardProduct } from '../../components/CardProduct'; 
import { useLocation, useNavigate } from "react-router-dom";

// Criar componentes para o erro e loading
const ErrorMessage = ({ message }) => <p style={{ color: 'red' }}>{message}</p>;
const LoadingSpinner = () => <p>Carregando...</p>;

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParms = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParms.get('categoria');
        return categoryId || 0;
    });

    // Função para carregar categorias e produtos
    const loadCategories = async () => {
        try {
            const { data } = await api.get('/categories');
            const allCategories = [{ id: 0, name: 'Todas' }, ...data];
            setCategories(allCategories);
        } catch (err) {
            setError('Erro ao carregar as categorias');
        }
    };

    const loadProducts = async () => {
        try {
            const { data } = await api.get('/products');
            const formattedProducts = data.map(product => ({
                ...product,
                currencyValue: formatPrice(product.price), 
            }));
            setProducts(formattedProducts);
            setFilteredProducts(formattedProducts);
        } catch (err) {
            setError('Erro ao carregar os produtos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Carregando categorias e produtos ao montar o componente
        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        // Função para filtrar produtos
        const filterProductsByCategory = () => {
            if (activeCategory === 0) {
                setFilteredProducts(products);
            } else {
                const newFilteredProducts = products.filter(
                    product => product.category_id === activeCategory
                );
                setFilteredProducts(newFilteredProducts);
            }
        };

        if (products.length) filterProductsByCategory();
    }, [activeCategory, products]);

    // Função para manipular a mudança de categoria
    const handleCategoryChange = (categoryId) => {
        if (categoryId !== activeCategory) {
            navigate(`/cardapio?categoria=${categoryId}`, { replace: true });
            setActiveCategory(categoryId);
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI!
                </h1>
                <span>Esse cardápio está irresistível!</span>
            </Banner>
            
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton 
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => handleCategoryChange(category.id)}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    );
}
