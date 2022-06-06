import React from "react";

const ServiceDetails = ({ service }) => {
  const { Location, Profession, socialLink } = service;
  return (
    <div>
      <p>
        Location: <b>{Location}</b>
      </p>
      <p>
        Profession: <b>{Profession}</b>
      </p>
      <p>
        SocialLink:{" "}
        <a href="">
          <b>{socialLink}</b>
        </a>
      </p>
    </div>
  );
};

export default ServiceDetails;
