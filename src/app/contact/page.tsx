"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setService("");
      }
    } catch {
      // silently handle
    }
  };

  const contactInfo = [
    { icon: faMapMarkerAlt, label: "Address", value: "1234 Peaceful Lane, Portland, OR 97201" },
    { icon: faPhone, label: "Phone", value: "(503) 555-0142" },
    { icon: faEnvelope, label: "Email", value: "hello@stillmindmeditation.com" },
    { icon: faClock, label: "Hours", value: "Mon–Fri: 8am–7pm | Sat: 9am–2pm" },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to start your journey? Fill out the form below and we&apos;ll get back to you
              within 24 hours to schedule your free introductory session.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card p-10 text-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="w-16 h-16 text-[oklch(0.45/0.12/170)] mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours to
                    schedule your free introductory session.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 sm:p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input {...register("name")} placeholder="Your name" />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input {...register("email")} type="email" placeholder="you@example.com" />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone</label>
                      <Input {...register("phone")} type="tel" placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Service Interested In</label>
                    <Select value={service} onValueChange={(v: string | null) => setService(v || "")}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your goals and what you're looking for..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    render={
                      <span className="inline-flex items-center justify-center gap-2 w-full h-10 px-6 rounded-lg font-medium bg-[oklch(0.35/0.18/270)] text-white hover:bg-[oklch(0.35/0.18/270)/0.9] disabled:opacity-50" />
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.55/0.10/160)/0.15] flex items-center justify-center shrink-0">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-4 h-4 text-[oklch(0.45/0.12/170)]"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
