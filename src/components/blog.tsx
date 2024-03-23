import { Metadata } from "next"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { DemoCard } from "@/components/blog/blog-card"
import { BlogCard } from "@/components/blog/blog"
import { BLOG_DATA } from "@/data/blog-data"

export const metadata: Metadata = {
  title: "DemoCards",
  description: "Examples of DemoCards built using the components.",
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
return (
    <div
        className={cn(
            "flex items-center justify-center [&>div]:w-full border border-gray-500 p-3 rounded-lg",
            className
        )}
        {...props}
    />
)
}

export default function Blog() {
    return (
        <>
          <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <DemoContainer>
                <BlogCard card={BLOG_DATA.soulchat} /> 
              </DemoContainer>
              <DemoContainer>
                <BlogCard card={BLOG_DATA.gazaTelehealth} /> 
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <DemoContainer>
                <BlogCard card={BLOG_DATA.backpacking} /> 
              </DemoContainer>
              <DemoContainer>
                <BlogCard card={BLOG_DATA.groq} /> 
              </DemoContainer>
              <DemoContainer>
                <BlogCard card={BLOG_DATA.supervisedCompression} /> 
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <DemoContainer>
                <BlogCard card={BLOG_DATA.sentinel} /> 
              </DemoContainer>
              <DemoContainer>
                <BlogCard card={BLOG_DATA.stealth} /> 
              </DemoContainer>
            </div>
          </div>
        </>
    )
}
