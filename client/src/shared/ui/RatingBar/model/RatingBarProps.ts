export interface RatingBarItemProps {
    stars: number;
    count: number;
    percentage: number;
}

export type StarCountType = { 1: number; 2: number; 3: number; 4: number; 5: number };

export interface RatingBarsProps {
    counts: StarCountType;
    total: number;
}