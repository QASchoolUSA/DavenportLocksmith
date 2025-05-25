import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Phone,
  Shield,
  Clock,
  Star,
  Home,
  Building,
  Car,
  AlertTriangle,
  Vault,
  CheckCircle,
  Award,
  Users,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Shield className="mr-2 h-4 w-4" />
                Licensed & Insured
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Professional Locksmith Services</h1>
              <p className="text-xl text-muted-foreground">
                24/7 emergency service for residential, commercial, and automotive locksmith needs. Fast, reliable, and
                trusted by thousands of customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="tel:+1234567890">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now for Emergency Service
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Licensed & Bonded</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <Shield className="h-32 w-32 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive locksmith solutions for all your security needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Home,
                  title: "Residential",
                  description: "Home lockouts, lock installation, rekeying, and security upgrades",
                  href: "/residential",
                },
                {
                  icon: Building,
                  title: "Commercial",
                  description: "Master key systems, access control, and business security solutions",
                  href: "/commercial",
                },
                {
                  icon: Car,
                  title: "Automotive",
                  description: "Car lockouts, key programming, ignition repair, and transponder keys",
                  href: "/automotive",
                },
                {
                  icon: AlertTriangle,
                  title: "Emergency",
                  description: "24/7 emergency lockout service with rapid response times",
                  href: "/emergency",
                },
                {
                  icon: Vault,
                  title: "Safes",
                  description: "Safe installation, combination changes, and security safe services",
                  href: "/safes",
                },
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Why Choose SecureLock Pro?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the difference of working with true professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "24/7 Service",
                  description: "Emergency locksmith services available around the clock",
                },
                {
                  icon: Award,
                  title: "Licensed & Insured",
                  description: "Fully licensed, bonded, and insured for your protection",
                },
                {
                  icon: Users,
                  title: "Experienced Team",
                  description: "Skilled technicians with years of locksmith experience",
                },
                {
                  icon: CheckCircle,
                  title: "Guaranteed Work",
                  description: "100% satisfaction guarantee on all our services",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">What Our Customers Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  rating: 5,
                  text: "Excellent service! They arrived within 20 minutes of my call and had my door unlocked quickly. Very professional and reasonably priced.",
                },
                {
                  name: "Mike Chen",
                  rating: 5,
                  text: "SecureLock Pro installed a new security system for our office. The team was knowledgeable and the installation was flawless. Highly recommend!",
                },
                {
                  name: "Emily Rodriguez",
                  rating: 5,
                  text: "Lost my car keys on a Sunday evening. They came out immediately and had new keys programmed in no time. Lifesaver!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Need Locksmith Services?</h2>
            <p className="text-xl opacity-90">
              Don't wait - contact us now for fast, professional locksmith services. Available 24/7 for all your
              emergency needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
