import { Container } from "./styles";
import Link from "next/link";
import { MdOutlineDateRange, MdLocationOn } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import type { EventType } from "../../../../Types/Events";

interface SingleEventProps {
  data: EventType;
}

const SingleEvent: React.FC<SingleEventProps> = ({ data }) => {
  return (
    <Container>
      <div className="image">
        <img className="image-tag" alt="event-image" src={data.image} />
      </div>
      <div className="info">
        <h1 className="info-title">{data.title}</h1>
        <div className="info-date">
          <MdOutlineDateRange
            color="#6c757d"
            size={20}
            className="info-date-icon"
          />
          <h3 className="info-date-datetime">{data.date}</h3>
        </div>
        <div className="info-address">
          <MdLocationOn
            color="#6c757d"
            size={20}
            className="info-address-icon"
          />
          <h3 className="info-address-address">{data.address}</h3>
        </div>
        <div className="info-button">
          <Link href={`/events/${data.id}`}>Explore event</Link>
          <BsArrowRight className="info-button-icon" color="#fff" size={20} />
        </div>
      </div>
    </Container>
  );
};
export default SingleEvent;
