import type { Metadata } from 'next'
import HomePageContent from "@/components/HomePageContent"
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Emergency Plumber Southampton | 24/7 Call-Out | UKB Plumbing'),
  description: 'Emergency plumber in Southampton, ready 24/7. Gas Safe engineers, 30–60 min response, boiler repair & leak fixes. Call 07359 605766 now.',
  keywords: ['plumber Southampton', 'emergency plumbing', 'boiler repair Southampton', 'heating engineer'],
  alternates: { canonical: 'https://ukbplumbing.co.uk' },
  openGraph: {
    title: 'Emergency Plumber Southampton | 24/7 Call-Out | UKB Plumbing',
    description: 'Gas Safe registered engineers. 30–60 min emergency response. Call 07359 605766.',
    url: 'https://ukbplumbing.co.uk',
    siteName: 'UKB Plumbing',
    type: 'website',
  },
}

export default function Page() {
  return <HomePageContent />
}