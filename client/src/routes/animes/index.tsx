import AnimeCardList from '@/components/common/animeCardList'
import Page from '@/components/common/page'
import { useTranslation } from 'react-i18next'

export default function Animes() {
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('animes.title')}>
        <AnimeCardList />
      </Page>
    </div>
  )
}
