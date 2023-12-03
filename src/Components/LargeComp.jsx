import PropTypes from 'prop-types';
import "./LargeComp.modules.css";
import Button from 'react-bootstrap/Button';

function LargeComp(props) {
  let color = props.color;
  let namecolor = props.nameColor;

  return (
    <div className='large_container'>
      <h1 className='large_header' style={{ color: namecolor }}>{props.name}</h1>
      <p className='large_para'>{props.desc}</p>
      <div>
        {props.button && <Button variant="dark" className='large_button'>{props.button}</Button>}
        {props.link && <span className='large_link' style={{ color: color }}>{props.link} →</span>}
      </div>
      {props.image && <img className='large_img' alt="heneeened" src={props.image}/>} 

      {/* Mapping over testimonials */}
      <center>
      <div className='large_testmonials'>
        {props.testimonials && props.testimonials.length > 0 && props.testimonials.map((testimonial, index) => (
          <div key={index}>
            <h3>&quot;{testimonial.desc}&quot;</h3>
            <h6>{testimonial.name}</h6>
            <p> ({testimonial.org})</p>
          </div>
        ))}
      </div>
      </center>
    </div>
  );
}

LargeComp.propTypes = {
  name: PropTypes.string,
  nameColor: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  button: PropTypes.string,
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    desc: PropTypes.string,
    name: PropTypes.string,
    org: PropTypes.string
  }))
};

export default LargeComp;
