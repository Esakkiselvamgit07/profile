import React from 'react'
import './App.css'
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFlight } from "react-icons/md";

function Profile() {
  return (
    <div className='profile'>
      <div className='box1'>
        <div className='start'>
          <img src='/profrile.jpg' />

          <div>
            <h3>SMITH MATTHEW</h3>
            <p>Web developer</p>
          </div>
        </div>
        <div className='text'>
          <p> <i>< CiLocationOn /></i>Bolivar Street # 123-Lima Peru</p>
          <p> <i>< CgMail /></i>user@email.com</p>
          <p> <i>< BsTelephone /></i>999-2222-444</p>
        </div>
        <br />
        <div className='social'>
          <h4>S O C I A L</h4>
          <p> <i className='i'>< AiFillLinkedin /></i>@smithmat</p>
          <p> <i>< BiLogoFacebook /></i>@smithmat</p>
          <p> <i>< AiOutlineInstagram /></i>@smithmat</p>
        </div>
        <br />
        <div className='file'>
          <h4>P R O F I L E</h4>
          <p>I am a person, responsible with their work during working hours. Finish various technical and higher studies at large universities. I have several years of experience and achievements in the labor field.</p>
        </div>
        <div className='Education'>
          <h4>E D U C A T I ON</h4>
          <div className='edcon'>
            <div className='edimg'>
              <span className='edbul'></span>
              <span className='edline'></span>
            </div>
            <div className='edde'>
              <h5>MASTER OF DESIGN</h5>
              <span className='edname'>university of studies</span>
              <span className='edyear'>2010-2015</span>
            </div>
          </div>
          <div className='edcon'>
            <div className='edimg'>
              <span className='edbul'></span>
              <span className='edline'></span>
            </div>
            <div className='edde'>
              <h5>MASTER OF DESIGN</h5>
              <span className='edname'>university of studies</span>
              <span className='edyear'>2010-2015</span>
            </div>
          </div><div className='edcon'>
            <div className='edimg'>
              <span className='edbul'></span>
              {/* <span className='edline'></span> */}
            </div>
            <div className='edde'>
              <h5>MASTER OF DESIGN</h5>
              <span className='edname'>university of studies</span>
              <span className='edyear'>2010-2015</span>
            </div>
          </div>
        </div>
        <div className='skill'>
          <h4>S K I L L S</h4>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Angular</li>
            <li>Firebase</li>
            <li>React</li>
          </ul></div>
      </div>
      <div className='box2'>
        <div className='Education'>
          <h4>E X P E R I E N C E</h4>
          <div className='edcon'>
            <div className='edimg'>
              <span className='edbul'></span>
              <span className='edline'></span>
            </div>
            <div className='edde'>
              <h5>MASTER OF DESIGN</h5>
              <span className='edname'>university of studies</span>
              <span className='edyear'>2010-2015</span>
            </div>
          </div>
          <div className='edcon'>
            <div className='edimg'>
              <span className='edbul'></span>
              <span className='edline'></span>
            </div>
            <div className='edde'>
              <h5>MASTER OF DESIGN</h5>
              <span className='edname'>university of studies</span>
              <span className='edyear'>2010-2015</span>
            </div>
          </div><div className='edcon'>
            <div className='edimg'>
              <span className='edbul'></span>
              {/* <span className='edline'></span> */}
            </div>
            <div className='edde'>
              <h5>MASTER OF DESIGN</h5>
              <span className='edname'>university of studies</span>
              <span className='edyear'>2010-2015</span>
            </div>
          </div>
        </div>
        {/* <div className='Experience'>
              <h4>E X P E R I E N C E</h4>
           <div> <h5 >MASTER OF DESIGN</h5>
           <p>From 2013 to 2015 | Tech Soft<br />
            Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.
          </p></div>
          <div ><h5 >UI / UX DESIGN AREA</h5>
           <p >From 2017 to 2019 | Tech Soft<br />
            Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p></div>
          <div ><h5 >MOBILE APPLICATION DEVELOPER</h5><p >From 2019 to 2021 | Tech Soft<br />
            Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
          </div> */}
        {/* </div> */}
        <div className='certificates'>
          <h4>C E R T I F I C A T E S</h4>
          <h5>Certified for compliance in the work area (2012)


          </h5>
          <p>From 2013 to 2015 | Tech Soft<br />
            Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.
          </p>
          <h5>Certificate of attendance on computer technology.
          </h5>
          <p>From 2017 to 2019 | Tech Soft<br />
            Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
          <h5>Achievement medal for productivity excellence during the year (2019)
          </h5>
          <p>From 2019 to 2021 | Tech Soft<br />
            Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
        </div>
        <div className='ref'><h5>
          R E F E R E N C E S</h5>
          <ul>
            <li>Sr.Director</li>
            <li className='li1'>Mr.Clay Doe</li>
            <li>Phone:999-8888-444</li>
            <li>Email:user@gmail.com</li>
            <li>Sr.Director</li>
            <li className='li1'>Mr.Clay Doe</li>
            <li>Phone:999-8888-444</li>
            <li>Email:user@gmail.com</li>
          </ul>
        </div>
        <div className='lang'>
          <h5>L A N G U A G E S</h5>
          <ul>
            <li>Spanish</li>
            <li>Engilsh</li>
            <li>French</li>
          </ul>
        </div>
        <div className='int'>
          <h5>I N T E R E S T S</h5>
          <ul>
            <li><i className='i1'><BiHeadphone /><br /></i>Music</li>
            <li><i className='i2'><MdOutlineFlight /><br /></i>Travel</li>
            <li><i className='i3'><FaBook /><br /></i>Read </li>
            <li><i className='i4'><IoIosFitness /><br /></i>Fitness</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile