"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [date, setDate] = useState<Date>()
  const [location, setLocation] = useState("")
  const [guests, setGuests] = useState("2")

  return (
    <div className="relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-48 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover Unforgettable Travel Experiences
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mb-12">
          Connect with local service providers for vehicles, accommodations, and event spaces all in one place.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-4xl bg-background rounded-lg shadow-lg p-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
              <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
              <TabsTrigger value="events">Event Spaces</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Where are you going?" 
                    className="pl-10" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal md:w-[240px]",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <div className="relative md:w-[140px]">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="number" 
                    placeholder="Guests" 
                    className="pl-10" 
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
                
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="vehicles" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Pickup location" className="pl-10" />
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pickup date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  <span>Find Vehicles</span>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="accommodations" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Destination" className="pl-10" />
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Check-in date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <div className="relative md:w-[140px]">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input type="number" placeholder="Guests" className="pl-10" min="1" />
                </div>
                
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  <span>Find Stays</span>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Event location" className="pl-10" />
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Event date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <div className="relative md:w-[140px]">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input type="number" placeholder="Attendees" className="pl-10" min="1" />
                </div>
                
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  <span>Find Venues</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}