import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Calendar, Search, Trash2, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Booking, getBookingsByEmail, cancelBooking } from "../data/bookings";
import { getEventById } from "../data/events";

export default function MyBookingsPage() {
  const [email, setEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const userBookings = getBookingsByEmail(email);
      setBookings(userBookings);
      setIsSearching(false);
      
      if (userBookings.length === 0) {
        toast.info("No bookings found for this email");
      }
    }, 500);
  };
  
  const handleCancelBooking = (bookingId: string) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      const success = cancelBooking(bookingId);
      
      if (success) {
        setBookings(bookings.filter(booking => booking.id !== bookingId));
        toast.success("Booking cancelled successfully");
      } else {
        toast.error("Failed to cancel booking");
      }
    }
  };
  
  // Load bookings from localStorage on initial render
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      const userBookings = getBookingsByEmail(storedEmail);
      setBookings(userBookings);
    }
  }, []);
  
  // Save email to localStorage when it changes
  useEffect(() => {
    if (email) {
      localStorage.setItem("userEmail", email);
    }
  }, [email]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Bookings</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Find Your Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isSearching}>
              <Search className="mr-2 h-4 w-4" />
              {isSearching ? "Searching..." : "Find Bookings"}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {bookings.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Your Bookings ({bookings.length})
          </h2>
          
          {bookings.map(booking => {
            const event = getEventById(booking.eventId);
            if (!event) return null;
            
            const bookingDate = new Date(booking.date).toLocaleDateString();
            const eventDate = new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            
            return (
              <Card key={booking.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-40 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        {eventDate} at {event.time}
                      </div>
                      <div>
                        <span className="font-medium">Booking ID:</span> {booking.id}
                      </div>
                      <div>
                        <span className="font-medium">Tickets:</span> {booking.quantity}
                      </div>
                      <div>
                        <span className="font-medium">Booked on:</span> {bookingDate}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="font-medium">
                        Total: ${booking.totalPrice.toFixed(2)}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/events/${event.id}`}>
                            View Event
                          </Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-600 hover:bg-red-50 hover:text-red-700"
                          onClick={() => handleCancelBooking(booking.id)}
                        >
                          <Trash2 className="mr-1 h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No bookings found</h3>
          <p className="text-gray-500 mb-6">
            {email ? "We couldn't find any bookings for this email address." : "Enter your email to find your bookings."}
          </p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      )}
    </div>
  );
}