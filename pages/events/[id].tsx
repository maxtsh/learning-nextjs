import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Container } from "../../styles/event/styles";
import { DataType } from "../../components/Events/types";
import Data from "../../Store/Data";

const Event: NextPage = () => {
  const { query }: NextRouter = useRouter();
  const event: DataType | undefined = Data.find(
    (d: DataType) => d.id === Number(query.id)
  );

  if (event) {
    return (
      <Container>
        <div className="intro">
          <h1 className="intro-title">{event?.title}</h1>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={event?.image} alt="event-image" />
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
