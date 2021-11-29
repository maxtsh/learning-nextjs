import type { NextPage } from "next";
import Events from "../components/Events";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Events showFeaturedOnly />
    </div>
  );
};

export default Home;
