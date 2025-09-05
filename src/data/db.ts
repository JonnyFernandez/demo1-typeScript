export interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

export const users: User[] = [
    {id:1, name: "Alice", email: "code@gmail.com", age: 30},
    {id:2, name: "Bob", email: "code2@gmail.com", age: 25},
    {id:3, name: "maria", email: "code3@gmail.com", age: 53},
    {id:4, name: "Luis", email: "code4@gmail.com", age: 47},
    {id:5, name: "Dorca", email: "code5@gmail.com", age: 26},
]