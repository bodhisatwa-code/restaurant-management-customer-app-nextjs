import { Star, Clock, DollarSign, CalendarCheck, Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface RestaurantCardProps {
  id: number
  name: string
  image: string
  cuisine: string
  rating: number
  deliveryTime: string
  minOrder: number
  isOpen: boolean
  availableTables: number
  reviews: number
  menu: {
    name: string
    price: number
  }[]
}

const RestaurantCard = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  minOrder,
  isOpen,
  availableTables,
  reviews,
  menu
}: RestaurantCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <Badge 
          className={`absolute top-4 right-4 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {isOpen ? 'Open' : 'Closed'}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Info className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{name} - Menu Preview</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Popular Items:</h4>
                <ul className="space-y-2">
                  {menu.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-secondary-600 mb-2">
          <span>{cuisine}</span>
          <span>•</span>
          <span className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            {rating} ({reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-secondary-500 mb-3">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {deliveryTime}
          </span>
          <span className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            Min ${minOrder}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">
            <CalendarCheck className="w-4 h-4 inline mr-1" />
            {availableTables} tables available
          </span>
          <Button size="sm">
            Reserve Table
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard;