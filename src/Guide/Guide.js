import React, { Component } from 'react';
import config from '../config';
// import { v4 as uuidv4 } from 'uuid';
import './Guide.css';

// let starterData = [
//   {
//     id: uuidv4(),
//     item_name: 'Potted ivy',
//     ingredient_one: '5 clumps of weeds',
//     ingredient_two: '5 clay',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '1,100',
//     item_type: 'craft',
//     tag_one: 'plant',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Leaf umbrella',
//     ingredient_one: '15 clumps of weeds',
//     ingredient_two: '',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '300',
//     item_type: 'craft',
//     tag_one: 'accessory',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Hay bed',
//     ingredient_one: '20 clumps of weeds',
//     ingredient_two: '',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '400',
//     item_type: 'craft',
//     tag_one: 'outdoor decor',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Clump of weeds',
//     ingredient_one: '',
//     ingredient_two: '',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '10',
//     item_type: 'plant',
//     tag_one: '',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Ocarina',
//     ingredient_one: '5 clay',
//     ingredient_two: '',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '',
//     item_type: 'craft',
//     tag_one: 'instrument',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Recycled-can thumb piano',
//     ingredient_one: '1 empty can',
//     ingredient_two: '1 wood',
//     ingredient_three: '1 iron nugget',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '890',
//     item_type: 'craft',
//     tag_one: 'instrument',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Coconut tree',
//     ingredient_one: '',
//     ingredient_two: '',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '500',
//     item_type: 'tree',
//     tag_one: '',
//     tag_two: '',
//     tag_three: ''
//   },
//   {
//     id: uuidv4(),
//     item_name: 'Squid',
//     ingredient_one: '',
//     ingredient_two: '',
//     ingredient_three: '',
//     ingredient_four: '',
//     ingredient_five: '',
//     ingredient_six: '',
//     sells_for: '500',
//     item_type: 'fish',
//     tag_one: '',
//     tag_two: '',
//     tag_three: ''
//   },
// ]

export default class Guide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allItems: []
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    let url = `${config.API_ENDPOINT}/items`
    console.log('endpoint is', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('data is', data);
        this.setState({
          allItems: data
        });
      });

  }
  addStuff = () => {
    let itemsList = this.state.allItems;
    let addArr = []
    for (let i = 0; i < itemsList.length; i++) {
      addArr.push(
        [<div key={itemsList[i].id} className='grid-data-cell'>
          <div>{itemsList[i].item_name}</div>
        </div>],

        [<div key={itemsList[i].id} className='grid-data-cell'>
          <div>{itemsList[i].ingredient_one}, {itemsList[i].ingredient_two}, {itemsList[i].ingredient_three}</div>
        </div>],

        [<div key={itemsList[i].id} className='grid-data-cell'>
          <div>{itemsList[i].sells_for} bells</div>
        </div>],

        [<div key={itemsList[i].id} className='grid-data-cell'>
          <div>{itemsList[i].item_type}</div>
        </div>],

        [<div key={itemsList[i].id} className='grid-data-cell'>
          <div>{itemsList[i].tag_one}, {itemsList[i].tag_two}, {itemsList[i].tag_three}</div>
        </div>],
      )
    }
    return addArr;
  }

  render() {
    return (
      <div id='guide-parent'>
        <label htmlFor='sort-by'>Sort by: </label>
        <select
          id='sort-by'>
          <option value='item_name'>Item</option>
          <option value='sell_price'>Price</option>
          <option value='item_type'>Type</option>
        </select>
        <label htmlFor='search'>Search: </label>
        <input
          type='text' />
        <div
          id='grid-container'>
          <div className='grid-header bold' id='item'>Item</div>
          <div className='grid-header bold' id='ingredients'>Ingredients</div>
          <div className='grid-header bold' id='price'>Sell price</div>
          <div className='grid-header bold' id='type'>Type</div>
          <div className='grid-header bold' id='tags'>Tags</div>
          {this.state.allItems && this.addStuff()}
        </div>
      </div>

    );
  }
}