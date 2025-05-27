import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Car, Key, Lock, Settings, Phone, CheckCircle, AlertTriangle, Zap } from "lucide-react"

export default function AutomotivePage() {
  const services = [
    {
      icon: Car,
      title: "Car Lockouts",
      description: "Fast, non-destructive vehicle entry for all makes and models",
    },
    {
      icon: Key,
      title: "New Car Keys",
      description: "Key cutting and programming for modern vehicles",
    },
    {
      icon: Zap,
      title: "Transponder Key Services",
      description: "Programming and replacement of transponder and chip keys",
    },
    {
      icon: Lock,
      title: "High Security Key Services",
      description: "Advanced security keys for luxury and high-end vehicles",
    },
    {
      icon: Settings,
      title: "Ignition Repair / Replace",
      description: "Professional ignition cylinder repair and replacement",
    },
    {
      icon: Lock,
      title: "Locks Repair / Replace",
      description: "Car door and trunk lock repair and replacement services",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            <Car className="mr-2 h-4 w-4" />
            Automotive Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold">Automotive Locksmith Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional automotive locksmith services for all vehicle makes and models. From emergency lockouts to key
            programming, we get you back on the road quickly.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Locked Out of Your Car?</h3>
              <p className="text-red-700 mb-4">
                Don't panic! Our emergency automotive locksmith service is available 24/7. We'll have you back in your
                vehicle safely and quickly.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="tel:+14075698369">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Line: (407) 569-8369
                </Link>
              </Button>
            </div>
          </div>
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

        {/* Detailed Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Comprehensive Automotive Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Car className="h-6 w-6 text-primary" />
                  <span>Emergency Lockout Service</span>
                </CardTitle>
                <CardDescription>Fast response for vehicle lockout emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency response</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Non-destructive entry methods</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All makes and models</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Average response time: 15-30 minutes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No damage to your vehicle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="h-6 w-6 text-primary" />
                  <span>Key Services</span>
                </CardTitle>
                <CardDescription>Complete key cutting and programming services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Traditional key cutting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transponder key programming</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Smart key programming</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Key fob replacement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>High-security laser cut keys</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-primary" />
                  <span>Ignition Services</span>
                </CardTitle>
                <CardDescription>Professional ignition repair and replacement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ignition cylinder repair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ignition replacement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stuck key extraction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ignition switch problems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Key won't turn issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-primary" />
                  <span>Lock Services</span>
                </CardTitle>
                <CardDescription>Vehicle lock repair and replacement services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Door lock repair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Trunk lock services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Glove box locks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lock cylinder replacement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Broken key extraction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vehicle Types */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">We Service All Vehicle Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {["Cars", "Trucks", "SUVs", "Motorcycles", "RVs", "Commercial Vehicles"].map((vehicle, index) => (
              <div key={index} className="bg-background rounded-lg p-4">
                <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">{vehicle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Common Automotive Lock Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Keys Locked Inside",
                description: "Most common emergency - we can get you back in quickly and safely",
              },
              {
                title: "Lost or Stolen Keys",
                description: "Complete key replacement and reprogramming service",
              },
              {
                title: "Broken Key in Lock",
                description: "Safe extraction and replacement of broken keys",
              },
              {
                title: "Key Won't Turn",
                description: "Ignition and lock cylinder repair services",
              },
              {
                title: "Remote Not Working",
                description: "Key fob programming and battery replacement",
              },
              {
                title: "Transponder Issues",
                description: "Chip key programming and transponder repair",
              },
            ].map((issue, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{issue.title}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Information */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Emergency Lockout</h3>
              <p className="text-muted-foreground">Starting at competitive rates with no hidden fees</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Key Programming</h3>
              <p className="text-muted-foreground">Varies by vehicle make and key type</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Ignition Repair</h3>
              <p className="text-muted-foreground">Free estimates provided on-site</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All prices quoted upfront with no surprises. Senior and military discounts available.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Automotive Locksmith Service?</h2>
          <p className="text-lg opacity-90 mb-6">
            Don't let car lock problems ruin your day. Contact us now for fast, professional automotive locksmith
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+14075698369">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: (407) 569-8369
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
