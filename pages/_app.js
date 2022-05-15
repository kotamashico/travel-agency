import "../styles/globals.css";
import SideBar from "../component/sidebar";
function MyApp({ Component, pageProps }) {
  return (
    <SideBar>
      <Component {...pageProps} />
    </SideBar>
  );
}

export default MyApp;
