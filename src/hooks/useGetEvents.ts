import { useQuery } from 'react-query';
import { IEvent } from '../react-app-env';

const translateEventDates = (events: any): IEvent[] | undefined => {
    if (events) {
        return events.map((event: any) => {
            const newEvent = { ...event };
            if (event.startDate) {
                newEvent.startDate = new Date(event.startDate);
            } else {
                newEvent.startDate = undefined;
            }

            if (event.endDate) {
                newEvent.endDate = new Date(event.endDate);
            } else {
                newEvent.endDate = undefined;
            }

            return newEvent;
        });
    }
}

const eventQueryFn = async (eventType: string) => {
    const res = await fetch(`http://localhost:5001/events/${eventType}`);
    if (!res.ok) {
        throw new Error(res.statusText + res.status);
    }
    return await res.json();
}

const useGetEvents = (eventType: string) => {
    const { isLoading, isError, data } = useQuery([eventType], () => eventQueryFn(eventType), {
        refetchOnWindowFocus: false,
        enabled: true
    });
    return { isLoading, isError, data: translateEventDates(data) };
}

export default useGetEvents;