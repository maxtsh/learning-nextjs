import { useRouter } from "next/router";
import SingleEvent from "./components/SingleEvent";
import Search from "../Search";
import { Container } from "./styles";
import Data from "../../Store/Data";
import { DataType } from "./types";
import type { NextRouter } from "next/router";

interface EventsProps {
  showFeaturedOnly?: boolean;
}

const Events: React.FC<EventsProps> = ({ showFeaturedOnly }) => {
  const { push }: NextRouter = useRouter();
  const seachEvents = (year: string, month: string) => {
    push(`/events/${year}/${month}`);
  };

  return (
    <Container>
      <Search onSearch={seachEvents} />
      {!showFeaturedOnly
        ? Data.map((d: DataType) => <SingleEvent key={d.id} data={d} />)
        : Data.filter((d: DataType) => d.isFeatured).map((d: DataType) => (
            <SingleEvent key={d.id} data={d} />
          ))}
    </Container>
  );
};

export default Events;
