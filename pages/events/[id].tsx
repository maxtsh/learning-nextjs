import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";
import { Container } from "../../styles/event/styles";
import { DataType } from "../../components/Events/types";
import Data from "../../Store/Data";

const Event: NextPage = () => {
  const { query }: NextRouter = useRouter();
  const event = Data.find((d: DataType) => d.id === Number(query.id));

  if (event) {
    return (
      <Container>
        <div className="intro">
          <h1>{event?.title}</h1>
        </div>
        <h1>{query.id}</h1>
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

export default Event;
