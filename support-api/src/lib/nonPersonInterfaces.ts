export type ProducersCardProps = {
  idproducer: number;
  name_producer?: string;
  headquarters_en?: string;
  headquarters_pt?: string;
  about_producer_en?: string;
  about_producer_pt?: string;
  producer_image_url?: string;
};

export type PublishersGamesCardProps = {
  idpublisher_games: number;
  name_publisher_games?: string;
  headquarters_en?: string;
  headquarters_pt?: string;
  about_publisher_games_en?: string;
  about_publisher_games_pt?: string;
  publisher_games_image_url?: string;
};

export type PlataformsCardProps = {
  idplataform: number;
  name_plataform?: string;
  release_date?: string;
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

export type SeasonsAnimesCardProps = {
  idseason_anime: number;
  title_en: string;
  title_pt: string;
  release_date?: string;
  episode_count_animes?: number;
  runtime?: string;
  about_season_en?: string;
  about_season_pt?: string;
  cover_season_url: string;
  trailer_season_url: string;
  image_season_url01?: string;
  image_season_url02?: string;
  image_season_url03?: string;
  image_season_url04?: string;
  image_season_url05?: string;
  image_season_url06?: string;
  image_season_url07?: string;
  image_season_url08?: string;
  image_season_url09?: string;
  image_season_url10?: string;
  my_rating?: number;
  my_review_en?: string;
  my_review_pt?: string;
};
