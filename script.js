const jadwal = [
    {
        hari: "Senin, 2 November",
        waktu: "08.00–09.30",
        mapel: "Bahasa Indonesia",
        catatan: "Bawa alat tulis"
    },
    {
        hari: "Senin, 2 November",
        waktu: "10.00–11.30",
        mapel: "Matematika",
        catatan: "Siapkan penggaris"
    },
    {
        hari: "Selasa, 3 November",
        waktu: "08.00–09.30",
        mapel: "Bahasa Inggris",
        catatan: "Baca materi"
    },
    {
        hari: "Selasa, 3 November",
        waktu: "10.00–11.30",
        mapel: "IPA",
        catatan: "Pelajari rumus"
    },
    {
        hari: "Rabu, 4 November",
        waktu: "08.00–09.30",
        mapel: "IPS",
        catatan: "Pelajari rangkuman"
    },
    {
        hari: "Rabu, 4 November",
        waktu: "10.00–11.30",
        mapel: "PPKn",
        catatan: "Baca kembali materi"
    },
    {
        hari: "Kamis, 5 November",
        waktu: "08.00–09.30",
        mapel: "PJOK",
        catatan: "Pelajari teori"
    },
    {
        hari: "Kamis, 5 November",
        waktu: "10.00–11.30",
        mapel: "Seni Budaya",
        catatan: "Pelajari catatan"
    },
    {
        hari: "Jumat, 6 November",
        waktu: "08.00–09.30",
        mapel: "Informatika",
        catatan: "Pelajari materi"
    },
    {
        hari: "Jumat, 6 November",
        waktu: "10.00–11.30",
        mapel: "Agama",
        catatan: "Baca rangkuman"
    }
];

const jadwalBody = document.getElementById("jadwalBody");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

function tampilkanJadwal(kataKunci = "") {
    const hasil = jadwal.filter(item =>
        Object.values(item).some(nilai =>
            nilai.toLowerCase().includes(kataKunci.toLowerCase())
        )
    );

    jadwalBody.replaceChildren();

    hasil.forEach(item => {
        const baris = document.createElement("tr");

        const nilai = [
            item.hari,
            item.waktu,
            item.mapel,
            item.catatan
        ];

        nilai.forEach((teks, index) => {
            const sel = document.createElement("td");
            sel.textContent = teks;

            if (index === 2) {
                sel.classList.add("subject");
            }

            if (index === 3) {
                const badge = document.createElement("span");
                badge.className = "badge";
                badge.textContent = teks;
                sel.replaceChildren(badge);
            }

            baris.appendChild(sel);
        });

        jadwalBody.appendChild(baris);
    });

    emptyMessage.hidden = hasil.length !== 0;
}

function perbaruiRingkasan() {
    const jumlahHari = new Set(jadwal.map(item => item.hari)).size;
    const jumlahMapel = new Set(jadwal.map(item => item.mapel)).size;

    document.getElementById("jumlahHari").textContent =
        `${jumlahHari} Hari`;

    document.getElementById("jumlahMapel").textContent =
        `${jumlahMapel} Mapel`;
}

searchInput.addEventListener("input", () => {
    tampilkanJadwal(searchInput.value.trim());
});

document.getElementById("printBtn").addEventListener("click", () => {
    window.print();
});

tampilkanJadwal();
perbaruiRingkasan();