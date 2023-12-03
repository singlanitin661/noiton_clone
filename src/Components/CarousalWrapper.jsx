import './CarouselWrapper.modules.css'
import SmallComp from './SmallComp' ;
import PropTypes from 'prop-types'; 


const CarousalWrapper = (props) => {
  return (
    <div className="container">
        <div className={"component " + (props.index === 0 ? "active" : "")}>
            <SmallComp name={"AI"} desc={"Ask literally anything. Notion will answer."} link={"Learn More"} color={"rgb(145, 59, 210)"}/>
        </div>
        <div className={"component " + (props.index === 1 ? "active" : "")}>
        <SmallComp name={"Wikis"} desc={"Centralize your knowledge.No more hunting for answers."} link={"Learn More"} color={"rgb(217, 89, 75)"}/>
        </div>
        <div className={"component " + (props.index === 2 ? "active" : "")}>
        <SmallComp name={"Pojects"} desc={"Manage complex projects without the chaos."} link={"Learn More"} color={"rgb(59, 131, 203)"}/>
        
        </div>
        <div className={"component " + (props.index === 3 ? "active" : "")}>
        <SmallComp name={"Docs"} desc={"Simple, powerful, beautiful. Next Gen notes & docs"} link={"Learn More"} color={"rgb(146, 104, 32)"}/>
        
        </div>
    </div>
  )
}
CarousalWrapper.propTypes = {
  index: PropTypes.number.isRequired
};



export default CarousalWrapper
