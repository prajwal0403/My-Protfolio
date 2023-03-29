import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';

export const Skills = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap  justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">Projects</h1>
        <div
          className="d-flex flex-row flex-wrap justify-content-center h5"
          style={{ textAlign: 'justify' }}
        >
          {cards.map((value, index) => (
            <Card2
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
              image={value.image}
              image2={value.image2}
              image3={value.image3}
            />
          ))}
        </div>
        {/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
      </div>
    </div>
  );
};

export const Card = ({ title, description, icons }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ textAlign: 'center', alignContent: '-moz-initial' }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
      <div className="text-end">
        {/* <div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt=""
						/>
					</div> */}
        {/* <div style={{textAlign:"auto"}}>
					<img src={image}/>
				  <img src={image2}/>
					</div> */}
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                {value.icon}
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export const Card2 = ({ title, description, icons, image, image2 }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ textAlign: 'center', alignContent: '-moz-initial' }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-start px-5 py-3 text-dark">{description}</p>
      <div className="text-end">
        {/* <div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt=""
						/>
					</div> */}
        <div className="projectimage">
          <Image width={500} height={320} src={image} />
          <Image width={500} height={320} src={image2} />
        </div>
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                {value.icon}
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};
