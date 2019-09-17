import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Main Component */
class Main extends Component {

    constructor() {

        super();

        /* currentProduct keeps track of the product currently
         * displayed */
        this.state = {
            products: [],
            currentProduct: null
        }
    }

    componentDidMount() {
        //code omitted for brevity
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                //this.handleClick() method is invoked onClick.
                <li onClick={
                () =>this.handleClick(product)} key={product.id} >
                { product.title } 
            </li>
            );
        })
    }

    handleClick(product) {
        //handleClick is used to set the state
        this.setState({ currentProduct: product });

    }

    render() {
        return (
            /* The extra divs are for the css styles */
            <div>
            <div>
             <h3> All products </h3>
              <ul>
                { this.renderProducts() }
              </ul> 
            </div> 
           
            <Product product={this.state.currentProduct} />
        </div>
        );
    }
}
