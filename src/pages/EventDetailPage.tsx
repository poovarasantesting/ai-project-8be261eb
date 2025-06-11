import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Ticket, ArrowLeft, Share2, Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { getEventById } from "../data/events";

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const event = getEventById(id || "");
  
  useEffect(() => {
    if (!event) {
      toast.error("Event not found");
      navigate("/events");
    }
  }, [event, navigate]);
  
  if (!event) {
    return null;
  }
  
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Check out this event: ${event.title}`,
        url: window.location.href,
      }).catch(() => {
        toast.success("Link copied to clipboard");
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      toast.success("Link copied to clipboard");
      navigator.clipboard.writeText(window.location.href);
    }
  };
  
  const handleFavorite = () => {
    toast.success(`${event.title} added to favorites`);
  };
  
  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Event Image */}
          <div className="rounded-xl overflow-hidden h-64 md:h-96 w-full">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Event Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                {formattedDate}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                {event.time}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                {event.location}
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">About This Event</h3>
              <p className="text-gray-700">{event.description}</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Event Details</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Category: {event.category}</li>
                <li>Duration: Approximately 3 hours</li>
                <li>Suitable for all ages</li>
                <li>{event.availableSeats} seats available</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Booking Card */}
        <div>
          <Card className="sticky top-6">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-900 mb-4">
                ${event.price.toFixed(2)}
              </div>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Tickets
                </label>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setQuantity(q => Math.min(10, q + 1))}
                    disabled={quantity >= 10 || quantity >= event.availableSeats}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Price per ticket</span>
                  <span>${event.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quantity</span>
                  <span>x{quantity}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(event.price * quantity).toFixed(2)}</span>
                </div>
              </div>
              
              <Button asChild className="w-full mb-3" disabled={event.availableSeats < 1}>
                <Link to={`/booking/${event.id}?quantity=${quantity}`}>
                  <Ticket className="mr-2 h-4 w-4" />
                  {event.availableSeats > 0 ? "Book Tickets" : "Sold Out"}
                </Link>
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" className="flex-1" onClick={handleFavorite}>
                  <Heart className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}