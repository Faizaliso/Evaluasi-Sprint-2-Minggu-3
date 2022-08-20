//1
document.writeln(`PESANTREN IT EVALUASI SPRINT 2 MINGGU 3`)
function Romawi(angka) {
    switch (angka) {
        case 1:
            console.log('I')
            break;
        case 2:
            console.log('II')
            break;
        case 3:
            console.log('III')
            break;
        case 4:
            console.log('IV')
            break;
        case 5:
            console.log('V')
            break;
        case 6:
            console.log('VI')
            break;
        case 7:
            console.log('VII')
            break;
        case 8:
            console.log('VIII')
            break;
        case 9:
            console.log('IX')
            break;
        case 10:
            console.log('X')
            break;
    }
    return angka
}

//==================|2|=================

let arr = []
function negativePositive(arr) {
    let positif = []
    let negative = []
    for (index in arr) {
        // arr.push(Number)
        if (index < 0) {
            negative.push(arr)
            console.log(negative)
        } else if (index > 0) {
            positif.push(arr)
        }
    }
    // return [positif, negative]
    // return arr
}

//==================|3|=================
let data = {
    'Aqidah Islam': 100,
    'Matematika': 75.5,
    'Fisika': 87,
    'Kimia': 90,
    'Bahasa Arab': 90.8,
    'Bahasa Inggris': 80
}
function Ratarata() {
    let jumlah = 0
    for (key in data) {
        // console.log(data[key])
        jumlah += data[key]
    }
    return jumlah / Object.keys(data).length
}

//==================|4|=================

let bookShelf = [{
    id: 1,
    title: 'Kalkulus Jilid I',
    genre: ['Matematika Dasar', 'Pendidikan'],
    author: 'Sekitani Jun',
    isBorrow: false
}]

//--Menambah list data buku
function addBook(title, genre, author, isBorrow) {
    bookShelf.push({
        id: +new Date,
        title,
        genre,
        author,
        isBorrow
    })
    // return console.table(bookShelf)
}

//--Melihat semua data buku
function showAlldata() {
    return console.table(bookShelf)
}

//--Melihat buku yang dipinjam
function seeBorrow() {
    let pinjam = []
    for (const key in bookShelf) {
        if (bookShelf[key].isBorrow == true) {
            pinjam.push(bookShelf[key])
        }
    } return pinjam
}

//--Menghapus data
function deleteData(id) {
    for (key in bookShelf) {
        bookShelf.splice(key, 1)
    }
}