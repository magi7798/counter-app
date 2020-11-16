import './counter.css';
import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  // const [count, setCount] = useState(0);

  return (
    <p className='counter'>
      <button className='button increment'onClick={() => props.setCount(props.count + 1)}>
        <span className="material-icons counter-button">
          expand_less
        </span>
      </button>
      <p className='counter-number'>
        {props.count}
      </p>
      {props.count === 0 ? '' 
      :
      <button className='button decreament' onClick={() => props.setCount(props.count - 1)}>
        <span className="material-icons counter-button">
          expand_more
        </span>
      </button>}      
    </p>
  )
};

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;