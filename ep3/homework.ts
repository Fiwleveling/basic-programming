function bmi(Height: number, Weight: number) {
    let score: number = (Weight/(Height*Height))

    if(score < 18.50) {
        return 'Thin'
    } else if (score >= 18.50 && score <= 22.90){
        return 'Normal'
    } else if (score >= 23 && score <= 24.90) {
        return 'Plump'
    } else if (score >= 25 && score <= 29.90) {
        return 'Fat'
    } else if (score <= 30) {
        return 'VeryFat'
    } else {
        return 'Ed'
    }
}
console.log (bmi(70, 1.80))