import { EventsTrackerEvent } from '@/lib/types';
import EventCard from './EventCard';

type EventsListProps = {
  events: EventsTrackerEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
