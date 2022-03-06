import GlobalSpinnerContext from "../context/globalSpinnerContext";
import PaginationProvider from "../context/paginationContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PaginationProvider>
      <GlobalSpinnerContext>
        <Component {...pageProps} />
      </GlobalSpinnerContext>
    </PaginationProvider>
  );
}

export default MyApp;
