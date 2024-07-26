function helloworld() {
    console.log("สวัดดี")
}

helloworld() // ไม่มี input ไม่มี output

function helloName(name: string){
    console.log(name)
}

helloName('Fiw') input ไม่มี output

function getPi() {
    return 3.14
}

console.log (getPi()) ไม่มี input เเต่มี output

function st(fname: string, sname: string) {

    if(fname === 'mix' && sname === 'zane'){
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}
 
st('mix','zane')

function st(fname: string, sname: string, qname: string) {

    if(fname === 'mix' && sname === 'zane'  || qname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อม')
    }
}
 
st('mix','zane','forth')

function st(Male: string, Height: number, Weight: number  ) {

    if(Male === 'Man' && (Height > 170 || Weight > 50 && Weight >> 110))  {
        console.log('จับใบดำใบเเดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
st('Man', 150 , 60)

function st(Age: number, Pay: number, deposit: number) {

    if(Age > 16 && Pay < 70000 && deposit < 500000){
        console.log("รับ 10000 บาท")
    }else {
         console.log("อด....")
    }
}
st(55,50000,200000)