//import dan konfigurasi dasar
const express = require('express'); //import express
const app = express(); //buat aplikasi express
const PORT = 3000; //port server

//beritahu express bahwa kita pakai EJS sebagai template engine
app.set('view engine', 'ejs');

//middleware untuk membaca data dari form HTML (urlencoded)
app.use(express.urlencoded({ extended: true }));

//middleware untuk menyajikan file statis dari folder 'public'
app.use(express.static('public'));

//buat database sementara (in-memory)
//karena tidak pakai database, kita simpan posts di array ini
//data akan hilang setiap kali server di restart
let posts = [
    {
        id: 1,
        title: "Selamat Datang di Blog Saya",
        content: "Ini adalah post pertama saya. Saya sangat senang bisa berbagi cerita dan pikiran di sini. Blog ini dibuat menggunakan Node.js dan Express.js.",
        author: "Admin",
        date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a cursus nibh. Sed tellus felis, semper non nunc ut, consectetur aliquam enim.",
        author: "Admin",
        date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
    }
];

//counter untuk generate ID unik setiap post baru
let nextId = 3;


//ROUTES

//GET / -> halaman utaman, tampilkan semua post
app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

// GET /posts/new → Tampilkan form buat post baru
app.get('/posts/new', (req, res) => {
    res.render('new-post');
});

// POST /posts → terima data dari form dan simpan post baru
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;

    //buat objek post baru
    const newPost = {
        id: nextId++,
        title: title,
        content: content,
        author: author || "Anonim",
        date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    //tambahkan ke array post
    posts.push(newPost);

    //redirect ke halaman utama jika berhasil
    res.redirect('/');
});

// GET /posts/:id/edit → Tampilkan form edit post
app.get('/posts/:id/edit', (req, res) => {
    const id = parseInt(req.params.id); //ambil id dari url
    const post = posts.find(p => p.id === id); //cari post dengan id tersebut

    if (!post) {
        return res.status(404).send('Post tidak ditemukan!');
    }

    res.render('edit-post', { post: post });
});

// POST /posts/:id/update → Simpan perubahan edit
app.post('posts/:id/update', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, author } = req.body;

    // Cari index post di array
    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).send('Post tidak ditemukan');
    }

    // Update data post (tetap pertahankan id dan date asli)
    posts[postIndex] = {
        ...posts[postIndex], // Spread operator: salin semua properti lama
        title: title,
        content: content,
        author: author
    };

    res.redirect('/');
})

// POST /posts/:id/delete → Hapus post
app.post('/posts/:id/delete', (req, res) => {
    const id = parseInt(req.params.id);

    // Filter: buat array baru tanpa post yang ID-nya cocok
    posts = posts.filter(p => p.id !== id);

    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});