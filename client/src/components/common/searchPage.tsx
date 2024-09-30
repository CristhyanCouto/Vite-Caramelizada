import { useTranslation } from "react-i18next";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchPage() {
    const { t } = useTranslation();
  return (
    <div className="relative w-full">
    <input
        className="bg-white text-black p-2 w-full rounded-lg pr-10 text-center"
        placeholder={t('navbar01.search')}
        type="text"
    />
    <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
    </div>
  )
}
