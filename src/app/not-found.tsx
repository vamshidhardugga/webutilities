import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not - Found',
  openGraph: {
    title: 'Not - Found'
  },
  twitter: {
    title: 'Not - Found'
  },
  alternates: {
    canonical: '/not-found'
  },
  robots: {
    index: false
  }
}

export default function NotFound() {
  return <>NotFound</>
}
