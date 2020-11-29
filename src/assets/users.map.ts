import { User } from '../models/user';
import * as casual from 'casual';

export const users: User[] = [
    {
        id: casual.uuid,
        email: 'jdoe@domain.com',
        username: 'jdoe',
        name: 'John',
        surname: 'Doe',
    },
    {
        id: casual.uuid,
        email: 'molson@domain.com',
        username: 'molson',
        name: 'Marina',
        surname: 'Olson',
    },
];
