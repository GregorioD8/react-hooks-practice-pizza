import React from "react";

function Pizza( { pizza, onPizzaToEdit } ) {
const {topping, size, vegetarian } = pizza 

function handleClick() {
  onPizzaToEdit(pizza)
}

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "vegetarian" : "not vegetarian"}</td>
      <td>
        <button type="button" 
        className="btn btn-primary"
        onClick={handleClick}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
