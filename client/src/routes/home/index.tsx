import Page from "@/components/common/page";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('home.title')}>
        <h1>Home</h1>
      </Page>
    </div>
  )
}
