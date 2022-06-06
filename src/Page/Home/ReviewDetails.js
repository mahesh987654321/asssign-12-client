import React from "react";
import { Rating } from "@mui/material";
import { Box } from "@mui/system";
const ReviewDetails = ({ person }) => {
  const { image, name, comment } = person;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <div>
          {/* <img
            className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            src={image}
            alt=""
          /> */}
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{comment}</p>
        </div>
        <Box>
          <Rating defaultValue={3}></Rating>
        </Box>
      </div>
    </div>
  );
};

export default ReviewDetails;
