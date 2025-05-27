import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Vault, Shield, Home, Building, Flame, Eye, Phone, CheckCircle, Key, Settings } from "lucide-react"

export default function SafesPage() {
  const safeTypes = [
    {
      icon: Flame,
      title: "Fire Safes",
      description: "Protect important documents and valuables from fire damage",
    },
    {
      icon: Shield,
      title: "Burglary Safes",
      description: "High-security safes designed to prevent theft and break-ins",
    },
    {
      icon: Building,
      title: "Wall Safes",
      description: "Concealed wall-mounted safes for discreet security",
    },
    {
      icon: Eye,
      title: "Biometric Access Safes",
      description: "Modern fingerprint and biometric security technology",
    },
    {
      icon: Vault,
      title: "In-ground Safes",
      description: "Underground installation for maximum security",
    },
    {
      icon: Key,
      title: "Change of Lock Combination",
      description: "Professional combination changes and lock services",
    },
    {
      icon: Shield,
      title: "Panic Device Installation",
      description: "Emergency panic devices for enhanced security",
    },
    {
      icon: Vault,
      title: "High Security Safes",
      description: "Premium security safes for maximum protection",
    },
  ]

  const gunSafeTypes = [
    "Gun Safes",
    "Handgun and Pistol Units",
    "Vault Doors",
    "Home and Office Models",
    "Wall Models",
    "Floor Units",
    "Depository Safes",
    "Used Safes",
    "Accessories",
  ]

  const brands = [
    "American Security",
    "Champion Gun Models",
    "Liberty Safes",
    "National Security Models",
    "Summit Make and Models",
    "Superior Make and Models",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            <Vault className="mr-2 h-4 w-4" />
            Safe Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold">Professional Safe Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete safe installation, repair, and maintenance services. From fire safes to gun safes, we provide
            expert solutions for all your security storage needs.
          </p>
        </div>

        {/* Safe Types Grid */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Types of Safes We Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeTypes.map((safe, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <safe.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{safe.title}</CardTitle>
                  <CardDescription>{safe.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Gun Safes Section */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Gun Safe Specialists</h2>
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Gun Safe Types</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gunSafeTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Trusted Brands</h3>
                <div className="space-y-3">
                  {brands.map((brand, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Safe Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Safe Installation</CardTitle>
                <CardDescription>Professional installation of all safe types</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Floor and wall mounting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Proper anchoring and securing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Location consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Delivery and setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Key className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Combination Services</CardTitle>
                <CardDescription>Combination changes and lock maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Combination changes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lock mechanism repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Digital lock programming</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Emergency opening</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Safe Repair</CardTitle>
                <CardDescription>Comprehensive safe repair and maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lock mechanism repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Door alignment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Hinge replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Interior organization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Modern Technology</CardTitle>
                <CardDescription>Advanced biometric and digital solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Biometric fingerprint locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Digital keypad systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Smart safe integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Remote monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Home className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Residential Safes</CardTitle>
                <CardDescription>Home security solutions for families</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Document protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Jewelry safes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Gun storage solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Fire protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Commercial Safes</CardTitle>
                <CardDescription>Business security and cash management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Cash management systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Depository safes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Data protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Multi-user access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us for Safes */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Safe Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Installation</h3>
              <p className="text-sm text-muted-foreground">Professional installation ensuring maximum security</p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">All Brands</h3>
              <p className="text-sm text-muted-foreground">Service all major safe manufacturers</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">Fully licensed and insured technicians</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Emergency Service</h3>
              <p className="text-sm text-muted-foreground">Emergency safe opening available 24/7</p>
            </div>
          </div>
        </div>

        {/* Safe Selection Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choosing the Right Safe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Consider Your Needs</CardTitle>
                <CardDescription>What will you be storing in your safe?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Documents:</strong> Fire-resistant safes for papers, passports, deeds
                  </li>
                  <li>
                    <strong>Valuables:</strong> Burglary-resistant safes for jewelry, cash, collectibles
                  </li>
                  <li>
                    <strong>Firearms:</strong> Gun safes meeting legal requirements and safety standards
                  </li>
                  <li>
                    <strong>Data:</strong> Media safes for hard drives, USB drives, digital storage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Size and Location</CardTitle>
                <CardDescription>Where will your safe be installed?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Floor Safes:</strong> Freestanding units for maximum capacity
                  </li>
                  <li>
                    <strong>Wall Safes:</strong> Concealed installation between wall studs
                  </li>
                  <li>
                    <strong>In-Ground:</strong> Underground installation for ultimate security
                  </li>
                  <li>
                    <strong>Closet Installation:</strong> Hidden placement in bedroom or office closets
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Safe Services?</h2>
          <p className="text-lg opacity-90 mb-6">
            Contact us for professional safe installation, repair, or consultation. We'll help you choose the perfect
            security solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+14075698369">
                <Phone className="mr-2 h-5 w-5" />
                Call (407) 569-8369
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
