'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'

const teaCategories = [
  {
    name: "Oolong Tea",
    description: "Partially oxidized tea with a wide range of flavors, from light and floral to rich and roasted.",
    image: "/earl-grey.jpg",
    brewing: "Use water at 190-200°F (88-93°C). Steep for 2-5 minutes depending on the specific oolong.",
    benefits: "May boost metabolism, improve heart health, and aid in weight management.",
    varieties: "Tie Guan Yin, Da Hong Pao, Ali Shan"
  },
  {
    name: "Black Tea",
    description: "Fully oxidized tea known for its bold flavor and high caffeine content. Popular varieties include Earl Grey and English Breakfast.",
    image: "/black-tea.jpg",
    brewing: "Use boiling water (212°F/100°C). Steep for 3-5 minutes.",
    benefits: "May improve focus, lower blood pressure, and reduce the risk of stroke.",
    varieties: "Darjeeling, Ceylon, Keemun"
  },
  {
    name: "Herbal Tea",
    description: "Not true tea, but infusions made from herbs, fruits, and spices. Caffeine-free and known for various health benefits.",
    image: "/herbal-tea.jpg",
    brewing: "Use boiling water (212°F/100°C). Steep for 5-7 minutes.",
    benefits: "Various benefits depending on the herbs used, such as improved digestion, relaxation, or immune support.",
    varieties: "Chamomile, Peppermint, Hibiscus"
  },
  {
    name: "Green Tea",
    description: "Minimally oxidized tea with a fresh, grassy flavor. Rich in antioxidants and associated with numerous health benefits.",
    image: "/green-tea.jpg",
    brewing: "Use water at 160-180°F (71-82°C). Steep for 2-3 minutes.",
    benefits: "May improve brain function, increase fat burning, and lower the risk of certain cancers.",
    varieties: "Sencha, Dragonwell, Gyokuro"
  },
  {
    name: "Pu-erh Tea",
    description: "Fermented tea from Yunnan, China. Known for its deep, earthy flavor and potential digestive benefits.",
    image: "/pu-erh-tea.jpg",
    brewing: "Use boiling water (212°F/100°C). Steep for 2-4 minutes.",
    benefits: "May aid in digestion, lower cholesterol, and promote weight loss.",
    varieties: "Raw (Sheng) Pu-erh, Ripe (Shou) Pu-erh"
  },
  {
    name: "Rooibos",
    description: "South African herbal tea made from the rooibos plant. Caffeine-free with a nutty, slightly sweet flavor.",
    image: "/rooibos-tea.jpg",
    brewing: "Use boiling water (212°F/100°C). Steep for 5-7 minutes.",
    benefits: "Rich in antioxidants, may improve bone health, and good for skin health.",
    varieties: "Red Rooibos, Green Rooibos"
  },
  {
    name: "White Tea",
    description: "Minimally processed tea with a delicate flavor. Made from young buds and leaves, it's rich in antioxidants.",
    image: "/white-tea.jpg",
    brewing: "Use water at 170-180°F (76-82°C). Steep for 1-3 minutes.",
    benefits: "May have the highest antioxidant content of all teas, could help reduce the risk of heart disease.",
    varieties: "Silver Needle, White Peony, Shou Mei"
  },
  {
    name: "Yellow Tea",
    description: "Rare Chinese tea with a gentle, sweet flavor. Produced similarly to green tea but with an added yellowing process.",
    image: "/yellow-tea.jpg",
    brewing: "Use water at 170-180°F (76-82°C). Steep for 2-3 minutes.",
    benefits: "Similar to green tea, may boost immune system and improve cardiovascular health.",
    varieties: "Junshan Yinzhen, Huoshan Huangya"
  },
  {
    name: "Assam Tea",
    description: "Bold, malty black tea from the Assam region of India. Often used in breakfast blends for its strong flavor.",
    image: "/assam-tea.jpg",
    brewing: "Use boiling water (212°F/100°C). Steep for 3-5 minutes.",
    benefits: "High in caffeine, may boost energy and mental alertness.",
    varieties: "Assam TGFOP, Assam CTC"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700 transition-colors">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-serif mb-8 text-center">Tea Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teaCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative w-full h-48">
              <Image 
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="brewing">
                  <AccordionTrigger>How to Brew</AccordionTrigger>
                  <AccordionContent>
                    {category.brewing}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Health Benefits</AccordionTrigger>
                  <AccordionContent>
                    {category.benefits}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="varieties">
                  <AccordionTrigger>Popular Varieties</AccordionTrigger>
                  <AccordionContent>
                    {category.varieties}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

