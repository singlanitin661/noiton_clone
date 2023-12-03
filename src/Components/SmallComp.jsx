import PropTypes from 'prop-types';
import "./SmallComp.modules.css";

function SmallComp(props) {
  let color = props.color;
  return (
    <div className='small_container'>
      <h5 className='small_header'>{props.name}</h5>
      <p className='small_para'>{props.desc}</p>
      {props.link && <p className='small_link' style={{ color: color }}>{props.link} →</p>}
      
    </div>
  );
}

SmallComp.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string
};

export default SmallComp;
