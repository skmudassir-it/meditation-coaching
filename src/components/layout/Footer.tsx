import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapPin } from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/mindfulness-meditation", label: "Mindfulness Meditation" },
  { href: "/services/breathwork", label: "Breathwork & Pranayama" },
  { href: "/services/guided-visualization", label: "Guided Visualization" },
  { href: "/services/stress-reduction", label: "Stress Reduction" },
  { href: "/services/sleep-meditation", label: "Sleep Meditation" },
  { href: "/services/corporate-wellness", label: "Corporate Wellness" },
];

const socialLinks = [
  {
    href: "https://instagram.com",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://facebook.com",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    href: "https://twitter.com",
    icon: faTwitter,
    label: "Twitter",
  },
  {
    href: "https://youtube.com",
    icon: faYoutube,
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="StillMind Meditation Co."
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold text-primary">StillMind</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Bringing peace and mindfulness to individuals and organizations
              through evidence-based meditation practices.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <FontAwesomeIcon icon={social.icon} className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faMapPin}
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                />
                <span className="text-sm text-muted-foreground">
                  123 Serenity Lane, Mindful City, MC 94102
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="size-4 shrink-0 text-muted-foreground"
                />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="size-4 shrink-0 text-muted-foreground"
                />
                <a
                  href="mailto:hello@stillmind.co"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  hello@stillmind.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StillMind Meditation Co. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
