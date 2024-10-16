export type ActorCardProps = {
    idactor : number;
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
    }