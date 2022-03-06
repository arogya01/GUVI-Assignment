const list=[1,2,3,4,5,6,7,8,9,10];

export default function Pagination({totalPages,currentPage,setCurrentPage}){
  
  // console.log("totalPages and CurrentPage is: ",totalPages,currentPage);
  
  const handleOnClick = (event)=>{
      //passing the value to useEffect in index.js?? 
      event.target.classList.add("bg-black");
      event.target.classList.add("text-white");
      // console.log(event.target.value);
      // console.dir(event.target);
      setCurrentPage(parseInt(event.target.innerHTML));
  }

    return( 
        <div className="flex flex-row justify-center py-8">
        <p  className="cursor-pointer border-black border-2 p-2 mr-2 transition-all hover:bg-gray-700 hover:text-white font-bold">PREV</p>
        <ul className="flex flex-row ">
         {
           totalPages.map(el=>{
             return(
               <li className="cursor-pointer border-black border-2 p-2 mr-2  transition-all hover:bg-gray-700 hover:text-white" onClick={handleOnClick} key={el}>{el}</li>
             )      
           })
         }
        </ul>
        <p  className="cursor-pointer border-black border-2 p-2 mr-2 transition-all hover:bg-black hover:text-white font-bold">NEXT</p>
        </div>
    )
}