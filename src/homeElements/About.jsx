import React from 'react'
import '../App.css';
// import BannerImage from "../assets/cars.jpg";
// import vrdriving from"../assets/vrdriving.jpeg";
import "../homestyles/About.css"
//import { PackageList } from '../packages/PackagesList';
//import Packagess from '../components/Packagess';

function About() {
  return (
    <div className="about">

      <div className="hed">
        <h3>Easy Clutch</h3>

      </div>

      <div className="aboutTop">

        {/* {PackageList.map((menuItem, key) => {
          return (
            <Packagess
              key={key}
              image={menuItem.image}
            />
            );
          })} */}


        <br />
        <p>EASY CLUTCH the inheritance of comprehensive driving aspirants destination is a simulator-assisted and technology-enabled
          training centre in Cochin. For anyone with a desire to learn to drive, we are here to make you hospitable from the very beginning,
          for you to learn and enjoy the art of driving and everything related to being assertive.<br />
          <br />
          EASY CLUTCH is a greatly entrusted pioneer of legacy in the field of building qualified drivers and operators in the South of India.
          Entitled as the first heavy driving school.
          Taking pride in our greatest accomplishment, we are renowned for being the biggest driving school for multi-branded new-generation
          cars and two-wheelers. The Company was established in 1978 is now successfully run by a group of highly experienced professionals
          with extensive knowledge in automotive technology and various businesses.The prime focus of EASY CLUTCH
          is on providing an intuitive driver training system along with high-quality automated services. The training program commences with
          making the trainees understand the importance of traffic laws and road safety to the responsibilities of being a driver, navigating
          intersections, following proper distance, teaching failure to yield issues,changing lanes and turning, avoiding rear-end collisions,
          pedestrian rights, proper parking and defensive driving instructions in a 25 effectively curated sessions guided with expertise.
          <br /><br />
          We offer various driver training courses at veritable locations in Kerala in about 15 plus branches across
          Ernakulam, Alappuzha and Kottayam</p>



      </div>
      {/* <div className="img" style={{ backgroundImage: `url(${BannerImage})` }}> </div> */}

    </div>
  );
}

export default About;