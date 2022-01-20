
class App extends React.Component {
state = {
    productsAvailable: 7,
    shoppingCart: 1,
}

handleAddToCart = () =>{ 
    this.setState({
        shoppingCart: this.state.shoppingCart + 1,
    })

}
handleRemoveFromCart = () =>{
    this.setState({
        shoppingCart: this.state.shoppingCart - 1,
    })
}
handleBuy = () => {
    this.setState({
        productsAvailable: this.state.productsAvailable - this.state.shoppingCart,
        shoppingCart: 0
    })
}
    render() {
        return (
            <>
                <button disabled={this.state.shoppingCart ? false: true} onClick={this.handleRemoveFromCart}>-</button>
                <span style={this.state.shoppingCart === 0 ? {opacity: 0.3} : {}}> {this.state.shoppingCart} </span>
                <button disabled={(this.state.shoppingCart === this.state.productsAvailable) ? true: false} onClick={this.handleAddToCart}>+</button>
                {this.state.shoppingCart > 0 && <button className="buy" onClick={this.handleBuy}>Buy</button>}
            </>)
    }
}




ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));