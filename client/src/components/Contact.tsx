import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Linkedin, FileCode2, Globe } from "lucide-react";
import { insertContactSchema } from "@shared/schema";

const formSchema = insertContactSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
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
    <section id="contact" className="py-20 px-4">
      <motion.div 
        className="container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-serif font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-10">
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600">K. P Road, BulandShahr</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">+91 9315200393</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600">ankush@qubedesign.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="inline-block text-primary hover:text-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block text-primary hover:text-accent transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block text-primary hover:text-accent transition">
                <FileCode2 className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block text-primary hover:text-accent transition">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            custom={0.3}
          >
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-light p-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">Name</FormLabel>
                      <FormControl>
                        <Input 
                          className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none rounded-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none rounded-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none rounded-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none rounded-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-accent hover:bg-opacity-90 text-white font-display font-medium py-3 px-6 rounded-sm transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
