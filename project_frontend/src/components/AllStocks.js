import React, { Component } from 'react';
import AddStock from './AddStock';
import StockTape from './StockTape';
import StockCard from './StockCard';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/stockActions';



class AllStocks extends Component {

  componentDidMount() {
    this.props.fetchStocks()
}





  render() {
    console.log()
   
    return (
        <div> 
          <StockTape />          
          <AddStock />

          {this.props.stocks.map(stock => <StockCard key={stock.id} stock={stock}/>)}
       
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      fetchStocks: () => dispatch(fetchStocks())
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks,
    message: state.message
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStocks);