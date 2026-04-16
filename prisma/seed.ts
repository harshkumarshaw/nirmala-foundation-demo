import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const institutes = [
  {
    slug: "jmn",
    name: "JMN Medical College",
    tagline: "Best Medical College in West Bengal",
    location: "Chakdaha, Nadia",
    description: "JMN Medical College is an educational institution that provides exceptional medical education. Our institution offers training related to all aspects of medical care.",
    accreditation: "Approved by National Medical Commission (NMC) & Affiliated to The West Bengal University of Health Sciences (WBUHS).",
    websiteUrl: "https://www.jmnmedicalcollege.org.in/",
    programs: [
      { name: "MBBS", duration: "4.5 Years + 1 Year Internship", seats: "150 (approx)" }
    ],
    highlights: [
      "State-of-the-art Lecture Halls and Laboratories",
      "World-class Museum and Library Facility"
    ]
  },
  {
    slug: "iinr",
    name: "Intl. Institute of Nursing & Research (IINR)",
    tagline: "Education That Saves Lives",
    location: "Kalyani, Nadia",
    description: "IINR is a premier nursing institution providing elite nursing education.",
    accreditation: "Affiliated & Recognised by INC, WBNC, WBUHS and Approved by Dept. H&FW.",
    websiteUrl: "https://iinr.in/",
    programs: [
      { name: "General Nursing & Midwifery (GNM)", duration: "3 Years", seats: "100" },
      { name: "B.Sc. Nursing", duration: "4 Years", seats: "100" }
    ],
    highlights: [
      "Global Academic Collaboration with Future Nurses, Germany",
      "Student Credit Card Accepted"
    ]
  }
]

const careers = [
  {
    title: 'Manager - IT',
    type: 'Full Time',
    essentialReq: JSON.stringify(['Strong knowledge of healthcare IT systems', '5 years of experience']),
    desirableReq: JSON.stringify(['ITIL Foundation']),
  }
]

async function main() {
  console.log(`Start seeding ...`)
  
  // Clean DB first (for iterative testing)
  await prisma.highlight.deleteMany()
  await prisma.program.deleteMany()
  await prisma.institute.deleteMany()
  await prisma.career.deleteMany()

  for (const i of institutes) {
    const institute = await prisma.institute.create({
      data: {
        slug: i.slug,
        name: i.name,
        tagline: i.tagline,
        description: i.description,
        location: i.location,
        accreditation: i.accreditation,
        websiteUrl: i.websiteUrl,
        programs: {
          create: i.programs
        },
        highlights: {
          create: i.highlights.map(text => ({ text }))
        }
      }
    })
    console.log(`Created institute with id: ${institute.id}`)
  }

  for (const c of careers) {
    await prisma.career.create({ data: c })
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
