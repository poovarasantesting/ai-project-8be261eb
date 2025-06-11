export interface Booking {
  id: string;
  eventId: string;
  name: string;
  email: string;
  quantity: number;
  totalPrice: number;
  date: string;
}

// Initial empty bookings array
let bookings: Booking[] = [];

// Function to add a new booking
export function addBooking(booking: Omit<Booking, 'id' | 'date'>): Booking {
  const newBooking = {
    ...booking,
    id: Math.random().toString(36).substring(2, 9),
    date: new Date().toISOString(),
  };
  
  bookings.push(newBooking);
  
  // Save to localStorage
  saveBookings();
  
  return newBooking;
}

// Get all bookings
export function getAllBookings(): Booking[] {
  // Load from localStorage if available
  loadBookings();
  return bookings;
}

// Get bookings by email
export function getBookingsByEmail(email: string): Booking[] {
  // Load from localStorage if available
  loadBookings();
  return bookings.filter(booking => booking.email.toLowerCase() === email.toLowerCase());
}

// Cancel booking
export function cancelBooking(id: string): boolean {
  const initialLength = bookings.length;
  bookings = bookings.filter(booking => booking.id !== id);
  
  // Save to localStorage
  saveBookings();
  
  return bookings.length !== initialLength;
}

// Save bookings to localStorage
function saveBookings(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}

// Load bookings from localStorage
function loadBookings(): void {
  if (typeof window !== 'undefined') {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      bookings = JSON.parse(storedBookings);
    }
  }
}