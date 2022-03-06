import { useState } from "react";

const BookSVG = () => {
  return (
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
};

export default function BooksCard(props) {
  const { authors, country, name, mediaType, numberOfPages, publisher, isbn } =
    props.data;

  return (
    <div className="shadow-xl hover:shadow-2xl flex flex-col p-6 border-2 rounded-lg bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <h1 className="flex font-2xl py-1">
        <BookSVG />
        Name : {name}
      </h1>
      <p className="flex py-1">
        <BookSVG />
        Author:
        {authors?.map((el) => {
          return <span key={el}>{el}</span>;
        })}
      </p>
      
      
        <p className="flex ">  <BookSVG />Country : {country}</p>
      
      <p className="flex  py-1">
        <BookSVG />
        mediaType : {mediaType}
      </p>
      <p className="flex  py-1">
        <BookSVG />
        isbn : {isbn}
      </p>
      <p className="flex py-1 ">
        <BookSVG />
        numberOfPages : {numberOfPages}
      </p>
      <p className="flex py-1 ">
        <BookSVG />
        Publisher : {publisher}
      </p>
    </div>
  );
}
