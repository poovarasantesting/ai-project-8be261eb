import { ContactForm } from "@/components/ContactForm";
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground mt-2">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <ContactForm />
        <Toaster />
      </div>
    </div>
  );
}