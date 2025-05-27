import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Home, Key, Lock, Shield, DoorOpen, Eye, Mail, Car, Phone, CheckCircle } from "lucide-react"

export default function ResidentialPage() {
  const services = [
    {
      icon: Lock,
      title: "Locks Repair / Replace",
      description: "Professional repair and replacement of all types of residential locks",
    },
    {
      icon: Key,
      title: "New Locks Installation",
      description: "Installation of new locks for enhanced home security",
    },
    {
      icon: Shield,
      title: "High Security Locks",
      description: "Premium security locks for maximum protection",
    },
    {
      icon: Key,
      title: "Rekey / Master Key Services",
      description: "Rekeying existing locks and master key system setup",
    },
    {
      icon: Mail,
      title: "Mailbox Locks",
      description: "Mailbox lock installation, repair, and replacement",
    },
    {
      icon: Car,
      title: "Garage Door Locks",
      description: "Garage door lock services and security upgrades",
    },
    {
      icon: Key,
      title: "Locks Re-keyed",
      description: "Professional lock rekeying for new homeowners",
    },
    {
      icon: Lock,
      title: "Window Locks Installed",
      description: "Window lock installation for added security",
    },
    {
      icon: DoorOpen,
      title: "Door & Door Frame Repair",
      description: "Door and frame repair and reinforcement services",
    },
    {
      icon: Eye,
      title: "Peep Holes Installed",
      description: "Peephole installation for visitor identification",
    },
    {
      icon: Key,
      title: "Lost Keys Replaced",
      description: "Quick replacement of lost or stolen keys",
    },
    {
      icon: DoorOpen,
      title: "Patio Door Locks",
      description: "Patio and sliding door lock services",
    },
    {
      icon: Shield,
      title: "Keyless Locks Installed",
      description: "Modern keyless entry system installation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            <Home className="mr-2 h-4 w-4" />
            Residential Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold">Residential Locksmith Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive home security solutions to protect your family and property. From emergency lockouts to
            complete security system installations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Residential Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Licensed and insured technicians",
              "24/7 emergency lockout service",
              "Free security consultations",
              "Warranty on all installations",
              "Competitive pricing",
              "Same-day service available",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Scenarios */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Common Residential Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Home Lockouts</CardTitle>
                <CardDescription>
                  Locked out of your home? We provide fast, non-destructive entry services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Average response time: 15-30 minutes</li>
                  <li>• Non-destructive entry methods</li>
                  <li>• Available 24/7 for emergencies</li>
                  <li>• Upfront pricing with no hidden fees</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Moving to a New Home</CardTitle>
                <CardDescription>
                  Ensure your new home is secure with our comprehensive rekeying services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rekey all existing locks</li>
                  <li>• Install new high-security locks</li>
                  <li>• Security assessment and recommendations</li>
                  <li>• Master key system setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Upgrades</CardTitle>
                <CardDescription>
                  Enhance your home security with modern lock technology and reinforcements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smart lock installation</li>
                  <li>• Door frame reinforcement</li>
                  <li>• Window security locks</li>
                  <li>• Security consultation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Broken or Damaged Locks</CardTitle>
                <CardDescription>
                  Quick repair or replacement of damaged locks to restore your home security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Same-day repair service</li>
                  <li>• Quality replacement locks</li>
                  <li>• Door and frame repair</li>
                  <li>• Emergency board-up service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Residential Locksmith Services?</h2>
          <p className="text-lg opacity-90 mb-6">
            Contact us today for professional, reliable residential locksmith services. Emergency service available
            24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+14075698369">
                <Phone className="mr-2 h-5 w-5" />
                Call (407) 569-8369
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
