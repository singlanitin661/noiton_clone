import {links} from "./Links";
import "./Footer.modules.css";
import PropTypes from 'prop-types';

const NotionComponent =() =>{
    return(
        <div className="notion-container">
            <div className="notion-Main">
                <div>
                    <a   href="https://www.notion.so/">
                        <img className="NotionLogo"src={links.Images.Notion} alt="NotionLogo"></img>
                    </a>
                </div>
                <div style={{"align-tems" : "center", "padding" : "15px", "font-size" : "larger", "font-weight" : "bold", "color":"black"}}>
                    <a   href="https://www.notion.so">
                        Notion
                    </a>
                </div>
            </div>
            <div className="SocialHandles-container">
                        <a  href="https://www.instagram.com">
                            <img className="SocialHandles" src={links.Images.Instagram} alt="Instagram"></img>
                        </a>

                        <a   href="https://www.x.com">
                            <img className="SocialHandles" src={links.Images.Twitter} alt="Twitter"></img>
                        </a>

                        <a   href="https://www.facebook.com">
                            <img className="SocialHandles" src={links.Images.Facebook} alt="Facebook"></img>
                        </a>

                        <a   href="https://www.youtube.com">
                            <img className="SocialHandles" src={links.Images.Youtube} alt="Youtube"></img>
                        </a>
            </div>
        </div>
    )
}


const ListChild = (props) => {
    return(
        <a href={props.link}  >
            <div className="Footer-anchor">
                {props.Name}
            </div>
        </a>
    )
}
ListChild.propTypes={
    Name: PropTypes.string,
    link: PropTypes.link,
}
const ProductComponent = () => {
    const Product = [
        {"Name" : "Wikis",
        "link" : "https://www.dummy-url.com"
        },
        {"Name" : "Projects",
        "link" : "https://www.dummy-url.com"
        },
        {"Name" : "Docs",
        "link" : "https://www.dummy-url.com"
        },
        {"Name" : "Notion AI",
        "link" : "https://www.dummy-url.com"
        },
        {"Name" : "What's New",
        "link" : "https://www.dummy-url.com"
        }
    
    ]
    return(
        <div className="PSComponent">
            <div className="Text-styler">Product</div>
            {
                <div className="container-styler">
                  {Product.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )
}




const SolutionComponent = () => {
    const Solution = [
        { Name: 'Enterprise', link: 'https://www.example.com/enterprise' },
        { Name: 'Small business', link: 'https://www.example.com/small-business' },
        { Name: 'Personal use', link: 'https://www.example.com/personal-use' },
        { Name: 'Remote work', link: 'https://www.example.com/remote-work' },
        { Name: 'Startups', link: 'https://www.example.com/startups' },
        { Name: 'Education', link: 'https://www.example.com/education' },
        { Name: 'Nonprofits', link: 'https://www.example.com/nonprofits' },
        { Name: 'Engineering', link: 'https://www.example.com/engineering' },
        { Name: 'Product', link: 'https://www.example.com/product' },
        { Name: 'Design', link: 'https://www.example.com/design' },
        { Name: 'Managers', link: 'https://www.example.com/managers' },
    ];
    return(
        <div className="SolutionComponent">
            <div className="Text-styler">Solutions</div>
            {
                <div className="container-styler">
                  {Solution.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )
}

const DownloadComponent = () => {
    const PlatformTypes = [
        { Name: 'iOS & Android', link: 'https://www.example.com/ios-android' },
        { Name: 'Mac & Windows', link: 'https://www.example.com/mac-windows' },
        { Name: 'Web Clipper', link: 'https://www.example.com/web-clipper' },
      ];
    return(
        <div className="DownloadComponent">
            <div className="Text-styler">Download</div>
            {
                <div className="container-styler">
                  {PlatformTypes.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )
      
}

const BuildComponents = () =>{
    const OtherOptions = [
        { Name: 'Integrations', link: 'https://www.example.com/integrations' },
        { Name: 'Templates', link: 'https://www.example.com/templates' },
        { Name: 'API docs', link: 'https://www.example.com/api-docs' },
        { Name: 'Guides & tutorials', link: 'https://www.example.com/guides-tutorials' },
        { Name: 'Hire a consultant', link: 'https://www.example.com/hire-consultant' },
        { Name: 'Become an affiliate', link: 'https://www.example.com/become-affiliate' },
      ];

    return(
        <div className="BuildComponents">
            <div className="Text-styler">Build</div>
            {
                <div className="container-styler">
                  {OtherOptions.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )
      
}



const LearnComponents = () =>{
    const Learn = [
        { Name: 'Customer stories', link: 'https://www.example.com/customer-stories' },
        { Name: 'Help center', link: 'https://www.example.com/help-center' },
        { Name: 'Webinars', link: 'https://www.example.com/webinars' },
        { Name: 'Blog', link: 'https://www.example.com/blog' },
        { Name: 'Community', link: 'https://www.example.com/community' },
      ];

      return(
        <div className="LearnComponents">
            <div className="Text-styler">Learn</div>
            {
                <div className="container-styler">
                  {Learn.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )
      
}

const GetStartedComponent =()=>{
    const GetStarted = [
        { Name: 'Switch from Confluence', link: 'https://www.example.com/switch-confluence' },
        { Name: 'Switch from Asana', link: 'https://www.example.com/switch-asana' },
        { Name: 'Switch from Evernote', link: 'https://www.example.com/switch-evernote' },
        { Name: 'Compare vs Monday', link: 'https://www.example.com/compare-monday' },
        { Name: 'Compare vs Clickup', link: 'https://www.example.com/compare-clickup' },
        { Name: 'Compare vs Jira', link: 'https://www.example.com/compare-jira' },
      ];

      return(
        <div className="LearnComponents">
            <div className="Text-styler">Get Started</div>
            {
                <div className="container-styler">
                  {GetStarted.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )      
}

const ResourcesComponents = () =>{
    const Resource = [
        { Name: 'Pricing', link: 'https://www.example.com/pricing' },
        { Name: 'About us', link: 'https://www.example.com/about-us' },
        { Name: 'Careers', link: 'https://www.example.com/careers' },
        { Name: 'Media kit', link: 'https://www.example.com/media-kit' },
        { Name: 'Email us', link: 'mailto:info@example.com' },
        { Name: 'Security', link: 'https://www.example.com/security' },
      ];

      return(
        <div className="LearnComponents">
            <div className="Text-styler">Resource</div>
            {
                <div className="container-styler">
                  {Resource.map((product, index) => (
                    <ListChild key={index} {...product} />
                  ))}
                </div>   
            }
        </div>
    )      
      
}

const Footer=()=>{
    return(
        <div>
            <div className="footer">
            <div className="outer">
                <NotionComponent/>
            </div>

            <div className="outer">
                <div className="inner">
                    <ProductComponent/>
                </div>

                <div className="inner">
                    <SolutionComponent/>
                </div>
            </div>

            <div className="outer">
                <div className="inner">
                    <DownloadComponent/>
                </div>
                <div className="inner">
                    <BuildComponents/>
                </div>
                <div className="inner">
                    <LearnComponents></LearnComponents>
                </div>
            </div>

            <div className="outer">
                <div className="inner">
                    <GetStartedComponent></GetStartedComponent>
                </div>
                <div className="inner">
                    <ResourcesComponents></ResourcesComponents>
                </div>
            </div>
            
        </div>
        </div>
    );
}
export default Footer ;
