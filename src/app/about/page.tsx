import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-4 text-green-600 hover:text-green-700 transition-colors">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </span>
      </Link>

      <h1 className="text-4xl font-serif mb-8 text-center">About TeaHaven</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Founded in 2010, TeaHaven began as a small family-owned tea shop in the heart of San Francisco. Our passion for quality teas and dedication to customer satisfaction quickly earned us a loyal following. Today, we&apos;re proud to share our carefully curated selection of teas with tea enthusiasts around the world through our online store.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">At TeaHaven, our mission is to provide our customers with the finest quality teas from around the globe. We believe in the power of tea to soothe, energize, and bring people together. Our commitment to sustainability and ethical sourcing ensures that every cup of tea you enjoy supports both the environment and the communities that produce these exquisite leaves.</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Our Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">We offer a wide range of teas, including classic black teas, delicate green teas, soothing herbal infusions, and rare specialty blends. Each tea in our collection is carefully selected for its quality, flavor, and aroma. Whether you&apos;re a tea connoisseur or new to the world of tea, we have something to delight your senses.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Customer satisfaction is at the heart of everything we do. We&apos;re committed to providing exceptional service, from helping you choose the perfect tea to ensuring your order arrives fresh and on time. We also offer educational resources to help you get the most out of your tea experience, including brewing guides and information about the health benefits of different teas.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-serif mb-4">Experience the TeaHaven Difference</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join us on a journey of flavor, aroma, and tradition. Discover why tea lovers around the world choose TeaHaven for their daily cup of tranquility.</p>
        <Button asChild>
          <Link href="/shop">Explore Our Teas</Link>
        </Button>
      </div>
    </div>
  )
}
