import { gradientStyle } from '@/lib/contants'
import { basePath } from '@/next.config.mjs'
import logo1 from '@/public/images/companies/1.svg'
import logo2 from '@/public/images/companies/2.svg'
import logo3 from '@/public/images/companies/3.svg'
import logo4 from '@/public/images/companies/4.svg'
import logo6 from '@/public/images/companies/6.svg'
import ExportedImage from 'next-image-export-optimizer'

export default function Companies() {
  const logos = [
    { src: logo1, alt: 'Roland Berger' },
    { src: logo2, alt: 'Commerzbank' },
    { src: logo3, alt: 'Telekom' },
    { src: logo4, alt: 'Stellantis' },
    { src: logo6, alt: 'Helmholtz' },
  ]

  return (
    <div className="flex flex-col justify-around items-center p-8 lg:p-0 lg:h-[36rem]">
      <div className="md:w-9/12 lg:w-6/12 text-center">
        <h3
          style={{
            ...gradientStyle,
            backgroundClip: 'text',
          }}
          className="inline-block text-transparent p-3 md:p-0 text-3xl md:text-6xl font-bold"
        >
          Companies that you would be proud to work with
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-12 w-full lg:w-9/12 mt-12 lg:mt-0">
        {logos.map((logo, index) => (
          <div key={index}>
            <ExportedImage src={logo.src} alt={logo.alt} basePath={basePath} />
          </div>
        ))}
      </div>
    </div>
  )
}
