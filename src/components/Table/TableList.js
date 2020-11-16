import './tableList.css';
import PropTypes from 'prop-types';

const TableList = (props) => {
  console.log('Table list: ', props.lists)
  return (   
    <table className='table table-hover"'>
      <thead className="thead-dark">
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {props.lists.length === 0 ?
          <tr>
            <td colSpan="3">
              No data available
            </td>            
          </tr>         
          :
          props.lists.map((list, idx) => {
          return (
            <tr key={idx}>
              <th scope="row">{idx+1}</th>
              <td>{list.item}</td>
              <td>{list.count}</td>
            </tr>
          );        
          })
        }
      </tbody>                
    </table>    
  )
};

TableList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
    item: PropTypes.string,
    count: PropTypes.number,
    })
  ),
};

TableList.defaultProps = {
  lists: [],
};

export default TableList;