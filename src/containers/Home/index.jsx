import React from 'react';
import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel'
import { Banner, Container } from "./styles";
import { useUser } from '../../hooks/UserContext';

export function Home() {
    
    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
            <div>
            <Container>
                    <CategoriesCarousel />
                    <OffersCarousel />
            </Container>
            </div>
        </main>
    );
}
