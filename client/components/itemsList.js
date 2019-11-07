import React from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'
import ItemCard from './itemCard'

class ItemsList extends React.Component {
  componentDidMount() {
    this.props.fetchAllItems()
  }
  render() {
    const items = this.props.items
    console.log(items)

    return (
      <div>
        {/* {items.map(item => {
            return (
            <ItemCard key={item.id} item={item} />
          )})} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.items)
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: () => dispatch(fetchAllItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)