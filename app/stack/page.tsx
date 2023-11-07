import Image from 'next/image'

import TimelineCollection from './timelineCollection'

import { Timeline } from '@/components/custom/timeline'
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'

export const metadata = {
  title: 'Stack - James Walsh',
  description: 'Technologies I use & tools I love.',
}

export default function StackPage() {
  const timelineCollection = TimelineCollection

  const sectionTitleMap: Record<string, string> = {
    frontend: 'Front-end',
    backend: 'Full Stack / Back-end',
    databases: 'Databases',
    eventing: 'Data Events',
    devtools: 'Dev Tools',
    principles: 'Practices & Principles',
  }

  return (
    <>
      <TypographyH1>Technology tools I both use & recommend.</TypographyH1>
      <Timeline>
        {Object.entries(timelineCollection).map(([key, items]) => (
          <Timeline.Item key={key}>
            <Timeline.LeftElement>
              <TypographyH2>{sectionTitleMap[key]}</TypographyH2>
            </Timeline.LeftElement>
            <Timeline.RightElement>
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <ul className="w-full" key={item.title}>
                    <div className="flex flex-row items-center gap-4">
                      <Image className="rounded-md" width={36} height={36} src={item.imageLink} alt="technology logo" />
                      <TypographyH3>{item.title}</TypographyH3>
                    </div>
                    <TypographyP>{item.description}</TypographyP>
                  </ul>
                ))}
              </ul>
            </Timeline.RightElement>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  )
}
