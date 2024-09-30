import Page from "@/components/common/page";
import { useTranslation } from "react-i18next";

export default function Books() {
  const { t } = useTranslation();
  return (
    <div>
      <Page title={t('books.title')}>
        <h1>Books</h1>
      </Page>
    </div>
  )
}
