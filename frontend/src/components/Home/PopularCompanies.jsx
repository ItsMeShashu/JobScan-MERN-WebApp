/* eslint-disable no-unused-vars */
import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla, SiAdobe } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Microsoft India Pvt.Ltd., Bengaluru, Karnataka, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "45500 Fremont Blvd, Fremont, CA 94538, USA",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "19th Floor, Concorde Tower C, Bangalore, Karnataka, India",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Adobe",
      location:
        "Block 1, Noida Special Economic Zone, Noida, Uttar Pradesh 201305, India",
      openPositions: 12,
      icon: <SiAdobe />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>{element.openPositions} Positions Open</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
