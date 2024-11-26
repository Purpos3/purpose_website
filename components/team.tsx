import { basePath } from '@/next.config.mjs'
import bg from '@/public/images/team/bg2.png'
import gk from '@/public/images/team/gk.jpeg'
import gt from '@/public/images/team/gt.png'
import km from '@/public/images/team/km.jpeg'
import lf from '@/public/images/team/lf.jpeg'
import mc from '@/public/images/team/mc.jpeg'
import wf from '@/public/images/team/wf.jpeg'
import ExportedImage from 'next-image-export-optimizer'
import TeamMember from './team-member'

const TEAM_MEMBERS = [
  {
    name: 'Gregor Kobilarov',
    title: 'Business (Tech)',
    imageSrc: gk,
  },
  {
    name: 'Lukas Faber',
    title: 'Business Ops',
    imageSrc: lf,
  },
  {
    name: 'Mieszko Chowaniec',
    title: 'Backend',
    imageSrc: mc,
  },
  {
    name: 'Wael Feriz',
    title: 'AI',
    imageSrc: wf,
  },
  {
    name: 'Gaby Tatters',
    title: 'Design',
    imageSrc: gt,
  },
  {
    name: 'Kaouther Mefteh',
    title: 'Mobile',
    imageSrc: km,
  },
]

export default function Team() {
  return (
    <div className="relative team-wrapper">
      <ExportedImage
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={bg}
        alt="background"
        basePath={basePath}
      />
      <div className="z-10 relative text-center p-8">
        <h3 className="text-slate-50 font-bold text-xl md:text-4xl">
          Founding Team
        </h3>
      </div>
      <div className="p-8 md:p-16 z-10 relative grid">
        {TEAM_MEMBERS.map((t) => (
          <div className="team-member" key={t.name}>
            <img src={t.imageSrc} alt={`${t.name}'s profile`} />
            <h4>{t.name}</h4>
            <p>{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
