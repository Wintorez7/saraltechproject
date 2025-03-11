import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "SJ",
    role: "Travel Blogger",
    content: "TourConnect made planning my trip to Bali so easy. I found the perfect villa and a reliable car rental all in one place. The local guide they connected me with showed me hidden spots I would have never discovered on my own!",
    rating: 5
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    role: "Business Traveler",
    content: "As someone who travels frequently for work, I appreciate the efficiency of TourConnect. Their service is reliable, and the booking process is straightforward. I've used them in multiple cities with consistently great results.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    avatar: "ER",
    role: "Family Vacationer",
    content: "Finding accommodations that work for a family of five can be challenging, but TourConnect made it simple. We booked a spacious apartment in Paris and even reserved tickets to attractions through their platform. Highly recommend!",
    rating: 4
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from travelers who have experienced our services around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardHeader>
              <CardFooter className="mt-auto">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}