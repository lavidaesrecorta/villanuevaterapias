const hexToRGB = (hex: string, alpha?: number) => {
    let hexColorCode = hex;
    if (hex[0] == "#") {
        hexColorCode = hex.slice(1)
    }
    console.log(hexColorCode);
    let [r, g, b] = [0, 0, 0];
    if (hexColorCode.length == 3) {
        r = parseInt(hexColorCode[0], 16)
        g = parseInt(hexColorCode[1], 16)
        b = parseInt(hexColorCode[2], 16)
    } else {
        r = parseInt(hexColorCode.slice(0, 2), 16)
        g = parseInt(hexColorCode.slice(2, 4), 16)
        b = parseInt(hexColorCode.slice(4, 6), 16)
    }
    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

hexToRGB('#FF0000', 0.5);

export default hexToRGB;