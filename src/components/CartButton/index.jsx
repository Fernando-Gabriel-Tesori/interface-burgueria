import PropTypes from 'prop-types';
import Cart from '../../assets/cart.png';

import { ContainerButton } from './styles'

export function CartButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src ={Cart} alt='Carrinha de compras'/>
        </ContainerButton>
    );
}

Button.prototypes = {
    children: PropTypes.string,
};