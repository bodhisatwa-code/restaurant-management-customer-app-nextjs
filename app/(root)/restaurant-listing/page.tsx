"use client"

import { useState } from 'react'
import { Search, Filter, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import RestaurantCard from '@/components/common/restaurant-card'

export default function RestaurantListing() {
  const [filters, setFilters] = useState({
    cuisine: [] as string[],
    price: [] as string[],
    rating: null as number | null,
    availability: false,
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('rating')

  // Example expanded restaurant data
  const restaurants = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1722686516587-92d4deb0f56a?q=80&w=2054",
      name: "Pasta Paradise",
      cuisine: "Italian",
      rating: 4.5,
      deliveryTime: "20-30 min",
      minOrder: 15,
      isOpen: true,
      availableTables: 5,
      reviews: 128,
      menu: [
        { name: "Carbonara", price: 16.99 },
        { name: "Margherita Pizza", price: 14.99 },
        { name: "Tiramisu", price: 8.99 }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1723744901841-970bbed9101f?q=80&w=1770",
      name: "Sushi Sensation",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "25-35 min",
      minOrder: 20,
      isOpen: true,
      availableTables: 3,
      reviews: 256,
      menu: [
        { name: "Dragon Roll", price: 18.99 },
        { name: "Miso Soup", price: 4.99 },
        { name: "Salmon Nigiri", price: 12.99 }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1656345088508-4c4fd779b3a8?q=80&w=1974",
      name: "Burger Bliss",
      cuisine: "American",
      rating: 4.2,
      deliveryTime: "15-25 min",
      minOrder: 10,
      isOpen: false,
      availableTables: 0,
      reviews: 89,
      menu: [
        { name: "Classic Burger", price: 12.99 },
        { name: "Cheese Fries", price: 6.99 },
        { name: "Milkshake", price: 5.99 }
      ]
    },
    // Adding more restaurants for testing layout
    {
      id: 4,
      image: "https://plus.unsplash.com/premium_photo-1679503585289-c02467981894?q=80&w=1771",
      name: "Taco Temple",
      cuisine: "Mexican",
      rating: 4.6,
      deliveryTime: "20-35 min",
      minOrder: 12,
      isOpen: true,
      availableTables: 4,
      reviews: 167,
      menu: [
        { name: "Street Tacos", price: 10.99 },
        { name: "Burrito Bowl", price: 13.99 },
        { name: "Churros", price: 5.99 }
      ]
    },
    {
      id: 5,
      image: "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?q=80&w=1770",
      name: "Curry House",
      cuisine: "Indian",
      rating: 4.8,
      deliveryTime: "30-45 min",
      minOrder: 18,
      isOpen: true,
      availableTables: 6,
      reviews: 203,
      menu: [
        { name: "Butter Chicken", price: 17.99 },
        { name: "Naan Bread", price: 3.99 },
        { name: "Biryani", price: 16.99 }
      ]
    }
  ]

  // Filter and sort restaurants
  const filteredRestaurants = restaurants
    .filter(restaurant => {
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase()
        return restaurant.name.toLowerCase().includes(searchLower) ||
               restaurant.cuisine.toLowerCase().includes(searchLower)
      }
      if (filters.cuisine.length && !filters.cuisine.includes(restaurant.cuisine)) return false
      if (filters.rating && restaurant.rating < filters.rating) return false
      if (filters.availability && !restaurant.isOpen) return false
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviews - a.reviews
        case 'deliveryTime':
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search bar */}
        <div className="mb-8">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters - reduced width */}
          <div className="w-56 shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Cuisine</h3>
                {['Italian', 'Japanese', 'American', 'Indian', 'Mexican'].map((cuisine) => (
                  <div key={cuisine} className="flex items-center mb-2">
                    <Checkbox
                      id={`cuisine-${cuisine}`}
                      checked={filters.cuisine.includes(cuisine)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFilters(prev => ({ ...prev, cuisine: [...prev.cuisine, cuisine] }))
                        } else {
                          setFilters(prev => ({ ...prev, cuisine: prev.cuisine.filter(c => c !== cuisine) }))
                        }
                      }}
                    />
                    <label htmlFor={`cuisine-${cuisine}`} className="ml-2 text-sm">{cuisine}</label>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Rating</h3>
                {[4, 3, 2].map((rating) => (
                  <div key={rating} className="flex items-center mb-2">
                    <Checkbox
                      id={`rating-${rating}`}
                      checked={filters.rating === rating}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFilters(prev => ({ ...prev, rating }))
                        } else {
                          setFilters(prev => ({ ...prev, rating: null }))
                        }
                      }}
                    />
                    <label htmlFor={`rating-${rating}`} className="ml-2 text-sm">{rating}+ Stars</label>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Availability</h3>
                <div className="flex items-center">
                  <Checkbox
                    id="open-now"
                    checked={filters.availability}
                    onCheckedChange={(checked) => {
                      setFilters(prev => ({ ...prev, availability: !!checked }))
                    }}
                  />
                  <label htmlFor="open-now" className="ml-2 text-sm">Open Now</label>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant list */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Restaurants near you</h1>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviewed</SelectItem>
                  <SelectItem value="deliveryTime">Fastest Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-wrap gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  {...restaurant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}