import Head from "next/head";
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import Image from "next/image";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Container } from "../../styles/event/styles";
import API from "../../api";
import type { EventType } from "../../Types/Events";
import Commnets from "components/Comments";

interface EventProps {
  event: EventType;
}

const Event: NextPage<EventProps> = ({ event }) => {
  if (event) {
    return (
      <Container>
        <Head>
          <title>{event.title}</title>
          <meta name="description" content={event.description} />
        </Head>
        <div className="intro">
          <h1 className="intro-title">{event?.title}</h1>
        </div>
        <div className="box">
          <div className="box-img">
            <Image
              width={200}
              height={200}
              src={event?.image}
              alt="event-image"
            />
          </div>
          <div className="box-info">
            <div className="box-info-date">
              <BsFillCalendarFill color="#1ba39c" size={20} />
              <span className="box-info-date-str">{event?.date}</span>
            </div>
            <div className="box-info-address">
              <IoLocationSharp color="#1ba39c" size={25} />
              <span className="box-info-address-str">{event?.address}</span>
            </div>
          </div>
        </div>
        <p className="description">{event?.description}</p>
        <Commnets />
      </Container>
    );
  } else {
    return (
      <h1 style={{ marginTop: "1rem", textAlign: "center" }}>
        Event Not Found
      </h1>
    );
  }
};

export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<EventProps>> => {
  const { params } = context;
  const eventId = Number(params?.id) + 1;
  const url = `https://nextjs-training-1-default-rtdb.europe-west1.firebasedatabase.app/events/e${eventId}.json`;
  const { data, status } = await API({ url, method: "GET" });

  if (status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: { event: data },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const url =
    "https://nextjs-training-1-default-rtdb.europe-west1.firebasedatabase.app/events.json";

  const { data, status } = await API({ url, method: "GET" });
  const ids: number[] = Object.values(data).map((v: any) => v.id);

  if (status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    paths: ids.map((id: number) => ({ params: { id: `${id}` } })),
    fallback: false,
  };
};

export default Event;
