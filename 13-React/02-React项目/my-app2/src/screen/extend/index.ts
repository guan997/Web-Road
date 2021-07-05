import React from 'react';
interface Base {
    id: number;
}
interface Person extends Base {
    name: string;
}
const p: Person = { name: '123', id: 123 };
interface Base{
    id:number;
}
interface Advance extends Base{
    name:string
}
const test = (p:Base) =>{
    
}