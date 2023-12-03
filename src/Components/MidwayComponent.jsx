import {LinksMidWay} from "./Links";
import "./MidwayComonent.modules.css";
import PropTypes from 'prop-types';

const Component1 = () =>{
    return(
        <div className="House-component">
            <img className="house" src={LinksMidWay.images.House} alt="House"></img>
            < h3>Company Wiki</ h3>
            <div className="GetTemplate">
                <a href="https://www.notion.so/template" className="midway_anchor">Get Template</a>
            </div>
            <img className="House2" src={LinksMidWay.images.HouseComponent} alt="Noting"></img>
        </div>
    )
}

const MidWayCards = (props) => {
    return(
        <div className="OrdinaryCards">
            <img className="MidWayCardImage" src={props.image}></img>
            < h3>{props.name}</ h3>
            <div className="MidWayCardText">
                <a href="https://www.notion.so/templates" className="midway_anchor"> Get Template</a>
            </div>
        </div>
    )
}
MidWayCards.propTypes={
    name: PropTypes.string,
    image: PropTypes.string,
}


const Component2 = () =>{
    return(
        <div className="MidWayCoponent2">
            <MidWayCards image={LinksMidWay.images.flag} name="Product Roadmap"></MidWayCards>
            <MidWayCards image={LinksMidWay.images.meeting} name="Meeting Notes"></MidWayCards>
            <MidWayCards image={LinksMidWay.images.calendar} name="Editorial Calendars"></MidWayCards>

        </div>
    )
}

const Component3 = () =>{
    return(
        <div className="MidWayCoponent3">
            <MidWayCards image={LinksMidWay.images.okr} name="OKR's"></MidWayCards>
            <MidWayCards image={LinksMidWay.images.vacation} name="Vaccation Planner"></MidWayCards>
            <MidWayCards image={LinksMidWay.images.tracker} name="Habbit Tracker"></MidWayCards>

        </div>
    )
}
const MidwayComponent = () => {
    return( 
    <center>
        <div className="Midway">
            <div className="Mid-upper">
                <div className="Mid-upper-left">
                    <h1 className="midway_heading"> Endless ways to use it </h1>
                    <a href="https://www.notion.so/templates" className="midway_anchor"> Browse All templates</a>
                </div>
                <div className="Mid-upper-right">
                    <img src={LinksMidWay.images.children}></img>
                </div>
            </div>
            <div className="mid-lower">
                <div> <Component1/> </div>
                <div><Component2/> </div>
                <div ><Component3/> </div>
            </div>
        </div>
        
        </center>
    )
}

export default MidwayComponent ;