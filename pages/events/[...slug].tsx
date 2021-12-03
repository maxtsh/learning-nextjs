import { useRouter } from "next/router";
import API from "../../api";
import SingleEvent from "../../components/Events/components/SingleEvent";
import { Container } from "../../components/Events/styles";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import type { NextRouter } from "next/router";
import type { EventType } from "../../Types/Events";
interface SearchProps {
  events?: EventType[];
  hasError?: boolean;
  noItem?: boolean;
  isLoading?: boolean;
}

const Search: NextPage<SearchProps> = ({
  events,
  hasError,
  noItem,
  isLoading,
}) => {
  const {
    query: { slug },
  }: NextRouter = useRouter();

  // if (!slug) {
  //   return (
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  if (hasError) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ marginTop: "1rem", color: "#666" }}>
          Please enter valid year and month to filter events!
        </p>
      </div>
    );
  }

  if (noItem) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4 style={{ marginTop: "1rem", color: "#666" }}>
          There are no events available for this filter!
        </h4>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <h2 style={{ marginBlock: "1rem" }}>
          Results for{" "}
          {slug && new Date(+slug[0], +slug[1] - 1).toLocaleDateString()}
        </h2>
        {events?.map((d: EventType) => (
          <SingleEvent key={d.id} data={d} />
        ))}
      </Container>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<SearchProps>> => {
  const { params } = context;
  const slug = params?.slug;

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

  const year = slug ? +slug[0] : NaN;
  const month = slug ? +slug[1] : NaN;

  if (isNaN(year) || isNaN(month) || month > 12 || month < 1) {
    return {
      props: { hasError: true },
    };
  }

  const filtertedEvents = events.filter(
    (e: EventType) =>
      new Date(e.date).getFullYear() === year &&
      new Date(e.date).getMonth() === Number(month) - 1
  );

  if (!filtertedEvents || filtertedEvents.length === 0) {
    return {
      props: { noItem: true },
      // redirect: { // OR redirect
      //   destination: '/notfound'
      // }
    };
  }

  return {
    props: { events: filtertedEvents },
  };
};

export default Search;
