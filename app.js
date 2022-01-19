
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

    render() {
        return (
            <>
                <button disabled={this.state.shoppingCart ? false: true} onClick={this.handleRemoveFromCart}>-</button>
                <span> {this.state.shoppingCart} </span>
                <button disabled={(this.state.shoppingCart === this.state.productsAvailable) ? true: false} onClick={this.handleAddToCart}>+</button>
            </>)
    }
}




ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));