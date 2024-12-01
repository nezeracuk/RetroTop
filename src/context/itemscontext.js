import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Mystic Realms',
            price: 150,
            description: 'Explore ancient worlds filled with mysteries and untold powers.',
            imageUrl: require('./images/game1.webp'),
            Rarity: 'Legendary',
            age: '1998',
        },
        {
            id: 2,
            title: 'Shadow Quest',
            price: 120,
            description: 'Embark on a journey through dark lands teeming with danger.',
            imageUrl: require('./images/game2.webp'),
            Rarity: 'Epic',
            age: '2001',
        },
        {
            id: 3,
            title: 'Sunglasses Saga',
            price: 192,
            description: 'A vibrant adventure full of style and unforgettable moments.',
            imageUrl: require('./images/game3.webp'),
            Rarity: 'Legendary',
            age: '1995',
        },
        {
            id: 4,
            title: 'Joker’s Lair',
            price: 162,
            description: 'Step into the chaotic world of the trickster’s domain.',
            imageUrl: require('./images/game4.webp'),
            Rarity: 'Rare',
            age: '2000',
        },
        {
            id: 5,
            title: 'Veres Chronicles',
            price: 10000,
            description: 'Uncover the story of a legendary figure and his epic journey.',
            imageUrl: require('./images/game5.webp'),
            Rarity: 'Rare',
            age: '1999',
        },
        {
            id: 7,
            title: 'Inferno Blade',
            price: 232,
            description: 'A tale of fire and fury in the battle for ultimate power.',
            imageUrl: require('./images/game6.webp'),
            Rarity: 'Legendary',
            age: '1997',
        },
        {
            id: 8,
            title: 'Cat God Adventures',
            price: 193,
            description: 'Follow the divine feline on a whimsical and magical quest.',
            imageUrl: require('./images/game7.webp'),
            Rarity: 'Rare',
            age: '2003',
        },
        {
            id: 9,
            title: 'Pokémon Legacy',
            price: 193,
            description: 'Embark on an epic journey to become the ultimate trainer.',
            imageUrl: require('./images/game8.webp'),
            Rarity: 'Legendary',
            age: '1996',
        },
        {
            id: 10,
            title: 'Neon Crusade',
            price: 145,
            description: 'Dive into a futuristic world of lights, battles, and glory.',
            imageUrl: require('./images/game9.webp'),
            Rarity: 'Epic',
            age: '2002',
        },
    ]);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};
