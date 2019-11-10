import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneItem} from '../store/item'
import {addItem} from '../store/cart'

class SingleItem extends Component {
  componentDidMount() {
    this.props.fetchOneItem(this.props.match.params.id)
  }

  render() {
    const item = this.props.item
    console.log(item)
    if (item.name) {
      return (
        <main>
          <div>
            <h3>{item.name}</h3>
            <img height="100px" width="100px" src={item.imageUrl} />
            <h3>description:</h3>
            <p>{item.description}</p>
            <h4>price: {item.price}</h4>

            <button type="submit" onClick={() => this.props.addItem(item)}>
              add to cart
            </button>
          </div>
        </main>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemsReducer.singleItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneItem: id => dispatch(fetchOneItem(id)),
    addItem: addedItem => dispatch(addItem(addedItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
