export type ProducersCardProps = {
    idproducer: number;
    name_producer?: string;
    headquarters_en?: string;
    headquarters_pt?: string;
    about_producer_en?: string;
    about_producer_pt?: string;
    producer_image_url?: string;
  };

export type GenreEnCardProps = {
    idgenre_en: number;
    name_genre_en?: string;
  };

export type GenrePtCardProps = {
    idgenre_pt: number;
    name_genre_pt?: string;
  };

export type RatedPGEnCardProps = {
    idrated_pg_en: number;
    rating_pg_en?: string;
  };

export type RatedPGPtCardProps = {
    idrated_pg_pt: number;
    rating_pg_pt?: string;
  };
  