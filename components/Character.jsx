import { useState } from "react";

const ArrowSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=""
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <ArrowSVG />
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

export default function CharactersCard(props) {
  const { name, gender, culture, aliases } = props.data;

  return (
    <div className="shadow-xl hover:shadow-2xl flex flex-col p-4  border-2 rounded-lg bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <p className="flex font-bold font-2xl">
        <ArrowSVG /> Name : {name}
      </p>
      <p className="flex font-bold">
        <ArrowSVG /> Aliases:
        {aliases?.map((el) => {
          return <span key={el}>{el}</span>;
        })}
      </p>
      <p className="flex font-bold">
        <ArrowSVG /> Gender : {gender}
      </p>
      <p className="flex font-bold">
        <ArrowSVG /> Culture : {culture}
      </p>
    </div>
  );
}
