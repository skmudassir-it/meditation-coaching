import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — StillMind Meditation Co.",
  description:
    "Meet the team behind StillMind Meditation Co. Learn about our mission, values, and the dedicated coaches guiding your meditation journey.",
};

const values = [
  {
    icon: faHeart,
    title: "Compassion First",
    description:
      "We meet every person with empathy and understanding, creating a safe space for authentic growth and healing.",
  },
  {
    icon: faEye,
    title: "Evidence-Based Practice",
    description:
      "Our methods are grounded in neuroscience and clinical research, blending ancient wisdom with modern science.",
  },
  {
    icon: faHandHoldingHeart,
    title: "Accessible to All",
    description:
      "Meditation should be available to everyone. We offer sliding-scale pricing and community programs to remove barriers.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              About StillMind
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2010, StillMind Meditation Co. began with a simple belief: that everyone
              deserves access to the transformative power of meditation. What started as a small
              studio in Portland has grown into a thriving community of coaches and clients
              dedicated to cultivating peace, presence, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To make meditation accessible, practical, and transformative for people from all
                walks of life. We empower individuals and organizations to cultivate mindfulness as
                a foundation for well-being, resilience, and meaningful connection.
              </p>
            </div>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A world where mindfulness is woven into the fabric of daily life — in homes, schools,
                workplaces, and communities — creating a more compassionate, present, and connected
                society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Meet Your Guides
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our coaches bring decades of combined experience in meditation, psychology, and
              contemplative traditions.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name} className="glass-card overflow-hidden">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[oklch(0.35/0.18/270)] to-[oklch(0.55/0.10/160)] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-[oklch(0.35/0.18/270)] font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.55/0.10/160)/0.15] flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="w-6 h-6 text-[oklch(0.45/0.12/170)]"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
