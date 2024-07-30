import { EventsTrackerEvent } from '@/lib/types';
import EventCard from './EventCard';
import { getEvents } from '@/lib/utils';

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
