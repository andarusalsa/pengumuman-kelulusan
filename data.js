// Student data
const studentData = [
   {
    "id": "12-01-097-001",
    "nama": "Achmad Chaidar Alie",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-002",
    "nama": "Ahmad Habibi",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-003",
    "nama": "Alyssa Al-Ghaniyyu",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-004",
    "nama": "Angga",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-005",
    "nama": "Anisa Tri Ramadani",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-006",
    "nama": "Ariffal Ridho Kurniawan",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-007",
    "nama": "Azza Azria Azzani",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "no_ujian": "12-01-097-008",
    "nama": "Chaerul Ikhsan",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-009",
    "nama": "Cicilia Stefani",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-010",
    "nama": "Clairine Aqila Sakhi",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-011",
    "nama": "Daffa Rezky Subandi",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-012",
    "nama": "Dinda",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-013",
    "nama": "Fadila Syahira Anzani",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-014",
    "nama": "Fahri Ardiansya",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-015",
    "nama": "Gracia Jessline Johanes",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-016",
    "nama": "Ibnu Ubaydillah",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-017",
    "nama": "Juan Surya Pranata",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-018",
    "nama": "Kanaya Nafisa",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-019",
    "nama": "M. Afriyansha",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-020",
    "nama": "Melani Ramadani",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-021",
    "nama": "Mohammad Ashari Raihan",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-022",
    "nama": "Mohammad Nauf Rafi",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-023",
    "nama": "Nabila Azzahra",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-024",
    "nama": "Nur Fadhilah",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-025",
    "nama": "Nuraisyah",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-026",
    "nama": "Oktavia Fitri Andini",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-027",
    "nama": "Rafa Pria Pratama",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-028",
    "nama": "Ria Putri",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-029",
    "nama": "Shafira Maulidya Putri",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-030",
    "nama": "Wulan Khairani",
    "kelas": "9.1",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-031",
    "nama": "Zaskia Choirunnisa",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-032",
    "nama": "ADELIA OKTAVIANA. S",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-033",
    "nama": "ADITIA SAPUTRA",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-034",
    "nama": "AL-MUIMAH",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-035",
    "nama": "ALDIANSYAH",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-036",
    "nama": "ALISA HAFIZAH",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-037",
    "nama": "ANNISA ARIFAH JANEETA D",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-038",
    "nama": "BAGUS SADEWO",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-039",
    "nama": "DAHLAN",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-040",
    "nama": "DIRGANTARA KUSUMA",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-041",
    "nama": "DIVA YUANITA",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-042",
    "nama": "FAHRY FARWIANSYAH",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id": "12-01-097-043",
    "nama": "Faiz Ramadhan",
    "kelas": "9.2",
    "status": "LULUS"
  },
  {
    "id":"12-01-097-044",
    "nama" : "Hengky Chandra Yuliawan",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-045",
    "nama" : "KANESSYAH AMALIA",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-046",
    "nama" : "KARIN DESTYANI",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-047",
    "nama" : "LIVIA CAHYA CRYSTABEL",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-048",
    "nama" : "M. ALI SODIKIN",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-049",
    "nama" : "M. ARFAN PERDIANSYAH",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-050",
    "nama" : "M. ARYA",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-051",
    "nama" : "M. Chiko Pratama",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-052",
    "nama" : "MELANY CANTIKA REGINA PUTRI",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-053",
    "nama" : "Muhamad Aidil Adha",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-054",
    "nama" : "MUHAMMAD FAHMI GIFAHRI",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-055",
    "nama" : "NABILA PUTRI",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-056",
    "nama" : "NATASYA CHINTYARA AGISTI",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-057",
    "nama" : "NUR ANNISYAH",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-058",
    "nama" : "Rika Rahmadani",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-059",
    "nama" : "SANDRA FEBRIANTI",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-060",
    "nama" : "Saskia Pratama",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-061",
    "nama" : "Tike Riyanti Syafa",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-062",
    "nama" : "ZAFIRA NAURA SALSABILA",
    "nilai" : 9.2,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-063",
    "nama" : "Ade Kisel Saputra",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-064",
    "nama" : "ADITYA JULIANTO",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-065",
    "nama" : "ADITYA ROHMAN SAPUTRA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-066",
    "nama" : "AFGAN SYAHREZA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-067",
    "nama" : "AKBAR AHMAD SAYUTI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-068",
    "nama" : "ARDAN SAHPUTRA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-069",
    "nama" : "ASTI AMELYA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-070",
    "nama" : "ATIKA NADHIRA PUTRI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-071",
    "nama" : "AULIA AJENG PURNAMA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-072",
    "nama" : "BEBY NATASYA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-073",
    "nama" : "Dahlia Serafina",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-074",
    "nama" : "DEWI AULIANI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-075",
    "nama" : "DINDA SIFA AZAHRA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-076",
    "nama" : "FAIZD HAFIZD",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-077",
    "nama" : "Farhan Alfarabi",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-078",
    "nama" : "HAIQAL APRILIO",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-079",
    "nama" : "Imelda Putri Anggraini",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-080",
    "nama" : "Intan Nafisah",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-081",
    "nama" : "JESY",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-082",
    "nama" : "KRIS MAULANA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-083",
    "nama" : "M. Chrisnanda Fadilah",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-084",
    "nama" : "M. GALANG AL FARISQI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-085",
    "nama" : "Mifftahhul Angga Saputra",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-086",
    "nama" : "MUHAMAD RIFQI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-087",
    "nama" : "NABILA SALWA RAMADHANI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-088",
    "nama" : "NOVALIA MIANA PUTRI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-089",
    "nama" : "RAFI SAPUTRA",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-090",
    "nama" : "Rinanda Pratiwi",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-091",
    "nama" : "TIKA WULANDARI",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-092",
    "nama" : "ZAHRA ROSALINA RAMBE",
    "nilai" : 9.3,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-093",
    "nama" : "Ahmad Ardiansah",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-094",
    "nama" : "Aini Ardiyanti",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-095",
    "nama" : "AINI VERONICA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-096",
    "nama" : "AJENG PUTRI ADINDA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-097",
    "nama" : "AJI HAMDANI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-098",
    "nama" : "Arya Pratama",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-099",
    "nama" : "Bella Arofah",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-100",
    "nama" : "DINDA SAPUTRI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-101",
    "nama" : "FARHAN AZIS SAPUTRA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-102",
    "nama" : "FRANESHA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-103",
    "nama" : "GHANIE MALIQAL",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-104",
    "nama" : "Haidar Aly Pratama",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-105",
    "nama" : "JAHIRA LETISYA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-106",
    "nama" : "JANUAR PARDAN AKBAR",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-107",
    "nama" : "KARTIKA PRIMA HATI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-108",
    "nama" : "KURNIA BINTANG",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-109",
    "nama" : "M. Dilliansyah Firdaus",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-110",
    "nama" : "M. FAUZI ALI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-111",
    "nama" : "MARSYA ENJELINA BR SINURAT",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-112",
    "nama" : "MUHAMAD RIZKI RAFAEL",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-113",
    "nama" : "MUHAMMAD DIVO ZUINDRA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-114",
    "nama" : "MUHAMMAD HAIKHAL",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-115",
    "nama" : "MUTIARA HAFIDZA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-116",
    "nama" : "NABILLAH PUTRI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-117",
    "nama" : "NICKO NIWA MAHESA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-118",
    "nama" : "NURIAH SARI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-119",
    "nama" : "RANGGA RADITTYA PRATAMA",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-120",
    "nama" : "RIO ALFERRO REHAN",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-121",
    "nama" : "Salsa Nabila Putri",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-122",
    "nama" : "SELA PUTRI",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-123",
    "nama" : "ZACKY AZHURA FATIH",
    "nilai" : 9.4,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-124",
    "nama" : "ALDINA NUR ARDHA",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-125",
    "nama" : "ALYA RAHMA WATI",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-126",
    "nama" : "Alzena Sofitri",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-127",
    "nama" : "APRIL REZKY AZ ZAHRA",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-128",
    "nama" : "BUNGA ANGGITA AYUDHIAN",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-129",
    "nama" : "Dava Ardiyansyah",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-130",
    "nama" : "Dinda Arum",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-131",
    "nama" : "DWI HERMAWAN ICHWANTO",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-132",
    "nama" : "FARHAN DESTAMA",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-133",
    "nama" : "Farrel Al Gifari",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-134",
    "nama" : "Fitri Nurayuni",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-135",
    "nama" : "GISELLA HERGA PUTRI",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-136",
    "nama" : "Hafizh Muhammad Kaka",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-137",
    "nama" : "Kartika Putri",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-138",
    "nama" : "KIKI SAFITRI",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-139",
    "nama" : "M Syfikri",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-140",
    "nama" : "M. FICKO PRATAMA ISMAIL",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-141",
    "nama" : "M. Marvel Ardiansah",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-142",
    "nama" : "M.LABIB HAIDAR",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-143",
    "nama" : "MUHAMAD SABIYAN ALMALIK",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-144",
    "nama" : "MUHAMMAD ALFAJRI DEFANDI",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-145",
    "nama" : "Naila Pitri Yasmin",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-146",
    "nama" : "RAFFA ANGGARA",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-147",
    "nama" : "RAHMAT WIJAYA",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-148",
    "nama" : "Rayyan Ahmad Pratama",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-149",
    "nama" : "Rizka Zuliza Anna Tassya",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-150",
    "nama" : "SEPTIO DIMAS SYAPUTRA",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-151",
    "nama" : "Syifa Setianti",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-152",
    "nama" : "ZAHRA LAILA AZHAR",
    "nilai" : 9.5,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-153",
    "nama" : "Alfa Rizki",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-154",
    "nama" : "DEVI FITRI YANI",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-155",
    "nama" : "Dian Pusfika Sari",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-156",
    "nama" : "EDO PRASTIAN MAULANA",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-157",
    "nama" : "FARHAN HABIB MAULANA",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-158",
    "nama" : "Fitri Yuliyanti",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-159",
    "nama" : "Hafidjah Syakila Imanuddin",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-160",
    "nama" : "HAFISA SYAHIRAMADANI",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-161",
    "nama" : "Keandre Rafif Lantara",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-162",
    "nama" : "KEISYA DZIKRINA SOFYAN",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-163",
    "nama" : "Khoirunnisa",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-164",
    "nama" : "Kyla Azalia Lesmana Putri",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-165",
    "nama" : "LYANA",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-166",
    "nama" : "M. Hasbi",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-167",
    "nama" : "M. IKBAL ARDANA",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-168",
    "nama" : "M. MALIK",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-169",
    "nama" : "M.RIDWAN",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-170",
    "nama" : "M.ZAVAS AL-FARIZI",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-171",
    "nama" : "Muhamad Alfaridzi",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-172",
    "nama" : "Muhammad Alhafidz",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-173",
    "nama" : "Muhammad Nur Alif",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-174",
    "nama" : "NAINA YULIANA",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-175",
    "nama" : "Princessa Denova",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-176",
    "nama" : "RAHMAT HIDAYATULLAH",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-177",
    "nama" : "Raka Pratama",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-178",
    "nama" : "RIZKY APRILIAN",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-179",
    "nama" : "Salsabila Rahadatul Aisy",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-180",
    "nama" : "SYAFA AULIA FASHI",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-181",
    "nama" : "ZIVANA AMIRA TSANI",
    "nilai" : 9.6,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-182",
    "nama" : "Alfath Zhilo",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-183",
    "nama" : "ANNAFI OZAM MALIK",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-184",
    "nama" : "ARYADILLAH",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-185",
    "nama" : "AUREAL APRILIA SETIAWAN",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-186",
    "nama" : "AYU MAULA NASUHA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-187",
    "nama" : "Chelsea Claudia Mega",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-188",
    "nama" : "ESTER FELICIA DAMANIK",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-189",
    "nama" : "FARIDA QONITA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-190",
    "nama" : "Farsal Al Sikri",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-191",
    "nama" : "Grace Zivilia",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-192",
    "nama" : "Intan Firda Irmala",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-193",
    "nama" : "JENNYA ANTIKA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-194",
    "nama" : "KEISHA DINDA PRAMESTI",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-195",
    "nama" : "KIRANA AURELLIE SHAMARETA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-196",
    "nama" : "M. MUSTAKIM",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-197",
    "nama" : "Muhammad Armanzya",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-198",
    "nama" : "MUHAMMAD FHIMAN HIDAIT",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-199",
    "nama" : "Muhammad Rhadit Ghofur Setiawan",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-200",
    "nama" : "NAJIYAH REPISA PUTRI",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-201",
    "nama" : "Nopal Aryanto",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-202",
    "nama" : "NOPITA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-203",
    "nama" : "Putri Aprillia",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-204",
    "nama" : "Rakha Febriansyah",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-205",
    "nama" : "Rizky Aditya",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-206",
    "nama" : "RIZKY DWI PRATAMA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-207",
    "nama" : "SERA VINA PANCA YANAH",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-208",
    "nama" : "SITI NURANISA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-209",
    "nama" : "WAHYU APRIYANTO PRATAMA",
    "nilai" : 9.7,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-210",
    "nama" : "Anissa Putri Ramadhani",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-211",
    "nama" : "Aulia Nurahma",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-212",
    "nama" : "Aura Sifa Khadijah",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-213",
    "nama" : "BAGUS OKA SAPUTRA",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-214",
    "nama" : "DAVINES SANDHO APRIANO",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-215",
    "nama" : "DENIS PRAYOGA",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-216",
    "nama" : "FAIZ ARDIANSYAH. S",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-217",
    "nama" : "FAYYAZA FATIMAH",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-218",
    "nama" : "Fazar Hermansyah",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-219",
    "nama" : "Giovani Saputra",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-220",
    "nama" : "KEISYA FITRIYANI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-221",
    "nama" : "Khansa Nari Shabihah",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-222",
    "nama" : "LEIDITA SUBAGIO",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-223",
    "nama" : "M. BIMA PRATAMA",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-224",
    "nama" : "M. Raehan Hidayat",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-225",
    "nama" : "M. RAFFI AL FAHREJI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-226",
    "nama" : "M. RIFQI FAHREZI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-227",
    "nama" : "Muhammad Iqbal",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-228",
    "nama" : "MUHAMMAD REYVAN HAKIM",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-229",
    "nama" : "MUHAMMAD SYAKHI F",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-230",
    "nama" : "Najwa Rahma Agustina",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-231",
    "nama" : "Naura Sabila Putri",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-232",
    "nama" : "Odi Saputra",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-233",
    "nama" : "PUTRI DAMAYANTI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-234",
    "nama" : "RAYA RAZKY AL-KHAFI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-235",
    "nama" : "RAYYA ADITYA EVANDI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-236",
    "nama" : "SHEILA PUTRI PASIA",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-237",
    "nama" : "Tegar Ryski Ramadhan",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-238",
    "nama" : "VIANDRA JANUAR ZIO AFANDI",
    "nilai" : 9.8,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-239",
    "nama" : "AKBAR MAULANA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-240",
    "nama" : "ALFFIN MANDALA SAPUTRA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-241",
    "nama" : "ALIEZHA NUR AZ ZAHRA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-242",
    "nama" : "ALIF ADI RIZKI",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-243",
    "nama" : "DENIS PUTRA MEYKA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-244",
    "nama" : "DWI KOMALA SARI",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-245",
    "nama" : "Febya Zyahrani",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-246",
    "nama" : "Fikri Zovian Syahputra",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-247",
    "nama" : "GINA AULIA PUTRI",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-248",
    "nama" : "KEKE AZ-ZAHRA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-249",
    "nama" : "Kesya Novellia",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-250",
    "nama" : "M. FEBRIAN ICHSAN",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-251",
    "nama" : "M. HAYKAL",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-252",
    "nama" : "M. Sani",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-253",
    "nama" : "M. Wildan Saputra",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-254",
    "nama" : "Marsya Adelia Dwiyanti",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-255",
    "nama" : "MAULANA MUHAMMAD RAFFA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-256",
    "nama" : "Muhamad Arya Alfarizi",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-257",
    "nama" : "Muhammad Luthfi Bagaskara",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-258",
    "nama" : "MUHAMMAD RASYID",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-259",
    "nama" : "Muhammad Wahyu Nugroho",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-260",
    "nama" : "Natasya Aulia Putri",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-261",
    "nama" : "Okta Aditya",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-262",
    "nama" : "PUTRI FARDINI",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-263",
    "nama" : "RASYA ADITYA PRATAMA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-264",
    "nama" : "SAIDAH NURHAFIFAH",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-265",
    "nama" : "SITI FATIMA AZAHRA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-266",
    "nama" : "WULAN SARI",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-267",
    "nama" : "ZEVANYA AURELIA MOZA",
    "nilai" : 9.9,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-268",
    "nama" : "ANGGARA AFGANSYAH RAMA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-269",
    "nama" : "ANISA RAHMAWATI",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-270",
    "nama" : "DENIS SANJAYA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-271",
    "nama" : "DWI YUDIANTO",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-272",
    "nama" : "Dwifa Shinta Pratiwi",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-273",
    "nama" : "Efinda Syilbi",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-274",
    "nama" : "EREN MAULIDYAH",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-275",
    "nama" : "FITRA ARDIANSYAH",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-276",
    "nama" : "Gianza Permana",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-277",
    "nama" : "JANUAR RIZKY HARTONO",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-278",
    "nama" : "Keysa Maharani",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-279",
    "nama" : "KHANSA ALIFAH MAULIDIA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-280",
    "nama" : "M. ABIYAN FADILLAH",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-281",
    "nama" : "M.ANGGI PRATAMA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-282",
    "nama" : "Muhammad Raditya Rizky",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-283",
    "nama" : "Muhammad Raka Fahrianto",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-284",
    "nama" : "MUHAMMAD RESTA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-285",
    "nama" : "MULIADI KURNIAWAN",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-286",
    "nama" : "Mutia Aghnia Kumairah",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-287",
    "nama" : "MUTIA ANGGRAINI",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-288",
    "nama" : "MUTIARA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-289",
    "nama" : "NAOMI AULIA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-290",
    "nama" : "NASILAH RAMADANI",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-291",
    "nama" : "Rafael Sadam Husen Gandhi",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-292",
    "nama" : "RATU AURORA MAULIDA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-293",
    "nama" : "ROHILLA LISANGRAENI",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-294",
    "nama" : "SHAFIRA OKTAVIA ASNUR",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-295",
    "nama" : "SHIREN OKTAVIANA PUTRI",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-296",
    "nama" : "TIA AULIA RAHMA",
    "nilai" : 9.10,
    "status" : "LULUS"
  },
  {
    "id":"12-01-097-297",
    "nama" : "Zyra Relova Rahadyan",
    "nilai" : 9.10,
    "status" : "LULUS"
  }
];

console.log("Days element:", document.getElementById("days"));
console.log("Countdown section:", document.getElementById("countdown-section"));
console.log("Form section:", document.getElementById("form-section"));
console.log(now, targetDate, distance)


document.addEventListener("DOMContentLoaded", function () {

    const targetDate = new Date("2025-05-01T00:00:00").getTime();

    const countdownTimer = setInterval(() => {

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {

            clearInterval(countdownTimer);
            document.getElementById("countdown-section").classList.add("hidden");
            document.getElementById("form-section").classList.remove("hidden");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }, 1000);
});



// For demonstration purposes, uncomment this to bypass the countdown
// document.getElementById("countdown-section").classList.add("hidden");
// document.getElementById("form-section").classList.remove("hidden");

// Handle form submission
document.getElementById("nisn-form").addEventListener("submit", function(e) {

    e.preventDefault();
    
    const id = document.getElementById("id").value.trim();
    const resultSection = document.getElementById("result-section");
    const resultContent = document.getElementById("result-content");
    const resultCard = document.getElementById("result-card");
    
    // Find student by NISN
    const student = studentData.find(s => s.id === id);
    
    // Clear previous results
    resultContent.innerHTML = "";
    resultCard.className = "result-card";
    
    if (student) {

        // Create result content for found student
        const statusClass = student.status === "LULUS" ? "lulus" : "tidak-lulus";
        const statusIcon = student.status === "LULUS" ? "✅" : "❌";
        
        resultContent.innerHTML = `
            <div class="result-header" style="text-align: center;">
  <h3 class="result-title">Hasil Pengumuman Kelulusan</h3>
</div>
<div class="result-details">
  <div class="result-row">
    <span class="result-label">No. Ujian:</span>
    <span class="result-value">${student.id}</span>
  </div>
  <div class="result-row">
    <span class="result-label">Nama Lengkap:</span>
    <span class="result-value">${student.nama}</span>
  </div>
  <div class="result-row">
    <span class="result-label">Kelas:</span>
    <span class="result-value">${student.kelas}</span>
  </div>
  <div class="result-row" style="border-bottom: none; margin-bottom: 0; padding-top: 8px;">
    <span class="result-label">Status Kelulusan:</span>
    <span class="status-badge ${statusClass} pulse">
      ${statusIcon} ${student.status}
    </span>
  </div>
</div>

        `;
    } else {
        // No student found
        resultContent.innerHTML = `
            <div class="error-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 class="error-title">Data tidak ditemukan</h3>
                <p class="error-message">Periksa kembali NISN Anda.</p>
            </div>
        `;
    }
    
    // Show result section
    resultSection.classList.remove("hidden");
});