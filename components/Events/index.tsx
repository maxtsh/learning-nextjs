import SingleEvent from "./components/SingleEvent";
import { Container } from "./styles";
import Data from "../../Store/Data";
import { DataType } from "./types";

interface EventsProps {
  showFeaturedOnly?: boolean;
}

const Events: React.FC<EventsProps> = ({ showFeaturedOnly }) => {
  return (
    <Container>
      {!showFeaturedOnly
        ? Data.map((d: DataType) => <SingleEvent key={d.id} data={d} />)
        : Data.filter((d: DataType) => d.isFeatured).map((d: DataType) => (
            <SingleEvent key={d.id} data={d} />
          ))}
    </Container>
  );
};

export default Events;
