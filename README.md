# 🛒 EX - Carrello della Spesa con React e useReducer

Esercizio pratico in React che simula un carrello della spesa, con gestione dello stato tramite `useState` e `useReducer`.

---

## 📁 Repo

**Nome repository:** `ex-react-usereducer-spesa`

---

## 📌 Milestone 1: Mostrare la lista dei prodotti

### ✅ Obiettivo

Mostrare una lista leggibile di tutti i prodotti disponibili, ognuno con:

- **Nome**
- **Prezzo**

### 📦 Dati iniziali

```js
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];
```

### 💡 Requisiti

- Creare un componente che visualizza la lista dei prodotti.
- Ogni prodotto deve mostrare **nome** e **prezzo**.

---

## 📌 Milestone 2: Aggiungere prodotti al carrello

### ✅ Obiettivo

L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

### 📥 Stato

- Creare uno stato `addedProducts` (array vuoto all’inizio).

### 🧠 Logica

- Ogni prodotto ha un bottone **"Aggiungi al carrello"**.
- Al click:
  - Se il prodotto **non è già** nel carrello, aggiungilo con `quantity = 1`.
  - Se il prodotto **è già presente**, **ignora** l’azione.
- Mostrare la lista del carrello solo se ci sono elementi.

### 🧾 Visualizzazione carrello

Per ogni prodotto aggiunto:

- Nome
- Prezzo
- Quantità

---

## 📌 Milestone 3: Modificare il carrello

### ✅ Obiettivo

Gestire dinamicamente l’aggiunta, rimozione e aggiornamento del carrello.

### 🔁 Nuova logica

- Se l’utente clicca di nuovo su **"Aggiungi al carrello"**:
  - Aumenta `quantity` usando la funzione `updateProductQuantity`.

- Aggiungi un bottone **"Rimuovi dal carrello"**:
  - Usa la funzione `removeFromCart`.

### 💰 Calcolo totale

- Sotto al carrello, mostra il **totale da pagare**:
  ```js
  totale = sommaDiOgniProdotto(prezzo * quantità)
  ```

---

## 🎯 Bonus 1: Modifica dinamica delle quantità

### ✅ Obiettivo

Modifica della quantità direttamente tramite input.

### 🔢 Comportamento

- Al posto di mostrare la quantità, usa un `<input type="number">`.
- L’utente può modificare direttamente la quantità.
- Usa `updateProductQuantity` per aggiornare lo stato.

### 🚨 Requisiti validazione

- Forzare la quantità a **numeri interi** (`Math.floor`).
- Impedire quantità **< 1** (minimo = 1).

---

## 🎯 Bonus 2: Gestione stato con `useReducer`

### ✅ Obiettivo

Ristrutturare il codice usando `useReducer` per una gestione dello stato più scalabile.

### 🧱 Reducer structure

```js
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // Aggiunge un nuovo prodotto
      break;
    case 'REMOVE_ITEM':
      // Rimuove un prodotto
      break;
    case 'UPDATE_QUANTITY':
      // Aggiorna la quantità con validazione
      break;
    default:
      return state;
  }
}
```

### ⚙️ Setup

- Inizializza lo stato come array vuoto:
  ```js
  const [state, dispatch] = useReducer(cartReducer, []);
  ```
- Sostituisci tutte le funzioni con `dispatch({ type, payload })`.

---

## ✅ Obiettivo finale

Un’app React funzionante che:

- Mostra prodotti disponibili
- Permette di aggiungerli e gestirli nel carrello
- Calcola il totale dinamicamente
- Supporta la modifica della quantità
- Utilizza `useReducer` per la gestione dello stato

---

## 🧪 Tecnologie utilizzate

- React
- React Hooks: `useState`, `useReducer`
- HTML & CSS base per layout

---

## 🚀 Come iniziare

```bash
git clone https://github.com/tuo-utente/ex-react-usereducer-spesa.git
cd ex-react-usereducer-spesa
npm install
npm run dev
```

---

## 👨‍💻 Autore

> Progetto didattico per esercitarsi con gli hook avanzati di React.