export interface Badges{
    bronze: number,
    silver: number,
    gold: number
}

export interface API_Response{
    badge_counts: Badges,
    account_id: number,
    is_employee: boolean,
    last_modified_date: number,
    last_access_date: number,
    reputation_change_year: number, 
    reputation_change_quarter: number, 
    reputation_change_month: number, 
    reputation_change_week: number, 
    reputation_change_day: number, 
    reputation: number,
    creation_date: number,
    user_type: string,
    user_id: number,
    location: string,
    website_url: string,
    link: string,
    profile_image: string,
    display_name: string 
}


export interface CardProps extends API_Response{
    tags: string[]
}