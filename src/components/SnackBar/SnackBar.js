import './snackBar.css';
import PropTypes from 'prop-types';

const SnackBar = (props) => {
  console.log("show class: ", props.showMsg)

  // var msgOut = setTimeout(() => {props.setShowMsg('')}, 5000);

  const handleClick = () => {
    props.setShowMsg('');
    // clearTimeout(msgOut);
  };  

  return (
    <div id="snackbar" className={props.showMsg}>  
      This is a success message.
      <span>
        <button type="button" className="close" aria-label="Close" onClick={handleClick}>
          <span aria-hidden="true" style={{color: 'white'}}>&times;</span>
        </button>
      </span>     
    </div>
  );
}

SnackBar.propTypes = {
  showMsg: PropTypes.string,
  setShowMsq: PropTypes.func,
};

SnackBar.defaultProps = {
  showMsg: '',
};

export default SnackBar;