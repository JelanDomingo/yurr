import { type AppType } from "next/app";

import { api } from "troll/utils/api";

import "troll/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
