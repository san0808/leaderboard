import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import { NextPageWithLayout } from "./_app";
import { ReactElement, ReactNode } from "react";

const Home: NextPageWithLayout = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
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
