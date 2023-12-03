import PropTypes from 'prop-types';
import "./GridContainer.modules.css"
function GridContainer(props) {
    
  let namecolor = props.nameColor;
  return (
    <div className='gid_container'>
            <h1 style={{ color: namecolor }}>{props.name} </h1>
            <p>{props.desc} </p>
            {/* <h1>{props.color}</h1> */}
    </div>
  )
}

GridContainer.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    nameColor: PropTypes.string
  };
  
export default GridContainer
// "rgb(59, 131, 203)"