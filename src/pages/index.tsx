import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import { NextPageWithLayout } from "./_app";
import { ReactElement, ReactNode } from "react";

import customTheme from '../Themes/CustomSupaTheme'

import Image from "next/image";
 
const Home: NextPageWithLayout = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  
  return (
    <div className="container max-w-md" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <div>
        <Image className='py-2 mx-auto shadow-lg' src="./images/logo-dark.svg" alt="Logo" width={200} height={200} />
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: customTheme }}
          theme="evenDarker"
          providers={['google', 'facebook', 'twitter']}
        />
        </div>
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const NestedLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Home;
