import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Event } from "../data/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {event.category}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1">{event.title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formattedDate} at {event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          
          <div className="text-sm font-medium mt-1">
            ${event.price.toFixed(2)}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}