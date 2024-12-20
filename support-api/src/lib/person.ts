export type ActorCardProps = {
  idactor: number;
  first_name?: string;
  last_name?: string;
  height?: number;
  date_of_birth?: string;
  fk_actor_current_status_en?: number;
  fk_actor_current_status_pt?: number;
  date_of_death?: string;
  city_of_birth_en?: string;
  city_of_birth_pt?: string;
  state_of_birth_en?: string;
  state_of_birth_pt?: string;
  country_of_birth_en?: string;
  country_of_birth_pt?: string;
  about_actor_en?: string;
  about_actor_pt?: string;
  actor_image_url?: string;
};

export type CreatorCardProps = {
  idcreator: number;
  first_name?: string;
  last_name?: string;
  height?: number;
  date_of_birth?: string;
  fk_creator_current_status_en?: number;
  fk_creator_current_status_pt?: number;
  date_of_death?: string;
  city_of_birth_en?: string;
  city_of_birth_pt?: string;
  state_of_birth_en?: string;
  state_of_birth_pt?: string;
  country_of_birth_en?: string;
  country_of_birth_pt?: string;
  about_creator_en?: string;
  about_creator_pt?: string;
  creator_image_url?: string;
};

export type DirectorCardProps = {
  iddirector: number;
  first_name?: string;
  last_name?: string;
  height?: number;
  date_of_birth?: string;
  fk_director_current_status_en?: number;
  fk_director_current_status_pt?: number;
  date_of_death?: string;
  city_of_birth_en?: string;
  city_of_birth_pt?: string;
  state_of_birth_en?: string;
  state_of_birth_pt?: string;
  country_of_birth_en?: string;
  country_of_birth_pt?: string;
  about_director_en?: string;
  about_director_pt?: string;
  director_image_url?: string;
};

export type WriterCardProps = {
  idwriter: number;
  first_name?: string;
  last_name?: string;
  height?: number;
  date_of_birth?: string;
  fk_writer_current_status_en?: number;
  fk_writer_current_status_pt?: number;
  date_of_death?: string;
  city_of_birth_en?: string;
  city_of_birth_pt?: string;
  state_of_birth_en?: string;
  state_of_birth_pt?: string;
  country_of_birth_en?: string;
  country_of_birth_pt?: string;
  about_writer_en?: string;
  about_writer_pt?: string;
  writer_image_url?: string;
};
