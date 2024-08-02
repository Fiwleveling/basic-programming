function sayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัดดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัดดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัดดีวันอังคาร')
    } else if (dayOfWeek ===4) {
        console.log('สวัดดีวันพุธ')
    } else if (dayOfWeek ===5) {
        console.log('สวัดดีวันพฤหัส')
    } else if (dayOfWeek ===6) {
        console.log('สวัดดีวันศุกร์')
    } else if (dayOfWeek ===7) {
        console.log('สวัดดีวันเสาร์')
    }
}


function bully(ShirtSize: string) {
    switch (ShirtSize) {
        case 's':
         console.log('ผอม')
         break
        case 'm':
         console.log('ผอม')
         break
        case 'l':
         console.log('ท้วม')
         break
        case 'xl':
         console.log('อ้วน')
         break
        case '2xl':
         console.log('อ้วน')
         break
    }
}
bully('s')


function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(4.67676, 30))

function numberFunction(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(numberFunction(1500, 30))

const str: string = "Manasavee"

console.log(str.toLowerCase())


function checkStingLength(name: string){
    console.log(name.length)
}
checkStingLength("FiwManasavee")

function getCharByIndex(msg: string, index: number) {
    const x = msg.charAt(index)
    return x
}

console.log(getCharByIndex('อยากกลับบ้าน', 9))


const str: string = 'ฉันรักเธอ'

console.log(str.includes('รัก'))


function checkStrIndex(str: string, search: string) {
    if(str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำค้นหา')
    }
}

checkStrIndex('อยากกลับ Home' , 'm')