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
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — StillMind Meditation Co.",
  description:
    "Explore our meditation coaching services: mindfulness, breathwork, guided visualization, stress reduction, sleep meditation, corporate wellness, walking meditation, and loving-kindness.",
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every journey is unique. Explore our range of meditation coaching services and find the
              practice that speaks to you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
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
                    <CardContent>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.35/0.18/270)] group-hover:gap-2 transition-all">
                        Learn More <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
