const product = [
    {
        name: 'Guitarra-Electrica',
        date: 'Tue Aug 23 2022 11:02:00 GMT+0200 (Central European Summer Time)',
        price: '100$'
    },
    {
        name: 'Guitarra-Acustica',
        date: 'Wed Aug 24 2022 11:20:00 GMT+0200 (Central European Summer Time)',
        price: '400$'
    },
    {
        name: 'Guitarra-Electrica',
        date: 'Thu Aug 25 2022 11:05:00 GMT+0200 (Central European Summer Time)',
        price: '800$'
    },
    {
        name: 'Guitarra-Acustica',
        date: 'Fri Aug 26 2022 13:02:00 GMT+0200 (Central European Summer Time)',
        price: '1200$'
    },
];

import { useMemo } from "react";

export const NeolandOrderContent = () => {

    const order = useMemo(( ) => {
        return product.map( product => ({
                ...product,
                date: new Date( product.date),
                name: product.name.split('-').join(' ').toUpperCase()
            })).sort( ( a, b ) => a.date.getTime() < b.date.getTime() ).map( product => ({
                ...product,
                date: new Intl.DateTimeFormat(navigator.language).format( product.date )
            })) ;
        }
    , []);

    console.log( order )

    return (<>
        <div>
            <h1>Productos de nuestra tienda</h1>
            <ul>
                <li>
                    { }
                </li>
                { product.map( product => (
                    <li key={ product.name }>
                        <h3> { product.name } </h3>
                        <p>Fecha: { product.date } || Precio: { product.price }</p>
                    </li>
                 ) )}
            </ul>
        </div>
    </>)
}