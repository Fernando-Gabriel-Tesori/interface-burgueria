import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';


export function CardProduct({ product }) {
    return (
        <Container>
            <CardImage src={product.imageUrl} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CardProduct />
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};
