import React from "react";
import CartContainer from "./CartContainer.js";
import ProductList from "./ProductList.js";
import AddForm from "./AddForm.js";
import ProductListContainer from "./ProductListContainer.js";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <CartContainer />
        </header>
        <main>
          <ProductListContainer>
            <ProductList />
          </ProductListContainer>
          <AddForm />
        </main>
      </div>
    );
  }
}

export default App;
