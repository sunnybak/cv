"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BLOG_DATA } from "@/data/blog-data"

export function BlogCard({card}: {card: any}) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{card.title}</CardTitle>
        <CardDescription>
        {card.content.split("▪").map((bulletPoint: any) => (
                        <p key={bulletPoint} className="text-pretty font-mono text-sm text-muted-foreground">
                          ▪ {bulletPoint}
                        </p>
                      ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      </CardContent>
      <CardFooter className="text-muted-foreground text-sm italic">
          {card.subtitle} | {card.start} - {card.end}
      </CardFooter>
    </Card>
  )
}