import React, { Component } from 'react'
import Button from '../Common/Button.js'

class Cart extends Component {

	render (){
		let cartStyle={
            width: 'inherit',
            height: 200,
            backgroundColor: 'lightgreen',
            textAlign: 'center'
        };
        let centerRowStyle={
        	marginLeft: 300,
        	textAlign: 'left'
        }
        let tableCellStyle={
    	    textAlign: 'left',
    	    padding: 8
        }

        let total = 0;

		return (
			<div style={cartStyle}>
				<h2>Cart Summary</h2>
				<table centerRowStyle>
					<tr>
						<td style={tableCellStyle}>Name</td>
						<td style={tableCellStyle}>Quantity</td>
						<td style={tableCellStyle}>Add</td>
						<td style={tableCellStyle}>Remove</td>
					</tr>
					
						{this.props.cart.map( 
							(item) => {  
								{total+=parseFloat(item.price)}
								return (  
									<tr key={item.sku}>
										<td style={tableCellStyle}>{item.name}</td>
										<td style={tableCellStyle}>{item.quantity}</td>
										<td style={tableCellStyle}><Button name="++"/></td>
										<td style={tableCellStyle}><Button name="--"/></td>
									</tr> ) } 
								)
						}
					
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
