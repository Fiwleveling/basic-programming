// const database = [
//     {
//         email: 'user@gmail.com',
//         password: 'loveYou3000'
//     }
// ]

// function register(email: string, password: string) {
//     if(email.includes('@') && email.lastIndexOf('@') !== email.length -1) {
//        if (password.length > 8 && password.length < 16) {
//            const userObject = {
//             email: email,
//             password: password
//            }
//            database.push(userObject)
//            alert('สมัครสมาชิกเเล้ว ยินดีต้อนรับ คุณ' + email)
//        } else {
//            alert('รหัสผ่านต้องมากกว่า 8 ตัว เเละไม่เกิน 16')
//        }
//     } else {
//         console.log('Email ไม่ถูกต้อง')
//     }
// }

// register('fiw@gmail.com','11223789zzz')



// กฎการเข้ารหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น ^

// +u6*0^ --> ++**^^ --> uu6600


// const database = [
//     {
//         email: 'user@gmail.com',
//         password: 'lolggez11'
//     },
//     {
//         email: 'Fiwz@gmail.com',
//         password: 'lolggez111'
//     }

// ]

// function decryptPassword(password: string) {
//     return password.replaceAll('+','u').replaceAll('*','6').replaceAll('^','0')
// }

// function login(email: string, password: string) {
//     const user = database.filter(function(element, index) {
//         return element.email === email
//     })
//     if (user.length > 0) {
//         const realPassword = decryptPassword(user[0].password)

//         if(user[0].password === password) {
//             alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
//         } else {
//             alert('รหัสผ่านไมู่กต้อง โปรดตรวจสอบ')
//         }
//     } else {
//         alert('ไม่พบผู้ใช้งานในระบบ')
//     }
// }

// login('Fiwz@gmail.com', 'lolggez111')
   