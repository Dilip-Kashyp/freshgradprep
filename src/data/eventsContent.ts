interface EventItem {
  name: string;
  date: string;
  timings: string;
  mode: string;
  /** Display label for the venue (address or name). */
  venue: string;
  /** If set, venue is shown as a link to this URL (e.g. Google Maps). */
  venueUrl?: string;
  registrationOpen: boolean;
  registrationLink: string;
  registrationLabel: string;
}

interface EventsContent {
  title: string;
  events: EventItem[];
  pastTitle: string;
  pastEvents: EventItem[];
}

export const eventsContent: EventsContent = {
  title: 'Upcoming Events',
  events: [
    {
      name: "They Got Hired. You Didn't. Why? Career Roundtable - Edition 1",
      date: 'Sunday, 14th Jun, 2026',
      timings: '10:00 AM - 2:00 PM',
      mode: 'Offline',
      venue: 'TBA',
      registrationOpen: true,
      registrationLink: 'https://luma.com/7hd22g0h',
      registrationLabel: 'RSVP Open',
    },
  ],
  pastTitle: 'Past Events',
  pastEvents: [
  ],
};
