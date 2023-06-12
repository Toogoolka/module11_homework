import {getPercents} from "../src/percentCalc";

describe("test getPercents function", () => {
    const simple = 200;
    const isOkPercent = 30;

    const negative = -20;
    it("test if is Ok, number is 0, percent is over 100, percent is negative", () => {
        expect(getPercents(isOkPercent,simple)).toBe(60);
        expect(getPercents(isOkPercent,0)).toBe("Число не может быть отрицательным и 0");
        expect(getPercents(simple,simple)).toBe("Количество процентов должно быть от 0 до 100");
        expect(getPercents(negative,simple)).toBe("Количество процентов должно быть от 0 до 100");
        expect(getPercents(isOkPercent,negative)).toBe("Число не может быть отрицательным и 0");
    });
})