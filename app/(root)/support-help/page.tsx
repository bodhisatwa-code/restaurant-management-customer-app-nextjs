"use client"

import { useState } from 'react'
import { Search, ChevronRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function SupportHelp() {
    const [searchQuery, setSearchQuery] = useState('')

    const faqCategories = [
        { id: 1, name: 'Account & Payments', icon: '👤' },
        { id: 2, name: 'Orders & Delivery', icon: '🚚' },
        { id: 3, name: 'Restaurant Related', icon: '🍽️' },
        { id: 4, name: 'App & Website', icon: '📱' },
    ]

    const faqs = [
        { id: 1, question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email to create a new password.' },
        { id: 2, question: 'Can I change my delivery address?', answer: 'Yes, you can change your delivery address before the restaurant starts preparing your order. Go to your active order and select "Change Address".' },
        { id: 3, question: 'How do I contact the restaurant directly?', answer: 'You can contact the restaurant directly through the app by going to your active order and selecting "Contact Restaurant". This will provide you with the restaurant\'s phone number.' },
    ]

    return (
        <div className="min-h-screen bg-secondary-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-xl font-semibold">Help & Support</h1>
                </div>
            </header>

            {/* Main content */}
            <div className="container mx-auto px-4 py-8">
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-500" />
                            <Input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 mb-4"
                                placeholder="Search..."
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {faqCategories.map((category) => (
                                <Button key={category.id} variant="outline" className="h-auto py-4 justify-start">
                                    <span className="text-2xl mr-2">{category.icon}</span>
                                    <span>{category.name}</span>
                                    <ChevronRight className="w-5 h-5 ml-auto" />
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible>
                            {faqs.map((faq) => (
                                <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Still Need Help?</h2>
                        <Button className="w-full">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat with Support
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}