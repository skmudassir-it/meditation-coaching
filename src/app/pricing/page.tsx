import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PRICING_PLANS, FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — StillMind Meditation Co.",
  description:
    "Explore our meditation coaching plans — from Starter to Corporate. Find the right program for your journey.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Choose Your Path
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every journey is unique. Find the plan that fits your goals, schedule, and budget.
              All plans include a free introductory session.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={`glass-card relative flex flex-col ${
                  plan.popular
                    ? "ring-2 ring-[oklch(0.35/0.18/270)] shadow-lg"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[oklch(0.35/0.18/270)] text-white">
                      <FontAwesomeIcon icon={faStar} className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground text-sm">/month</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="w-3.5 h-3.5 text-[oklch(0.45/0.12/170)] mt-0.5 shrink-0"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href="/contact" className="inline-flex w-full">
                    <Button
                      render={
                        <span
                          className={`inline-flex items-center justify-center gap-2 w-full h-10 px-6 rounded-lg font-medium ${
                            plan.popular
                              ? "bg-[oklch(0.35/0.18/270)] text-white hover:bg-[oklch(0.35/0.18/270)/0.9]"
                              : ""
                          }`}
                        />
                      }
                    >
                      {plan.name === "Corporate" ? "Contact Us" : "Get Started"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="glass-card group"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-medium list-none">
                  {faq.q}
                  <span className="shrink-0 ml-4 text-muted-foreground group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
