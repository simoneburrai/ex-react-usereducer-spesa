const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

export default function Products (){

    return <div className="products">
        <h1>Lista Prodotti</h1>
        {products.map((prod, index) => <div key={index}>
            <h3>{prod.name}</h3>
            <strong>{prod.price} €</strong>
        </div>)}
    </div>
}