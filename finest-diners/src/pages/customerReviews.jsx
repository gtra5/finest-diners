import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState, useEffect } from "react"

 function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Saimun Islam",
      role: "Product Designer",
      text: "Love the quality of meat. Clean cuts, no smell, and exactly what's shown online. And the delivery is always on time!",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Samira Islam",
      role: "Product Designer",
      text: "Amazing service! The meat quality exceeded my expectations. Fresh, well-packaged, and delivered right on schedule.",
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      role: "Chef",
      text: "As a professional chef, I'm very picky about meat quality. This service delivers restaurant-grade meat every time!",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      role: "Food Blogger",
      text: "Perfect for my cooking videos! The cuts are consistent and the packaging is Instagram-worthy. Highly recommend!",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "David Chen",
      role: "Home Cook",
      text: "Finally found a reliable meat delivery service. The quality is outstanding and customer service is top-notch!",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      role: "Nutritionist",
      text: "I recommend this to all my clients. Clean, fresh meat with transparent sourcing. Perfect for healthy meal planning!",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Restaurant Owner",
      text: "We've been using this service for our restaurant for months. Consistent quality and reliable delivery every time!",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 8,
      name: "Lisa Wang",
      role: "Busy Mom",
      text: "Saves me so much time! No more trips to the butcher. Quality meat delivered to my door - what more could I ask for?",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 9,
      name: "James Wilson",
      role: "Fitness Trainer",
      text: "Perfect for my meal prep! Lean cuts, properly trimmed, and always fresh. My clients love the results!",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 10,
      name: "Emma Thompson",
      role: "Food Critic",
      text: "Impressed by the attention to detail. From packaging to quality, everything exceeds expectations. Five stars!",
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 11,
      name: "Carlos Martinez",
      role: "Grill Master",
      text: "Been grilling for 20 years and this is the best meat I've ever ordered online. Perfect marbling and tenderness!",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 12,
      name: "Rachel Green",
      role: "Cooking Enthusiast",
      text: "Love trying new recipes and this service never disappoints. Fresh ingredients make all the difference in taste!",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 13,
      name: "Tony Stark",
      role: "Tech Executive",
      text: "Convenience meets quality! Perfect for my busy lifestyle. The app is user-friendly and delivery is always punctual.",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], featured: i === 1 }) // Middle card is featured
    }
    return visible
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">What our customer say</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={`${testimonial.id}-${currentIndex}`} className="transition-all duration-500 ease-in-out">
              {testimonial.featured ? (
                // Featured testimonial card
                <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden transform scale-105">
                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                      <p className="text-purple-200 text-sm">{testimonial.role}</p>
                    </div>

                    <p className="text-lg leading-relaxed mb-6">{testimonial.text}</p>

                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">({testimonial.rating})</span>
                    </div>
                  </div>

                  {/* Large profile image */}
                  <div className="absolute -right-4 -bottom-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt=""
                      className="w-48 h-48 rounded-full object-cover border-4 border-white/20"
                    />
                  </div>
                </div>
              ) : (
                // Regular testimonial card
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{testimonial.text}</p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default CustomerReviews;