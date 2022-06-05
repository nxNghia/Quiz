export const formatNumber = number => {
    return number < 10 ? '0' + number.toString() : number.toString();
};
