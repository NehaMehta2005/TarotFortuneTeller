import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { MyContext } from "../../context/Context";
import { Link } from "react-router-dom";
import "./OurTeam.css";

export default function OurTeams() {
  //const [members, setMembers] = useState([]);
  const { state, dispatch } = useContext(MyContext);
  const {members} = state;
  useEffect(() => {
    // Fetch member data from your backend API
    async function fetchMembers() {
      try {
        const response = await axios.get("http://localhost:5500/member");

        dispatch({ type: 'setMembers', payload: response.data });
        
        /* const response = await axios.get("http://localhost:5500/member");

        setMembers(response.data);  
        console.log(response.data) */
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    }

    fetchMembers();
  }, []);

  return (
    <div className="about-background">
      <div className="about-page">
        <div className="about-card">
          <h2 className="team-title">Who We Are</h2>
          <p className="text-para">
            We are a team of three enthusiastic DCI (Digital Career Institute)
            students, passionate about both literature and technology.
            Collaborating on a project, we've united our love for the mystical
            world of tarot and our skills in React to construct an engaging
            online tarot fortune-telling platform.
          </p>
        </div>
        <div className="about-team-card">
          <h3 className="our-team">Meet Our tarotfortuneteller Team:</h3>
          <ul className="team-list">
            {members.map((member, index) => {
              return (
                <li key={index}>
                  <Link to={member.url} state={member}>
                    {/* <img className="profile-img" src={member.image} alt="" /> */}
                    <p>{member.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="about-card">
          <h2>Our Mission - tarotfortuneteller</h2>
          <p className="text-para">
            To provide an exceptional experience in the world of Tarot, offering
            insights and guidance through the mystical realm of divination.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Story</h2>
          <p className="text-para">
            Our journey began with a shared passion for the mystical insights of
            tarot. Four enthusiasts joined forces, envisioning a platform that
            celebrates the wisdom and guidance offered by tarot cards.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Evolution</h2>
          <p className="text-para">
            From humble beginnings, we've evolved into a dedicated team, using
            React to create a seamless and engaging online tarot fortune-telling
            platform. Our journey has been marked by learning, growth, and the
            excitement of bringing the wisdom of tarot to life online.
          </p>
        </div>
        <div className="about-card">
          <h2>Our "Aha!" Moment</h2>
          <p className="text-para">
            The pivotal moment for us was when we realized the immense potential
            of combining our technical skills with our love for tarot. This
            realization fueled our determination to create a unique platform
            where seekers can explore the vast insights offered by tarot cards.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Audience</h2>
          <p className="text-para">
            We cater to individuals seeking guidance, spiritual enthusiasts, and
            anyone looking to explore the profound insights of tarot cards. Our
            platform is a haven for those eager to discover the wisdom of tarot
            readings.
          </p>
        </div>
        <div className="about-card">
          <h2>What We Offer</h2>
          <p className="text-para">
            We offer comprehensive tarot readings, guidance, and related
            mystical insights. Our curated collection ensures seekers have
            access to diverse tarot readings, experiencing the wisdom and
            guidance offered by various tarot decks.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Values</h2>
          <p className="text-para">
            At our core, we value authenticity, integrity, and a deep respect
            for the mystical insights of tarot. We are committed to delivering
            exceptional experiences to our community, fostering spiritual
            growth, and sharing the wisdom of tarot readings.
          </p>
        </div>
      </div>
    </div>
  );
}
