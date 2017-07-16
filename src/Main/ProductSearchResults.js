import React, { Component } from 'react';

class ProductSearchResults extends Component {

	constructor(props){
		super(props);
		this.state = {
			hoverItem: ''
		}
		this._handleHover = this._handleHover.bind(this);
	}
	

	_handleHover(hoverItem) {
		this.setState({hoverItem})
	}

	render () {
		let cartStyle = {
            backgroundColor : 'lightgray',
            margin : 'auto'
        };

        let itemStyle = {
        	width : 400
        }

        let hoverStyle = {
        	width : 400,
        	backgroundColor : 'pink'
        }

		return (
			<div style={cartStyle}>
				{
					Object.keys( this.props.searchResult).map( (key) => 
					{
						if ( key < 5) {
							let item = this.props.searchResult[key];
							return (
								<div>
									<input 
										type='text' 
										onMouseEnter={ () => this._handleHover(item.name) }
										style={ (item.name===this.state.hoverItem) ? hoverStyle : itemStyle } 
										key={key}
										value={ (item.name===this.state.hoverItem)? item.name + "                  press Enter" : item.name }
										disabled
									/>
									{'\n'}
								</div>
							)
						}
					})
				}				
			</div>
		)
	}
}

export default ProductSearchResults