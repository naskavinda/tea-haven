'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Star } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const products = [
  { id: 1, name: 'Green Tea', price: 12.99, category: 'Green', image: '/green-tea.jpg', rating: 4.5, origin: 'China', caffeine: 'medium' },
  { id: 2, name: 'Earl Grey', price: 14.99, category: 'Black', image: '/earl-grey.jpg', rating: 4.2, origin: 'India', caffeine: 'high' },
  { id: 3, name: 'Chamomile', price: 11.99, category: 'Herbal', image: '/chamomile-tea.jpg', rating: 4.7, origin: 'Egypt', caffeine: 'none' },
  { id: 4, name: 'Oolong Tea', price: 16.99, category: 'Oolong', image: '/oolong-tea.jpg', rating: 4.8, origin: 'China', caffeine: 'medium' },
  { id: 5, name: 'Peppermint', price: 10.99, category: 'Herbal', image: '/peppermint-tea.jpg', rating: 4.3, origin: 'USA', caffeine: 'none' },
  { id: 6, name: 'English Breakfast', price: 13.99, category: 'Black', image: '/english-breakfast-tea.jpg', rating: 4.6, origin: 'India', caffeine: 'high' },
  { id: 7, name: 'Jasmine Green', price: 15.99, category: 'Green', image: '/jasmine-green-tea.jpg', rating: 4.4, origin: 'China', caffeine: 'medium' },
  { id: 8, name: 'Rooibos', price: 12.99, category: 'Herbal', image: '/rooibos-tea.jpg', rating: 4.1, origin: 'South Africa', caffeine: 'none' },
]

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 20])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [origin, setOrigin] = useState<string | null>(null)
  const [caffeine, setCaffeine] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const filteredProducts = products.filter(product => 
    product.price >= priceRange[0] && 
    product.price <= priceRange[1] &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    (!origin || product.origin === origin) &&
    (!caffeine || product.caffeine === caffeine) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price
    if (sortBy === 'rating') return b.rating - a.rating
    return a.name.localeCompare(b.name)
  })

  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700 transition-colors">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-serif mb-8 text-center">Our Tea Collection</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with filters */}
        <aside className="w-full lg:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                {isClient && (
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={20}
                    step={0.5}
                    className="mb-2"
                  />
                )}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-2 mb-2">
                    <Checkbox 
                      id={category} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        setSelectedCategories(
                          checked
                            ? [...selectedCategories, category]
                            : selectedCategories.filter((c) => c !== category)
                        )
                      }}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div>
                <h2 className="text-lg font-semibold mb-2">Origin</h2>
                <RadioGroup value={origin || ''} onValueChange={(value) => setOrigin(value === '' ? null : value)}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="" id="origin-all" />
                    <Label htmlFor="origin-all">All</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="China" id="origin-china" />
                    <Label htmlFor="origin-china">China</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="India" id="origin-india" />
                    <Label htmlFor="origin-india">India</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="Japan" id="origin-japan" />
                    <Label htmlFor="origin-japan">Japan</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator className="my-4" />

              <div>
                <h2 className="text-lg font-semibold mb-2">Caffeine Content</h2>
                <RadioGroup value={caffeine || ''} onValueChange={(value) => setCaffeine(value === '' ? null : value)}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="" id="caffeine-all" />
                    <Label htmlFor="caffeine-all">All</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="high" id="caffeine-high" />
                    <Label htmlFor="caffeine-high">High</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="medium" id="caffeine-medium" />
                    <Label htmlFor="caffeine-medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="low" id="caffeine-low" />
                    <Label htmlFor="caffeine-low">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="none" id="caffeine-none" />
                    <Label htmlFor="caffeine-none">None</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main content */}
        <main className="w-full lg:w-3/4">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Input
                  type="search"
                  placeholder="Search teas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col">
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-2xl font-bold text-green-600 mb-2">${product.price.toFixed(2)}</p>
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className={`h-5 w-5 ${
                                index < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Origin: {product.origin}</p>
                        <p className="text-sm text-gray-600 mb-1">Caffeine: {product.caffeine}</p>
                        <p className="text-sm text-gray-600">{product.category}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Add to Cart</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

