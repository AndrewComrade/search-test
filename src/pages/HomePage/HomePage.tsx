import React from 'react';
import { type FC } from 'react';
import { Container } from '../../layout';
import { SearchBar } from '../../features/SearchBar';

export const HomePage: FC = () => {
    return (
        <div className="">
            <Container>
                <SearchBar />
            </Container>
        </div>
    );
};
