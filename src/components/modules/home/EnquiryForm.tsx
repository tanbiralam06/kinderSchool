"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export function EnquiryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Ideally call API here
    console.log(values);
    alert("Thank you for your enquiry! We will contact you soon.");
    form.reset();
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm tracking-wide uppercase">
              Admissions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Join Our Family?
            </h2>
            <p className="text-lg text-muted-foreground">
              We are currently accepting applications for the upcoming academic
              year. Fill out the form to schedule a campus tour or request a
              callback.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-2">Direct Contact</h3>
              <p className="text-muted-foreground mb-4">
                Have urgent questions? Call us directly.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  className="flex-1 font-bold rounded-xl h-12"
                >
                  +91 98765 43210
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 font-bold rounded-xl h-12"
                >
                  Email Us
                </Button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Enquiry Form
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="h-11 rounded-xl bg-muted/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="9876543210"
                            {...field}
                            className="h-11 rounded-xl bg-muted/30"
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
                      <FormItem>
                        <FormLabel>Email (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="h-11 rounded-xl bg-muted/30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message / Query *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I am interested in admission for Class 1..."
                          {...field}
                          className="min-h-[120px] rounded-xl bg-muted/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all mt-2"
                >
                  Submit Enquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
