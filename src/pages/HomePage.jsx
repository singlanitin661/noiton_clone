import "./HomePage.modules.css";
import NavScrollExample from "../Components/NavScrollExample";
import Button from "react-bootstrap/Button";
// import Grid from "../Components/Grid"
import DarkVariantExample from '../Components/DarkVariantExample';
import home_img_1 from "../assets/images/home_img_1.png";
import LargeComp from "../Components/LargeComp";
import home_img_2 from "../assets/images/home_img_2.png";
import home_img_3 from "../assets/images/home_img_3.png";
import home_img_4 from "../assets/images/home_img_4.png";
import Footer from "../Components/Footer";
import MidwayComponent from "../Components/MidwayComponent";

function HomePage() {
  return (
    <>
      <NavScrollExample/>
      <div className="description">
        <h1 className="heading">Write, plan, share.</h1>
        <h1 className="heading">With AI at your side.</h1>
        <h3 className="label">
          Notion is the connected workspace where better, faster work happens.
        </h3>
        <Button variant="dark">Get Notion free →</Button>
        <img src={home_img_1} />
      </div>
      <div><DarkVariantExample/></div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div>
        <LargeComp
          name={"Millions run on Notion every day"}
          desc={
            "Powering the world’s best teams, from next-generation startups to established enterprises."
          }
          link={"Read customer stories"}
          color={"skyblue"}
          image={home_img_2}
          testimonials={[
            {
              desc: "We got rid of nearly a dozen different tools because of what Notion does for us",
              name: "Justin Watt",
              org: "Director of Ops & Marketing, MetaLab",
            },
          ]}
        />
      </div>
      <div>
        <LargeComp
          name={"Join a global movement. Unleash your creativity."}
          desc={"Our vibrant community produces content, teaches courses, and leads events all over the world."}
          link={"Learn more"}
          color={"skyblue"}
          image={home_img_4}
        />
      </div>
      <MidwayComponent/>
      <div>
        <LargeComp
          name={"Get started for free"}
          desc={"Play around with it first. Pay and add your team later."}
          link={"Request a demo"}
          color={"skyblue"}
          button={"Try notion Free"}
          image={home_img_3}
        />
      </div>
      {/* <Grid/> */}
      <hr/>
      <Footer/>
      <center>
      <div className="copyright">
        <span className="copyright_top">Do Not Sell or Share My Info</span>
        <br/>
        <span className="copyright_bottom">© 2023 Notion Labs, Inc</span>

      </div>
      </center>
    </>
  );
}

export default HomePage;
