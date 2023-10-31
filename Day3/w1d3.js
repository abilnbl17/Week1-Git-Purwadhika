/*
    What is GIT ?
    git -> repository 

    drive yang secara online

    github -> penyimpanan hasil coding kita (repository)
    menjadi tempat untuk codingan:
    1. backup
    2. transfer / clone file pada github
    3. web app system mcd (contoh)
        a. mengerjakan bagian produk menu
        b. mengerjakan transaksi dari cart
        c. a dan b collab => repository
    4. tracking history

    repository => online yang tersimpan pada github & offline

    istilah pada github atau git
    1. commit => persetujuan perubahan
    2. push => mengirimkan hasil commit repo online (github) (sync)
    3. fetch => ngecek repo online dan dibandingan dengan local =>
    show perubahan yang ada di online
    4. pull => menarik data online supaya sama dengan local
    5. fork => clone repository milik orang lain supaya masuk ke repo kita
    6. pull request => meminta origin repo untuk menarik perubahan (commit)
    7. branch => membuat cabang dari repository
 */
// repo youtube
/*
1. buat youtube shorts => A (development)
2. buat youtube playlist => B (development)
A => branch baru based on fitur yang dikerjakan (A fitur short)
= PR & merge => development
B => branch baru based on fitur (B youtube playlist) 
= PR & merge => development
C => adalah tester

akan ada sebuah server yang melakukan deployment terhadap branch testing
testing.youtube.com
youtube.com
PR & merge testing => production
besok mau liat short dan playlist ini sudah ada ya (atasan berbicara)

maintennace sementara => update & bug

    production => cabang yang dibagian website live (less bug & optimized)
    development => cabang yang digunakan untuk mengerjakan fitu
    testing =>


*/

// contoh orang buat codingan tentang video player untuk youtube dibuat oleh udin
/*
 ujang: codingan lu ada yang ngebug waktu gue check
 udin: bug dmna?
 ujang: videonya ga keputar kalo pakai file 3gp
 udin: gua udh ga cek repo ini
 ujang: gue nanti perbaikin aja, lu tunggu hasil perbaikannya

 ujang melakukan fork kepada repo si udin
 changes => push => repo milik ujang
 repo milik udin ttp ngebug
 ujang kirim pull request ke repo udin
 pull request adalah hasil commit
*/