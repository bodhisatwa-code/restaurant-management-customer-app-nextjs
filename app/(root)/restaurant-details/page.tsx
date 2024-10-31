"use client"

import { useState } from 'react'
import { Star, Clock, DollarSign, Phone, MapPin, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RestaurantDetails() {
  const [cart, setCart] = useState<any>([])

  const restaurant = {
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "20-30 min",
    minOrder: 15,
    address: "123 Main St, New York, NY 10001",
    phone: "(123) 456-7890"
  }

  const menu = [
    { id: 1, name: "Margherita Pizza", description: "Classic tomato and mozzarella", price: 12.99, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta", price: 14.99, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Tiramisu", description: "Classic Italian dessert", price: 6.99, image: "/placeholder.svg?height=100&width=100" },
  ]

  const addToCart = (item: any) => {
    setCart((prev: any[]) => [...prev, item])
  }

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Header (same as Homepage) */}

      {/* Restaurant Hero */}
      <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: 'url("/placeholder.svg?height=400&width=1200")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="container mx-auto px-4 py-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center space-x-2 text-sm">
              <span>{restaurant.cuisine}</span>
              <span>•</span>
              <span className="flex items-center">
                <Star className="w-4 h-4 text-accent-warning fill-current mr-1" />
                {restaurant.rating}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {restaurant.deliveryTime}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                Min ${restaurant.minOrder}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu */}
          <div className="w-full lg:w-2/3">
            <Tabs defaultValue="menu">
              <TabsList>
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="info">Restaurant Info</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="menu">
                <div className="grid gap-6">
                  {menu.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4 flex items-center">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-secondary-600 mb-2">{item.description}</p>
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                        <Button onClick={() => addToCart(item)}>
                          <Plus className="w-4 h-4 mr-2" />
                          Add
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="info">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-4">Restaurant Information</h3>
                    <div className="space-y-2">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary-700" />
                        {restaurant.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary-700" />
                        {restaurant.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                    <p>Reviews will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Cart */}
          <div className="w-full lg:w-1/3">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Your Order</h3>
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item?.name}</p>
                          <p className="text-sm text-secondary-600">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center">
                          <Button variant="outline" size="sm">
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="mx-2">1</span>
                          <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${cart.reduce((sum: number, item:any) => sum + item.price, 0).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full">Proceed to Checkout</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer (same as Homepage) */}
    </div>
  )
}