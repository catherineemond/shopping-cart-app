import React from "react";

class Product extends React.Component {
  state = {
    editFormOpen: false 
  }

  handleDelete = () => {
    this.props.onDelete(this.props._id)
  }

  render () {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">{this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={this.showForm}>Edit</a>
          </div>
          <a className="delete-button" onClick={this.handleDelete}>
            <span>X</span>
          </a>
        </div>
        <div className="edit-form">
            <h3>Edit Product</h3>
            
            {/* <ProductForm/> */}
            <form>
              <div className="input-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" value={this.state.title} />
              </div>

              <div className="input-group">
                <label htmlFor="product-price">Price</label>
                <input type="text" id="product-price" value={this.state.price} />
              </div>

              <div className="input-group">
                <label htmlFor="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value={this.state.quantity} />
              </div>

              <div className="actions form-actions">
                <a className="button">Update</a>
                <a className="button">Cancel</a>
              </div>
            </form>

          </div>
      </div>
    )
  }
}




// const Product = ({ title, quantity, price }) => {
//   return (
//     <div className="product">
//       <div className="product-details">
//         <h3>{title}</h3>
//         <p className="price">{price}</p>
//         <p className="quantity">{quantity} left in stock</p>
//         <div className="actions product-actions">
//           <a className="button add-to-cart">Add to Cart</a>
//           <a className="button edit">Edit</a>
//         </div>
//         <a className="delete-button" onClick={this.handleDelete}>
//           <span>X</span>
//         </a>
//       </div>
//     </div>
//   );
// };

export default Product;
