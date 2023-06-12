export function getPercents(percent, number) {
    if (number > 0) {

        if (percent <= 100 && percent >=0) {
            return percent*number/100
        } else {
            return "Количество процентов должно быть от 0 до 100"
        }
    } else {
        return "Число не может быть отрицательным и 0"
    }
}
