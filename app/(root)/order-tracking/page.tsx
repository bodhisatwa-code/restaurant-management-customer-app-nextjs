"use client"

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function OrderTracking() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const orderStatus = progress < 25 ? 'Order Confirmed' :
                      progress < 50 ? 'Preparing Your Order' :
                      progress < 75 ? 'Order Out for Delivery' :
                      'Order Delivered'

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold">Order Tracking</h1>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Order Status</h2>
            <Progress value={progress} className="mb-4" />
            <p className="text-center font-medium">{orderStatus}</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary-700" />
                <span>Estimated delivery time: 7:30 PM</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-primary-700" />
                <span>Your order has been picked up by John D.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Need Help?</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Phone className="w-5 h-5 mr-2" />
                Call Driver
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-5 h-5 mr-2" />
                Message Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}