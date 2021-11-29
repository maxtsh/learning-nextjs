import { useRouter } from "next/router";
import Events from "../../Store/Data";
import SingleEvent from "../../components/Events/components/SingleEvent";
import { Container } from "../../components/Events/styles";
import type { NextPage } from "next";
import type { NextRouter } from "next/router";
import { DataType } from "../../components/Events/types";

const Search: NextPage = () => {
  const {
    query: { slug },
  }: NextRouter = useRouter();

  if (!slug) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const year = +slug[0];
  const month = +slug[1];

  if (isNaN(year) || isNaN(month) || month > 12 || month < 1) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ marginTop: "1rem", color: "#666" }}>
          Please enter valid year and month to filter events!
        </p>
      </div>
    );
  }

  const filtertedEvents = Events.filter(
    (e) =>
      new Date(e.date).getFullYear() === year &&
      new Date(e.date).getMonth() === month - 1
  );

  if (!filtertedEvents || filtertedEvents.length === 0) {
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
          Results for {new Date(year, month - 1).toLocaleDateString()}
        </h2>
        {filtertedEvents.map((d: DataType) => (
          <SingleEvent key={d.id} data={d} />
        ))}
      </Container>
    </div>
  );
};

export default Search;
