import EventsList from '@/components/EventsList';
import H1 from '@/components/H1';
import { EventsTrackerEvent } from '@/lib/types';

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params }: EventsPageProps) => {
  const city = params.city;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventsTrackerEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
