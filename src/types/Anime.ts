export type Anime = {
    id: number
    attributes: {
        synopsis: string;
        titles: {
            en_jp: string;
        }
        posterImage: {
            original: string,
            medium: string
        }
        coverImage: {
            original: string;
        }
    }
}