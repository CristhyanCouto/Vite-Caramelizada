import GameCardList from "@/components/common/gameCardList";
import Page from "@/components/common/page";
import { useTranslation } from "react-i18next";


export default function Games() {
  const { t } = useTranslation()
  return (
    <div>
      <Page title={t('games.title')}>
        <GameCardList />
      </Page>
    </div>
  )
}
