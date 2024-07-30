import { EventsTrackerEvent } from '@/lib/types';
import EventCard from './EventCard';

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventsTrackerEvent[] = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
