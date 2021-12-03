import Events from "../components/Events";
import API from "../api";
import type { NextPage, GetStaticPropsResult } from "next";
import type { EventType } from "../Types/Events";

interface HomeProps {
  events: EventType[];
}

const Home: NextPage<HomeProps> = ({ events }) => {
  return (
    <div className="container">
      <Events events={events} showFeaturedOnly />
    </div>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  let events: EventType[] = [];
  const url =
    "https://nextjs-training-1-default-rtdb.europe-west1.firebasedatabase.app/events.json";

  const { data, status } = await API({ url, method: "GET" });
  events = Object.values(data).map((v: any) => v);

  if (status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events },
    revalidate: 60,
  };
};

export default Home;
