import { wrapper } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Provider } from "react-redux";

function App({
    Component,
    ...rest
}: AppProps<{
    initialSession: Session;
}>) {
    const [supabase] = useState(() => createBrowserSupabaseClient());
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <Provider store={store}>
            <SessionContextProvider
                supabaseClient={supabase}
                initialSession={pageProps.initialSession}
            >
                <Component {...pageProps} />
            </SessionContextProvider>
        </Provider>
    );
}

export default App;
