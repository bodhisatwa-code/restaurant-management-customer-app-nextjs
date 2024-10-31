"use client"

import { useState } from 'react'
import { Search, MapPin, ShoppingCart, User, ChevronDown, Star, Link } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import RestaurantCard from '@/components/common/restaurant-card'

export default function Home() {
    const [location, setLocation] = useState('New York, NY')
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

    return (
        <div className="min-h-screen bg-secondary-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">

                        <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-primary-700" />
                            <span>{location}</span>
                            <ChevronDown className="w-4 h-4 text-secondary-500" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-primary-700 text-black py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Delicious food, delivered to you</h1>
                    <div className="w-full">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-500" />
                            <input
                                type="text"
                                placeholder="Search for food or restaurants"
                                className="ml-2 w-full py-3 pl-10 rounded-full bg-white text-secondary-900"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Restaurants */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-semibold mb-6">Featured Restaurants</h2>
                    <div className="flex flex-wrap gap-3 w-full">
                        {restaurants.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant.id}
                                {...restaurant}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}