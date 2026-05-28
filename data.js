// data mahasiswa
const studentData = [
  { "id": "12-01-097-001", "nama": "AHMAD FAJRI AL MUQODDAS", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-002", "nama": "AHMAD NAWAWI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-003", "nama": "AL FAHRUL FIRMANSYAH", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-004", "nama": "ALAM KURNIA", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-005", "nama": "ANASTASYA PUTRI IRAWAN", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-006", "nama": "ANDIKA PRASETYO", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-007", "nama": "ANNISA KHANSA GUSTOMI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-008", "nama": "BAGAS ADI WICAKSONO", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-009", "nama": "BILAL", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-010", "nama": "DAHLIA", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-011", "nama": "DINA SAPITRI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-012", "nama": "DIRGANTARA KHOIRUL AZZAM", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-013", "nama": "DZAKIA FARIA ATIFA UMPU SARITA", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-014", "nama": "FAJAR PRATAMA WIJAYA", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-015", "nama": "FARHAN NIZARUL IHSAN", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-016", "nama": "INTAN PUTRI NABILA", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-017", "nama": "KHAYLILA EKA PUTRI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-018", "nama": "LUTHFI AFANDI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-019", "nama": "M KAFFA AL FATIH", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-020", "nama": "M. FAHRI AFIANSYAH", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-021", "nama": "M. RIAN SENGAJI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-022", "nama": "M. ZAKIR KHAFID", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-023", "nama": "MUHAMMAD BAGUS FAHRI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-024", "nama": "MUHAMMAD ILHAM", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-025", "nama": "MUHAMMAD TAUFIK", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-026", "nama": "NAZWA PARISA PUTRI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-027", "nama": "OZILIANO PUTRA MIRZON", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-028", "nama": "PUTRI ULLAYA FAYYAZAHIRA", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-029", "nama": "QUEENA QUROTA AYUN", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-030", "nama": "VEBI YOLA ANGRAINI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-031", "nama": "WILDAN ADLI ALHAKIMI", "kelas": "9.1", "status": "LULUS" },
  { "id": "12-01-097-032", "nama": "ADELIA KIRANA PUTRI", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-033", "nama": "AIRIN QOSIYAH", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-034", "nama": "AL VATHAN MARCELLO", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-035", "nama": "ALDINAR FAHRUDIN DAUS", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-036", "nama": "ANISA FEBRIYANI", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-037", "nama": "ARINA SADILAH ASANAH", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-038", "nama": "BILQIS ADZRA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-039", "nama": "DIKA AIDYL AJI", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-040", "nama": "DIMAS PUTRA ALQURTUBI", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-041", "nama": "FAIZA NUR HIDAYAT", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-042", "nama": "FAJRA DWI AULIA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-043", "nama": "GENDIS NAILAH CHIRCA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-044", "nama": "JANNATA PUTRI ZESA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-045", "nama": "JESICA ALDILA YULISTA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-046", "nama": "LIONELL LIANZHA MESTALLA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-047", "nama": "M. FIQHRI CHANDRA MAULANA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-048", "nama": "M. RADITIA MAULANA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-049", "nama": "MARSYA INTAN RISMA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-050", "nama": "MASAYU DWI CAHYANI", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-051", "nama": "MUHAMAD FITRA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-052", "nama": "MUKHAMMAD BILAL RAMADHAN", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-053", "nama": "PUTRI SUCI AULIA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-054", "nama": "RAFFA RAMADHAN", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-055", "nama": "RAJA PUTRA BANGSAWAN", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-056", "nama": "RAJU MARCELDI", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-057", "nama": "RIZKI RAMADHAN", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-058", "nama": "RIZKY ADITYA WARDANA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-059", "nama": "SAFINATUNNAJAH", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-060", "nama": "SENANDUNG YOSA NACITA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-061", "nama": "ZAKHI BARLIAN SHT", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-062", "nama": "ZIKRA JAUZA", "kelas": "9.2", "status": "LULUS" },
  { "id": "12-01-097-063", "nama": "AHMAD KHOLIL ASYA'RI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-064", "nama": "ALIF RIZKY UTAMA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-065", "nama": "ALIFAH MAZAYA PUTRI ANA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-066", "nama": "ALVIRA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-067", "nama": "ANNISA NUR FITRI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-068", "nama": "ATIKA DEVIYANI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-069", "nama": "BARIQ IRAWAN", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-070", "nama": "CAHAYA SHAFIRA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-071", "nama": "CHELSYEFA SYAFITRIYANI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-072", "nama": "CHESA AGUSTINA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-073", "nama": "CHIKA TRI RAHAYU", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-074", "nama": "CHOIRUNNISA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-075", "nama": "GIBRAN MANDALIKA PRATAMA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-076", "nama": "HASYA NAZZALA PUTRI IRAWAN", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-077", "nama": "KIRANA TIESHA ANGGRAINI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-078", "nama": "LOVELY ANGGIANI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-079", "nama": "LUTFIANA ULYA HANI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-080", "nama": "MUHAMMAD MARVIN PRADANA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-081", "nama": "MUHAMMAD NABIL GUSTIAR", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-082", "nama": "MUHAMMAD ZIKRULLAH HABIBI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-083", "nama": "NAZRA RAHMA ILLAYA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-084", "nama": "PRISILIA PUTRI WIJAYA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-085", "nama": "REVINA ANJANI", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-086", "nama": "RIFKI ADITYA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-087", "nama": "Rika Febrianti", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-088", "nama": "SINTYA NABILA AZZEN", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-089", "nama": "Tiara Ramadhania", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-090", "nama": "VINA ADELIA", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-091", "nama": "Vino Alfazel", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-092", "nama": "Yohanes Suhendra", "kelas": "9.3", "status": "LULUS" },
  { "id": "12-01-097-093", "nama": "ACA SYAFILA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-094", "nama": "ADELIA ANANDA FITRI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-095", "nama": "Alicia Ratu Faadhilah", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-096", "nama": "ASSIFA MIFTAHUL JANAH", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-097", "nama": "AURA RIZKI RAMADHANI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-098", "nama": "AUXILIA YARA NATANIA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-099", "nama": "CHERLY FATIHA SARI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-100", "nama": "Devina Dwi Al Khanzah", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-101", "nama": "FIDKI DARMAWAN", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-102", "nama": "GARNIES PRATIWI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-103", "nama": "JASKIA MUHAERA SABILA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-104", "nama": "JIHAN ANGGUN SAVITRI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-105", "nama": "KEISYA ARDELLA NAULIFHA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-106", "nama": "LISTYA OCTARI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-107", "nama": "M. Rizki Nurkholis", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-108", "nama": "MARTIN PRANAJAYA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-109", "nama": "MEYLIA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-110", "nama": "MUHAMMAD ALDEN", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-111", "nama": "Muhammad Falevi Pratama", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-112", "nama": "Muhammad Rezky Kapitan", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-113", "nama": "MUHAMMAD TEGUH SAPUTRA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-114", "nama": "Novaldo Aji Saputra", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-115", "nama": "Raphasa Mulia Putra", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-116", "nama": "Rasya Asqa Pratama", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-117", "nama": "RISKY RAMADANI", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-118", "nama": "SALWA AYUNDA BILQIS", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-119", "nama": "SAUSAN WAFIYAH", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-120", "nama": "SUTTAN HADI WIJAYA", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-121", "nama": "SYAFIQ KHOIRONNI'AM", "kelas": "9.4", "status": "LULUS" },
  { "id": "12-01-097-122", "nama": "AMELIA SUKARNO PUTRI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-123", "nama": "ARFA SYABIL ALKHOIRI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-124", "nama": "BILQIS KHOIRUNNISA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-125", "nama": "DEWI SUKMA OKTAVIA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-126", "nama": "DINDA VIONA FARADITA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-127", "nama": "FAJAR RAHMADAN", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-128", "nama": "FARISA MAULIDA PUTRI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-129", "nama": "FATHIR MAULANA ZIBRAN", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-130", "nama": "FATTI FARIZQY", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-131", "nama": "HAFIZH MAULANA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-132", "nama": "HANIFAH BAHIYAH FATHIN", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-133", "nama": "HEDY DIANA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-134", "nama": "HELMALIA PUTRI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-135", "nama": "INDRA PRAMONO", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-136", "nama": "KAHLIL GIBRAN", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-137", "nama": "KEYLA MELYANDA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-138", "nama": "KEYLA NURUL RAMADHANI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-139", "nama": "KRISNA ADITYO", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-140", "nama": "M.AFRIZAL SAPUTRA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-141", "nama": "M. GANI FELANI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-142", "nama": "M. RIDHO NOVRIANSYAH", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-143", "nama": "MELODI WULANDARI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-144", "nama": "MUHAMAD AIDIL FIKRI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-145", "nama": "MUHAMMAD ADITIYA RAMADANI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-146", "nama": "MUHAMMAD FAQIH", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-147", "nama": "MUTHIARA PUTRI HARASTI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-148", "nama": "NAZILA ZAHRA AROFU", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-149", "nama": "PIKI PRATAMA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-150", "nama": "SHERLI ASYFA PRATIWI", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-151", "nama": "SITI NABILA", "kelas": "9.5", "status": "LULUS" },
  { "id": "12-01-097-152", "nama": "ABDI FAIS", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-153", "nama": "ADAM SAKI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-154", "nama": "ADZKIA RAMADHANI SAPUTRA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-155", "nama": "ALFIAN DWI ANTONI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-156", "nama": "ANDIRA TRI ARYANI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-157", "nama": "AURA ADILLIYAH", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-158", "nama": "BHELCOWE RALLIANO", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-159", "nama": "DELISA PUTRI MAULIDA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-160", "nama": "DEVANA DWI AL KHANZAH", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-161", "nama": "FATIMAH AZ' ZAHRA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-162", "nama": "IPAP ABDUL AZIZ", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-163", "nama": "M RADIT FIRMANSYAH", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-164", "nama": "M SENDY RAMADHANI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-165", "nama": "M. ADAM DAMANURI PUTRA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-166", "nama": "M. AGHIS MULTAZAM", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-167", "nama": "M. RADHIT TEGAR PERKASA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-168", "nama": "M. RAFA PRATAMA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-169", "nama": "MICHEELL DAVINA PUTRI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-170", "nama": "MUHAMMAD GEM RIYAN KHANA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-171", "nama": "MUHAMNMAD VALENT ANDIWAN", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-172", "nama": "NANDA AZZARA JEFITA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-173", "nama": "NI WAYAN NATASYA AFRISIA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-174", "nama": "NOVAL KURNIAWAN", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-175", "nama": "NOVI KIRANA", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-176", "nama": "PEVITA NAZWA RAMADANI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-177", "nama": "REIZA ARDIANSYAH", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-178", "nama": "SHAFA NURAINI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-179", "nama": "SHERIEL SILVIANA RAMADHANI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-180", "nama": "SHERINA PUTRI RAMADANI", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-181", "nama": "SYAHDAN RAFFY KURNIAWAN", "kelas": "9.6", "status": "LULUS" },
  { "id": "12-01-097-182", "nama": "AINI ZHAFFIRA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-183", "nama": "ALDA AZ ZAHRA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-184", "nama": "ALEXANDRA CARISA PUTRI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-185", "nama": "AMALIA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-186", "nama": "AMIKHA FITRI MIKHAILA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-187", "nama": "CHOIRUNNISA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-188", "nama": "JESICA ANGGRAINI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-189", "nama": "KARIN DWI HARTINI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-190", "nama": "KAYLA ALIFIA AZZAHRA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-191", "nama": "KAYLA FEBRIANTI NURRAHMA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-192", "nama": "M. BAGUS", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-193", "nama": "M. GIBRAN MAULANA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-194", "nama": "M. RAFID AL'FAIN", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-195", "nama": "MUHAMAD RAYHAN AGUSTY", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-196", "nama": "MUHAMMAD ARDIANSYAH", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-197", "nama": "MUHAMMAD BURHAN", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-198", "nama": "MUHAMMAD RAFA AL BILAL", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-199", "nama": "MUTIARA AULIA PUTRI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-200", "nama": "NAYLA RAMADHANI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-201", "nama": "NIKITA AUREL JULIANTI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-202", "nama": "NIKOLAS TRI WAHYU", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-203", "nama": "NIZHAM ARIF SAPUTRA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-204", "nama": "NUR ISABELA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-205", "nama": "PUTRI AIRA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-206", "nama": "RATU MAULIDA RIZKIA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-207", "nama": "TORRES", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-208", "nama": "VALENTIO ADITYA PRATAMA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-209", "nama": "VERLAND ARYENDI", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-210", "nama": "ZAHIRA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-211", "nama": "ZAKIA HAYATUL HUSNA", "kelas": "9.7", "status": "LULUS" },
  { "id": "12-01-097-212", "nama": "ABDUL KARIM HAFIDZHI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-213", "nama": "AINI NURPADILA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-214", "nama": "ALDO FRANCISCO SITORUS", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-215", "nama": "AMELIA RIZKI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-216", "nama": "CAHAYA CINTA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-217", "nama": "CHIKO WAHYU MAHENDRA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-218", "nama": "FAHIRA ELPIELIA YOPIE", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-219", "nama": "HASRI AINUN NUR", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-220", "nama": "KEYSHA ROLITA CAHAYA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-221", "nama": "KIKI YULIAWATI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-222", "nama": "M. REVAN AL ALIF", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-223", "nama": "M.KHAIRUL ZAMAN", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-224", "nama": "MARSYA AMELIA PUTRI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-225", "nama": "MEISYA RAHMA ARINI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-226", "nama": "MUHAMAD IRWANTO", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-227", "nama": "MUHAMMAD ABDUL MALIK N", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-228", "nama": "MUHAMMAD AFGANSYAH NAWAWI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-229", "nama": "MUHAMMAD RAFFA DIRGANTARA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-230", "nama": "MUHAMMAD RIKEN TAUFIK", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-231", "nama": "RADIKA AL FARIS", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-232", "nama": "RAFAEL PUTRA ANDERA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-233", "nama": "RAFELLA PUTRI AULIA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-234", "nama": "RATU KHIAZ FRANESHA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-235", "nama": "RIZKA WASILATUL FALAH", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-236", "nama": "SHAFA ARDITA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-237", "nama": "SURYO UTOMO", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-238", "nama": "TASYA", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-239", "nama": "VINI RAMADANI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-240", "nama": "ZAHRA FAIRUZ SAKHI", "kelas": "9.8", "status": "LULUS" },
  { "id": "12-01-097-241", "nama": "AISYAH", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-242", "nama": "ANIZA MAULIDA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-243", "nama": "ARIFKI WAHDANA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-244", "nama": "CHELSI ARIYANTO", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-245", "nama": "CHILLA PUTRI FRANANDA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-246", "nama": "FAJAR RAMADAN", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-247", "nama": "FIGO ALFARIZI", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-248", "nama": "FIRDYANSYAH", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-249", "nama": "KEISYA RHEVA AUREL", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-250", "nama": "LOLA HAVITA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-251", "nama": "M FAJAR SHIDIG", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-252", "nama": "M KHOLIL AGIL PRATAMA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-253", "nama": "M. ARIEF SAPUTRA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-254", "nama": "M.NURIDJAL", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-255", "nama": "MUHAMAD RAKA SUGIANTO", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-256", "nama": "MUHAMMAD HAFIZ AL FARUQ", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-257", "nama": "MUHAMMAD RAFLI AFDAN", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-258", "nama": "MUHAMMAD WILDAN AN NAFIS", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-259", "nama": "NAFILAH RAMADANI", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-260", "nama": "RESSI AULIA APRILIANI", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-261", "nama": "RIFA'I", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-262", "nama": "RIZKI NOOR WIJAYA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-263", "nama": "RIZKY EFENDI PUTRA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-264", "nama": "SEFINATUN NAJAH", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-265", "nama": "SHYFA OKTAVIANI", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-266", "nama": "WISNU LESTARI KUSUMA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-267", "nama": "ZASKIA HAYATUL HUSNA", "kelas": "9.9", "status": "LULUS" },
  { "id": "12-01-097-268", "nama": "ZASKIA LARASATI", "kelas": "9.9", "status": "LULUS" }
];

console.log("Days element:", document.getElementById("days"));
console.log("Countdown section:", document.getElementById("countdown-section"));
console.log("Form section:", document.getElementById("form-section"));


document.addEventListener("DOMContentLoaded", function () {
    console.log("Countdown JS berjalan"); // Tambahkan ini
    console.log(document.getElementById("days")); // Tambahkan ini

    const targetDate = new Date("2026-06-01T00:00:00").getTime();

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
                <p class="error-message">Periksa kembali No. Ujian Anda.</p>
            </div>
        `;
    }
    
    // Show result section
    resultSection.classList.remove("hidden");
});
