// const database = [
//     {
//         email: 'fiw@utk.c.th',
//         password: 'fiw@utk1234'
//     }
// ]

// function login(email: string, password: string) {
//     const user = database.filter(function(element, index) {
//         return element.email === email
//     }) // [{
//     //     email: 'fiw@utk.c.th',
//     //     password: 'fiw@utk1234'
//     // }] || []

//     if (user.length > 0) {
//         if (user[0].password === password) {
//             console.log('เข้าสู่ระบบเเล้ว')
//         } else {
//             console.log('รหัสผ่านไม่ถูกต้อง')
//         }
//     } else {
//         console.log('ไม่มีผู้ใช้ในระบบ')
//     }
// }

// login('fiw@utk.c.th','fiw@utk1234')