import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                K
              </div>
              <span className="text-xl font-bold text-foreground">
                Kinder School
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nurturing young minds with care, creativity, and excellence. A
              place where learning is an adventure.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:border-pink-500 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="font-bold text-lg mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">
              Academics
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/academics?tab=nursery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nursery Program
                </Link>
              </li>
              <li>
                <Link
                  href="/academics?tab=kindergarten"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LKG & UKG
                </Link>
              </li>
              <li>
                <Link
                  href="/academics?tab=primary"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Primary School (1-4)
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  123 School Lane, Model Town,
                  <br />
                  City, State - 110001
                </span>
              </li>
              <li className="flex gap-3 items-center text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>admissions@kinderschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Kinder School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
