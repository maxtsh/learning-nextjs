import type { NextPage } from "next";
import Events from "../components/Events";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>Featured Events</h1>
      <Events showFeaturedOnly />
    </div>
  );
};

export default Home;
