
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { Send } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SiMattermost } from "react-icons/si";

// Define validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  subscribe: z.boolean().default(false),
});

const ContactUs = () => {
  // Initialize form with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subscribe: false,
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this data to your backend
    console.log(values);
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    form.reset();
  }

  return (
    <Layout>
      <Section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Join SecretStartups</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Become part of our community of developers building impactful projects!
            </p>
          </div>

          <div className="">
            <div className="bg-card rounded-lg p-6 border border-border shadow-md">
              <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
              <p className="mb-6 text-muted-foreground">
                The best way to join SecretStartups is to explore our projects and start contributing. 
                Check out our GitHub repositories and join our community discussions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Send size={20} />
                  </div>
                  <div>
                  <h4 className="font-medium">Have a specific inquiry?</h4>
                    <a 
                      href="https://your-mattermost-link.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <SiMattermost size={20} />
                      Join our Mattermost
                    </a>        
                  </div>
                </div>
                <div className="border-t border-border my-4"></div>
                {/* <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">Why become an associate?</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Work on meaningful open-source projects</li>
                    <li>Collaborate with passionate developers</li>
                    <li>Build your portfolio with impactful work</li>
                    <li>Learn and grow in a supportive community</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactUs;
