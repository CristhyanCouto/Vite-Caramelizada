import Page from "@/components/common/page";
import { useTranslation } from "react-i18next";

export default function Movies() {
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('movies.title')}>
        <h1>Movies</h1>
      </Page>
    </div>
  )
}
