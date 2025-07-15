import { useState } from "react";

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

export default function Products (){

    const [addedProducts, setAddedProducts] = useState([]);
    const cartPrice = addedProducts.reduce((acc, product) => {
        return product.price * product.quantity + acc
    }, 0)

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

    const removeProduct = (index)=> {
        const currentProduct = products[index];
        const productInCart = addedProducts.find(prod => prod.name === currentProduct.name);
        if(productInCart){
            const updatedProducts = addedProducts.filter(prod => prod.name !== productInCart.name);
            setAddedProducts(updatedProducts);
        }else {
            return;
        }
    }
    console.log(addedProducts)

    return <div className="products">
        <h1>Lista Prodotti</h1>
        {products.map((prod, index) => <div key={index}>
            <h3>{prod.name}</h3>
            <strong>{prod.price} €</strong>
            <button onClick={()=>insertProduct(index)}>Aggiungi al Carrello</button>
            <button onClick={()=>removeProduct(index)}>Rimuovi dal Carrello</button>
        </div>)}
        {addedProducts.length > 0 && <div>
            {addedProducts.map((product, index)=><div key={index}>
                <h3>NAME: {product.name}</h3>
                <h4>PRICE: {product.price}</h4>
                <h5>QUANTITY: {product.quantity}</h5>
            </div>)}
            <h3>TOTAL PRICE: € {cartPrice.toFixed(2)}</h3>
        </div> }
    </div>
}




// Usa la funzione removeFromCart.
// 💰 Calcolo totale
// Sotto al carrello, mostra il totale da pagare:
// totale = sommaDiOgniProdotto(prezzo * quantità)