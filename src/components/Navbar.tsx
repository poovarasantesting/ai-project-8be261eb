import { Link } from "react-router-dom";
import { CalendarDays, Home, Ticket, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Ticket className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TicketEase</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
              <Home className="mr-1 h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/events" className="flex items-center text-gray-600 hover:text-blue-600">
              <CalendarDays className="mr-1 h-4 w-4" />
              <span>Events</span>
            </Link>
            <Link to="/my-bookings" className="flex items-center text-gray-600 hover:text-blue-600">
              <User className="mr-1 h-4 w-4" />
              <span>My Bookings</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/my-bookings">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden border-t">
        <div className="flex justify-between">
          <Link to="/" className="flex-1 py-2 text-center text-gray-600 hover:text-blue-600">
            <Home className="h-5 w-5 mx-auto" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/events" className="flex-1 py-2 text-center text-gray-600 hover:text-blue-600">
            <CalendarDays className="h-5 w-5 mx-auto" />
            <span className="text-xs">Events</span>
          </Link>
          <Link to="/my-bookings" className="flex-1 py-2 text-center text-gray-600 hover:text-blue-600">
            <User className="h-5 w-5 mx-auto" />
            <span className="text-xs">Bookings</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}