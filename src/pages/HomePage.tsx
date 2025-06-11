import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter and limit featured events
  const featuredEvents = events
    .filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find and Book Amazing Events
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Discover concerts, films, conferences and more. Secure your tickets in just a few clicks.
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for events..."
              className="block w-full bg-white text-gray-900 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/events">
                Browse All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            <Calendar className="inline-block mr-2 h-6 w-6" />
            Featured Events
          </h2>
          <Button variant="ghost" asChild>
            <Link to="/events" className="text-blue-600 hover:text-blue-700">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        {featuredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No events found. Try a different search.</p>
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Music', 'Film', 'Technology', 'Comedy', 'Food', 'Theater'].map(category => (
            <Link 
              key={category}
              to={`/events?category=${category}`}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 font-medium">{category}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Ready to host your own event?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Join thousands of event organizers who use our platform to sell tickets and manage bookings.
        </p>
        <Button size="lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}