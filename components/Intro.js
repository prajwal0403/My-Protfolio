import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons }) => {
  return (
    <div className="bg-secondary px-5">
      <div className="container">
        <div className=" row align-items-center">
          <div className="col-sm-6">
            <h1 className="text-primary fw-bold display-3">{title}</h1>
            <p className="desc">{description}</p>
            <div className="text-center">
              {buttons.map((value, index) =>
                value.isPrimary ? (
                  <Link key={index} href={value.link}>
                    <a className="btn btn-primary my-1 mx-3">{value.title}</a>
                  </Link>
                ) : (
                  <Link key={index} href={value.link}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary my-1 mx-3"
                    >
                      {value.title}
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <img
              className="img-fluid my-3 card-image"
              width="250"
              height="250"
              src={publicRuntimeConfig.basePath + image}
              alt="profile of Prajwal Raut"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = ({ title, description }) => {
  return (
    <div id="about" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="pt-3 px-sm-1 h5 ">
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
