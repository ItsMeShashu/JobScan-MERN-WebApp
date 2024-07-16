/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobScan Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Join our platform to access a wealth of job opportunities. Build
                your profile and let employers find you. Get started with ease
                and start your career journey today.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Browse through thousands of job listings or post job openings to
                find the right talent. Our platform connects job seekers and
                employers effortlessly.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for your dream job with just a few clicks. Employers can
                also find and recruit the perfect candidates for their job
                openings quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
