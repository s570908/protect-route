import { Layout } from "../components/layout";

export default function Profile() {
  return (
    <Layout>
      <h1>Profile page</h1>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      protected: true
    }
  };
}
