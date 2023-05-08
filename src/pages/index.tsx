import Link from "next/link";
import { Layout } from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <Link href="/step-one">
        <h1 className="text-[58px] md:text-[88px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500">
          Enter the form
        </h1>
      </Link>
    </Layout>
  );
};

export default Home;
