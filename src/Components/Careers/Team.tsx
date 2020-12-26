import React, {useState} from 'react'
import "../../styles/Careers/Team.css"

const Team: React.FC = (): JSX.Element => {

    const [teamState, setTeamState] = useState("all")
    return (
        <div className="team">
            <h1>
                <span>Our</span>
                <span>Awesome Team</span>
            </h1>
            <div className="team__select">
                <div className={teamState === "all" ? "team__option active" : "team__option"}
                onClick={() => setTeamState("all")}>All</div>
                <div className={teamState === "designers" ? "team__option active" : "team__option"}
                onClick={() => setTeamState("designers")}>Designers</div>
                <div className={teamState === "developers" ? "team__option active" : "team__option"}
                onClick={() => setTeamState("developers")}>Developers</div>
            </div>
            <div className="team__members">
                {(teamState === "all")  && <>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba40653560382_George%202.png" alt="employee"/>
                    <h2>George</h2>
                    <p>Leading Team</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba458a65603a2_b-1.png" width="200" height="200" sizes="160px" alt="employee"/>
                    <h2>Katlyn</h2>
                    <p>Human Relationships</p>
                </div>
                </>}
                {(teamState === "all" || teamState === "designers") && <>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4cc3956038a_image%2011.png" width="200" height="200" alt="employee" />
                    <h2>Oguz Yakiz Kara</h2>
                    <p>Architecting Innovation</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba45da1560394_image%2017.png" width="200" height="200" alt="employee" />
                    <h2>Husayin Gayiran</h2>
                    <p>Curating Foundational Design</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba44c0b56039a_bu%CC%88yu%CC%88k%20ers%CC%A7ad%20hover.png" width="200" height="200" alt="employee" />
                    <h2>Ersad Basbag</h2>
                    <p>Cultivating Branding</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba499995603c0_image%2051.png" alt="employee" />
                    <h2>Rob Juarez</h2>
                    <p>Designing Life in Motion</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba44c585603c6_image%2037.png"  alt="employee" />
                    <h2>Aziz Ghaus</h2>
                    <p>3D and CGI Direction</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba47a7e5603d0_image_56-2-removebg-preview.png"  alt="employee" />
                    <h2>Adrian Compognelle</h2>
                    <p>Expressing in Motion</p>
                </div>
                </>}
                {(teamState === "all" || teamState === "developers") && <>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6ca23f4d866e484d796940_image%20197.png" width="200" height="200" alt="employee" />
                    <h2>Ekrem Kenter</h2>
                    <p>Architecting Scalability</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba41c055603a8_c.png" width="212" height="213" alt="employee" />
                    <h2>Filipe Oliviera</h2>
                    <p>Enhancing Architectural Structure</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba455c75603ae_image%2029.png" alt="employee" />
                    <h2>Artem Smirnov</h2>
                    <p>Styling to Pixel Perfectionm</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b6f230c90bd1dac704cdf_image%20195.png" alt="employee" />
                    <h2>Anh Nguyen</h2>
                    <p>Scaling Infrastructure</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6ca2ae4a162231eeb62b3e_image%20199.png" alt="employee" />
                    <h2>Michael Lyteq</h2>
                    <p>Solving Backend Problems</p>
                </div>
                <div className="team__member">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6ca32dd2479b2b1f3b5bba_image%2035.png" alt="employee" />
                    <h2>Michael Glazyrin</h2>
                    <p>Showcasing Innovation</p>
                </div>
                </>}
            </div>
        </div>
    )
}

export default Team
