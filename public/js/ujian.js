// ====== DATA SOAL ======
// Struktur: bankSoal[jenjang][kelas] = [ { no, soal, pilihan:{a,b,c,d}, jawaban }, ... ]
const bankSoal = {
    SD: {
        1: [
            {
                no: 1,
                soal: "Saat berbicara dengan teman sebaya, bahasa yang biasa digunakan adalah...",
                pilihan: {
                    a: "Ngoko",
                    b: "Krama",
                    c: "Indonesia",
                    d: "Inggris",
                },
                jawaban: "a",
                pembahasan:
                    "Bahasa Ngoko digunakan untuk berbicara dengan teman sebaya atau akrab.",
            },

            {
                no: 2,
                soal: "Aksara Jawa yang berbunyi 'ha' adalah aksara...",
                pilihan: {
                    a: "Pertama",
                    b: "Terakhir",
                    c: "Kelima",
                    d: "Kesepuluh",
                },
                jawaban: "a",
                pembahasan:
                    "Aksara Jawa dimulai dengan 'ha na ca ra ka', sehingga 'ha' adalah aksara pertama.",
            },

            {
                no: 3,
                soal: "Ungkapan 'alon-alon waton kelakon' mengajarkan kita untuk...",
                pilihan: {
                    a: "Tergesa-gesa",
                    b: "Pelan tetapi berhasil",
                    c: "Bermain terus",
                    d: "Tidur sepanjang hari",
                },
                jawaban: "b",
                pembahasan:
                    "Ungkapan tersebut berarti pelan-pelan asal tujuan tercapai.",
            },

            {
                no: 4,
                soal: "Salah satu nama tembang Macapat adalah...",
                pilihan: { a: "Sinom", b: "Dangdut", c: "Pop", d: "Jazz" },
                jawaban: "a",
                pembahasan: "Sinom merupakan salah satu jenis tembang Macapat.",
            },

            {
                no: 5,
                soal: "Tokoh wayang yang terkenal baik hati adalah...",
                pilihan: {
                    a: "Yudhistira",
                    b: "Rahwana",
                    c: "Kurawa",
                    d: "Sengkuni",
                },
                jawaban: "a",
                pembahasan:
                    "Yudhistira adalah tokoh Pandawa yang terkenal jujur dan baik hati.",
            },

            {
                no: 6,
                soal: "Alat musik gamelan yang dipukul adalah...",
                pilihan: { a: "Saron", b: "Pensil", c: "Buku", d: "Penggaris" },
                jawaban: "a",
                pembahasan:
                    "Saron merupakan alat musik gamelan yang dimainkan dengan cara dipukul.",
            },

            {
                no: 7,
                soal: "Tari Gambyong berasal dari daerah...",
                pilihan: { a: "Jawa", b: "Papua", c: "Bali", d: "Sumatra" },
                jawaban: "a",
                pembahasan:
                    "Tari Gambyong merupakan tarian tradisional dari Jawa.",
            },

            {
                no: 8,
                soal: "Candi Borobudur adalah bangunan bersejarah yang berada di...",
                pilihan: {
                    a: "Jawa Tengah",
                    b: "Papua",
                    c: "Kalimantan",
                    d: "Sulawesi",
                },
                jawaban: "a",
                pembahasan: "Candi Borobudur berada di Jawa Tengah.",
            },

            {
                no: 9,
                soal: "Tedhak Siten adalah upacara untuk anak yang mulai...",
                pilihan: {
                    a: "Berjalan",
                    b: "Sekolah",
                    c: "Menulis",
                    d: "Membaca",
                },
                jawaban: "a",
                pembahasan:
                    "Tedhak Siten dilakukan saat anak mulai belajar berjalan.",
            },

            {
                no: 10,
                soal: "Blangkon dipakai di bagian...",
                pilihan: { a: "Kepala", b: "Kaki", c: "Tangan", d: "Pinggang" },
                jawaban: "a",
                pembahasan: "Blangkon adalah penutup kepala khas Jawa.",
            },
        ],
        2: [
            {
                no: 1,
                soal: "Yen omong karo wong tuwa kudu nganggo basa...",
                pilihan: {
                    a: "Ngoko Lugu",
                    b: "Krama Alus",
                    c: "Bahasa gaul",
                    d: "Bahasa Inggris",
                },
                jawaban: "b",
                pembahasan:
                    "Marang wong tuwa kudu nganggo basa Krama Alus minangka tandha ngajeni lan sopan.",
            },

            {
                no: 2,
                soal: "Aksara Jawa kang dadi conto ing ngisor iki yaiku 'ha na ca ra ka' diarani aksara...",
                pilihan: {
                    a: "Aksara Latin",
                    b: "Aksara Carakan",
                    c: "Aksara Arab",
                    d: "Aksara Cina",
                },
                jawaban: "b",
                pembahasan:
                    "Aksara Jawa uga diarani Aksara Carakan, diwiwiti saka 'ha na ca ra ka'.",
            },

            {
                no: 3,
                soal: "Tembung 'rawe-rawe rantas, malang-malang putung' kalebu...",
                pilihan: {
                    a: "Tembang",
                    b: "Paribasan",
                    c: "Aksara Jawa",
                    d: "Gamelan",
                },
                jawaban: "b",
                pembahasan:
                    "Kalimat kasebut yaiku paribasan kang ateges yen ana alangan kudu disingkirake supaya tujuane kasil.",
            },

            {
                no: 4,
                soal: "Tembang Macapat sing biasane kanggo nglilipur bocah cilik yaiku...",
                pilihan: {
                    a: "Pocung",
                    b: "Kinanthi",
                    c: "Sinom",
                    d: "Megatruh",
                },
                jawaban: "b",
                pembahasan:
                    "Tembang Kinanthi nggambarake kasih sayang lan tuntunan kanggo bocah cilik.",
            },

            {
                no: 5,
                soal: "Tokoh wayang sing dadi panakawan lan seneng gawe lucu yaiku...",
                pilihan: { a: "Gareng", b: "Arjuna", c: "Bima", d: "Kresna" },
                jawaban: "a",
                pembahasan:
                    "Gareng kalebu salah siji Punokawan, abdine para Pandawa kang seneng gawe guyon.",
            },

            {
                no: 6,
                soal: "Alat musik gamelan kang digebug nganggo bonggol lan ngeluarake swara 'gung' yaiku...",
                pilihan: { a: "Saron", b: "Gong", c: "Bonang", d: "Kendhang" },
                jawaban: "b",
                pembahasan:
                    "Gong yaiku alat gamelan ukuran gedhe kang swarane 'gung' lan dadi tandha pungkasaning gendhing.",
            },

            {
                no: 7,
                soal: "Tari tradisional rakyat sing nggambarake jaranan lan ana atraksi kaya kemasukan yaiku...",
                pilihan: {
                    a: "Tari Bedhaya",
                    b: "Tari Srimpi",
                    c: "Kuda Lumping",
                    d: "Tari Gambyong",
                },
                jawaban: "c",
                pembahasan:
                    "Kuda Lumping yaiku tari rakyat kang nggunakake properti jaranan lan kerep ana atraksi kesurupan.",
            },

            {
                no: 8,
                soal: "Candi gedhe sing dununge ing Jawa Tengah lan dadi salah sawijining keajaiban donya yaiku...",
                pilihan: {
                    a: "Candi Prambanan",
                    b: "Candi Borobudur",
                    c: "Lawang Sewu",
                    d: "Sangiran",
                },
                jawaban: "b",
                pembahasan:
                    "Candi Borobudur dununge ing Magelang, Jawa Tengah, lan dadi candi Budha paling gedhe ing donya.",
            },

            {
                no: 9,
                soal: "Upacara adat kanggo bayi sing lagi sepisanan tapak ing lemah diarani...",
                pilihan: {
                    a: "Sekaten",
                    b: "Ruwatan",
                    c: "Tedhak Siten",
                    d: "Mitoni",
                },
                jawaban: "c",
                pembahasan:
                    "Tedhak Siten yaiku upacara adat nalika bayi sepisanan tapak sikile ing lemah.",
            },

            {
                no: 10,
                soal: "Sandhangan sirah utawa tutup kepala sing biasa dianggo lanang Jawa diarani...",
                pilihan: { a: "Jarik", b: "Beskap", c: "Blangkon", d: "Keris" },
                jawaban: "c",
                pembahasan:
                    "Blangkon yaiku tutup kepala tradisional kanggo lanang Jawa, sok-sok dianggo bareng karo beskap lan jarik.",
            },
        ],
        3: [
            {
                no: 1,
                soal: "Bahasa Jawa yang biasa digunakan anak-anak saat bermain dengan teman sebaya adalah...",
                pilihan: {
                    a: "Krama Alus",
                    b: "Ngoko Lugu",
                    c: "Krama Lugu",
                    d: "Bahasa Inggris",
                },
                jawaban: "b",
                pembahasan:
                    "Ngoko Lugu digunakan dalam percakapan santai dengan teman sebaya atau orang yang sudah akrab.",
            },

            {
                no: 2,
                soal: "Tulisan asli orang Jawa yang berbeda dengan huruf abjad disebut...",
                pilihan: {
                    a: "Aksara Latin",
                    b: "Aksara Arab",
                    c: "Aksara Jawa",
                    d: "Aksara Kanji",
                },
                jawaban: "c",
                pembahasan:
                    "Aksara Jawa adalah huruf tradisional khas Jawa yang berbeda dari huruf Latin.",
            },

            {
                no: 3,
                soal: "Peribahasa Jawa 'Ana Catur Mungkur' mengajarkan kita untuk...",
                pilihan: {
                    a: "Suka membicarakan orang lain",
                    b: "Menghindari pembicaraan yang tidak baik",
                    c: "Selalu bertengkar",
                    d: "Tidak mau mendengarkan",
                },
                jawaban: "b",
                pembahasan:
                    "Ana Catur Mungkur mengajarkan kita untuk menghindari atau tidak ikut dalam pembicaraan yang tidak baik.",
            },

            {
                no: 4,
                soal: "Tembang Macapat yang biasa digunakan untuk menidurkan anak kecil adalah...",
                pilihan: {
                    a: "Pocung",
                    b: "Kinanthi",
                    c: "Dhandhanggula",
                    d: "Megatruh",
                },
                jawaban: "b",
                pembahasan:
                    "Tembang Kinanthi sering digunakan untuk menidurkan anak kecil karena iramanya yang lembut dan menenangkan.",
            },

            {
                no: 5,
                soal: "Dalam wayang, tokoh yang berperan sebagai raja Pandawa dan dikenal sangat jujur adalah...",
                pilihan: {
                    a: "Duryudana",
                    b: "Puntadewa",
                    c: "Bima",
                    d: "Kresna",
                },
                jawaban: "b",
                pembahasan:
                    "Puntadewa (Yudhistira) adalah raja Pandawa yang dikenal sangat jujur dan bijaksana.",
            },

            {
                no: 6,
                soal: "Alat musik gamelan yang dimainkan dengan cara ditiup adalah...",
                pilihan: { a: "Saron", b: "Suling", c: "Kendhang", d: "Gong" },
                jawaban: "b",
                pembahasan:
                    "Suling adalah alat musik gamelan yang dimainkan dengan cara ditiup.",
            },

            {
                no: 7,
                soal: "Tarian rakyat yang penarinya biasa menunggangi kuda dari bambu disebut...",
                pilihan: {
                    a: "Tari Bedhaya",
                    b: "Tari Srimpi",
                    c: "Kuda Lumping",
                    d: "Tari Gambyong",
                },
                jawaban: "c",
                pembahasan:
                    "Kuda Lumping adalah tarian rakyat yang penarinya menunggangi properti kuda yang terbuat dari bambu.",
            },

            {
                no: 8,
                soal: "Candi Buddha terbesar di dunia yang terletak di Jawa Tengah adalah...",
                pilihan: {
                    a: "Candi Prambanan",
                    b: "Candi Borobudur",
                    c: "Candi Mendut",
                    d: "Candi Sewu",
                },
                jawaban: "b",
                pembahasan:
                    "Candi Borobudur adalah candi Buddha terbesar di dunia yang berlokasi di Jawa Tengah.",
            },

            {
                no: 9,
                soal: "Upacara turun tanah untuk bayi yang baru bisa berjalan disebut...",
                pilihan: {
                    a: "Ruwatan",
                    b: "Tedhak Siten",
                    c: "Sekaten",
                    d: "Mitoni",
                },
                jawaban: "b",
                pembahasan:
                    "Tedhak Siten adalah upacara adat saat bayi pertama kali belajar menapakkan kaki ke tanah.",
            },

            {
                no: 10,
                soal: "Lumpia adalah makanan khas yang berasal dari kota...",
                pilihan: { a: "Pati", b: "Kudus", c: "Semarang", d: "Brebes" },
                jawaban: "c",
                pembahasan:
                    "Lumpia adalah makanan khas kota Semarang yang berisi rebung, telur, dan daging.",
            },
        ],
        4: [
            {
                no: 1,
                soal: "Ngoko Alus digunakan ketika berbicara dengan orang yang lebih tua tetapi sudah akrab, contohnya berbicara dengan...",
                pilihan: {
                    a: "Presiden",
                    b: "Kakak sendiri",
                    c: "Teman sebaya",
                    d: "Orang yang baru dikenal",
                },
                jawaban: "b",
                pembahasan:
                    "Ngoko Alus digunakan untuk berbicara dengan orang yang lebih tua namun sudah akrab, seperti kakak sendiri.",
            },

            {
                no: 2,
                soal: "Aksara Jawa yang digunakan untuk menggabungkan dua konsonan tanpa vokal di tengah kata disebut...",
                pilihan: {
                    a: "Sandhangan",
                    b: "Pasangan",
                    c: "Aksara Murda",
                    d: "Aksara Swara",
                },
                jawaban: "b",
                pembahasan:
                    "Pasangan digunakan untuk menggabungkan konsonan mati dengan aksara berikutnya dalam satu kata.",
            },

            {
                no: 3,
                soal: "Bebasan adalah ungkapan Jawa yang menggunakan perumpamaan untuk menggambarkan...",
                pilihan: {
                    a: "Sifat atau kelakuan manusia",
                    b: "Nama-nama hewan",
                    c: "Jenis-jenis makanan",
                    d: "Nama tempat wisata",
                },
                jawaban: "a",
                pembahasan:
                    "Bebasan adalah ungkapan tradisional yang menggambarkan sifat atau kelakuan manusia melalui perumpamaan.",
            },

            {
                no: 4,
                soal: "Aturan jumlah baris dalam satu bait tembang Macapat disebut...",
                pilihan: {
                    a: "Guru lagu",
                    b: "Guru wilangan",
                    c: "Guru gatra",
                    d: "Guru basa",
                },
                jawaban: "c",
                pembahasan:
                    "Guru gatra adalah aturan yang menentukan jumlah baris (larik) dalam satu bait tembang Macapat.",
            },

            {
                no: 5,
                soal: "Dalam pewayangan, istilah 'kelir' merujuk pada...",
                pilihan: {
                    a: "Kotak tempat wayang",
                    b: "Kain putih sebagai layar pertunjukan",
                    c: "Alat musik pengiring",
                    d: "Lampu untuk pertunjukan",
                },
                jawaban: "b",
                pembahasan:
                    "Kelir adalah kain putih yang digunakan sebagai layar untuk menampilkan bayangan wayang kulit.",
            },

            {
                no: 6,
                soal: "Alat musik gamelan yang berbentuk seperti kotak dan dipukul dengan tangan untuk mengatur irama disebut...",
                pilihan: { a: "Bonang", b: "Kendhang", c: "Saron", d: "Gong" },
                jawaban: "b",
                pembahasan:
                    "Kendhang dimainkan dengan dipukul menggunakan tangan dan berfungsi mengatur irama dalam gamelan.",
            },

            {
                no: 7,
                soal: "Tari Gambyong berasal dari daerah dan biasa ditampilkan untuk...",
                pilihan: {
                    a: "Solo, sebagai tari penyambutan tamu",
                    b: "Yogyakarta, sebagai tari perang",
                    c: "Semarang, sebagai tari pemakaman",
                    d: "Cilacap, sebagai tari panen",
                },
                jawaban: "a",
                pembahasan:
                    "Tari Gambyong berasal dari Solo dan biasa ditampilkan sebagai tari penyambutan tamu kehormatan.",
            },

            {
                no: 8,
                soal: "Situs arkeologi di Jawa Tengah yang menjadi tempat penemuan fosil manusia purba Pithecanthropus adalah...",
                pilihan: {
                    a: "Lawang Sewu",
                    b: "Sangiran",
                    c: "Candi Sewu",
                    d: "Candi Mendut",
                },
                jawaban: "b",
                pembahasan:
                    "Sangiran adalah situs arkeologi penting tempat ditemukannya fosil manusia purba Pithecanthropus.",
            },

            {
                no: 9,
                soal: "Tradisi Sekaten di Solo diadakan dengan menabuh gamelan pusaka yang disebut...",
                pilihan: {
                    a: "Kyai Sekati",
                    b: "Kyai Garuda",
                    c: "Kyai Naga",
                    d: "Kyai Carang",
                },
                jawaban: "a",
                pembahasan:
                    "Pada tradisi Sekaten, gamelan pusaka bernama Kyai Sekati ditabuh di halaman masjid agung.",
            },

            {
                no: 10,
                soal: "Getuk Goreng adalah makanan khas yang berasal dari daerah...",
                pilihan: { a: "Pati", b: "Sokaraja", c: "Kudus", d: "Brebes" },
                jawaban: "b",
                pembahasan:
                    "Getuk Goreng adalah makanan khas dari Sokaraja, Banyumas, yang terbuat dari singkong.",
            },
        ],
        5: [
            {
                no: 1,
                soal: "Krama Lugu biasa digunakan oleh seseorang yang status sosialnya lebih tinggi kepada orang yang lebih rendah, namun tetap dengan sopan, misalnya...",
                pilihan: {
                    a: "Anak kepada orang tua",
                    b: "Atasan kepada bawahan yang baru dikenal",
                    c: "Teman kepada teman akrab",
                    d: "Murid kepada guru",
                },
                jawaban: "b",
                pembahasan:
                    "Krama Lugu sering digunakan oleh orang yang berstatus lebih tinggi kepada orang yang belum akrab, namun tetap menjaga kesopanan.",
            },

            {
                no: 2,
                soal: "Sandhangan 'wulu' dalam Aksara Jawa berfungsi untuk mengubah bunyi vokal menjadi...",
                pilihan: { a: "a", b: "i", c: "u", d: "e" },
                jawaban: "b",
                pembahasan:
                    "Sandhangan wulu berfungsi mengubah bunyi vokal dasar 'a' pada aksara menjadi bunyi 'i'.",
            },

            {
                no: 3,
                soal: "Saloka adalah ungkapan Jawa yang menggunakan perumpamaan benda atau makhluk hidup untuk menggambarkan...",
                pilihan: {
                    a: "Watak atau perilaku manusia secara utuh dalam satu kalimat tetap",
                    b: "Resep makanan",
                    c: "Nama-nama hari",
                    d: "Jenis tanaman",
                },
                jawaban: "a",
                pembahasan:
                    "Saloka menggunakan perumpamaan tetap (kalimat yang tidak bisa diubah) untuk menggambarkan watak atau perilaku manusia.",
            },

            {
                no: 4,
                soal: "Tembang Sinom dalam urutan kehidupan manusia menggambarkan masa...",
                pilihan: {
                    a: "Bayi dalam kandungan",
                    b: "Remaja yang penuh harapan",
                    c: "Tua dan sakit",
                    d: "Kematian",
                },
                jawaban: "b",
                pembahasan:
                    "Tembang Sinom menggambarkan masa remaja atau muda yang penuh harapan dan semangat menuju kedewasaan.",
            },

            {
                no: 5,
                soal: "Dalam kisah Mahabarata, Pandawa Lima berperang melawan saudara mereka sendiri yang dikenal sebagai...",
                pilihan: {
                    a: "Kurawa",
                    b: "Punokawan",
                    c: "Wanara",
                    d: "Raksasa",
                },
                jawaban: "a",
                pembahasan:
                    "Pandawa Lima berperang dalam perang besar Baratayuda melawan saudara sepupu mereka yaitu Kurawa.",
            },

            {
                no: 6,
                soal: "Laras (sistem nada) dalam gamelan Jawa yang memiliki lima nada per oktaf disebut...",
                pilihan: {
                    a: "Pelog",
                    b: "Slendro",
                    c: "Diatonis",
                    d: "Kromatis",
                },
                jawaban: "b",
                pembahasan:
                    "Laras Slendro adalah sistem nada gamelan Jawa yang terdiri dari lima nada dalam satu oktaf.",
            },

            {
                no: 7,
                soal: "Tari Srimpi pada zaman dahulu memiliki fungsi khusus di lingkungan keraton, yaitu sebagai...",
                pilihan: {
                    a: "Tari hiburan rakyat di pasar",
                    b: "Tari sakral untuk acara penting keraton",
                    c: "Tari untuk menyambut musuh",
                    d: "Tari pengiring pertandingan olahraga",
                },
                jawaban: "b",
                pembahasan:
                    "Tari Srimpi pada masa lampau merupakan tari sakral yang hanya ditampilkan dalam upacara-upacara penting di keraton.",
            },

            {
                no: 8,
                soal: "Candi Sewu yang berada di kompleks Candi Prambanan merupakan candi bercorak...",
                pilihan: { a: "Hindu", b: "Buddha", c: "Islam", d: "Kristen" },
                jawaban: "b",
                pembahasan:
                    "Candi Sewu adalah candi bercorak Buddha yang berada di kompleks percandian Prambanan.",
            },

            {
                no: 9,
                soal: "Anak berambut gimbal di Dieng dipercaya masyarakat sebagai...",
                pilihan: {
                    a: "Anak yang harus dijauhi",
                    b: "Titipan leluhur yang perlu diruwat",
                    c: "Tanda anak akan sakit",
                    d: "Pertanda buruk bagi keluarga",
                },
                jawaban: "b",
                pembahasan:
                    "Masyarakat Dieng percaya anak berambut gimbal adalah titipan leluhur sehingga perlu diruwat melalui upacara pemotongan rambut.",
            },

            {
                no: 10,
                soal: "Garang Asem adalah makanan khas yang berasal dari daerah...",
                pilihan: { a: "Pati", b: "Brebes", c: "Kudus", d: "Sokaraja" },
                jawaban: "c",
                pembahasan:
                    "Garang Asem adalah makanan khas Kudus yang berbahan dasar ayam dengan rasa asam dan pedas.",
            },
        ],
        6: [
            {
                no: 1,
                soal: "Perbedaan utama antara Krama Lugu dan Krama Alus terletak pada...",
                pilihan: {
                    a: "Krama Alus menambahkan kosakata krama inggil untuk menghormati lawan bicara, Krama Lugu tidak",
                    b: "Krama Lugu lebih sopan daripada Krama Alus",
                    c: "Krama Alus hanya digunakan untuk hewan",
                    d: "Tidak ada perbedaan sama sekali",
                },
                jawaban: "a",
                pembahasan:
                    "Krama Alus menggunakan kosakata krama inggil (kata penghormatan) untuk lawan bicara, sedangkan Krama Lugu belum menggunakannya.",
            },

            {
                no: 2,
                soal: "Kalimat Aksara Jawa yang menggunakan sandhangan panyigeg digunakan untuk menulis...",
                pilihan: {
                    a: "Suku kata yang diakhiri konsonan tertutup",
                    b: "Huruf kapital",
                    c: "Bilangan",
                    d: "Tanda baca koma",
                },
                jawaban: "a",
                pembahasan:
                    "Sandhangan panyigeg digunakan untuk menuliskan suku kata yang diakhiri oleh konsonan mati (tertutup), seperti -ng, -r, -h.",
            },

            {
                no: 3,
                soal: "Paribasan 'Tuna Satak Bathi Sanak' mengajarkan bahwa...",
                pilihan: {
                    a: "Kerugian harta tidak masalah jika mendapat persaudaraan",
                    b: "Uang lebih penting dari persahabatan",
                    c: "Jangan pernah meminjamkan uang",
                    d: "Kekayaan adalah segalanya",
                },
                jawaban: "a",
                pembahasan:
                    "Tuna Satak Bathi Sanak mengajarkan bahwa kerugian materi tidak menjadi masalah selama kita mendapat keuntungan berupa persaudaraan atau relasi baik.",
            },

            {
                no: 4,
                soal: "Tembang Macapat yang menggambarkan tahap kehidupan manusia menuju kebebasan dari urusan dunia (mendekati ajal) adalah...",
                pilihan: {
                    a: "Asmaradana",
                    b: "Megatruh",
                    c: "Kinanthi",
                    d: "Maskumambang",
                },
                jawaban: "b",
                pembahasan:
                    "Tembang Megatruh menggambarkan tahap kehidupan ketika manusia mulai melepaskan diri dari urusan duniawi menjelang akhir hayat.",
            },

            {
                no: 5,
                soal: "Dalam pewayangan, istilah 'gara-gara' merujuk pada bagian pertunjukan yang menampilkan...",
                pilihan: {
                    a: "Adegan perang besar antarraja",
                    b: "Kemunculan Punokawan dengan suasana kacau atau lucu",
                    c: "Pembukaan cerita oleh dalang",
                    d: "Penutup pertunjukan dengan doa",
                },
                jawaban: "b",
                pembahasan:
                    "Gara-gara adalah bagian pertunjukan wayang yang menampilkan Punokawan dengan suasana lucu, kacau, sekaligus sarat sindiran sosial.",
            },

            {
                no: 6,
                soal: "Laras Pelog dalam gamelan Jawa memiliki ciri khas, yaitu terdiri dari...",
                pilihan: {
                    a: "Lima nada per oktaf dengan jarak nada hampir sama",
                    b: "Tujuh nada per oktaf dengan jarak nada tidak sama",
                    c: "Tiga nada per oktaf",
                    d: "Sepuluh nada per oktaf",
                },
                jawaban: "b",
                pembahasan:
                    "Laras Pelog terdiri dari tujuh nada dalam satu oktaf dengan jarak antarnada yang tidak sama, menghasilkan kesan agung dan sakral.",
            },

            {
                no: 7,
                soal: "Tari Bedhaya Ketawang adalah tarian sakral yang hanya ditampilkan pada acara tertentu, yaitu...",
                pilihan: {
                    a: "Pesta rakyat tahunan",
                    b: "Penobatan dan peringatan kenaikan tahta raja Surakarta",
                    c: "Pernikahan rakyat biasa",
                    d: "Festival musik modern",
                },
                jawaban: "b",
                pembahasan:
                    "Tari Bedhaya Ketawang hanya ditampilkan pada upacara penobatan atau peringatan tahta raja di Keraton Surakarta karena dianggap sangat sakral.",
            },

            {
                no: 8,
                soal: "Candi Borobudur dibangun dengan konsep tiga tingkatan dunia menurut ajaran Buddha, yaitu Kamadhatu, Rupadhatu, dan...",
                pilihan: {
                    a: "Arupadhatu",
                    b: "Mahadhatu",
                    c: "Nirwana",
                    d: "Swargadhatu",
                },
                jawaban: "a",
                pembahasan:
                    "Tiga tingkatan dunia pada Candi Borobudur adalah Kamadhatu, Rupadhatu, dan Arupadhatu yang melambangkan tahapan menuju kesempurnaan.",
            },

            {
                no: 9,
                soal: "Upacara Ruwatan dalam tradisi Jawa biasanya ditujukan kepada orang yang disebut 'sukerta', yaitu...",
                pilihan: {
                    a: "Orang yang dianggap memiliki nasib buruk bawaan dan perlu disucikan",
                    b: "Orang yang baru menikah",
                    c: "Orang yang baru lahir",
                    d: "Orang yang baru meninggal",
                },
                jawaban: "a",
                pembahasan:
                    "Sukerta adalah sebutan untuk orang yang dipercaya memiliki nasib buruk bawaan sehingga perlu menjalani upacara Ruwatan untuk disucikan.",
            },

            {
                no: 10,
                soal: "Nasi Gandul yang merupakan makanan khas Pati memiliki keunikan dalam penyajiannya, yaitu...",
                pilihan: {
                    a: "Disajikan di atas daun pisang dengan kuah santan dan dimakan tanpa sendok pada penyajian tradisional",
                    b: "Selalu dimakan dengan es krim",
                    c: "Hanya disajikan saat upacara kematian",
                    d: "Tidak menggunakan nasi sama sekali",
                },
                jawaban: "a",
                pembahasan:
                    "Nasi Gandul khas Pati secara tradisional disajikan di atas daun pisang beralas piring dengan kuah santan, dan dimakan dengan cara khas tanpa sendok.",
            },
        ],
    },
    SMP: {
        7: [
            {
                no: 1,
                soal: "Seorang siswa berbicara dengan kepala sekolah menggunakan bahasa Krama Alus. Hal ini menunjukkan penerapan prinsip unggah-ungguh basa yang berkaitan dengan...",
                pilihan: {
                    a: "Status sosial dan rasa hormat kepada lawan bicara",
                    b: "Kecepatan berbicara",
                    c: "Jumlah kata yang digunakan",
                    d: "Warna pakaian yang dikenakan",
                },
                jawaban: "a",
                pembahasan:
                    "Pemilihan tingkatan bahasa dalam unggah-ungguh basa didasarkan pada status sosial dan rasa hormat terhadap lawan bicara.",
            },

            {
                no: 2,
                soal: "Aksara Jawa 'ha na ca ra ka' termasuk dalam kelompok aksara...",
                pilihan: { a: "Swara", b: "Murda", c: "Nglegena", d: "Rekan" },
                jawaban: "c",
                pembahasan:
                    "Aksara Nglegena adalah dua puluh aksara dasar Jawa yang diawali dengan ha na ca ra ka.",
            },

            {
                no: 3,
                soal: "Ungkapan 'Kacang Ora Ninggal Lanjaran' termasuk jenis...",
                pilihan: {
                    a: "Saloka",
                    b: "Bebasan",
                    c: "Tembang",
                    d: "Aksara",
                },
                jawaban: "b",
                pembahasan:
                    "Bebasan adalah ungkapan tetap yang menggambarkan sifat manusia, seperti 'Kacang Ora Ninggal Lanjaran' yang berarti sifat anak menurun dari orang tuanya.",
            },

            {
                no: 4,
                soal: "Guru lagu dalam tembang Macapat mengatur tentang...",
                pilihan: {
                    a: "Jumlah baris dalam satu bait",
                    b: "Jumlah suku kata setiap baris",
                    c: "Jatuhnya bunyi vokal di akhir setiap baris",
                    d: "Tempo lagu",
                },
                jawaban: "c",
                pembahasan:
                    "Guru lagu mengatur jatuhnya bunyi vokal pada suku kata terakhir di setiap baris tembang Macapat.",
            },

            {
                no: 5,
                soal: "Tokoh Bima dalam Pandawa Lima dikenal memiliki senjata pusaka berupa...",
                pilihan: {
                    a: "Gada Rujakpolo dan Kuku Pancanaka",
                    b: "Keris Pulanggeni",
                    c: "Panah Pasopati",
                    d: "Cakra",
                },
                jawaban: "a",
                pembahasan:
                    "Bima dikenal memiliki senjata pusaka Gada Rujakpolo dan kuku Pancanaka yang menjadi ciri khasnya dalam pewayangan.",
            },

            {
                no: 6,
                soal: "Instrumen gamelan yang berfungsi sebagai pembawa melodi pokok (balungan) adalah...",
                pilihan: {
                    a: "Saron dan Demung",
                    b: "Bonang dan Kempul",
                    c: "Gong dan Kenong",
                    d: "Suling dan Rebab",
                },
                jawaban: "a",
                pembahasan:
                    "Saron dan Demung termasuk kelompok balungan yang berfungsi membawakan melodi pokok dalam gamelan.",
            },

            {
                no: 7,
                soal: "Tari Bedhaya dan Tari Srimpi memiliki kesamaan, yaitu keduanya merupakan...",
                pilihan: {
                    a: "Tari rakyat untuk hiburan pasar malam",
                    b: "Tari klasik istana yang bersifat sakral",
                    c: "Tari modern hasil kreasi baru",
                    d: "Tari yang hanya dibawakan oleh laki-laki",
                },
                jawaban: "b",
                pembahasan:
                    "Tari Bedhaya dan Tari Srimpi merupakan tari klasik istana yang bersifat sakral dan memiliki aturan ketat dalam pementasannya.",
            },

            {
                no: 8,
                soal: "Candi Prambanan dipersembahkan untuk memuja tiga dewa utama dalam ajaran Hindu yang disebut Trimurti, yaitu...",
                pilihan: {
                    a: "Brahma, Wisnu, Siwa",
                    b: "Indra, Bayu, Agni",
                    c: "Ganesha, Saraswati, Durga",
                    d: "Rama, Sinta, Hanoman",
                },
                jawaban: "a",
                pembahasan:
                    "Candi Prambanan dipersembahkan untuk memuja Trimurti, yaitu Brahma sebagai pencipta, Wisnu sebagai pemelihara, dan Siwa sebagai pemusnah.",
            },

            {
                no: 9,
                soal: "Upacara adat Tedhak Siten memiliki makna filosofis berupa harapan agar anak...",
                pilihan: {
                    a: "Tumbuh menjadi pribadi yang mandiri dan siap menjalani kehidupan",
                    b: "Tidak pernah berjalan seumur hidup",
                    c: "Cepat menikah",
                    d: "Menjadi kaya raya secara instan",
                },
                jawaban: "a",
                pembahasan:
                    "Tedhak Siten memiliki makna filosofis sebagai doa dan harapan agar anak tumbuh menjadi pribadi yang mandiri dalam menjalani kehidupan.",
            },

            {
                no: 10,
                soal: "Telur Asin sebagai makanan khas Brebes umumnya dibuat dari telur...",
                pilihan: {
                    a: "Ayam kampung",
                    b: "Itik/bebek",
                    c: "Puyuh",
                    d: "Burung merpati",
                },
                jawaban: "b",
                pembahasan:
                    "Telur Asin khas Brebes umumnya dibuat dari telur itik atau bebek yang diawetkan dengan cara pengasinan.",
            },
        ],
        8: [
            {
                no: 1,
                soal: "Penggunaan Krama Inggil dalam suatu kalimat berfungsi untuk menghormati...",
                pilihan: {
                    a: "Diri sendiri",
                    b: "Lawan bicara atau orang yang dibicarakan",
                    c: "Benda mati",
                    d: "Waktu kejadian",
                },
                jawaban: "b",
                pembahasan:
                    "Krama Inggil digunakan khusus untuk menghormati lawan bicara atau orang yang sedang dibicarakan, tidak untuk diri sendiri.",
            },

            {
                no: 2,
                soal: "Aksara Rekan dalam Aksara Jawa digunakan untuk menuliskan...",
                pilihan: {
                    a: "Kata-kata serapan dari bahasa Arab",
                    b: "Nama hari",
                    c: "Bilangan",
                    d: "Tanda baca",
                },
                jawaban: "a",
                pembahasan:
                    "Aksara Rekan digunakan untuk menuliskan bunyi-bunyi khusus dari kata serapan bahasa Arab seperti kha, dza, fa, za.",
            },

            {
                no: 3,
                soal: "Saloka 'Kebo Nyusu Gudel' menggambarkan sindiran terhadap orang yang...",
                pilihan: {
                    a: "Lebih tua tetapi belajar dari yang lebih muda dan kurang berpengalaman",
                    b: "Sangat rajin bekerja",
                    c: "Suka menabung",
                    d: "Pandai berbicara",
                },
                jawaban: "a",
                pembahasan:
                    "Kebo Nyusu Gudel menyindir keadaan terbalik, yaitu orang yang lebih tua atau berpengalaman justru meminta petunjuk dari yang lebih muda atau belum berpengalaman.",
            },

            {
                no: 4,
                soal: "Tembang Dhandhanggula dalam filosofi kehidupan menggambarkan tahap...",
                pilihan: {
                    a: "Kehidupan yang penuh kebahagiaan dan kemakmuran setelah berusaha",
                    b: "Kematian",
                    c: "Bayi dalam kandungan",
                    d: "Masa kanak-kanak",
                },
                jawaban: "a",
                pembahasan:
                    "Tembang Dhandhanggula menggambarkan tahap kehidupan yang penuh kebahagiaan, harapan, dan kemakmuran sebagai hasil dari perjuangan.",
            },

            {
                no: 5,
                soal: "Dalam pertunjukan wayang, istilah 'sabet' merujuk pada...",
                pilihan: {
                    a: "Teknik dalang menggerakkan wayang agar terlihat hidup",
                    b: "Nama tokoh wayang",
                    c: "Jenis gamelan pengiring",
                    d: "Tempat menyimpan wayang",
                },
                jawaban: "a",
                pembahasan:
                    "Sabet adalah teknik dalang dalam menggerakkan wayang sehingga gerakannya terlihat hidup dan sesuai karakter.",
            },

            {
                no: 6,
                soal: "Dalam struktur gamelan, instrumen yang berfungsi sebagai 'penjaga irama' dengan pukulan tetap pada setiap akhir gatra disebut...",
                pilihan: {
                    a: "Kenong dan Kempul",
                    b: "Saron",
                    c: "Rebab",
                    d: "Suling",
                },
                jawaban: "a",
                pembahasan:
                    "Kenong dan Kempul berfungsi sebagai penanda struktur kalimat lagu dengan pukulan pada titik-titik tertentu secara teratur.",
            },

            {
                no: 7,
                soal: "Perbedaan utama Tari Bedhaya Ketawang dengan tarian istana lain terletak pada...",
                pilihan: {
                    a: "Jumlah penarinya yang harus sembilan orang dan sifatnya sangat sakral",
                    b: "Penarinya adalah laki-laki semua",
                    c: "Diiringi musik modern",
                    d: "Ditampilkan setiap hari untuk wisatawan",
                },
                jawaban: "a",
                pembahasan:
                    "Tari Bedhaya Ketawang harus dibawakan oleh sembilan penari putri dan dianggap sangat sakral karena hanya ditampilkan pada upacara tertentu di keraton.",
            },

            {
                no: 8,
                soal: "Relief pada dinding Candi Borobudur menggambarkan ajaran agama Buddha yang disebut...",
                pilihan: {
                    a: "Karmawibhangga dan Lalitavistara",
                    b: "Ramayana saja",
                    c: "Cerita rakyat modern",
                    d: "Sejarah kemerdekaan Indonesia",
                },
                jawaban: "a",
                pembahasan:
                    "Relief Candi Borobudur antara lain menggambarkan Karmawibhangga (hukum karma) dan Lalitavistara (kisah hidup Buddha).",
            },

            {
                no: 9,
                soal: "Dalam busana adat Jawa, 'jarik' digunakan dengan cara...",
                pilihan: {
                    a: "Dililitkan pada bagian bawah tubuh sebagai pengganti celana atau rok",
                    b: "Diikat di kepala",
                    c: "Diselipkan di pinggang sebagai senjata",
                    d: "Dikenakan sebagai penutup wajah",
                },
                jawaban: "a",
                pembahasan:
                    "Jarik adalah kain batik panjang yang dililitkan pada bagian bawah tubuh, digunakan sebagai pengganti celana atau rok dalam busana adat Jawa.",
            },

            {
                no: 10,
                soal: "Makanan khas Jawa Tengah umumnya memiliki kekayaan rasa karena penggunaan bumbu, dan Garang Asem dari Kudus dikenal memiliki cita rasa dominan...",
                pilihan: {
                    a: "Asam dan pedas dengan kuah santan",
                    b: "Manis seperti permen",
                    c: "Tawar tanpa bumbu",
                    d: "Pahit seperti jamu",
                },
                jawaban: "a",
                pembahasan:
                    "Garang Asem khas Kudus memiliki cita rasa dominan asam dan pedas yang dipadukan dengan kuah santan.",
            },
        ],

        9: [
            {
                no: 1,
                soal: "Seorang siswa diminta menulis surat resmi kepada kepala sekolah dalam bahasa Jawa. Tingkatan bahasa yang paling tepat digunakan adalah...",
                pilihan: {
                    a: "Ngoko Lugu",
                    b: "Ngoko Alus",
                    c: "Krama Alus",
                    d: "Bahasa gaul",
                },
                jawaban: "c",
                pembahasan:
                    "Surat resmi kepada kepala sekolah memerlukan tingkat bahasa paling sopan, yaitu Krama Alus dengan kosakata krama inggil.",
            },

            {
                no: 2,
                soal: "Dalam penulisan Aksara Jawa, jika sebuah kata diakhiri konsonan tanpa vokal di akhir kalimat, maka digunakan sandhangan...",
                pilihan: { a: "Pangkon", b: "Wulu", c: "Suku", d: "Taling" },
                jawaban: "a",
                pembahasan:
                    "Sandhangan Pangkon digunakan untuk mematikan vokal pada akhir kalimat atau kata yang berakhiran konsonan.",
            },

            {
                no: 3,
                soal: "Perbedaan mendasar antara Bebasan dan Saloka adalah...",
                pilihan: {
                    a: "Bebasan menggunakan kata kiasan tanpa perumpamaan binatang/benda yang baku, sedangkan Saloka selalu memuat perumpamaan tetap berupa binatang atau benda",
                    b: "Bebasan hanya digunakan untuk pantun",
                    c: "Saloka tidak memiliki makna",
                    d: "Keduanya sama persis tanpa perbedaan",
                },
                jawaban: "a",
                pembahasan:
                    "Bebasan berupa ungkapan kiasan tentang sifat manusia, sedangkan Saloka selalu memuat perumpamaan tetap dengan binatang atau benda sebagai lambang sifat tertentu.",
            },

            {
                no: 4,
                soal: "Urutan tembang Macapat yang menggambarkan perjalanan hidup manusia dari awal hingga akhir secara berurutan dimulai dari...",
                pilihan: {
                    a: "Maskumambang - Mijil - Sinom - ... - Pocung",
                    b: "Pocung - Sinom - Mijil - Maskumambang",
                    c: "Kinanthi - Pocung - Maskumambang",
                    d: "Asmaradana - Maskumambang - Sinom",
                },
                jawaban: "a",
                pembahasan:
                    "Urutan tembang Macapat menggambarkan siklus hidup manusia dimulai dari Maskumambang (dalam kandungan) hingga Pocung (kematian).",
            },

            {
                no: 5,
                soal: "Konflik utama dalam kisah Mahabarata yang melatari Perang Baratayuda disebabkan oleh perebutan...",
                pilihan: {
                    a: "Tahta dan hak waris Kerajaan Hastinapura antara Pandawa dan Kurawa",
                    b: "Wilayah laut",
                    c: "Harta warisan dari rakyat biasa",
                    d: "Gelar juara perlombaan",
                },
                jawaban: "a",
                pembahasan:
                    "Perang Baratayuda dilatari oleh konflik perebutan tahta dan hak waris Kerajaan Hastinapura antara Pandawa dan Kurawa.",
            },

            {
                no: 6,
                soal: "Dalam pementasan gamelan, hubungan antara instrumen balungan (seperti saron) dengan instrumen pencon (seperti bonang) adalah...",
                pilihan: {
                    a: "Bonang mengembangkan (menggarap) melodi pokok yang dimainkan oleh balungan",
                    b: "Tidak memiliki hubungan sama sekali",
                    c: "Balungan hanya dimainkan setelah bonang selesai",
                    d: "Bonang selalu lebih keras dari balungan tanpa fungsi musikal",
                },
                jawaban: "a",
                pembahasan:
                    "Instrumen pencon seperti bonang berfungsi menggarap atau mengembangkan melodi pokok (balungan) yang dimainkan saron menjadi lebih variatif.",
            },

            {
                no: 7,
                soal: "Nilai filosofis yang terkandung dalam Tari Bedhaya Ketawang berkaitan dengan kisah hubungan antara...",
                pilihan: {
                    a: "Raja Mataram dengan Kanjeng Ratu Kidul",
                    b: "Petani dengan hasil panen",
                    c: "Pedagang dengan pembeli di pasar",
                    d: "Anak dengan orang tuanya",
                },
                jawaban: "a",
                pembahasan:
                    "Tari Bedhaya Ketawang memiliki nilai filosofis yang terkait dengan legenda hubungan spiritual antara raja Mataram dan Kanjeng Ratu Kidul.",
            },

            {
                no: 8,
                soal: "Candi Borobudur, Prambanan, dan Sangiran sama-sama diakui UNESCO, namun perbedaannya adalah...",
                pilihan: {
                    a: "Borobudur dan Prambanan adalah warisan budaya berupa candi, sedangkan Sangiran adalah situs warisan dunia terkait evolusi manusia purba",
                    b: "Ketiganya adalah candi Hindu",
                    c: "Sangiran adalah candi terbesar di Indonesia",
                    d: "Ketiganya dibangun pada abad yang sama oleh raja yang sama",
                },
                jawaban: "a",
                pembahasan:
                    "Borobudur dan Prambanan adalah warisan budaya berupa candi, sedangkan Sangiran diakui UNESCO sebagai situs purbakala terkait evolusi manusia.",
            },

            {
                no: 9,
                soal: "Ritual pemotongan rambut gimbal di Dieng tidak bisa dilakukan sembarangan karena harus memenuhi syarat, salah satunya adalah...",
                pilihan: {
                    a: "Anak harus meminta permintaan tertentu yang harus dipenuhi sebelum rambutnya dipotong",
                    b: "Anak harus berusia di atas 17 tahun",
                    c: "Harus dilakukan di luar negeri",
                    d: "Hanya boleh dilakukan pada malam hari tanpa saksi",
                },
                jawaban: "a",
                pembahasan:
                    "Sebelum rambut gimbal dipotong, anak biasanya akan menyampaikan permintaan tertentu yang dipercaya harus dipenuhi terlebih dahulu oleh keluarga.",
            },

            {
                no: 10,
                soal: "Filosofi rumah Joglo yang membagi ruang menjadi area publik (pendopo), semi privat (pringgitan), dan privat (dalem ageng) mencerminkan konsep masyarakat Jawa tentang...",
                pilihan: {
                    a: "Tingkatan keterbukaan sosial dari yang umum hingga yang paling sakral/pribadi",
                    b: "Pembagian kelas ekonomi semata",
                    c: "Tata letak berdasarkan arah mata angin tanpa makna sosial",
                    d: "Aturan pemerintahan modern",
                },
                jawaban: "a",
                pembahasan:
                    "Pembagian ruang rumah Joglo dari pendopo (terbuka) hingga dalem ageng (privat/sakral) mencerminkan tingkatan keterbukaan sosial dalam budaya Jawa.",
            },
        ],
    },
    SMA: {
        10: [
            {
                no: 1,
                soal: "Dalam konteks sosiolinguistik, penggunaan tingkatan bahasa Jawa (unggah-ungguh basa) mencerminkan...",
                pilihan: {
                    a: "Struktur sosial dan nilai kesopanan yang hierarkis dalam masyarakat Jawa",
                    b: "Kemiskinan kosakata bahasa Jawa",
                    c: "Kebiasaan yang tidak memiliki fungsi sosial",
                    d: "Pengaruh bahasa asing semata",
                },
                jawaban: "a",
                pembahasan:
                    "Unggah-ungguh basa mencerminkan struktur sosial masyarakat Jawa yang hierarkis serta nilai-nilai kesopanan dalam berkomunikasi.",
            },

            {
                no: 2,
                soal: "Aksara Swara dalam Aksara Jawa memiliki fungsi khusus untuk...",
                pilihan: {
                    a: "Menuliskan vokal murni pada kata serapan asing tanpa konsonan di depannya",
                    b: "Mengganti seluruh aksara nglegena",
                    c: "Menulis angka",
                    d: "Menandai akhir kalimat",
                },
                jawaban: "a",
                pembahasan:
                    "Aksara Swara digunakan untuk menuliskan bunyi vokal murni, khususnya pada kata serapan dari bahasa asing yang diawali huruf vokal.",
            },

            {
                no: 3,
                soal: "Paribasan, Bebasan, dan Saloka termasuk dalam kajian linguistik yang disebut...",
                pilihan: {
                    a: "Idiom atau ungkapan tradisional (unen-unen)",
                    b: "Tata bahasa formal",
                    c: "Fonologi",
                    d: "Sintaksis modern",
                },
                jawaban: "a",
                pembahasan:
                    "Paribasan, Bebasan, dan Saloka termasuk dalam kategori unen-unen atau ungkapan/idiom tradisional dalam bahasa Jawa.",
            },

            {
                no: 4,
                soal: "Filosofi siklus tembang Macapat dari Maskumambang hingga Pocung dapat dianalogikan dengan konsep dalam ajaran Jawa tentang...",
                pilihan: {
                    a: "Sangkan paraning dumadi (asal dan tujuan hidup manusia)",
                    b: "Sistem ekonomi tradisional",
                    c: "Teknologi pertanian",
                    d: "Struktur pemerintahan kolonial",
                },
                jawaban: "a",
                pembahasan:
                    "Siklus tembang Macapat dari kelahiran hingga kematian mencerminkan konsep sangkan paraning dumadi, yaitu pemahaman tentang asal dan tujuan akhir kehidupan manusia.",
            },

            {
                no: 5,
                soal: "Dalam filsafat pewayangan Jawa, tokoh Punokawan (Semar, Gareng, Petruk, Bagong) memiliki fungsi simbolis sebagai...",
                pilihan: {
                    a: "Representasi suara hati nurani dan kebijaksanaan rakyat yang mengkritisi para ksatria/penguasa",
                    b: "Tokoh tambahan tanpa makna apapun",
                    c: "Musuh utama para Pandawa",
                    d: "Dewa-dewa tertinggi dalam pewayangan",
                },
                jawaban: "a",
                pembahasan:
                    "Punokawan berfungsi sebagai representasi suara hati nurani dan kebijaksanaan rakyat yang sering mengkritisi perilaku para ksatria atau penguasa.",
            },

            {
                no: 6,
                soal: "Sistem laras Pelog dan Slendro dalam gamelan Jawa, jika dibandingkan dengan sistem nada diatonis Barat, perbedaan utamanya terletak pada...",
                pilihan: {
                    a: "Jarak antarnada (interval) yang tidak menggunakan sistem tangga nada 12 nada sama rata seperti diatonis",
                    b: "Jumlah alat musik yang digunakan",
                    c: "Warna alat musiknya",
                    d: "Tidak ada perbedaan sama sekali",
                },
                jawaban: "a",
                pembahasan:
                    "Pelog dan Slendro memiliki sistem interval nada yang berbeda dari sistem diatonis Barat yang berbasis 12 nada dengan jarak sama rata (equal temperament).",
            },

            {
                no: 7,
                soal: "Tari Bedhaya dan Srimpi pada masa kerajaan berfungsi sebagai sarana legitimasi kekuasaan raja karena...",
                pilihan: {
                    a: "Pementasannya menunjukkan hubungan sakral antara raja dengan kekuatan spiritual/leluhur yang memperkuat wibawanya",
                    b: "Hanya untuk hiburan semata tanpa makna politik",
                    c: "Ditampilkan oleh tentara sebagai latihan perang",
                    d: "Merupakan tarian yang dilarang oleh raja",
                },
                jawaban: "a",
                pembahasan:
                    "Tari Bedhaya dan Srimpi berfungsi sebagai sarana legitimasi kekuasaan karena pementasannya menggambarkan hubungan sakral raja dengan kekuatan spiritual yang memperkuat wibawa kekuasaannya.",
            },

            {
                no: 8,
                soal: "Pembangunan Candi Borobudur pada masa Dinasti Syailendra mencerminkan adanya akulturasi antara...",
                pilihan: {
                    a: "Ajaran Buddha Mahayana dengan kepercayaan lokal serta arsitektur Nusantara",
                    b: "Ajaran Islam dengan budaya Eropa",
                    c: "Budaya Tionghoa dengan budaya Arab",
                    d: "Tidak ada akulturasi sama sekali",
                },
                jawaban: "a",
                pembahasan:
                    "Candi Borobudur mencerminkan akulturasi antara ajaran Buddha Mahayana dengan kepercayaan lokal dan kearifan arsitektur Nusantara pada masa Dinasti Syailendra.",
            },

            {
                no: 9,
                soal: "Upacara Sekaten yang diadakan di Surakarta dan Yogyakarta menunjukkan strategi penyebaran Islam pada masa lampau melalui pendekatan...",
                pilihan: {
                    a: "Akulturasi budaya, yaitu memanfaatkan tradisi gamelan yang sudah dikenal masyarakat sebagai media dakwah",
                    b: "Penaklukan secara militer",
                    c: "Pemaksaan langsung tanpa kompromi budaya",
                    d: "Tidak memiliki hubungan dengan penyebaran agama",
                },
                jawaban: "a",
                pembahasan:
                    "Sekaten menunjukkan strategi dakwah melalui akulturasi budaya, yaitu memanfaatkan gamelan yang sudah dikenal masyarakat sebagai media penyebaran Islam.",
            },

            {
                no: 10,
                soal: "Konsep ruang dalam rumah Joglo (pendopo, pringgitan, dalem ageng) jika dikaji secara antropologis menunjukkan adanya pembagian...",
                pilihan: {
                    a: "Gradasi ruang dari profan (umum) ke sakral (privat) yang mencerminkan kosmologi Jawa",
                    b: "Pembagian berdasarkan warna cat rumah",
                    c: "Pembagian berdasarkan harga material bangunan saja",
                    d: "Tidak ada makna apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Pembagian ruang rumah Joglo menunjukkan gradasi dari area profan/umum ke area sakral/privat, yang mencerminkan kosmologi dan pandangan hidup masyarakat Jawa.",
            },
        ],

        11: [
            {
                no: 1,
                soal: "Pergeseran penggunaan unggah-ungguh basa di kalangan generasi muda Jawa saat ini banyak dipengaruhi oleh...",
                pilihan: {
                    a: "Globalisasi dan dominasi penggunaan bahasa Indonesia/asing dalam komunikasi sehari-hari",
                    b: "Peningkatan jumlah penutur bahasa Jawa",
                    c: "Larangan pemerintah terhadap bahasa daerah",
                    d: "Tidak ada pergeseran sama sekali",
                },
                jawaban: "a",
                pembahasan:
                    "Globalisasi dan dominasi bahasa Indonesia serta bahasa asing dalam komunikasi sehari-hari menjadi faktor utama pergeseran penggunaan unggah-ungguh basa pada generasi muda.",
            },

            {
                no: 2,
                soal: "Penulisan Aksara Jawa pada prasasti kuno berbeda dengan Aksara Jawa baku saat ini karena adanya proses...",
                pilihan: {
                    a: "Evolusi bentuk aksara dari Kawi/Pallawa menuju bentuk Jawa standar yang lebih modern",
                    b: "Penghapusan total aksara kuno tanpa jejak",
                    c: "Penciptaan aksara baru tanpa hubungan historis",
                    d: "Tidak ada perubahan apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Aksara Jawa modern merupakan hasil evolusi panjang dari aksara Kawi/Pallawa yang berkembang menjadi bentuk standar yang digunakan saat ini.",
            },

            {
                no: 3,
                soal: "Penggunaan Saloka dalam karya sastra Jawa klasik sering berfungsi sebagai alat untuk...",
                pilihan: {
                    a: "Kritik sosial secara halus melalui perumpamaan tetap tanpa menyinggung pihak tertentu secara langsung",
                    b: "Menghina seseorang secara terbuka",
                    c: "Menggantikan seluruh kalimat formal",
                    d: "Hanya digunakan dalam dokumen hukum",
                },
                jawaban: "a",
                pembahasan:
                    "Saloka berfungsi sebagai alat kritik sosial secara halus melalui perumpamaan tetap, sehingga pesan dapat tersampaikan tanpa menyinggung pihak tertentu secara langsung.",
            },

            {
                no: 4,
                soal: "Tembang Macapat sebagai sastra lisan memiliki nilai penting dalam pendidikan karakter karena...",
                pilihan: {
                    a: "Setiap jenis tembang mengandung pitutur (nasihat) sesuai tahapan kehidupan yang dapat menjadi pedoman moral",
                    b: "Hanya berfungsi sebagai hiburan tanpa nilai pendidikan",
                    c: "Hanya dipahami oleh kalangan bangsawan",
                    d: "Tidak relevan dengan kehidupan modern",
                },
                jawaban: "a",
                pembahasan:
                    "Tembang Macapat mengandung pitutur atau nasihat moral sesuai tahapan kehidupan manusia, sehingga relevan sebagai media pendidikan karakter.",
            },

            {
                no: 5,
                soal: "Perbedaan karakter tokoh Pandawa dan Kurawa dalam pewayangan sering digunakan sebagai metafora untuk menggambarkan...",
                pilihan: {
                    a: "Konflik antara nilai kebaikan (dharma) dan keburukan (adharma) dalam diri manusia",
                    b: "Perbedaan suku bangsa di Indonesia",
                    c: "Sejarah politik kolonial Belanda",
                    d: "Perbedaan jenis kelamin semata",
                },
                jawaban: "a",
                pembahasan:
                    "Konflik Pandawa-Kurawa sering dimaknai sebagai metafora pertarungan antara nilai kebaikan (dharma) dan keburukan (adharma) yang ada dalam diri setiap manusia.",
            },

            {
                no: 6,
                soal: "Konsep 'rasa' dalam estetika gamelan Jawa lebih menekankan pada...",
                pilihan: {
                    a: "Penghayatan batin dan keselarasan emosional pemain dengan musik yang dimainkan, bukan sekadar teknik",
                    b: "Kecepatan tempo semata",
                    c: "Volume suara yang paling keras",
                    d: "Jumlah alat musik yang dimainkan",
                },
                jawaban: "a",
                pembahasan:
                    "Konsep 'rasa' dalam gamelan Jawa menekankan penghayatan batin dan keselarasan emosional pemain dengan musik, melampaui sekadar aspek teknis permainan.",
            },

            {
                no: 7,
                soal: "Pelestarian Tari Bedhaya dan Srimpi di era modern menghadapi tantangan berupa...",
                pilihan: {
                    a: "Regenerasi penari yang menguasai pakem tradisional di tengah minimnya minat generasi muda",
                    b: "Kelebihan jumlah penari yang menguasai tarian tersebut",
                    c: "Larangan total dari pemerintah",
                    d: "Tidak adanya tantangan apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Tantangan utama pelestarian Tari Bedhaya dan Srimpi adalah regenerasi penari yang menguasai pakem tradisional di tengah minimnya minat generasi muda terhadap seni klasik.",
            },

            {
                no: 8,
                soal: "Status Candi Borobudur dan Prambanan sebagai Warisan Budaya Dunia UNESCO memberikan dampak terhadap...",
                pilihan: {
                    a: "Upaya konservasi, pariwisata, dan kesadaran pelestarian budaya secara internasional",
                    b: "Penghapusan fungsi candi sebagai tempat ibadah secara total",
                    c: "Larangan kunjungan wisatawan",
                    d: "Tidak ada dampak apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Status Warisan Budaya Dunia UNESCO mendorong upaya konservasi, pengembangan pariwisata, dan kesadaran pelestarian budaya secara internasional.",
            },

            {
                no: 9,
                soal: "Tradisi Sekaten dan Grebeg di lingkungan keraton Jawa hingga kini masih dipertahankan sebagai bentuk...",
                pilihan: {
                    a: "Pelestarian identitas budaya dan hubungan simbolis antara keraton dengan masyarakat",
                    b: "Kewajiban hukum yang diatur undang-undang modern",
                    c: "Acara yang tidak memiliki makna budaya",
                    d: "Tradisi yang sudah dihapuskan",
                },
                jawaban: "a",
                pembahasan:
                    "Tradisi Sekaten dan Grebeg dipertahankan sebagai bentuk pelestarian identitas budaya dan simbol hubungan antara pihak keraton dengan masyarakat sekitarnya.",
            },

            {
                no: 10,
                soal: "Konsep arsitektur rumah Joglo yang mengikuti aturan filosofis tertentu menunjukkan bahwa masyarakat Jawa tradisional memandang rumah sebagai...",
                pilihan: {
                    a: "Representasi mikrokosmos yang mencerminkan keselarasan hubungan manusia, alam, dan Tuhan",
                    b: "Sekadar tempat berlindung dari hujan",
                    c: "Bangunan tanpa makna simbolis apapun",
                    d: "Properti investasi semata",
                },
                jawaban: "a",
                pembahasan:
                    "Arsitektur rumah Joglo dipandang sebagai representasi mikrokosmos yang mencerminkan keselarasan hubungan antara manusia, alam, dan Tuhan dalam pandangan hidup Jawa.",
            },
        ],

        12: [
            {
                no: 1,
                soal: "Dalam kajian linguistik kritis, hierarki unggah-ungguh basa Jawa dapat dianalisis sebagai cerminan dari...",
                pilihan: {
                    a: "Struktur kekuasaan dan stratifikasi sosial yang terbentuk sepanjang sejarah masyarakat Jawa",
                    b: "Bahasa yang netral tanpa hubungan dengan kekuasaan",
                    c: "Sistem yang muncul secara acak tanpa konteks sosial",
                    d: "Pengaruh tunggal dari satu kerajaan saja",
                },
                jawaban: "a",
                pembahasan:
                    "Hierarki unggah-ungguh basa dapat dianalisis sebagai cerminan struktur kekuasaan dan stratifikasi sosial yang terbentuk sepanjang sejarah masyarakat Jawa.",
            },

            {
                no: 2,
                soal: "Upaya revitalisasi Aksara Jawa di era digital, seperti penambahan dalam Unicode, memiliki tujuan strategis untuk...",
                pilihan: {
                    a: "Menjaga keberlangsungan aksara tradisional agar tetap dapat digunakan dalam teknologi modern",
                    b: "Menghapus aksara Latin dari penggunaan",
                    c: "Membuat aksara baru yang sama sekali berbeda",
                    d: "Tidak memiliki tujuan apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Penambahan Aksara Jawa dalam Unicode bertujuan menjaga keberlangsungan aksara tradisional agar tetap relevan dan dapat digunakan dalam teknologi digital modern.",
            },

            {
                no: 3,
                soal: "Analisis terhadap Paribasan, Bebasan, dan Saloka dalam kajian sastra dapat digunakan untuk memahami...",
                pilihan: {
                    a: "Pandangan dunia (world view) dan sistem nilai masyarakat Jawa yang diwariskan secara lisan",
                    b: "Hanya aturan tata bahasa formal",
                    c: "Sistem penanggalan masyarakat Jawa",
                    d: "Struktur pemerintahan modern",
                },
                jawaban: "a",
                pembahasan:
                    "Kajian terhadap Paribasan, Bebasan, dan Saloka dapat membuka pemahaman tentang pandangan dunia dan sistem nilai masyarakat Jawa yang diwariskan secara lisan turun-temurun.",
            },

            {
                no: 4,
                soal: "Jika dikaji dari perspektif filsafat Jawa, struktur Macapat yang baku (guru gatra, guru lagu, guru wilangan) dapat dipandang sebagai representasi dari konsep...",
                pilihan: {
                    a: "Keteraturan kosmis (tata) yang harus diikuti manusia dalam menjalani kehidupan yang harmonis",
                    b: "Kebebasan tanpa aturan dalam berkesenian",
                    c: "Pengaruh budaya asing yang dominan",
                    d: "Sistem ekonomi pasar bebas",
                },
                jawaban: "a",
                pembahasan:
                    "Struktur baku Macapat dapat dimaknai sebagai representasi konsep keteraturan kosmis (tata) yang harus diikuti manusia untuk mencapai keharmonisan hidup.",
            },

            {
                no: 5,
                soal: "Pewayangan Jawa, meskipun bersumber dari epos India (Mahabarata/Ramayana), mengalami proses 'Jawanisasi' yang tampak dari...",
                pilihan: {
                    a: "Penambahan tokoh-tokoh lokal seperti Punokawan dan penyesuaian alur cerita dengan nilai-nilai lokal",
                    b: "Penghapusan total cerita aslinya tanpa sisa",
                    c: "Penerjemahan kata demi kata tanpa perubahan apapun",
                    d: "Tidak adanya perubahan dari versi aslinya",
                },
                jawaban: "a",
                pembahasan:
                    "Jawanisasi pewayangan tampak dari penambahan tokoh lokal seperti Punokawan serta penyesuaian alur dan nilai cerita dengan konteks budaya Jawa.",
            },

            {
                no: 6,
                soal: "Sistem notasi Kepatihan dalam gamelan Jawa berperan penting dalam...",
                pilihan: {
                    a: "Mendokumentasikan dan mewariskan repertoar gamelan secara tertulis untuk generasi berikutnya",
                    b: "Menggantikan seluruh fungsi pemain gamelan",
                    c: "Menghapus tradisi lisan gamelan",
                    d: "Tidak memiliki fungsi apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Notasi Kepatihan berperan penting dalam mendokumentasikan dan mewariskan repertoar gamelan secara tertulis, membantu pelestarian lintas generasi.",
            },

            {
                no: 7,
                soal: "Dalam perspektif kajian budaya kontemporer, pertunjukan Tari Bedhaya di luar konteks keraton (misalnya di teater modern) dapat dipandang sebagai bentuk...",
                pilihan: {
                    a: "Negosiasi antara nilai sakral tradisional dengan kebutuhan pelestarian dan apresiasi publik yang lebih luas",
                    b: "Penghinaan terhadap tradisi tanpa pengecualian",
                    c: "Penghapusan makna sakral secara permanen",
                    d: "Tidak ada makna budaya apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Pertunjukan Tari Bedhaya di luar keraton dapat dipandang sebagai negosiasi antara menjaga nilai sakral tradisional dengan kebutuhan pelestarian dan apresiasi publik yang lebih luas.",
            },

            {
                no: 8,
                soal: "Pendekatan arkeologi modern dalam meneliti Candi Borobudur dan Prambanan, termasuk penggunaan teknologi seperti LiDAR atau analisis material, bertujuan untuk...",
                pilihan: {
                    a: "Memahami teknik pembangunan, kondisi struktural, dan sejarah candi secara lebih akurat untuk upaya konservasi",
                    b: "Menghancurkan candi untuk penelitian",
                    c: "Mengubah bentuk asli candi",
                    d: "Tidak memiliki tujuan ilmiah apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Teknologi modern dalam arkeologi digunakan untuk memahami teknik pembangunan, kondisi struktural, dan sejarah candi secara lebih akurat guna mendukung upaya konservasi.",
            },

            {
                no: 9,
                soal: "Dari sudut pandang antropologi, ritual seperti Ruwatan dan pemotongan rambut gimbal di Dieng tetap dilestarikan meskipun di era modern karena berfungsi sebagai...",
                pilihan: {
                    a: "Mekanisme sosial untuk memperkuat identitas komunitas dan menjaga kontinuitas hubungan dengan leluhur/kosmos",
                    b: "Kewajiban administratif pemerintah",
                    c: "Hiburan semata tanpa makna sosial",
                    d: "Tidak memiliki fungsi sosial apapun",
                },
                jawaban: "a",
                pembahasan:
                    "Ritual seperti Ruwatan dan pemotongan rambut gimbal berfungsi sebagai mekanisme sosial yang memperkuat identitas komunitas dan menjaga kontinuitas hubungan dengan leluhur atau kosmos.",
            },

            {
                no: 10,
                soal: "Studi tentang arsitektur rumah Joglo dalam konteks pembangunan berkelanjutan (sustainable architecture) menunjukkan bahwa konsep tradisional ini relevan karena...",
                pilihan: {
                    a: "Memanfaatkan material lokal, ventilasi alami, dan penyesuaian terhadap iklim tropis yang sejalan dengan prinsip arsitektur ramah lingkungan",
                    b: "Menggunakan material modern yang mahal",
                    c: "Tidak mempertimbangkan kondisi lingkungan sama sekali",
                    d: "Hanya relevan untuk bangunan di luar Indonesia",
                },
                jawaban: "a",
                pembahasan:
                    "Rumah Joglo relevan dengan prinsip arsitektur berkelanjutan karena memanfaatkan material lokal, ventilasi alami, dan penyesuaian terhadap iklim tropis.",
            },
        ],
    },
};
const jenjangInfo = {
    SD: { label: "Sekolah Dasar (SD)", kelas: [1, 2, 3, 4, 5, 6] },
    SMP: { label: "Sekolah Menengah Pertama (SMP)", kelas: [7, 8, 9] },
    SMA: { label: "Sekolah Menengah Atas (SMA)", kelas: [10, 11, 12] },
};

const WAKTU_UJIAN = 5 * 60; // 5 menit dalam detik
const gongAudio = new Audio("../resources/suara_gong.wav");

// ====== STATE ======
let currentJenjang = null;
let currentKelas = null;
let currentSoalList = [];
let currentIndex = 0;
let jawabanUser = []; // array of letter/null sebanding currentSoalList
let timerInterval = null;
let sisaWaktu = WAKTU_UJIAN;

// ====== ELEMEN ======
const views = {
    list: document.getElementById("view-list"),
    kelas: document.getElementById("view-kelas"),
    ujian: document.getElementById("view-ujian"),
    hasil: document.getElementById("view-hasil"),
};

// ====== SOUND EFFECT ======
const soundButton = document.getElementById("btn-sound");

soundButton.addEventListener("click", () => {
    gongAudio.currentTime = 0;
    gongAudio.play().catch(() => {
        // autoplay blocked by browser; user triggered playback via click so should work if allowed
    });
});

function updateSoundButton() {
    const isGongSoal =
        currentJenjang === "SD" &&
        currentKelas === 2 &&
        currentSoalList[currentIndex] &&
        currentSoalList[currentIndex].no === 6;
    soundButton.style.display = isGongSoal ? "inline-flex" : "none";
    soundButton.disabled = !isGongSoal;
}

// ====== VIEW ======
function showView(name) {
    Object.values(views).forEach((v) => v.classList.add("hidden"));
    views[name].classList.remove("hidden");
}

// ====== SIDEBAR TOGGLE ======
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const hamburgerBtn = document.getElementById("hamburgerBtn");
let isMobile = window.innerWidth <= 640;

window.addEventListener("resize", () => {
    isMobile = window.innerWidth <= 640;
});

function toggleSidebar() {
    if (!sidebar) return;

    if (isMobile) {
        sidebar.classList.toggle("mobile-open");
        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle("visible");
        }
    } else {
        sidebar.classList.toggle("collapsed");
        document.body.classList.toggle(
            "sidebar-collapsed",
            sidebar.classList.contains("collapsed"),
        );
    }
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.remove("mobile-open");
        sidebarOverlay.classList.remove("visible");
    });
}

window.toggleSidebar = toggleSidebar;

// ====== NAVIGASI: LIST -> KELAS ======
document.querySelectorAll(".ujian-item").forEach((item) => {
    item.addEventListener("click", () => {
        const jenjang = item.dataset.jenjang;
        openKelasView(jenjang);
    });
});

function openKelasView(jenjang) {
    currentJenjang = jenjang;
    const info = jenjangInfo[jenjang];
    document.getElementById("kelas-title").textContent =
        `Pilih Kelas - ${info.label}`;

    const kelasList = document.getElementById("kelas-list");
    kelasList.innerHTML = "";

    info.kelas.forEach((k) => {
        const card = document.createElement("div");
        card.className = "kelas-card";
        card.innerHTML = `
      <div class="kelas-num">${k}</div>
      <div class="kelas-label">Kelas ${k}</div>
    `;
        card.addEventListener("click", () => startUjian(jenjang, k));
        kelasList.appendChild(card);
    });

    showView("kelas");
}

// back buttons
document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        if (target === "view-kelas" && timerInterval) {
            clearInterval(timerInterval);
        }
        showView(target.replace("view-", ""));
    });
});

// ====== MULAI UJIAN ======
function startUjian(jenjang, kelas) {
    currentJenjang = jenjang;
    currentKelas = kelas;
    currentSoalList = bankSoal[jenjang][kelas] || [];
    currentIndex = 0;
    jawabanUser = new Array(currentSoalList.length).fill(null);
    sisaWaktu = WAKTU_UJIAN;

    document.getElementById("ujian-title").textContent =
        `Ujian ${jenjangInfo[jenjang].label} - Kelas ${kelas}`;
    document.getElementById("soal-total").textContent = currentSoalList.length;

    renderSoal();
    startTimer();
    showView("ujian");
}

// ====== TIMER ======
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        sisaWaktu--;
        updateTimerDisplay();

        if (sisaWaktu <= 0) {
            clearInterval(timerInterval);
            finishUjian();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const menit = Math.floor(sisaWaktu / 60);
    const detik = sisaWaktu % 60;
    const display = `${String(menit).padStart(2, "0")}:${String(detik).padStart(2, "0")}`;
    const timerEl = document.getElementById("timer");
    timerEl.textContent = display;

    if (sisaWaktu <= 30) {
        timerEl.classList.add("warning");
    } else {
        timerEl.classList.remove("warning");
    }
}

// ====== RENDER SOAL ======
function renderSoal() {
    const soal = currentSoalList[currentIndex];
    document.getElementById("soal-nomor").textContent = currentIndex + 1;
    document.getElementById("soal-pertanyaan").textContent =
        `${soal.no}. ${soal.soal}`;

    const pilihanContainer = document.getElementById("soal-pilihan");
    pilihanContainer.innerHTML = "";

    ["a", "b", "c", "d"].forEach((letter) => {
        const div = document.createElement("div");
        div.className = "pilihan-item";
        if (jawabanUser[currentIndex] === letter) {
            div.classList.add("selected");
        }
        div.innerHTML = `
      <div class="pilihan-letter">${letter.toUpperCase()}</div>
      <div class="pilihan-text">${soal.pilihan[letter]}</div>
    `;
        div.addEventListener("click", () => pilihJawaban(letter));
        pilihanContainer.appendChild(div);
    });

    updateSoundButton();

    const soalImage = document.getElementById("soal-image");
    if (currentJenjang === "SD" && currentKelas === 1 && soal.no === 2) {
        soalImage.src = "../resources/aksarajawaH.jpeg";
        soalImage.alt = "Aksara Jawa H";
        soalImage.classList.remove("hidden");
    } else if (currentJenjang === "SD" && currentKelas === 4 && soal.no === 6) {
        soalImage.src = "../resources/kendang.jpg";
        soalImage.alt = "Gambar kendang";
        soalImage.classList.remove("hidden");
    } else {
        soalImage.src = "";
        soalImage.alt = "";
        soalImage.classList.add("hidden");
    }

    // progress bar
    const progress = ((currentIndex + 1) / currentSoalList.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;

    // nav buttons
    document.getElementById("btn-prev").disabled = currentIndex === 0;

    const isLast = currentIndex === currentSoalList.length - 1;
    document.getElementById("btn-next").classList.toggle("hidden", isLast);
    document.getElementById("btn-finish").classList.toggle("hidden", !isLast);
}

function pilihJawaban(letter) {
    jawabanUser[currentIndex] = letter;
    renderSoal();
}

// ====== NAVIGASI SOAL ======
document.getElementById("btn-prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderSoal();
    }
});

document.getElementById("btn-next").addEventListener("click", () => {
    if (currentIndex < currentSoalList.length - 1) {
        currentIndex++;
        renderSoal();
    }
});

document.getElementById("btn-finish").addEventListener("click", () => {
    clearInterval(timerInterval);
    finishUjian();
});

// ====== SELESAI UJIAN & HASIL ======
function finishUjian() {
    let benar = 0;
    let salah = 0;
    const riwayatList = document.getElementById("riwayat-list");
    riwayatList.innerHTML = "";

    currentSoalList.forEach((soal, idx) => {
        const userAnswer = jawabanUser[idx];
        const isCorrect = userAnswer === soal.jawaban;
        if (isCorrect) benar++;
        else salah++;

        const item = document.createElement("div");
        item.className = `riwayat-item ${isCorrect ? "benar" : "salah"}`;
        const jawabanText = userAnswer
            ? `${userAnswer.toUpperCase()}. ${soal.pilihan[userAnswer]}`
            : "Tidak dijawab";
        const kunciText = `${soal.jawaban.toUpperCase()}. ${soal.pilihan[soal.jawaban]}`;

        item.innerHTML = `
      <div class="riwayat-num">${idx + 1}</div>
      <div class="riwayat-text">
        <div>${soal.soal}</div>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-top:2px;">
          Jawabanmu: ${jawabanText}${!isCorrect ? ` &mdash; Kunci: ${kunciText}` : ""}
        </div>
      </div>
      <div class="riwayat-status">${isCorrect ? "Benar" : "Salah"}</div>
    `;
        riwayatList.appendChild(item);
    });

    const total = currentSoalList.length;
    const skor = total > 0 ? Math.round((benar / total) * 100) : 0;

    document.getElementById("hasil-score").textContent = skor;
    document.getElementById("stat-benar").textContent = benar;
    document.getElementById("stat-salah").textContent = salah;

    // tandai status jenjang menjadi "Selesai"
    const statusEl = document.querySelector(
        `.status[data-status="${currentJenjang}"]`,
    );
    if (statusEl) {
        statusEl.textContent = "Selesai";
        statusEl.classList.remove("status-pending");
        statusEl.classList.add("status-done");
    }

    showView("hasil");
}

// ====== KEMBALI KE DAFTAR UJIAN ======
document.getElementById("btn-kembali").addEventListener("click", () => {
    showView("list");
});
