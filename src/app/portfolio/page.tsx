import type { Metadata } from 'next'
import PortfolioContent from '@/components/PortfolioContent'
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Plumbing & Heating Project Portfolio | UKB Plumbing'),
  description: 'View our completed plumbing and heating projects across Southampton, Bournemouth, and Hampshire. From boiler installations and system conversions to emergency repairs, see our quality workmanship and Gas Safe registered expertise in action.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/portfolio' },
  openGraph: {
    title: 'Our Projects Portfolio | UKB Plumbing',
    description: 'Completed plumbing and heating projects across Hampshire and Dorset by Gas Safe registered engineers.',
    url: 'https://ukbplumbing.co.uk/portfolio',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}