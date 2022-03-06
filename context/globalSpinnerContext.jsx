import { createContext, useState } from "react";

export const SpinnerProvider=createContext();

export default function GlobalSpinnerContext(props){
    const [globalSpinner,setGlobalSpinner] = useState(false);

    return(
        <SpinnerProvider.Provider value={{globalSpinner,setGlobalSpinner}}>
            {props.children}
        </SpinnerProvider.Provider>
    )
}