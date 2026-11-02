export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'UKB Plumbing',
    description: 'Gas Safe registered plumbing and heating engineers in Southampton. Emergency call-outs, boiler installation, leak repairs. Established 2003.',
    url: 'https://ukbplumbing.co.uk',
    telephone: '+44 7359 605766',
    email: 'info@ukbplumbing.co.uk',
    image: 'https://ukbplumbing.co.uk/og-image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 Fuchsia Gardens',
      addressLocality: 'Southampton',
      addressRegion: 'England',
      postalCode: 'SO16 6TY',
      addressCountry: 'GB',
    },
    areaServed: ['Southampton', 'Bournemouth', 'Andover', 'New Forest', 'Portsmouth'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '122',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Excellent service, responded quickly to our emergency call. Professional and clean work.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael Smith'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Highly recommended for boiler installation. Fair pricing and quality workmanship.'
      }
    ],
    sameAs: [
      'https://www.facebook.com/ukbplumbing',
      'https://www.instagram.com/ukb_plumbing/',
      'https://www.tiktok.com/@ukb.plumbing.ltd',
      'https://www.googletagmanager.com/gtag/js?id=G-ERJ8N1M3H', // Replace with your Google Business Profile link
    ],
  }
 
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}