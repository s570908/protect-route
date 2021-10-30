import { Layout } from "../components/layout";
import { useUser } from "../components/user";

export default function Profile() {
  const { user } = useUser();

  console.log(user);

  return (
    <Layout>
      <h1>Hi {user.name}</h1>
      <p>Welcome to admin dashboard</p>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: ["admin"]
    }
  };
}
