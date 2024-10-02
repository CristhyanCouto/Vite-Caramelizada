import Page from "@/components/common/page"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

export default function MoviePage() {
  const { moviesId } = useParams()
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('home.title')}>
        <h1>Mvies Page</h1>
        <p>Movie ID: {moviesId}</p>
      </Page>
    </div>
  )
}
