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
        const isAlreadyinCart = addedProducts.some(prod => prod.name === newCartProduct.name)
        if(isAlreadyinCart){
            return
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

// 📌 Milestone 2: Aggiungere prodotti al carrello
// ✅ Obiettivo
// L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

// 📥 Stato
// Creare uno stato addedProducts (array vuoto all’inizio).
// 🧠 Logica
// Ogni prodotto ha un bottone "Aggiungi al carrello".
// Al click:
// Se il prodotto non è già nel carrello, aggiungilo con quantity = 1.
// Se il prodotto è già presente, ignora l’azione.
// Mostrare la lista del carrello solo se ci sono elementi.
// 🧾 Visualizzazione carrello
// Per ogni prodotto aggiunto:

// Nome
// Prezzo
// Quantità
// 📌 Milestone 3: Modificare il carrello
// ✅ Obiettivo
// Gestire dinamicamente l’aggiunta, rimozione e aggiornamento del carrello.

// 🔁 Nuova logica
// Se l’utente clicca di nuovo su "Aggiungi al carrello":

// Aumenta quantity usando la funzione updateProductQuantity.
// Aggiungi un bottone "Rimuovi dal carrello":

// Usa la funzione removeFromCart.
// 💰 Calcolo totale
// Sotto al carrello, mostra il totale da pagare:
// totale = sommaDiOgniProdotto(prezzo * quantità)