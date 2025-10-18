import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import AnnouncementsList from '@/components/home/AnnouncementsList'
import ScheduleResultsTabs from '@/components/home/ScheduleResultsTabs'
import AchievementsGrid from '@/components/home/AchievementsGrid'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      
      <section className="mx-auto max-w-5xl px-4 mt-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
            <AnnouncementsList />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Matches</h2>
            <ScheduleResultsTabs />
          </div>
        </div>
      </section>
      
      <AchievementsGrid />
    </>
  )
}
