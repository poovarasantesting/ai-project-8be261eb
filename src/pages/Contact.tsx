import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        Get In Touch
      </h1>
      <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
        Have a question or want to work together? Feel free to contact me using the form below or through my contact information.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h2>
          
          <div className="grid gap-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <a href="mailto:contact@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    contact@example.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <a href="tel:+11234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +1 (123) 456-7890
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  San Francisco, California, USA
                </p>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="mt-8 rounded-lg overflow-hidden h-[250px] bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400 text-center p-4">
              Interactive map would be displayed here.<br />
              (Replace with an actual map component when connecting to a CMS)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}