import { NextPage } from "next";
import EventList from "../../components/Events";

interface EventsProps {
  showFeaturedOnly?: boolean;
}

const Events: NextPage<EventsProps> = ({ showFeaturedOnly }) => {
  return (
    <div className="container">
      <EventList showFeaturedOnly={showFeaturedOnly} />
    </div>
  );
};
export default Events;
