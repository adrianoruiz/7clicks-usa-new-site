export interface Project {
  slug: string
  name: string
  type: string
  location: string
  score: number
  tag: string
  challenge: string
  solution: string
  results: string[]
}

const projects: Project[] = [
  {
    slug: 'bright-smile-dental',
    name: 'Bright Smile Dental',
    type: 'Dental Clinic',
    location: 'Miami, FL',
    score: 98,
    tag: 'Business Website',
    challenge: 'Outdated website with slow load times, no mobile optimization, and zero online appointment bookings. Patients were calling or just going elsewhere.',
    solution: 'Built a clean, modern 4-page site with online booking integration, mobile-first design, and optimized images. Focused on trust signals and clear calls to action.',
    results: [
      'PageSpeed score jumped from 34 to 98',
      'Mobile-friendly design increased mobile traffic by 60%',
      'Online booking form reduced phone call volume',
      'Delivered in 5 days from first contact'
    ]
  },
  {
    slug: 'oak-street-barbershop',
    name: 'Oak Street Barbershop',
    type: 'Barbershop',
    location: 'Austin, TX',
    score: 96,
    tag: 'Landing Page',
    challenge: 'No web presence at all — relying entirely on Instagram and word of mouth. Losing potential walk-in customers who search "barbershop near me."',
    solution: 'Created a single-page landing site with services, pricing, location map, and a clear "Book Now" button. Optimized for local SEO.',
    results: [
      'PageSpeed 96 on mobile and desktop',
      'Appeared in local search results within 2 weeks',
      'Clean design that matches their brand aesthetic',
      'Delivered in 3 days'
    ]
  },
  {
    slug: 'bella-cucina',
    name: 'Bella Cucina',
    type: 'Italian Restaurant',
    location: 'Chicago, IL',
    score: 97,
    tag: 'Business Website',
    challenge: 'Had a WordPress site from 2018 — slow, cluttered, and the menu was a blurry PDF. Customers couldn\'t find hours or location easily.',
    solution: 'Designed a 3-page site with a beautiful digital menu, reservation link, and prominent hours/location. Photography-forward layout with warm tones.',
    results: [
      'PageSpeed improved from 41 to 97',
      'Digital menu replaced PDF — accessible on all devices',
      'Reservation clicks increased significantly',
      'Delivered in 4 days'
    ]
  }
]

export function usePortfolio() {
  const getProjects = () => projects

  const getProject = (slug: string) => projects.find(p => p.slug === slug)

  return { getProjects, getProject }
}
