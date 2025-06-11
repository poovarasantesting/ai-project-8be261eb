import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function EventsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Filter events based on search and category
  useEffect(() => {
    const filtered = events.filter(event => {
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "" || 
        event.category.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredEvents(filtered);
  }, [searchQuery, selectedCategory]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Get unique categories
  const categories = ["All", ...new Set(events.map(event => event.category))];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Browse Events</h1>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === (category === "All" ? "" : category) ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category === "All" ? "" : category)}
            className="flex-shrink-0"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results */}
      {filteredEvents.length > 0 ? (
        <>
          <p className="text-sm text-gray-500">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}