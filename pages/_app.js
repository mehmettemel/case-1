import { BasketProvider } from "../BasketContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Component {...pageProps} />
    </BasketProvider>
  );
}
