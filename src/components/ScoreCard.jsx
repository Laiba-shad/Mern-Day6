import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

const ScoreCard = (props) => {
  return (
    <div className="w-full h-60 border bg-teal-300">
      <div className="flex bg-white border m-20 w-90 hover:shadow-md">
        <div className="flex justify-center w-20 h-20 bg-green-300 margin-40">
          <div className="flex justify-center items-center">
            <UserGroupIcon className="h-10 w-10 text-white" />{" "}
          </div>
        </div>
        <div className="flex flex-col text-left font-bold">
          <span>{props.post}</span>
          <span>{props.score}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
