import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { AlertTriangle, Clock, Phone, Car, Home, Building, Key, Lock, CheckCircle, Zap } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="destructive" className="mb-4">
            <AlertTriangle className="mr-2 h-4 w-4" />
            24/7 Emergency Service
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-red-600">Emergency Locksmith Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Locked out? Lost your keys? Broken lock? We're here to help 24/7 with fast, professional emergency locksmith
            services. No job too big or small.
          </p>
        </div>

        {/* Emergency Call Section */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-12 text-center max-w-4xl mx-auto">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-red-800 mb-4">Emergency Lockout?</h2>
          <p className="text-lg text-red-700 mb-6">
            Don't panic! Our emergency response team is standing by 24/7 to help you get back inside quickly and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-6 w-6" />
                Call Emergency Line: (555) 123-4567
              </Link>
            </Button>
            <div className="flex items-center justify-center space-x-2 text-red-700">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Average Response: 15-30 Minutes</span>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Emergency Situations We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <Home className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-red-800">Home Lockouts</CardTitle>
                <CardDescription>Locked out of your house? We'll get you back inside without damage.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Non-destructive entry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>All door types</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>24/7 availability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Car className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-red-800">Car Lockouts</CardTitle>
                <CardDescription>Keys locked in your car? We'll have you back on the road quickly.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>All vehicle makes/models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>No vehicle damage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Roadside service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Building className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-red-800">Business Lockouts</CardTitle>
                <CardDescription>Locked out of your office or store? We understand business urgency.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Priority response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Minimal disruption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Professional service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Key className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-red-800">Lost Keys</CardTitle>
                <CardDescription>
                  Lost your keys? We can create new ones or rekey your locks immediately.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>On-site key cutting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lock rekeying</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Security assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Lock className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-red-800">Broken Locks</CardTitle>
                <CardDescription>Lock broken or jammed? We'll repair or replace it on the spot.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Emergency repairs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lock replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Security restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Zap className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle className="text-red-800">Security Breaches</CardTitle>
                <CardDescription>
                  Break-in or attempted break-in? We'll secure your property immediately.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Emergency securing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lock replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Security upgrade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time & Coverage */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Fast Response, Wide Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">15-30 Minutes</h3>
              <p className="text-muted-foreground">Average emergency response time in most areas</p>
            </div>
            <div>
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Always available, including holidays and weekends</p>
            </div>
            <div>
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed, bonded, and insured technicians</p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What to Expect During Emergency Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>When You Call</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Immediate response from our dispatch team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Quick assessment of your emergency situation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Estimated arrival time provided</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>Technician dispatched to your location</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>When We Arrive</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Professional identification and verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Assessment of the lock and entry method</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Upfront pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>Quick, professional service completion</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Emergency Lockout Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Before We Arrive:</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Stay calm and in a safe location</li>
                <li>• Check all doors and windows (safely)</li>
                <li>• Have identification ready for verification</li>
                <li>• Note any damage or security concerns</li>
                <li>• Keep your phone charged for communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Safety First:</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Don't attempt to force entry yourself</li>
                <li>• Avoid breaking windows or doors</li>
                <li>• Don't leave valuables visible in vehicles</li>
                <li>• If you feel unsafe, call police first</li>
                <li>• Wait in a well-lit, public area if possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-red-600 text-white rounded-lg p-8 text-center max-w-4xl mx-auto">
          <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Emergency Locksmith Service Available Now</h2>
          <p className="text-xl opacity-90 mb-6">
            Don't wait - every minute counts in an emergency. Our professional locksmiths are standing by 24/7 to help
            you get back inside safely and quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-6 w-6" />
                Call Emergency Line: (555) 123-4567
              </Link>
            </Button>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Available 24/7 • Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
