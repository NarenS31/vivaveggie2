import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject is required' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would use EmailJS or a similar service
      // to send the form data
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thanks for your message! We'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">Contact Us</h2>
          <p className="text-neutral-dark max-w-lg mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-medium mb-4">Our Location</h3>
              <div className="flex items-start mb-4">
                <MapPin className="text-primary h-5 w-5 mt-1 mr-3" />
                <p>123 Green Street, Veggieville<br />New York, NY 10001</p>
              </div>
              <div className="flex items-start mb-4">
                <Phone className="text-primary h-5 w-5 mt-1 mr-3" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-start mb-4">
                <Mail className="text-primary h-5 w-5 mt-1 mr-3" />
                <p>info@vivaveggie.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-primary h-5 w-5 mt-1 mr-3" />
                <div>
                  <p className="mb-1"><span className="font-medium">Mon-Fri:</span> 11:00 AM - 9:00 PM</p>
                  <p className="mb-1"><span className="font-medium">Saturday:</span> 10:00 AM - 10:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="fab fa-yelp text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-green-600 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full h-80 bg-gray-200 relative mt-8 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-map-marked-alt text-6xl text-primary mb-4"></i>
          <p className="text-lg font-medium">123 Green Street, Veggieville</p>
          <p className="text-sm text-gray-600">New York, NY 10001</p>
        </div>
      </div>
    </section>
  );
}
