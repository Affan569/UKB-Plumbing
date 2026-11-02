import type { Metadata } from 'next'
import BookingContent from '@/components/BookingContent'
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Book a Plumber Online | UKB Plumbing'),
  description: 'Book a professional plumber online. Emergency call-outs, boiler repairs, and installation services available 24/7 in Southampton.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/booking' },
  openGraph: {
    title: 'Book a Plumber | UKB Plumbing',
    description: 'Book a professional plumber online. Emergency call-outs, boiler repairs, and installation services available 24/7.',
    url: 'https://ukbplumbing.co.uk/booking',
    type: 'website',
  },
}

export default function BookingPage() {
  return <BookingContent />
}
