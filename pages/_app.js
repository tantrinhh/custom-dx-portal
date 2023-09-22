import "../styles/globals.css";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import en from "../i18n/en.json";
import vi from "../i18n/vi.json";
import LayoutPage from "../pages/Components/Layout/Layout.jsx";
import Head from "next/head";
import Link from "next/link";
const messages = {
  en,
  vi,
};
function getDirection(locale) {
  return "ltr";
}
export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <LayoutPage>
        <Component {...pageProps} dir={getDirection(locale)} />
      </LayoutPage>
    </IntlProvider>
  );
}
