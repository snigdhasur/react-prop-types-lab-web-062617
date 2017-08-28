// Code Product Component Here
// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';
 
class Product extends React.Component {
 
  render() {
    return (
      <div className="product">
        <ul>{this.props.name}:
          <li>Producer: {this.props.producer}</li>
          <li>Watermark present?: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}
 
Product.defaultProps = {
  hasWatermark: false,
  size: 'regular'
};
 

function weightChecker(props, propName, componentName) {
    if(props[propName]){
      let value = props[propName]
	    if(typeof value === 'number') {
	        return (value >= 80 && value <= 300) ? null : new Error(propName + ' in ' + componentName + " must be between 80 and 300");
	    } else {
        return new Error(
          propName + ' in ' + componentName + " must be a number"
      )
      }
	} else {
		return new Error(
			propName + ' in ' + componentName + " is required"
			)
	}
}

// this first checks to see if the prop exists [makes sure it is required, otherwise throws error messag]e
// the it checks if it's a number; if it's not, it throws an error message
// then checks if IT IS a number, is it withint eh range we want, otherwise throws an error message
// null means everything is fine :)



Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
	weight: weightChecker
};

export default Product;