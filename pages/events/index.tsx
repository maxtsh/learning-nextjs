import { GetStaticPropsResult, NextPage } from "next";
import API from "../../api";
import Events from "../../components/Events";
import type { EventType } from "../../Types/Events";
interface EventsProps {
  events: EventType[];
}

const AllEvents: NextPage<EventsProps> = ({ events }) => {
  return (
    <div className="container">
      <Events events={events} />
    </div>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<EventsProps>
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

export default AllEvents;
