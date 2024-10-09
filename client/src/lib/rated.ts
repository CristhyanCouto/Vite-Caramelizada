export const ageRatedEn = (age: number): string => {
    switch (age) {
        case 0:
            return "NR";
        case 1:
            return "G";
        case 2:
            return "PG";
        case 3:
            return "PG-13";
        case 4:
            return "R";
        case 5:
            return "NC-17";
        case 6:
            return "TV-MA";
        default:
            return "NR";
    }
}

export const ageRatedPt = (age: number): string => {
    switch (age) {
        case 0:
            return "NR";
        case 1:
            return "L";
        case 2:
            return "10";
        case 3:
            return "12";
        case 4:
            return "14";
        case 5:
            return "16";
        default:
            return "18";
    }
}