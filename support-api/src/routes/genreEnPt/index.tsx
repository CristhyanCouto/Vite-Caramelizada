import PostGenreEn from "@/components/common/postGenreEn";
import PostGenrePt from "@/components/common/postGenrePt";

export default function GenreEnPt() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="w-full">
        <PostGenreEn />
      </div>
      <div className="w-full">
        <PostGenrePt />
      </div>
    </div>
  )
}
