const suppliesList = [
	{
		item: 'Cola',
		brand: 'Coca Cola',
		units: '12 Pack',
		quantity: 1,
		price: 9.99,
		isPurchased: false,
	} ,
	{
		item: 'Cat Food',
		brand: 'Fancy Feast',
		units: '5 lb',
		quantity: 1,
		price: 12.99,
		isPurchased: false,
	} ,
	{
		item: 'Dish Detergent',
		brand: 'Dawn',
		units: '2 Liters',
		quantity: 1,
		price: 14.99,
		isPurchased: true,
	} 
];

class App extends React.Component {

    state = {
        supplies: suppliesList,
        item: '',
        units: '',
		quantity: 0,
		price: 0,
		isPurchased: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            item: this.state.name,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity, 
            isPurchased: this.state.isPurchased
        }

        this.setState({
            supplies: [newItem, ...this.state.supplies], 
            item: '',
            brand: '',
            units: '', 
            quantity: 0,
            isPurchased: true
        })
    }

	render() {
		return (
            <div>
                <h1>Groceries List</h1>

                <div id='add-supplies'>
                    <form onSubmit={this.handleSubmit}>
                            <label htmlFor='item'>Item:</label>
                            <input id='item' type='text' value={this.state.item} onChange={this.handleChange} /><br></br>
                            
                            <label htmlFor='brand'>Brand:</label>
                            <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} /><br></br>
                    
                            <label htmlFor='units'>Units:</label>     
                            <input id='units' type='text' value={this.state.units} onChange={this.handleChange} /><br></br>
                            
                            <label htmlFor='quantity'>Quantity:</label>   
                            <input id='quantity' type='number' value={this.state.quantity} onChange={this.handleChange} /><br></br>
                            
                            <input type='submit' />
                    </form>
                </div>

                <div className='currentList'>
                    <div>
                        <h2>Current Grocery List</h2>
                        <ul>
                            {
                                this.state.supplies.map(listItem => {
                                    return (
                                        <li>{listItem.item} {listItem.quantity} {listItem.units}</li> 
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='purchasedList'>
                        <h2>Purchased Grocery Items </h2>
                        <ul>
                            {
                                this.state.supplies.map(listItem => {
                                    return (
                                        // if isPurchased is true then display listITem under Purchased List
                                        <p>{listItem.isPurchased? <p> {listItem.item} </p>: null}</p> 
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>

            </div>

        )
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));