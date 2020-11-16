import './inputSubmit.css';
import React from 'react';
import PropTypes from 'prop-types';

const InputSubmit = (props) => {

  const handleChange = (e) => {
    // console.log('Item: ', e.target.value)
    props.setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var msgOut;

    console.log('lists: ', props.lists);
    
    const newList = {};
    newList.item = props.item;
    newList.count = props.count;
    console.log('new list: ', newList)

    props.lists.push(newList);
    console.log('newLists: ', props.lists)

    props.setLists(props.lists);
    props.setCount(0);
    props.setItem('');
    props.setShowMsg('show');    

    clearTimeout(msgOut);
    msgOut = setTimeout(() => {props.setShowMsg('')}, 5000);    
  };

  const handleError = (e) => {
    e.preventDefault();
    alert("Please, enter valid item name!");
  };

  return (
    <form className='form' 
      onSubmit={(e) => 
        {props.item === '' ? handleError(e) : handleSubmit(e)}
      }
    >
      <label>
        <input type='text' value={props.item} onChange={(e) => handleChange(e)} />
      </label>
      {/* <input className='primary' type='submit' value='ADD'/> */}
      <button type="submit" className="btn btn-primary">ADD</button>
    </form>
  );
}

InputSubmit.propTypes = {
  item: PropTypes.string,
  count: PropTypes.number,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
    item: PropTypes.string,
    count: PropTypes.number,
    })
  ),
  setLists: PropTypes.func,
  setCount: PropTypes.func,
  setItem: PropTypes.func,
  setShowMsg: PropTypes.func, 
};

InputSubmit.defaultProps = {
  item: '',
  count: 0,
  lists: [],
};

export default InputSubmit;