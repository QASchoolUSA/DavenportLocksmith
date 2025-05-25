import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Building,
  Key,
  Lock,
  Shield,
  DoorOpen,
  Eye,
  Mail,
  Car,
  Phone,
  CheckCircle,
  Users,
  AlertTriangle,
  Settings,
  CreditCard,
} from "lucide-react"

export default function CommercialPage() {
  const services = [
    {
      icon: Key,
      title: "Security Key Systems",
      description: "Comprehensive security key systems for business protection",
    },
    {
      icon: Key,
      title: "Master Key Systems",
      description: "Efficient master key systems for multi-level access control",
    },
    {
      icon: Settings,
      title: "General Locksmithing",
      description: "Complete commercial locksmith services for all business needs",
    },
    {
      icon: Users,
      title: "ADA Compliant Hardware",
      description: "Americans with Disabilities Act compliant door hardware",
    },
    {
      icon: AlertTriangle,
      title: "Exit Alarms",
      description: "Emergency exit alarm systems installation and maintenance",
    },
    {
      icon: DoorOpen,
      title: "Door Closer Installation",
      description: "Professional door closer installation and repair services",
    },
    {
      icon: Building,
      title: "Aluminum Storefront Doors",
      description: "Specialized services for aluminum storefront door systems",
    },
    {
      icon: CreditCard,
      title: "Access Control Systems",
      description: "Modern access control with card technologies and single door systems",
    },
    {
      icon: Lock,
      title: "Locks Repair / Replace",
      description: "Commercial lock repair and replacement services",
    },
    {
      icon: Key,
      title: "New Locks Installation",
      description: "Installation of new commercial-grade locks",
    },
    {
      icon: Shield,
      title: "High Security Locks",
      description: "Premium high-security locks for commercial properties",
    },
    {
      icon: Key,
      title: "Rekey / Master Key",
      description: "Commercial rekeying and master key system setup",
    },
    {
      icon: Mail,
      title: "Mailbox Locks",
      description: "Commercial mailbox and mail room security solutions",
    },
    {
      icon: Car,
      title: "Garage Door Locks",
      description: "Commercial garage and loading dock security",
    },
    {
      icon: Lock,
      title: "Window Locks Installed",
      description: "Commercial window security lock installation",
    },
    {
      icon: DoorOpen,
      title: "Door & Frame Reinforcement",
      description: "Commercial door and frame repair and reinforcement",
    },
    {
      icon: Eye,
      title: "Peep Holes Installed",
      description: "Security peephole installation for commercial properties",
    },
    {
      icon: Key,
      title: "Lost Keys Replaced",
      description: "Quick replacement of lost commercial keys",
    },
    {
      icon: DoorOpen,
      title: "Patio Door Locks",
      description: "Commercial patio and sliding door security",
    },
    {
      icon: Key,
      title: "Restricted Keys",
      description: '"Do Not Duplicate" restricted key systems',
    },
    {
      icon: Shield,
      title: "Keyless Locks Installed",
      description: "Commercial keyless entry and smart lock systems",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            <Building className="mr-2 h-4 w-4" />
            Commercial Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold">Commercial Locksmith Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional commercial security solutions for businesses of all sizes. From access control systems to
            master key setups, we secure your business.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Specialized Commercial Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Access Control</CardTitle>
                <CardDescription>Leading card technologies and standalone single door systems</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <Key className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Master Key Systems</CardTitle>
                <CardDescription>Hierarchical access control for complex business structures</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>ADA Compliance</CardTitle>
                <CardDescription>Fully compliant hardware meeting accessibility requirements</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Exit Alarms</CardTitle>
                <CardDescription>Emergency exit monitoring and alarm systems</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Complete Commercial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Commercial Security Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Enhanced employee safety",
              "Controlled access management",
              "Reduced security risks",
              "Compliance with regulations",
              "Professional installation",
              "Ongoing maintenance support",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Office Buildings</CardTitle>
                <CardDescription>Comprehensive security for multi-tenant office environments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Master key systems</li>
                  <li>• Access control integration</li>
                  <li>• Suite-level security</li>
                  <li>• Emergency exit compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retail Stores</CardTitle>
                <CardDescription>Security solutions designed for retail environments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Storefront door services</li>
                  <li>• High-security locks</li>
                  <li>• Restricted key systems</li>
                  <li>• Emergency lockout service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Healthcare Facilities</CardTitle>
                <CardDescription>Specialized security for medical and healthcare facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ADA compliant hardware</li>
                  <li>• Privacy protection locks</li>
                  <li>• Emergency access systems</li>
                  <li>• Pharmaceutical security</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational Institutions</CardTitle>
                <CardDescription>Security systems for schools and educational facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Classroom lockdown systems</li>
                  <li>• Master key hierarchies</li>
                  <li>• Emergency exit hardware</li>
                  <li>• Restricted access areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industrial Facilities</CardTitle>
                <CardDescription>Heavy-duty security for industrial and manufacturing sites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High-security access control</li>
                  <li>• Industrial-grade locks</li>
                  <li>• Perimeter security</li>
                  <li>• Equipment protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Government Buildings</CardTitle>
                <CardDescription>Security solutions meeting government standards and requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High-security clearance systems</li>
                  <li>• Compliance with federal standards</li>
                  <li>• Multi-level access control</li>
                  <li>• Emergency protocols</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Secure Your Business Today</h2>
          <p className="text-lg opacity-90 mb-6">
            Contact us for a free commercial security consultation. We'll assess your needs and provide customized
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
