"use client"

import { useState } from 'react'
import { User, MapPin, CreditCard, Bell, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function UserProfile() {
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold">My Profile</h1>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-secondary-600">john.doe@example.com</p>
              </div>
              <Button variant="outline" className="ml-auto">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="account">
          <TabsList className="mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary-700" />
                    <span>Personal Information</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-secondary-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-primary-700" />
                    <span>Payment Methods</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-secondary-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex  items-center">
                    <Bell className="w-5 h-5 mr-2 text-primary-700" />
                    <span>Notifications</span>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex items-center justify-between py-2 border-b last:border-b-0">
                      <div>
                        <p className="font-medium">Order #{order}00{order}</p>
                        <p className="text-sm text-secondary-600">2 items • $24.99</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="addresses">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Saved Addresses</h3>
                <div className="space-y-4">
                  {[1, 2].map((address) => (
                    <div key={address} className="flex items-start justify-between py-2 border-b last:border-b-0">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-2 text-primary-700 mt-1" />
                        <div>
                          <p className="font-medium">Home {address}</p>
                          <p className="text-sm text-secondary-600">123 Main St, Apt {address}0{address}, New York, NY 10001</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">Add New Address</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}