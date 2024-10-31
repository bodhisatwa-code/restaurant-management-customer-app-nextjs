"use client"

import { useState } from 'react'
import { ChevronLeft, CreditCard, MapPin, Clock, Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

export default function CartCheckout() {
  const [cart, setCart] = useState([
    { id: 1, name: "Margherita Pizza", price: 12.99, quantity: 1 },
    { id: 2, name: "Spaghetti Carbonara", price: 14.99, quantity: 1 },
  ])
  const [step, setStep] = useState('cart') // 'cart', 'delivery', 'payment'

  const updateQuantity = (id: number, change: any) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" size="sm" onClick={() => setStep('cart')}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-semibold ml-4">
            {step === 'cart' ? 'Your Cart' : step === 'delivery' ? 'Delivery Details' : 'Payment'}
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items or Checkout steps */}
          <div className="w-full lg:w-2/3">
            {step === 'cart' && (
              <Card>
                <CardContent className="p-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-secondary-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="mx-3">{item.quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="ml-4" onClick={() => updateQuantity(item.id, -item.quantity)}>
                          <Trash2 className="w-4 h-4 text-accent-error" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between p-6 bg-secondary-100">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </CardFooter>
              </Card>
            )}

            {step === 'delivery' && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="Enter your street address" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div>
                        <Label htmlFor="zipcode">Zip Code</Label>
                        <Input id="zipcode" placeholder="Zip Code" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                      <Textarea id="instructions" placeholder="Any special instructions for delivery?" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 'payment' && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order summary */}
          <div className="w-full lg:w-1/3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6">
                {step === 'cart' && (
                  <Button className="w-full" onClick={() => setStep('delivery')}>Proceed to Checkout</Button>
                )}
                {step === 'delivery' && (
                  <Button className="w-full" onClick={() => setStep('payment')}>Continue to Payment</Button>
                )}
                {step === 'payment' && (
                  <Button className="w-full">Place Order</Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}