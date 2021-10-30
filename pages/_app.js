// import App from 'next/app'
import "../styles.css";

import { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { UserContext } from "../components/user";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Alex",
        type: "admin"
      });
    }, 2000);
  }, []);

  if (pageProps.protected && !user) {
    return (
      <Layout>
        <span className="loading">Loading...</span>
      </Layout>
    );
  }

  if (
    pageProps.protected &&
    user &&
    pageProps.userTypes &&
    pageProps.userTypes.indexOf(user.type) === -1
  ) {
    return <Layout>Sorry, you don't have access</Layout>;
  }

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
