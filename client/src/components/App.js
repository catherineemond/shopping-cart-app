import React from "react";
import Cart from "./Cart.js";
import ProductList from "./ProductList.js";
import AddForm from "./AddForm.js";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>
        <main>
          <ProductList />
          <AddForm
          // isOpen={false}
          />
        </main>
      </div>
    );
  }
}

export default App;
