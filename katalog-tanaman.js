/* katalog-tanaman.js
 * Mengisi daftar tanaman di Data.html, dikelompokkan per daerah.
 *
 * Cara tambah tanaman: tambahkan satu baris di daerah yang sesuai pada DATA:
 *   ["NamaFileHTML", "Nama tampilan", "Nama latin"]
 * Foto dicari otomatis dengan nama "Nama tampilan.jpg".
 * Kalau nama file fotonya berbeda, tambahkan elemen ke-4:
 *   ["SriRejeki", "Sri Rejeki", "Aglaonema 'Silver Bay'", "Sri Rejeki Silver.jpg"]
 */
(function () {
  var DATA = [
    { daerah: "Luar Sekolah", items: [
      ["PalemKuning", "Palem Kuning", "Chrysalidocarpus lutescens"],
      ["NanasKerang", "Nanas Kerang", "Tradescantia spathacea"],
      ["JambuBiji", "Jambu Biji", "Psidium guajava"],
      ["PalemRaja", "Palem Raja", "Roystonea regia"],
      ["PalemEkorIkan", "Palem Ekor Ikan", "Caryota mitis / Wodyetia bifurcata"],
      ["BungaIris", "Bunga Iris", "Dietes grandiflora"],
      ["BromeliaMerona", "Bromelia Merona", "Neoregelia carolinae"],
      ["BambuRejeki", "Bambu Rejeki", "Dracaena sanderiana"],
      ["BambuRejekiVariegata", "Bambu Rejeki Variegata", "Dracaena reflexa \u2018Variegata\u2019"],
      ["PakuSarangBurung", "Paku Sarang Burung", "Asplenium nidus"],
      ["SujiHutan", "Suji Hutan", "Dracaena angustifolia"],
      ["PandanLaut", "Pandan Laut", "Pandanus tectorius"],
      ["LidahMertuaSemak", "Lidah Mertua Semak", "Sansevieria hyacinthoides"],
      ["MahkotaDuri", "Mahkota Duri", "Euphorbia milii"],
      ["Beringin", "Beringin", "Ficus benjamina"],
      ["Puring", "Puring", "Codiaeum variegatum"]
    ]},
    { daerah: "Masjid", items: [
      ["Handeuleum", "Handeuleum", "Graptophyllum pictum"],
      ["PohonBelimbing", "Pohon Belimbing", "Averrhoa carambola"],
      ["Puring", "Puring", "Codiaeum variegatum"],
      ["PohonPinus", "Pohon Pinus", "Pinus merkusii"],
      ["PandanBali", "Pandan Bali", "Cordyline australis"],
      ["KiaraPayung", "Kiara Payung", "Filicium decipiens"],
      ["BlueCanePalm", "Blue Cane Palm", "Chrysalidocarpus cabadae"],
      ["PalemBotol", "Palem Botol", "Hyophorbe lagenicaulis"]
    ]},
    { daerah: "Lapangan Karet", items: [
      ["LidahMertua", "Lidah Mertua", "Dracaena trifasciata"],
      ["RumputKucaiMini", "Rumput Kucai Mini", "Ophiopogon japonicus"],
      ["BungaMadia", "Bunga Madia", "Thunbergia grandiflora"],
      ["PalemPutri", "Palem Putri", "Adonidia merrillii"],
      ["BakungPutih", "Bakung Putih", "Crinum asiaticum"],
      ["Bakungan", "Bakungan", "Hymenocallis littoralis"],
      ["SriRejeki", "Sri Rejeki", "Aglaonema 'Silver Bay'", "Sri Rejeki Silver.jpg"],
      ["Tabebuya", "Tabebuya", "Handroanthus sp. / Tabebuia sp."],
      ["KaretKebo", "Karet Kebo", "Ficus elastica Roxb. ex Hornem."],
      ["Bungur", "Bungur", "Lagerstroemia speciosa (L.) Pers"],
      ["DaunBahagia", "Daun Bahagia", "Dieffenbachia oerstedii Schott."],
      ["LidahMertuaAfrikaTimur", "Lidah Mertua Afrika Timur", "Dracaena hyacinthoides (L.) Mabb."]
    ]},
    { daerah: "Lapangan Basket", items: [
      ["BromeliaMawar", "Bromelia Mawar", "Alcantarea imperialis"],
      ["PalemPhoenix", "Palem Phoenix", "Phoenix roebelenii O\u2019Brien."],
      ["PohonNangka", "Pohon Nangka", "Artocarpus heterophyllus Lam."],
      ["PalemKardus", "Palem Kardus", "Zamia furfuracea L.f"],
      ["PohonMerawan", "Pohon Merawan", "Hopea odorata"],
      ["Gandarusa", "Gandarusa", "Justicia gendarussa Burm.f"],
      ["PohonMagnolia", "Pohon Magnolia", "Magnolia grandiflora L"],
      ["PohonFicusFulva", "Hamerang Badak", "Ficus fulva Reinw. ex Blume", "Pohon Ficus Fulva.jpg"],
      ["PohonSancang", "Pohon Sancang", "Pemphis acidula J.R.Forst. & G.Forst"],
      ["PeaceLily", "Peace Lily", "Spathiphyllum wallisii"],
      ["AglonemaHijau", "Aglonema Hijau", "Aglaonema commutatum"],
      ["AnnonaMuricata", "Sirsak", "Annona muricata", "Annona Muricata.jpg"],
      ["AnthuriumJenmanii", "Kuping Gajah", "Anthurium jenmanii", "Anthurium Jenmanii.jpg"],
      ["Binahong", "Binahong", "Anredera cordifolia"],
      ["Bougenville", "Bunga Kertas", "Bougainvillea spectabilis", "Bougenville.jpg"],
      ["SenteHitam", "Sente Hitam", "Alocasia plumbea"],
      ["LiriopeMuscari", "Rumput Lili Rope", "Liriope muscari", "Liriope Muscari.jpg"],
      ["PohonJambu", "Pohon Jambu Kelompok Arum", "Syzygium jambos (L.) Alston", "Pohon Jambu.jpg"],
      ["Pepaya", "Pepaya", "Carica papaya L."],
      ["BungaTaiwanese", "Bunga Taiwanese", "Cuphea hyssopifolia"],
      ["ChalateaPisang", "Daun Havana", "Calathea lutea", "Chalatea Pisang.jpg"],
      ["KaktusKoboi", "Kaktus Koboi", "Cereus repandus"],
      ["AspleniumNidus", "Kadaka", "Asplenium nidus", "Asplenium Nidus.jpg"],
      ["PacingTawar", "Pacing Tawar", "Hellenia speciosa"],
      ["BungaLiliHujan", "Bunga Lili Hujan", "Zephyranthes sp."],
      ["KiDahu", "Ki Dahu", "Dracontomelon dao"],
      ["PalemBotol", "Palem Botol", "Hyophorbe lagenicaulis"],
      ["PucukMerah", "Pucuk Merah", "Syzygium myrtifolium"],
      ["PalemJepang", "Palem Jepang", "Ptychosperma macarthurii"],
      ["PakuTandukRusa", "Paku Tanduk Rusa", "Platycerium bifurcatum"],
      ["CemaraNorfolk", "Cemara Norfolk", "Araucaria heterophylla"],
      ["Tanjung", "Tanjung", "Mimusops elengi"],
      ["Mahoni", "Mahoni", "Swietenia macrophylla King"],
      ["Sukun", "Sukun", "Artocarpus altilis"],
      ["PohonMangga", "Pohon Mangga", "Mangifera indica"],
      ["Rambutan", "Rambutan", "Nephelium lappaceum"],
      ["JambuAir", "Jambu Air", "Syzygium aqueum"]
    ]},
    { daerah: "Taman Bahagia", items: [
      ["BungaLilin", "Bunga Lilin", "Pachystachys lutea Nees"],
      ["CalatheaTriostar", "Calathea Triostar", "Stromanthe thalia \u2018Triostar\u2019"],
      ["LiliPerdamaian", "Lili Perdamaian", "Spathiphyllum blandum Schott"],
      ["Salam", "Salam", "Syzygium polyanthum (Wight) Walp."],
      ["PalemRaja", "Palem Raja", "Roystonea regia"],
      ["PalemPutri", "Palem Putri", "Adonidia merrillii"],
      ["Jamblang", "Jamblang", "Magnolia champaca (L.) Baill."],
      ["PalemBangalow", "Palem Bangalow", "Archontophoenix cunninghamiana"],
      ["PohonNangka", "Pohon Nangka", "Artocarpus heterophyllus Lam."],
      ["PohonPinus", "Pohon Pinus", "Pinus merkusii"],
      ["LidahMertua", "Lidah Mertua", "Dracaena trifasciata"],
      ["Pepaya", "Pepaya", "Carica papaya L."],
      ["PohonDurian", "Pohon Durian", "Durio zibethinus"]
    ]}
  ];

  var NAVY = "#1a2670";
  var css = [
    "#katalog-tanaman{font-family:inherit;color:#333}",
    "#katalog-tanaman .kt-bar{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin:0 0 12px}",
    "#katalog-tanaman .kt-cari{flex:1;min-width:220px;max-width:480px;padding:10px 14px;font-size:15px;border:1px solid #d5d8e8;border-radius:6px;background:#fff;color:#333}",
    "#katalog-tanaman .kt-cari:focus{outline:3px solid #cdd1f0;border-color:" + NAVY + "}",
    "#katalog-tanaman .kt-jumlah{color:#666;font-size:13px}",
    "#katalog-tanaman .kt-daerah{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 8px}",
    "#katalog-tanaman .kt-chip{padding:7px 14px;font-size:14px;font-family:inherit;border:1px solid #d5d8e8;border-radius:999px;background:#fff;color:#333;cursor:pointer}",
    "#katalog-tanaman .kt-chip:hover{border-color:" + NAVY + "}",
    "#katalog-tanaman .kt-chip:focus-visible{outline:3px solid #cdd1f0}",
    "#katalog-tanaman .kt-chip[aria-pressed=true]{background:" + NAVY + ";border-color:" + NAVY + ";color:#fff}",
    "#katalog-tanaman .kt-wilayah{margin:28px 0 15px}",
    "#katalog-tanaman .kt-wilayah:first-child{margin-top:20px}",
    "#katalog-tanaman .kt-wilayah h2{font-size:18px;color:#333;margin:0 0 5px;text-transform:uppercase}",
    "#katalog-tanaman .kt-wilayah div{width:40px;height:3px;background:" + NAVY + "}",
    "#katalog-tanaman .kt-baris{display:flex;align-items:center;gap:15px;background:#fff;padding:12px;margin-bottom:12px;border-bottom:1px solid #e0e0e0;border-radius:6px;text-decoration:none;color:inherit}",
    "#katalog-tanaman a.kt-baris:hover,#katalog-tanaman a.kt-baris:focus-visible{box-shadow:0 0 0 2px " + NAVY + ";outline:none}",
    "#katalog-tanaman .kt-foto,#katalog-tanaman .kt-inisial{width:100px;height:75px;border-radius:6px;flex:none}",
    "#katalog-tanaman .kt-foto{object-fit:cover;background:#e8eaf3}",
    "#katalog-tanaman .kt-inisial{display:flex;align-items:center;justify-content:center;background:#e8eaf3;color:" + NAVY + ";font-size:28px;font-weight:bold}",
    "#katalog-tanaman .kt-nama{margin:0 0 5px;font-size:16px;font-weight:bold;color:#333}",
    "#katalog-tanaman .kt-latin{margin:0;font-size:13px;color:#666;font-style:italic}",
    "#katalog-tanaman .kt-kosong{text-align:center;padding:40px 0;color:#666}"
  ].join("\n");
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function buatBaris(it) {
    var file = it[0], nama = it[1], latin = it[2], foto = it[3] || (nama + ".jpg");
    var el = document.createElement(file ? "a" : "div");
    el.className = "kt-baris";
    if (file) el.href = encodeURIComponent(file) + ".html";

    var img = document.createElement("img");
    img.className = "kt-foto";
    img.loading = "lazy";
    img.alt = nama;
    img.src = encodeURI(foto);
    img.onerror = function () {
      var ganti = document.createElement("div");
      ganti.className = "kt-inisial";
      ganti.textContent = nama.charAt(0).toUpperCase();
      if (img.parentNode) img.parentNode.replaceChild(ganti, img);
    };

    var teks = document.createElement("div");
    var n = document.createElement("h3");
    n.className = "kt-nama";
    n.textContent = nama;
    var l = document.createElement("p");
    l.className = "kt-latin";
    l.textContent = latin;
    teks.appendChild(n);
    teks.appendChild(l);

    el.appendChild(img);
    el.appendChild(teks);
    return el;
  }

  function mulai() {
    var wadah = document.getElementById("katalog-tanaman");
    if (!wadah) {
      console.warn('Elemen <div id="katalog-tanaman"> tidak ditemukan di halaman.');
      return;
    }
    wadah.innerHTML = "";

    var bar = document.createElement("div");
    bar.className = "kt-bar";
    var cari = document.createElement("input");
    cari.type = "search";
    cari.className = "kt-cari";
    cari.placeholder = "Cari tanaman atau nama latin";
    cari.setAttribute("aria-label", "Cari tanaman");
    var jumlah = document.createElement("span");
    jumlah.className = "kt-jumlah";
    bar.appendChild(cari);
    bar.appendChild(jumlah);

    var barDaerah = document.createElement("div");
    barDaerah.className = "kt-daerah";
    barDaerah.setAttribute("role", "group");
    barDaerah.setAttribute("aria-label", "Filter daerah");

    var isi = document.createElement("div");

    var aktif = "Semua";
    var tombol = {};
    ["Semua"].concat(DATA.map(function (d) { return d.daerah; })).forEach(function (nama) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "kt-chip";
      b.textContent = nama;
      b.setAttribute("aria-pressed", nama === aktif ? "true" : "false");
      b.addEventListener("click", function () {
        aktif = nama;
        Object.keys(tombol).forEach(function (k) {
          tombol[k].setAttribute("aria-pressed", k === aktif ? "true" : "false");
        });
        tampilkan();
      });
      tombol[nama] = b;
      barDaerah.appendChild(b);
    });

    wadah.appendChild(bar);
    wadah.appendChild(barDaerah);
    wadah.appendChild(isi);

    function tampilkan() {
      var q = cari.value.trim().toLowerCase();
      var total = 0;
      isi.innerHTML = "";

      DATA.forEach(function (d) {
        if (aktif !== "Semua" && aktif !== d.daerah) return;
        var cocok = d.items.filter(function (it) {
          return it[1].toLowerCase().indexOf(q) !== -1 || it[2].toLowerCase().indexOf(q) !== -1;
        });
        if (!cocok.length) return;

        var w = document.createElement("div");
        w.className = "kt-wilayah";
        var h = document.createElement("h2");
        h.textContent = d.daerah;
        w.appendChild(h);
        w.appendChild(document.createElement("div"));
        isi.appendChild(w);

        cocok.forEach(function (it) { isi.appendChild(buatBaris(it)); });
        total += cocok.length;
      });

      if (total === 0) {
        var kosong = document.createElement("p");
        kosong.className = "kt-kosong";
        kosong.textContent = "Tidak ada tanaman dengan kata \u201C" + cari.value + "\u201D. Coba kata lain.";
        isi.appendChild(kosong);
      }
      jumlah.textContent = total + " tanaman";
    }

    cari.addEventListener("input", tampilkan);
    tampilkan();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mulai);
  } else {
    mulai();
  }
})();
