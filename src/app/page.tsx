import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faWind,
  faEye,
  faHeartPulse,
  faMoon,
  faBuilding,
  faPersonWalking,
  faHeart,
  faUsers,
  faCalendarCheck,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "StillMind Meditation Co. — Find Your Still Point",
  description:
    "Transform your life with personalized meditation coaching. Discover mindfulness, breathwork, guided visualization, and more at StillMind Meditation Co.",
};

const iconMap: Record<string, typeof faBrain> = {
  brain: faBrain,
  wind: faWind,
  eye: faEye,
  "heart-pulse": faHeartPulse,
  moon: faMoon,
  building: faBuilding,
  "person-walking": faPersonWalking,
  heart: faHeart,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.35/0.18/270)] via-[oklch(0.4/0.12/260)] to-[oklch(0.55/0.10/160)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0/0.08),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/20">
              Transform Your Mind
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find Your<br />Still Point
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
              Personalized meditation coaching to help you navigate life with clarity, calm, and purpose.
              Discover practices that fit your life — not the other way around.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="inline-flex">
                <Button
                  render={<span className="inline-flex items-center gap-2 bg-white text-[oklch(0.35/0.18/270)] hover:bg-white/90 h-10 px-6 rounded-lg font-medium" />}
                >
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex">
                <Button
                  render={<span className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 h-10 px-6 rounded-lg font-medium" />}
                >
                  Book a Free Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From mindfulness to sleep meditation, find the practice that resonates with your journey.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((service) => {
              const icon = iconMap[service.icon] || faBrain;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="glass-card h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-[oklch(0.55/0.10/160)/0.15] flex items-center justify-center mb-3 group-hover:bg-[oklch(0.55/0.10/160)/0.25] transition-colors">
                        <FontAwesomeIcon icon={icon} className="w-5 h-5 text-[oklch(0.45/0.12/170)]" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button
                render={<span className="inline-flex items-center gap-2 h-10 px-6 rounded-lg font-medium" />}
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Guiding You to Inner Peace
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At StillMind Meditation Co., we believe everyone deserves access to the transformative power of meditation.
                Our certified coaches bring decades of combined experience in mindfulness, clinical psychology, and contemplative traditions.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We don&apos;t believe in one-size-fits-all. Every program is tailored to your unique needs, goals, and lifestyle.
              </p>
              <Link href="/about" className="inline-flex">
                <Button
                  render={<span className="inline-flex items-center gap-2 h-10 px-6 rounded-lg font-medium" />}
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[oklch(0.35/0.18/270)] to-[oklch(0.55/0.10/160)] flex items-center justify-center">
                <FontAwesomeIcon icon={faBrain} className="w-20 h-20 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real stories from people who found their still point.
            </p>
          </div>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[oklch(0.35/0.18/270)] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mb-3 text-[oklch(0.78/0.08/90)]" />
              <div className="text-3xl sm:text-4xl font-bold mb-1">2,500+</div>
              <div className="text-white/70">Clients Served</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarCheck} className="w-8 h-8 mb-3 text-[oklch(0.78/0.08/90)]" />
              <div className="text-3xl sm:text-4xl font-bold mb-1">15,000+</div>
              <div className="text-white/70">Sessions Held</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faAward} className="w-8 h-8 mb-3 text-[oklch(0.78/0.08/90)]" />
              <div className="text-3xl sm:text-4xl font-bold mb-1">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to Find Your Still Point?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start your journey with a free 30-minute introductory session. No commitment, just clarity.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button
              render={<span className="inline-flex items-center gap-2 bg-[oklch(0.35/0.18/270)] text-white hover:bg-[oklch(0.35/0.18/270)/0.9] h-12 px-8 rounded-lg text-base font-medium" />}
            >
              Book Your Free Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
