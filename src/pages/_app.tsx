import { wrapper } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { ReactElement, ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
  initialSession: Session;
}> & {
  Component: NextPageWithLayout;
};

function App({ Component, ...rest }: AppPropsWithLayout) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        {getLayout(<Component {...pageProps} />)}
      </SessionContextProvider>
    </Provider>
  );
}

export default App;
