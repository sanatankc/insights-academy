import starRainbow from "./star-rainbow.svg?raw";
import star from "./star-ring.svg?raw";
import starBig from "./star-big.svg?raw";
import starDouble from "./star-double.svg?raw";

export const stars = {
    mini: starRainbow,
    normal: star,
    big: starBig,
    double: starDouble,
};

export type StarProps = {
    step: keyof typeof stars;
    class?: string;
};