import React, { Component } from 'react';
import config from '../config';
import './Add.css';

export default class Add extends Component {

  // handleAdd = () => {
  //   let url = `${config.API_ENDPOINT}/api/items`;
  //   // let newJsonItem = JSON.stringify({
  //   //   item_name:
  //   //     ingredient_one:
  //   //   ingredient_two:
  //   //     ingredient_three:
  //   //   ingredient_four:
  //   //     ingredient_five:
  //   //   ingredient_six:
  //   //     sell_price:
  //   //   item_type:
  //   //     tag_one:
  //   //   tag_two:
  //   //     tag_three:
  //   // })
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: newJsonItem
  //   })
  // }


  render() {
    return (
      <form
        id='form'
      // onSubmit={this.handleAdd}
      >
        <label
          htmlFor='item-name'>
          Name:
          </label>
        <input
          type='text'
          name='input'
          id='item-name'
          placeholder='slingshot'>
        </input>
        <label
          htmlFor='item-ingredients'>
          Ingredients to create item:
          </label>
        <input
          type='text'
          name='ingredient-one'
          id='item-ingredients'
          placeholder='slingshot'>
        </input>
        {/* <input
          type='text'
          name='ingredient-two'
          id='item-ingredients'
          placeholder='slingshot'>
        </input>
        <input
          type='text'
          name='ingredient-three'
          id='item-ingredients'
          placeholder='slingshot'>
        </input>
        <input
          type='text'
          name='ingredient-four'
          id='item-ingredients'
          placeholder='slingshot'>
        </input>
        <input
          type='text'
          name='ingredient-five'
          id='item-ingredients'
          placeholder='slingshot'>
        </input>
        <input
          type='text'
          name='ingredient-six'
          id='item-ingredients'
          placeholder='slingshot'>
        </input> */}
        <label
          htmlFor='price'>
          Selling price:
          </label>
        <input
          type='text'
          id='price'
          name='sell-price'
          placeholder='500'>
          bells
        </input>
        <label
          htmlFor='type'>
          Item type:
          </label>
        <select
          id='price'
          name='item-type'>
          {this.generateItemTypes()}
        </select>
        <label
          htmlFor='tags'>
          Tags:
          </label>
        <input
          type='text'
          id='tags'
          name='tag-one'
          placeholder='indoor decor'>
        </input>
        <input
          type='text'
          id='tags'
          name='tag-two'
          placeholder='furniture'>
        </input>
        <input
          type='text'
          id='tags'
          name='tag-three'>
        </input>
      </form>
    )
  }

}