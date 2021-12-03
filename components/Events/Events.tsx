import { useRouter } from "next/router";
import SingleEvent from "./components/SingleEvent";
import Search from "../Search";
import { Container } from "./styles";
import type { NextRouter } from "next/router";
import type { EventType } from "../../Types/Events";

interface EventsProps {
  events: EventType[];
  showFeaturedOnly?: boolean;
}

const Events: React.FC<EventsProps> = ({ showFeaturedOnly, events }) => {
  const { push }: NextRouter = useRouter();
  const seachEvents = (year: string, month: string) => {
    push(`/events/${year}/${month}`);
  };

  return (
    <Container>
      <Search onSearch={seachEvents} />
      {!showFeaturedOnly
        ? events?.map((d: EventType) => <SingleEvent key={d.id} data={d} />)
        : events
            ?.filter((d: EventType) => d.isFeatured)
            .map((d: EventType) => <SingleEvent key={d.id} data={d} />)}
    </Container>
  );
};

export default Events;
