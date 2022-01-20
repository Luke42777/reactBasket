
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

        const {shoppingCart,productsAvailable} = this.state;
        const style = shoppingCart === 0 ? {opacity: 0.3} : {};
        return (
            <>
                <button disabled={shoppingCart ? false: true} onClick={this.handleRemoveFromCart}>-</button>
                <span style={style}> {shoppingCart} </span>
                <button disabled={(shoppingCart === productsAvailable) ? true: false} onClick={this.handleAddToCart}>+</button>
                {shoppingCart > 0 && <button className="buy" onClick={this.handleBuy}>Buy</button>}
            </>)
    }
}




ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));