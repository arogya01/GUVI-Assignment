import { useContext, useEffect, useState } from "react";
import Spinner from "../components/spinner";
import { SpinnerProvider } from "../context/globalSpinnerContext";
import BooksCard from "../components/booksCard";
import Layout from "../components/Layout";
import HousesCard from "../components/Houses";
import CharactersCard from "../components/Character";
import Pagination from "../components/pagination";
import { PaginationContext } from "../context/paginationContext";

export default function Home() {
  const [data, setData] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("books");
  const { globalSpinner, setGlobalSpinner } = useContext(SpinnerProvider);
  const [paginationPages, setPaginationPages, currentPage, setCurrentPage] =
    useContext(PaginationContext);
  const booksPages = 1;
  const characterPages = 178;
  const housesPages = 37;

  const setPagPages = (dropdownValue) => {
    if (dropdownValue === "books") {
      let tempArr = [];
      for (let i = 1; i <= booksPages; i++) {
        tempArr.push(i);
      }
      console.log("the tempArr is: ",tempArr);
      setPaginationPages(tempArr);
    } else if (dropdownValue === "characters") {
      let tempArr = [];
      for (let i = 1; i <= characterPages; i++) {
        tempArr.push(i);
      }
      console.log("the tempArr is: ",tempArr);
      setPaginationPages(tempArr);
    } else if (dropdownValue === "houses") {
      let tempArr = [];
      for (let i = 1; i <= housesPages; i++) {
        tempArr.push(i);
      }
      console.log("the tempArr is: ",tempArr);
      setPaginationPages(tempArr);
    }
  };

  function ValueType({ value, data }) {
    if (value === "books") {
      return data.map((el) => {
        return <BooksCard key={el.url} data={el} />;
      });
    } else if (value === "houses") {
      // setPaginationPages(tempArr);
      return data.map((el) => {
        return <HousesCard key={el.url} data={el} />;
      });
    } else if (value === "characters") {
      return data.map((el) => {
        return <CharactersCard key={el.url} data={el} />;
      });
    }
  }

  useEffect(() => {
    const fetchData = async (dropdownValue, currentPage) => {
      console.log(dropdownValue);
      setGlobalSpinner(true);
      // setPagPages(dropdownValue);
      try {
        const characterResult = await fetch(
          `https://www.anapioficeandfire.com/api/${dropdownValue}?page=${currentPage}&pageSize=12`
        );
        const res = await characterResult.json();
        console.log("the res from the fetch is: " ,res);
        setData(res);
        // console.log(data);
        setGlobalSpinner(false);
      } catch (err) {
        if (err) {
          console.log("err msg:", err);
        }

        console.log("err!!");
      }
    };

    fetchData(dropdownValue, currentPage);
  }, [dropdownValue, setData, setGlobalSpinner, currentPage]);

  return (
    <div className="">
      <div className="grid place-content-center ">
        <h1 className="text-3xl font-bold font-sans text-[gradient-to-r from-pink-300 via-purple-300 to-indigo-400]">
          A TALE OF ICE AND FIRE
        </h1>
      </div>

      <div className="grid place-content-center py-10">
        <select
          name="Sort Elements"
          id="sortVal"
          className="font-bold h-10 w-40 border-2 border-black rounded-md"
          value={dropdownValue}
          onChange={(e) => {
            console.table(dropdownValue, e.target.value);
            setDropdownValue(() => e.target.value);
            console.table(dropdownValue, e.target.value);
            setPagPages(e.target.value);
          }}
        >
          <option value="books">Books</option>
          <option value="characters">Characters</option>
          <option value="houses">Houses</option>
        </select>
      </div>

      <main>
        <Spinner />
      </main>
      <Layout>{<ValueType value={dropdownValue} data={data} />}</Layout>
      <Pagination
        totalPages={paginationPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
