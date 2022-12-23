import React from 'react'

function Grocery () {
  const items = [
    {id:1,name:'milk',isgrocery:true},
    {id:2,name:'notepad',isgrocery:false},
    {id:3,name:'eggs',isgrocery:true},
    {id:4,name:'bread',isgrocery:true},
    {id:5,name:'biscuits',isgrocery:true},
    {id:6,name:'pencil',isgrocery:false}
  ];
  const listofitems = items.map((item) => <li key={item.id}
                          style={{color:item.isgrocery ? "purple" : "darkgreen"}}
                          > 
                          {item.name} </li>);
  return (
    <ul> {listofitems} </ul>
  );
}
export default Grocery;