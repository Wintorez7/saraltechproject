import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Car, CreditCard, Home, MapPin, Package, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Manage your bookings and account settings.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button size="sm">
              <Package className="mr-2 h-4 w-4" />
              Book a Service
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="bookings" className="space-y-4">
          <TabsList>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bookings" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Bookings
                  </CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    Next: Bali Villa on June 15
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Spent
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,550</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Loyalty Points
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,350</div>
                  <p className="text-xs text-muted-foreground">
                    250 points until next reward
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">Your Upcoming Trips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Bali Villa</CardTitle>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Ubud, Bali
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">Check-in</p>
                      <p className="text-muted-foreground">Jun 15, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Check-out</p>
                      <p className="text-muted-foreground">Jun 22, 2025</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm">
                    <Home className="h-3.5 w-3.5 mr-1" />
                    <span>Luxury Villa • 3 Bedrooms</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Paris Car Rental</CardTitle>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Charles de Gaulle Airport
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">Pickup</p>
                      <p className="text-muted-foreground">Jul 10, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Return</p>
                      <p className="text-muted-foreground">Jul 17, 2025</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm">
                    <Car className="h-3.5 w-3.5 mr-1" />
                    <span>Compact Car • Automatic</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Tokyo Event Space</CardTitle>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Shibuya, Tokyo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-muted-foreground">Aug 5, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-muted-foreground">18:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm">
                    <Users className="h-3.5 w-3.5 mr-1" />
                    <span>Conference Room • 30 Guests</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6">
              <Link href="/bookings">
                <Button variant="outline">View All Bookings</Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Your Favorite Places</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Santorini Villa</CardTitle>
                    <Button variant="outline" size="sm">Book</Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Oia, Santorini
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm">
                    <Home className="h-3.5 w-3.5 mr-1" />
                    <span>Luxury Villa • Ocean View</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Saved 3 months ago
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>New York Loft</CardTitle>
                    <Button variant="outline" size="sm">Book</Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Manhattan, New York
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm">
                    <Home className="h-3.5 w-3.5 mr-1" />
                    <span>Penthouse • City View</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Saved 1 month ago
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Barcelona Tour</CardTitle>
                    <Button variant="outline" size="sm">Book</Button>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Barcelona, Spain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm">
                    <Users className="h-3.5 w-3.5 mr-1" />
                    <span>Private Tour • 4 Hours</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Saved 2 weeks ago
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Manage your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Name</p>
                    <p className="text-sm text-muted-foreground">John Doe</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Member Since</p>
                    <p className="text-sm text-muted-foreground">January 15, 2023</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">Edit Profile</Button>
                  <Button variant="outline" size="sm">Change Password</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>
                  Manage your saved payment methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border p-3 rounded-md">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Remove</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border p-3 rounded-md">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">Mastercard ending in 8888</p>
                        <p className="text-xs text-muted-foreground">Expires 09/26</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Remove</Button>
                  </div>
                  
                  <Button variant="outline" size="sm" className="mt-2">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </main>
  )
}