export interface RowCastMember {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
  }
  export interface CastMember {
    title: string;
    id: number;
    image: string;
    genre_ids: number[];
  }