import { Product } from 'models/interfaces/product';

export const initialProductsList: Product[] = [
    {
        id: 1,
        name: 'Product A',
        description: 'This is product A',
        date: new Date('2023-01-01'),
        price: 23,
    },
    {
        id: 2,
        name: 'Product B',
        description: 'This is product B',
        date: new Date('2023-02-01'),
        price: 13,
    },
    {
        id: 3,
        name: 'Product C',
        description: 'This is product C',
        date: new Date('2023-03-01'),
        price: 1287963,
    },
    {
        id: 4,
        name: 'Product D',
        description: 'This is product D',
        date: new Date('2023-04-01'),
        price: 1,
    },
    {
        id: 5,
        name: 'Product E',
        description: 'This is product E',
        date: new Date('2023-05-01'),
        price: 123,
    },
];
