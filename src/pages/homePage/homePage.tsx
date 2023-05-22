import React from 'react'
import Imagesplace from './imagePlace'
import Logoplace from './logoPlace'
import Menunav from './menuNav'


function HomePage() {

  
  return (
    <div className="mainpagefull">
      <div className="top-part">
        <div className="header-logo">
          <div className="fixlogopls">
            <Logoplace.Logo height={60} width={150} />
            </div>
           
           <div className="header-span">
             <h2>About</h2>
             <h2>Services</h2>
             <h2>Projects</h2>
             <button>Contact</button>
          </div>
          <div className="menu-moblie">
             <Menunav/>
          </div>
       </div>
       <div className="centering-midp">
         <span>WE ARE CREATIVES </span>
         <Logoplace.Arrow className="arrowx"/>
       </div>
    </div>
      {/* first part is done */}
      
    <div className="secpart">
      <div className="secondpart-left">
          <div className="textsec-left">
            <h1>Transform your brand</h1>
            <p>We are a full-serivce creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
            <span>Learn more</span>
          </div> 
      </div>
      <div className="secondpart-right">
        <img src={Imagesplace.Egg} alt="egg-pic" />
      </div>
    </div>
      {/* second part is done 1/2 */}

    <div className="secparts">
      <div className="secondpart-right">
        <img src={Imagesplace.junior_cup} alt="cup-pic"/>
      </div>
      <div className="secondpart-left">
        <div className="textsec-left">
          <h1>Stand out to the light audience</h1>
          <p>We are a full-serivce creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
          <span>Learn more</span>
          </div>
      </div>
    </div>
    {/* second part is done 2/2 */}
    
    <div className="thirdpart">
        {/* <div className="thirdpart-left">
          <img src={Imagesplace.Leftpic} alt="graphic-design"/>
        </div> */}
        <div className="thirdpart-left">
          <h1>Graphic Design</h1>
          <p>Great disign makes you memorale. We deliver artwork that
             underscores your brand message and captures potential clinets attention.</p>
        </div>
        <div className="thirdpart-right">
          {/* <img src={Imagesplace.Rightpic} alt="photography"/> */}
          <h1>Photography</h1>
          <p>Increase your credibility by getting the most stunning, high-quality photos
            that import your business images.
          </p>
        </div>
    </div>
    {/* third part is done*/}

    <div className="fourthpart">
      <div className="four-head">
        <h1>CLIENT TESTIMONIALS</h1>
      </div>
      <div className="four-content">
        <div className="clients">
            <img src={Imagesplace.Emilypic} alt="emily-pic"/>
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h2>Emily R.</h2>
            <span>Marketing Director</span>
        </div>
        <div className="clients">
            <img src={Imagesplace.Thomaspic} alt="thomas-pic"/>
            <p>Sunnyside's enthusiasm coupled with thier keen interrest in our brand's success made it a satisfying and enjoyable experience</p>
            <h2>Thomas S.</h2>
            <span>Chief Oprating Officer</span>
        </div>
        <div className="clients">
            <img src={Imagesplace.jenniepic} alt="jenneie-pic"/>
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <h2>Jennie F.</h2>
            <span>Business Owner</span>
        </div>
      </div>
    </div>
    {/* fourth part needs pic size fixing*/}

    <div className="fifthpart">
      <div className="fiftpartpic">
         <img src={Imagesplace.Milk} alt="milk-pic"/>
      </div>
      <div className="fiftpartpic">
         <img src={Imagesplace.Orange} alt="orange-pic"/>
      </div>
      <div className="fiftpartpic">
         <img src={Imagesplace.Cone} alt="cone-pic"/>
      </div>
      <div className="fiftpartpic">
         <img src={Imagesplace.Sugar} alt="sugar-pic"/>
      </div>
    </div>
    {/* fifth part needs pic size fixing its 90% width*/}

    <div className="sixthpart">
      <div className="sixthpartlogo"><Logoplace.Logo/></div>
      <div className="sixthpartlist">
        <h2 className="lastlist">About</h2>
        <h2 className="lastlist">Services</h2>
        <h2 className="lastlist">Projects</h2>
      </div>
      <div className="smlogo">
        <div className="smlogofix">
          <Logoplace.Facelogo/>
        </div>
        <div className="smlogofix"> 
          <Logoplace.Instalogo/>
        </div>   
        <div className="smlogofix">
        <Logoplace.Twitterlogo/>
        </div>  
        <div className="smlogofix">
          <Logoplace.Pinterestlogo/>
          </div>  
      </div>
    </div>
 
  </div>
  )
}

export default HomePage