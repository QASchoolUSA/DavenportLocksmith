import Link from "next/link"
import { KeyRound, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <KeyRound className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SecureLock Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional locksmith services with 24/7 emergency support. Licensed, insured, and trusted by thousands
                of customers.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/residential" className="text-muted-foreground hover:text-primary">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link href="/commercial" className="text-muted-foreground hover:text-primary">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/automotive" className="text-muted-foreground hover:text-primary">
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="text-muted-foreground hover:text-primary">
                    Emergency
                  </Link>
                </li>
                <li>
                  <Link href="/safes" className="text-muted-foreground hover:text-primary">
                    Safes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">info@securelockpro.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">123 Main St, City, State 12345</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">24/7 Emergency Service</span>
                </li>
                <li className="text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</li>
                <li className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</li>
                <li className="text-muted-foreground">Sun: Emergency Only</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground max-w-7xl mx-auto">
            <p>&copy; {new Date().getFullYear()} SecureLock Pro. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
