import React, { Component } from 'react'
import Button from '../Common/Button.js'

class Cart extends Component {

	render () {
		let cartStyle={
            width: 'inherit',
            height: 200,
            backgroundColor: 'lightgreen',
            textAlign: 'center'
        };

        let centerRowStyle = {
        	marginLeft: 300,
        	textAlign: 'left'
        };

        let tableCellStyle = {
    	    textAlign : 'left',
    	    padding : 8
        };

        let total = 0;

		let addButtonStyle = {
			width : 100,
			height : 25,
			backgroundColor : 'lightgreen'
		};

		let minusButtonStyle = {
			width : 100,
			height : 25,
			backgroundColor : 'lightred'
		};

		return (
			<div style={cartStyle}>
				<h2>Cart Summary</h2>
				<table style={centerRowStyle}>
					<thead>
						<tr>
							<td style={tableCellStyle}>Name</td>
							<td style={tableCellStyle}>Quantity</td>
							<td style={tableCellStyle}>Add</td>
							<td style={tableCellStyle}>Remove</td>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.cart).map(
							(key) => {
								let item = this.props.cart[key];
								total+=parseFloat(item.price);
								return (
									<tr key={key}>
										<td style={tableCellStyle}>
											{item.name}
										</td>
										<td style={tableCellStyle}>
											{item.quantity}
										</td>
										<td style={tableCellStyle}>
											<Button
												func={() => this.props.updateCart(item.sku, 1)}
												name="++"
												style={addButtonStyle}
											/>
										</td>
										<td style={tableCellStyle}>
											<Button
												func={() => this.props.updateCard(item.sku, -1)}
												name="--"
												style={minusButtonStyle}
											/>
										</td>
									</tr>
								);
							} /*item func */
						)}
					</tbody>
				</table>
				<br/>
				<hr/>
				<div style={centerRowStyle}>
					Total: ${total}
				</div>
			</div>
		)
	}
}


export default Cart;
