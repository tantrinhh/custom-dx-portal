import "../styles/globals.css";
import LayoutPage from "./Components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </>
  );
}
