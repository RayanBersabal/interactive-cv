// backend/data.js
const educationHistory = [  
 { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
 { id: 2, period: '2019 - 2022', institution: 'SMK Negeri 1 Taliwang', major: 'RPL' } 
];
const skills = [ 
  { name: 'Vue.js', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PostgreSQL', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git & GitHub', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Laravel', level: 'Menengah', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/laravel/laravel-plain.svg' },
  { name: 'MySQL', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Blender', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'Godot', level: 'Dasar', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
];
const projects = [ 
{ title: 'Santapin', image: 'https://placehold.co/400x300" alt="Project preview',
description: 'Platform e-commerce dengan fitur keranjang belanja.', tech: ['Vue.js','Tailwinds', 'Laravel',
'MySQL'], link: 'https://github.com/EgidiusDicky/Santapin' },
{ title: 'Aplikasi Reservasi Hotel', image: 'https://placehold.co/400x300" alt="Project preview',
description: 'Aplikasi untuk admin untuk melakukan reservasi untuk pengunjung.', tech: ['C++', 'Windows Form'], link: '#' },
{
  title: 'Website Portofolio Responsi',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
  description: 'Website portofolio pribadi yang dibangun menggunakan Vue.js dan Express.js sebagai syarat kelulusan Responsi Praktikum Pemrograman Web.',
  tech: ['Vue.js', 'Express.js', 'Vercel'],
  link: 'https://github.com/RayanBersabal/interactive-cv'
  }
];
module.exports = { educationHistory, skills, projects };