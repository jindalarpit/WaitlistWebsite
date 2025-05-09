import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { insertWaitlistSchema } from "@shared/schema";

const formSchema = insertWaitlistSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  interest: z.enum(["architecture", "interior", "visualization", "turnkey"], {
    required_error: "Please select an area of interest",
  }),
});

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/waitlist", data);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      toast({
        title: "Error",
        description: "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1620332372374-f108c53d2458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
          alt="Background pattern" 
          className="h-full object-cover"
        />
      </div>
      
      <motion.div 
        className="container mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Join Our Exclusive Waitlist</h2>
          <p className="text-lg text-gray-300 mb-10">
            Be among the first to access our new innovative design platform that streamlines 
            the architectural process from concept to completion.
          </p>
          
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="max-w-xl mx-auto space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 h-12 bg-white bg-opacity-10 border border-gray-600 focus:border-accent rounded-sm text-white placeholder-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-left text-red-300" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Your Email" 
                        type="email"
                        className="w-full px-4 py-3 h-12 bg-white bg-opacity-10 border border-gray-600 focus:border-accent rounded-sm text-white placeholder-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-left text-red-300" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger 
                          className="w-full px-4 py-3 h-12 bg-white bg-opacity-10 border border-gray-600 focus:border-accent rounded-sm text-white"
                        >
                          <SelectValue placeholder="Primary Interest" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="visualization">3D Visualization</SelectItem>
                        <SelectItem value="turnkey">Turnkey Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-left text-red-300" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-opacity-90 text-white font-display font-medium py-3 px-6 h-12 rounded-sm transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </Button>
              
              <p className="text-sm text-gray-400 pt-2">
                By joining, you agree to receive updates about our services. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
