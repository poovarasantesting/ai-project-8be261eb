export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
  category: string;
  availableSeats: number;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival",
    description: "A day of amazing music performances from top artists in a beautiful outdoor setting.",
    date: "2025-07-15",
    time: "12:00 PM",
    location: "Central Park, New York",
    price: 75,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop",
    category: "Music",
    availableSeats: 1000
  },
  {
    id: "2",
    title: "International Film Festival",
    description: "Screening of award-winning films from around the world with director Q&As.",
    date: "2025-05-20",
    time: "7:00 PM",
    location: "Downtown Cinema, Los Angeles",
    price: 25,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop",
    category: "Film",
    availableSeats: 250
  },
  {
    id: "3",
    title: "Tech Conference 2025",
    description: "The biggest tech conference of the year featuring keynotes from industry leaders.",
    date: "2025-09-10",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: 350,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    category: "Technology",
    availableSeats: 500
  },
  {
    id: "4",
    title: "Comedy Night Special",
    description: "An evening of laughs with top comedians from around the country.",
    date: "2025-06-05",
    time: "8:00 PM",
    location: "Laugh Factory, Chicago",
    price: 40,
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=1000&auto=format&fit=crop",
    category: "Comedy",
    availableSeats: 200
  },
  {
    id: "5",
    title: "Food & Wine Festival",
    description: "Sample delicious cuisine and fine wines from top chefs and wineries.",
    date: "2025-08-22",
    time: "11:00 AM",
    location: "Waterfront Park, Seattle",
    price: 85,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
    category: "Food",
    availableSeats: 300
  },
  {
    id: "6",
    title: "Broadway Musical: Hamilton",
    description: "The award-winning musical that has taken the world by storm.",
    date: "2025-07-30",
    time: "7:30 PM",
    location: "Broadway Theater, New York",
    price: 120,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop",
    category: "Theater",
    availableSeats: 150
  }
];

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}