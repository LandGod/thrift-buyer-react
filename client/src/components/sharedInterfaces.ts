export type RatingsSet = {
    quality: number;
    quantity: number;
    price: number;
}

export type CategoryRatings = {
    global: RatingsSet;
    user: RatingsSet;
}

export interface CategoryList {
    fassion?: CategoryRatings;
    furniture?: CategoryRatings;
    home_goods?: CategoryRatings;
    misc?: CategoryRatings;
}

export interface StoreInfo {
    name: string,
    address: string,
    placesLink: string,
    hours: {
        mon: string;
        tues: string;
        wed: string;
        thur: string;
        fri: string;
        sat: string;
        sun: string;
    },
    phone: string;
    website: string;
    coords: {x: number; y: number};
    categories: CategoryList;
}