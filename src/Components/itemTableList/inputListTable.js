import React from 'react';
import {ItemsListPointer} from '../../Data/itemsList';
import Item from './item';

export default function inputListTable() {
  const items = ItemsListPointer()
  return (
    <div >
      {items.length>0?
        <table className="table caption-top text-white">
          <caption>List of Items</caption>
          <thead>
            <tr className='row my-n1'>
              <th scope="col" className='col-5'>Name</th>
              <th scope="col" className='col-7'>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((itemI) => <Item itemPtr={itemI} key={itemI.id}/>)}
          </tbody>
        </table>
      :<></>}
    </div>
  )
}
