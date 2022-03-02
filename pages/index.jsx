import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner";
import styles from "../styles/Home.module.css";
import GlobalSpinnerContext from "../context/globalSpinnerContext";
import { SpinnerProvider } from "../context/globalSpinnerContext";
import BooksCard from "../components/booksCard";

export default function Home() {
  const [data, setData] = useState([]);
  const [sortValue, setSortValue] = useState("Books");

  const fetchData = async (sorter) => {
    const characterResult = await fetch(
      `https://www.anapioficeandfire.com/api/${sorter}`
    );
    const res = await characterResult.json();
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData(sortValue);
  }, [sortValue]);

  return data ? (
    <>
      <div className="grid place-content-center ">
        <h1 className="text-3xl font-bold font-sans ">
          A Tale of Ice and Fire
        </h1>
      </div>

      <div className="grid place-content-center pt-10">
        <select
          name="Sort Elements"
          id="sortVal"
          className="h-10 w-40 border-2 border-black rounded-md"
          value={sortValue}
          onChange={(e) => {
            setSortValue(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="Books">Books</option>
          <option value="characters">Characters</option>
          <option value="Houses">Houses</option>
        </select>
      </div>

      <div>
        {
          (data.length === 0) ? (
            <Spinner />
          ) : (
          
            data.map(el=>{ 
              return ( 
                <BooksCard key={el.name} props={el} />
              )
            })
          
  
          )

        }
      </div>
    </>
  ) : (
    <Spinner divWidth="full" divHeight="screen" svgWidth={8} svgHeight={8} />
    // <Spinner />
  );
}
