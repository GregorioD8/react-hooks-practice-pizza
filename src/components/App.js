import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const API = "http://localhost:3001/pizzas"
function App() {

  const [pizzas, setPizzas] = useState([])
  const [pizzaToEdit, setPizzaToEdit] = useState(null)

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(setPizzas)
  }, [])


  function handleEditedPizza(editedPizza) {
    const updatedPizzas = pizzas.map((p) => p.id === editedPizza.id ? editedPizza : p)
    setPizzaToEdit(editedPizza)
    setPizzas(updatedPizzas)
  }
  
  function handleChangeForm(name, value) {
    setPizzaToEdit({
      ...pizzaToEdit,
      [name]: value,
    })
    console.log(name)
    console.log(value)
    
  }
  console.log(pizzaToEdit)
  return (
    <>
      <Header />
      <PizzaForm 
      pizza={pizzaToEdit}
      onEditPizzaForm={handleEditedPizza}
      onChangeForm={handleChangeForm}
      />
      <PizzaList 
      pizzas={pizzas}
      onPizzaToEdit={setPizzaToEdit}
      
      />
    </>
  );
}

export default App;
