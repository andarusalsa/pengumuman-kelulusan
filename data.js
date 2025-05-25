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
  {"id":"12-01-097-044","nama":"Hengky Chandra Yuliawan","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-045","nama":"KANESSYAH AMALIA","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-046","nama":"KARIN DESTYANI","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-047","nama":"LIVIA CAHYA CRYSTABEL","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-048","nama":"M. ALI SODIKIN","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-049","nama":"M. ARFAN PERDIANSYAH","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-050","nama":"M. ARYA","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-051","nama":"M. Chiko Pratama","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-052","nama":"MELANY CANTIKA REGINA PUTRI","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-053","nama":"Muhamad Aidil Adha","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-054","nama":"MUHAMMAD FAHMI GIFAHRI","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-055","nama":"NABILA PUTRI","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-056","nama":"NATASYA CHINTYARA AGISTI","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-057","nama":"NUR ANNISYAH","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-058","nama":"Rika Rahmadani","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-059","nama":"SANDRA FEBRIANTI","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-060","nama":"Saskia Pratama","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-061","nama":"Tike Riyanti Syafa","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-062","nama":"ZAFIRA NAURA SALSABILA","nilai":9.2,"status":"LULUS"},
  {"id":"12-01-097-063","nama":"Ade Kisel Saputra","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-064","nama":"ADITYA JULIANTO","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-065","nama":"ADITYA ROHMAN SAPUTRA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-066","nama":"AFGAN SYAHREZA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-067","nama":"AKBAR AHMAD SAYUTI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-068","nama":"ARDAN SAHPUTRA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-069","nama":"ASTI AMELYA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-070","nama":"ATIKA NADHIRA PUTRI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-071","nama":"AULIA AJENG PURNAMA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-072","nama":"BEBY NATASYA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-073","nama":"Dahlia Serafina","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-074","nama":"DEWI AULIANI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-075","nama":"DINDA SIFA AZAHRA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-076","nama":"FAIZD HAFIZD","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-077","nama":"Farhan Alfarabi","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-078","nama":"HAIQAL APRILIO","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-079","nama":"Imelda Putri Anggraini","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-080","nama":"Intan Nafisah","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-081","nama":"JESY","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-082","nama":"KRIS MAULANA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-083","nama":"M. Chrisnanda Fadilah","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-084","nama":"M. GALANG AL FARISQI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-085","nama":"Mifftahhul Angga Saputra","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-086","nama":"MUHAMAD RIFQI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-087","nama":"NABILA SALWA RAMADHANI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-088","nama":"NOVALIA MIANA PUTRI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-089","nama":"RAFI SAPUTRA","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-090","nama":"Rinanda Pratiwi","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-091","nama":"TIKA WULANDARI","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-092","nama":"ZAHRA ROSALINA RAMBE","nilai":9.3,"status":"LULUS"},
  {"id":"12-01-097-093","nama":"Ahmad Ardiansah","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-094","nama":"Aini Ardiyanti","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-095","nama":"AINI VERONICA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-096","nama":"AJENG PUTRI ADINDA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-097","nama":"AJI HAMDANI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-098","nama":"Arya Pratama","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-099","nama":"Bella Arofah","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-100","nama":"DINDA SAPUTRI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-101","nama":"FARHAN AZIS SAPUTRA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-102","nama":"FRANESHA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-103","nama":"GHANIE MALIQAL","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-104","nama":"Haidar Aly Pratama","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-105","nama":"JAHIRA LETISYA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-106","nama":"JANUAR PARDAN AKBAR","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-107","nama":"KARTIKA PRIMA HATI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-108","nama":"KURNIA BINTANG","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-109","nama":"M. Dilliansyah Firdaus","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-110","nama":"M. FAUZI ALI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-111","nama":"MARSYA ENJELINA BR SINURAT","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-112","nama":"MUHAMAD RIZKI RAFAEL","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-113","nama":"MUHAMMAD DIVO ZUINDRA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-114","nama":"MUHAMMAD HAIKHAL","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-115","nama":"MUTIARA HAFIDZA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-116","nama":"NABILLAH PUTRI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-117","nama":"NICKO NIWA MAHESA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-118","nama":"NURIAH SARI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-119","nama":"RANGGA RADITTYA PRATAMA","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-120","nama":"RIO ALFERRO REHAN","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-121","nama":"Salsa Nabila Putri","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-122","nama":"SELA PUTRI","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-123","nama":"ZACKY AZHURA FATIH","nilai":9.4,"status":"LULUS"},
  {"id":"12-01-097-124","nama":"ALDINA NUR ARDHA","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-125","nama":"ALYA RAHMA WATI","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-126","nama":"Alzena Sofitri","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-127","nama":"APRIL REZKY AZ ZAHRA","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-128","nama":"BUNGA ANGGITA AYUDHIAN","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-129","nama":"Dava Ardiyansyah","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-130","nama":"Dinda Arum","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-131","nama":"DWI HERMAWAN ICHWANTO","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-132","nama":"FARHAN DESTAMA","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-133","nama":"Farrel Al Gifari","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-134","nama":"Fitri Nurayuni","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-135","nama":"GISELLA HERGA PUTRI","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-136","nama":"Hafizh Muhammad Kaka","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-137","nama":"Kartika Putri","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-138","nama":"KIKI SAFITRI","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-139","nama":"M Syfikri","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-140","nama":"M. FICKO PRATAMA ISMAIL","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-141","nama":"M. Marvel Ardiansah","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-142","nama":"M.LABIB HAIDAR","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-143","nama":"MUHAMAD SABIYAN ALMALIK","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-144","nama":"MUHAMMAD ALFAJRI DEFANDI","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-145","nama":"Naila Pitri Yasmin","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-146","nama":"RAFFA ANGGARA","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-147","nama":"RAHMAT WIJAYA","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-148","nama":"Rayyan Ahmad Pratama","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-149","nama":"Rizka Zuliza Anna Tassya","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-150","nama":"SEPTIO DIMAS SYAPUTRA","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-151","nama":"Syifa Setianti","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-152","nama":"ZAHRA LAILA AZHAR","nilai":9.5,"status":"LULUS"},
  {"id":"12-01-097-153","name":"Alfa Rizki","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-154","name":"DEVI FITRI YANI","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-155","name":"Dian Pusfika Sari","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-156","name":"EDO PRASTIAN MAULANA","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-157","name":"FARHAN HABIB MAULANA","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-158","name":"Fitri Yuliyanti","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-159","name":"Hafidjah Syakila Imanuddin","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-160","name":"HAFISA SYAHIRAMADANI","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-161","name":"Keandre Rafif Lantara","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-162","name":"KEISYA DZIKRINA SOFYAN","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-163","name":"Khoirunnisa","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-164","name":"Kyla Azalia Lesmana Putri","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-165","name":"LYANA","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-166","name":"M. Hasbi","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-167","name":"M. IKBAL ARDANA","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-168","name":"M. MALIK","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-169","name":"M.RIDWAN","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-170","name":"M.ZAVAS AL-FARIZI","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-171","name":"Muhamad Alfaridzi","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-172","name":"Muhammad Alhafidz","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-173","name":"Muhammad Nur Alif","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-174","name":"NAINA YULIANA","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-175","name":"Princessa Denova","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-176","name":"RAHMAT HIDAYATULLAH","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-177","name":"Raka Pratama","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-178","name":"RIZKY APRILIAN","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-179","name":"Salsabila Rahadatul Aisy","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-180","name":"SYAFA AULIA FASHI","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-181","name":"ZIVANA AMIRA TSANI","score":9.6,"status":"LULUS"},
  {"id":"12-01-097-182","name":"Alfath Zhilo","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-183","name":"ANNAFI OZAM MALIK","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-184","name":"ARYADILLAH","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-185","name":"AUREAL APRILIA SETIAWAN","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-186","name":"AYU MAULA NASUHA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-187","name":"Chelsea Claudia Mega","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-188","name":"ESTER FELICIA DAMANIK","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-189","name":"FARIDA QONITA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-190","name":"Farsal Al Sikri","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-191","name":"Grace Zivilia","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-192","name":"Intan Firda Irmala","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-193","name":"JENNYA ANTIKA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-194","name":"KEISHA DINDA PRAMESTI","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-195","name":"KIRANA AURELLIE SHAMARETA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-196","name":"M. MUSTAKIM","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-197","name":"Muhammad Armanzya","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-198","name":"MUHAMMAD FHIMAN HIDAIT","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-199","name":"Muhammad Rhadit Ghofur Setiawan","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-200","name":"NAJIYAH REPISA PUTRI","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-201","name":"Nopal Aryanto","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-202","name":"NOPITA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-203","name":"Putri Aprillia","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-204","name":"Rakha Febriansyah","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-205","name":"Rizky Aditya","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-206","name":"RIZKY DWI PRATAMA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-207","name":"SERA VINA PANCA YANAH","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-208","name":"SITI NURANISA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-209","name":"WAHYU APRIYANTO PRATAMA","score":9.7,"status":"LULUS"},
  {"id":"12-01-097-210","name":"Anissa Putri Ramadhani","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-211","name":"Aulia Nurahma","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-212","name":"Aura Sifa Khadijah","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-213","name":"BAGUS OKA SAPUTRA","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-214","name":"DAVINES SANDHO APRIANO","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-215","name":"DENIS PRAYOGA","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-216","name":"FAIZ ARDIANSYAH. S","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-217","name":"FAYYAZA FATIMAH","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-218","name":"Fazar Hermansyah","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-219","name":"Giovani Saputra","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-220","name":"KEISYA FITRIYANI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-221","name":"Khansa Nari Shabihah","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-222","name":"LEIDITA SUBAGIO","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-223","name":"M. BIMA PRATAMA","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-224","name":"M. Raehan Hidayat","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-225","name":"M. RAFFI AL FAHREJI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-226","name":"M. RIFQI FAHREZI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-227","name":"Muhammad Iqbal","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-228","name":"MUHAMMAD REYVAN HAKIM","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-229","name":"MUHAMMAD SYAKHI F","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-230","name":"Najwa Rahma Agustina","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-231","name":"Naura Sabila Putri","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-232","name":"Odi Saputra","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-233","name":"PUTRI DAMAYANTI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-234","name":"RAYA RAZKY AL-KHAFI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-235","name":"RAYYA ADITYA EVANDI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-236","name":"SHEILA PUTRI PASIA","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-237","name":"Tegar Ryski Ramadhan","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-238","name":"VIANDRA JANUAR ZIO AFANDI","score":9.8,"status":"LULUS"},
  {"id":"12-01-097-239","name":"AKBAR MAULANA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-240","name":"ALFFIN MANDALA SAPUTRA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-241","name":"ALIEZHA NUR AZ ZAHRA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-242","name":"ALIF ADI RIZKI","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-243","name":"DENIS PUTRA MEYKA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-244","name":"DWI KOMALA SARI","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-245","name":"Febya Zyahrani","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-246","name":"Fikri Zovian Syahputra","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-247","name":"GINA AULIA PUTRI","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-248","name":"KEKE AZ-ZAHRA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-249","name":"Kesya Novellia","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-250","name":"M. FEBRIAN ICHSAN","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-251","name":"M. HAYKAL","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-252","name":"M. Sani","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-253","name":"M. Wildan Saputra","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-254","name":"Marsya Adelia Dwiyanti","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-255","name":"MAULANA MUHAMMAD RAFFA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-256","name":"Muhamad Arya Alfarizi","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-257","name":"Muhammad Luthfi Bagaskara","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-258","name":"MUHAMMAD RASYID","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-259","name":"Muhammad Wahyu Nugroho","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-260","name":"Natasya Aulia Putri","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-261","name":"Okta Aditya","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-262","name":"PUTRI FARDINI","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-263","name":"RASYA ADITYA PRATAMA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-264","name":"SAIDAH NURHAFIFAH","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-265","name":"SITI FATIMA AZAHRA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-266","name":"WULAN SARI","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-267","name":"ZEVANYA AURELIA MOZA","score":9.9,"status":"LULUS"},
  {"id":"12-01-097-268","name":"ANGGARA AFGANSYAH RAMA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-269","name":"ANISA RAHMAWATI","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-270","name":"DENIS SANJAYA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-271","name":"DWI YUDIANTO","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-272","name":"Dwifa Shinta Pratiwi","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-273","name":"Efinda Syilbi","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-274","name":"EREN MAULIDYAH","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-275","name":"FITRA ARDIANSYAH","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-276","name":"Gianza Permana","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-277","name":"JANUAR RIZKY HARTONO","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-278","name":"Keysa Maharani","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-279","name":"KHANSA ALIFAH MAULIDIA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-280","name":"M. ABIYAN FADILLAH","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-281","name":"M.ANGGI PRATAMA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-282","name":"Muhammad Raditya Rizky","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-283","name":"Muhammad Raka Fahrianto","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-284","name":"MUHAMMAD RESTA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-285","name":"MULIADI KURNIAWAN","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-286","name":"Mutia Aghnia Kumairah","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-287","name":"MUTIA ANGGRAINI","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-288","name":"MUTIARA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-289","name":"NAOMI AULIA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-290","name":"NASILAH RAMADANI","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-291","name":"Rafael Sadam Husen Gandhi","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-292","name":"RATU AURORA MAULIDA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-293","name":"ROHILLA LISANGRAENI","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-294","name":"SHAFIRA OKTAVIA ASNUR","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-295","name":"SHIREN OKTAVIANA PUTRI","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-296","name":"TIA AULIA RAHMA","score":9.10,"status":"LULUS"},
  {"id":"12-01-097-297","name":"Zyra Relova Rahadyan","score":9.10,"status":"LULUS"}
];

var waktuAkhir = new Date("June 2, 2025 00:00:00").getTime();

var x = setInterval(function() {

    // Catat waktu sekarang
    var sekarang = new Date().getTime();
      
    // Mencari selisih
    var selisih = waktuAkhir - sekarang;
      
    // Time calculations for days, hours, minutes and seconds
    var hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    var jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((selisih % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;
      
    // If the count down is over, write some text 
    if (selisih < 0) {
      clearInterval(x);
      document.getElementById("hitungmundur").style.display="none";
      document.getElementById("peringatan").innerHTML = "Silakan Login dengan Nomor Ujian";
      document.getElementById("konten").style.display="block";
      document.getElementById("cpr").style.display="block";
    }else{
      document.getElementById("hitungmundur").style.display="block";
      document.getElementById("konten").style.display="none";
      document.getElementById("cpr").style.display="block";
    }
  }, 1000);


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