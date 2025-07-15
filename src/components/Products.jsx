import { useState } from "react";

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

export default function Products (){

    const [addedProducts, setAddedProducts] = useState([]);

    const insertProduct= (index) => {
        const newCartProduct = products[index];
        const alreadyProduct = addedProducts.find(prod => prod.name === newCartProduct.name);
        const newProductsArray = alreadyProduct && addedProducts.map(prod=> {
                if(prod.name === alreadyProduct.name){
                    return {...prod, quantity: prod.quantity +1}
                }
                return prod;
            })
        if(alreadyProduct){
             setAddedProducts(newProductsArray)
        }else {
            setAddedProducts(prev=> {
                return [...prev, {...newCartProduct, quantity: 1}]
            })
        }
    }
    console.log(addedProducts)

    return <div className="products">
        <h1>Lista Prodotti</h1>
        {products.map((prod, index) => <div key={index}>
            <h3>{prod.name}</h3>
            <strong>{prod.price} €</strong>
            <button onClick={()=>insertProduct(index)}>Aggiungi al Carrello</button>
        </div>)}
        {addedProducts.length > 0 && <div>
            {addedProducts.map((product, index)=><div key={index}>
                <h3>NAME: {product.name}</h3>
                <h4>PRICE: {product.price}</h4>
                <h5>QUANTITY: {product.quantity}</h5>
            </div>)}
        </div> }
    </div>
}



// Aggiungi un bottone "Rimuovi dal carrello":

// Usa la funzione removeFromCart.
// 💰 Calcolo totale
// Sotto al carrello, mostra il totale da pagare:
// totale = sommaDiOgniProdotto(prezzo * quantità)