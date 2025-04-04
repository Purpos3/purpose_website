import Image from 'next/image'
import step1 from '@/public/images/benefits/1.svg'
import step2 from '@/public/images/benefits/2.svg'
import step3 from '@/public/images/benefits/3.svg'
import step4 from '@/public/images/benefits/4.svg'
import ellipse from '@/public/images/benefits/ellipse.svg'
import bg from '@/public/images/header/background.png'

export default function Benefits() {
  return (
    <div className="relative overflow-hidden md:h-[68rem]">
      <Image
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={bg}
        alt="background"
      />
      <div className="p-12 z-10 relative flex gap-6 lg:gap-12 xl:gap-10 justify-around items-center h-full w-full xl:w-[80rem] xl:mx-auto">
        <Image
          src={ellipse}
          alt=""
          className="object-contain absolute z-0 p-20 lg:p-24 xl:p-0"
          width={0}
          height={0}
        />
        <div className="flex flex-col items-center justify-center z-10">
          <Image
            src={step4}
            alt="step1"
            className="object-contain"
            width={0}
            height={0}
          />
        </div>
        <div className="flex flex-col gap-12 md:gap-0 items-center justify-around h-full z-10">
          <Image
            src={step1}
            alt="step1"
            className="object-contain"
            width={0}
            height={0}
          />
          <Image
            src={step3}
            alt="step1"
            className="object-contain"
            width={0}
            height={0}
          />
        </div>
        <div className="flex flex-col items-center justify-center z-10">
          <Image
            src={step2}
            alt="step1"
            className="object-contain"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  )
}
