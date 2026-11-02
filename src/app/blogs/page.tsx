import type { Metadata } from 'next'
import BlogsContent from '@/components/BlogsContent'
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Plumbing Blogs & Expert Tips | UKB Plumbing'),
  description: 'Expert plumbing advice and maintenance tips from UKB Plumbing engineers serving Southampton, Bournemouth, and Hampshire. Learn about boiler maintenance, leak prevention, hard water solutions, and emergency preparedness from our Gas Safe registered professionals.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/blogs' },
  openGraph: {
    title: 'Plumbing Blogs & Expert Tips | UKB Plumbing',
    description: 'Expert plumbing advice and maintenance tips from Gas Safe registered engineers serving Hampshire and Dorset.',
    url: 'https://ukbplumbing.co.uk/blogs',
    type: 'website',
  },
}

export default function Blogs() {
  return <BlogsContent />
}