import PropTypes from 'prop-types';

const ResetBtn = (props) => {
  const handleBtn = (e) => {
    e.preventDefault();
    props.setLists([]);
  }
  
  return (
    <button 
      type="button" 
      className="btn btn-primary"
      onClick={(e) => {handleBtn(e)}}
    >
      Reset Table
    </button>
  );
};

ResetBtn.propTypes = {
  setList: PropTypes.func, 
};

export default ResetBtn;