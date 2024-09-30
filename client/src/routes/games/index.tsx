import Page from "@/components/common/page";
import { useTranslation } from "react-i18next";


export default function Games() {
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('games.title')}>
        <h1>Games</h1>
      </Page>
    </div>
  )
}
