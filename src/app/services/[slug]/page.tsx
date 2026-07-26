import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  faCheck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/data";

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

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — StillMind Meditation Co.`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const icon = iconMap[service.icon] || faBrain;

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[oklch(0.35/0.18/270)] to-[oklch(0.4/0.12/260)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(1_0_0/0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={icon} className="w-8 h-8" />
            </div>
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
              Meditation Service
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                About This Practice
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                What You&apos;ll Learn
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[oklch(0.55/0.10/160)/0.15] flex items-center justify-center shrink-0 mt-0.5">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-3 h-3 text-[oklch(0.45/0.12/170)]"
                      />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Ready to Begin?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Take the first step toward a calmer, more centered life. Book your free introductory session today.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button
              render={<span className="inline-flex items-center gap-2 bg-[oklch(0.35/0.18/270)] text-white hover:bg-[oklch(0.35/0.18/270)/0.9] h-11 px-8 rounded-lg font-medium" />}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
