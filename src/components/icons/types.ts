const stars = {
    mini: starRainbow,
    normal: star,
    big: starBig,
    double: starDouble,
};

// .d.ts file contains type definations (inferfaces or type)
export interface StarProps {
    step: keyof typeof stars;
    class?: string;
};