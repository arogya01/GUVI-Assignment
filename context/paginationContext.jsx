import { createContext , useState} from "react";


export const PaginationContext = createContext();


export default function PaginationProvider(props){
    const [paginationPages,setPaginationPages] = useState([1]);
    const [currentPage,setCurrentPage] = useState("1");

    return(
        <PaginationContext.Provider value={[paginationPages,setPaginationPages,currentPage,setCurrentPage]}>
            {props.children}
        </PaginationContext.Provider>
    )
}