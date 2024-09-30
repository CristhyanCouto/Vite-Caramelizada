import Page from "@/components/common/page";
import { useTranslation } from "react-i18next";

export default function Series() {
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('series.title')}>
        <h1>Series</h1>
      </Page>
    </div>
  )
}
