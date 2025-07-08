var clinics_array = [];
//#region India
const clinic_array_india = `{
	"0": {
	  "ID": "11784",
	  "na": "AAYNA (Gurugram, Haryana)",
	  "gu": "https://ultherapy-asia.com/store/aayna-gurugram-haryana/",
	  "ex": "",
	  "lat": "28.4634412",
	  "lng": "77.07675569999999",
	  "distance": "4773.958755998701",
	  "rt": "",
	  "st": "B-89, Ground Floor, Sushant Lok Phase I, Sector 43, Gurugram, Haryana – 122002",
	  "te": "+91 981 092 7946",
	  "ic": "",
	  "mi": "",
	  "we": "https://www.aaynaclinic.com/",
	  "pr": ""
	}
  }`
//#endregion

//#region Indonesia
const clinic_array_Indonesia = `
{
  "0": {
    "ID": "8864",
    "na": "AHA BEAUTY CLINIC",
    "gu": "https://ultherapy-asia.com/store/aha-beauty-clinic/",
    "ex": "",
    "lat": "-6.5858713",
    "lng": "106.8053713",
    "distance": "2826.621640509254",
    "rt": "",
    "st": "Padjajaran, Sukasari no.23D, Bogor Center. West Java.",
    "te": "+62 878 74498301",
    "ic": "",
    "mi": "",
    "we": "www.ahaclinic.co.id"
  }
}
`
//#endregion

//#region  Malaysia
const clinic_array_malaysia = `{
	"0": {
	  "ID": "8834",
	  "na": "Ageless Medispa Dr Alice Clinic",
	  "gu": "https://ultherapy-asia.com/store/ageless-medispa-dr-alice-clinic/",
	  "ex": "",
	  "lat": "3.1425422507027",
	  "lng": "101.67065458924",
	  "distance": "2474.6213915637804",
	  "rt": "",
	  "st": "257, Jalan Maarof, Bangsar, 59100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
	  "te": "+60 3-2095 0458",
	  "ic": "",
	  "mi": "",
	  "we": "www.dralicemd.com"
	}
  }`
//#endregion

//#region Phlippines
const clinic_array_philippines = `{
  "1": {
    "ID": "8872",
    "na": "907 CIVIC PLACE ULTHERAPY",
    "gu": "https://ultherapy-asia.com/store/907-civic-place-ultherapy/",
    "ex": "",
    "lat": "14.4141749",
    "lng": "121.0434091",
    "distance": "15.043149806728106",
    "rt": "",
    "st": "907 Civic Place, Alabang, Muntinlupa City",
    "ic": "",
    "mi": ""
  }
}`;
//#endregion

//#region Thailand
const clinic_array_thailand = `{
  "0": {
    "ID": "10153",
    "na": "36 AESTHETIC CLINIC",
    "gu": "https://ultherapy-asia.com/store/36-aesthetic-clinic/",
    "ex": "",
    "lat": "13.723129535242093",
    "lng": "100.57691167771053",
    "distance": "2208.36880756713",
    "rt": "",
    "st": "12 Soi Sukhumvit 36, Khwaeng Khlong Tan, Khlong Toei, Bangkok 10110",
    "te": "02-0423633",
    "ic": "",
    "mi": "",
    "pr": ""
  }
}`
//#endregion

//#region Vietnam
const clinic_array_vietname = `{
  "0": {
    "ID": "12410",
    "na": "A&A CLINIC",
    "gu": "https://ultherapy-asia.com/store/aa-international-clinic/",
    "ex": "",
    "lat": "10.778472993483891",
    "lng": "106.68797369456317",
    "distance": "1612.6984743601806",
    "rt": "",
    "st": "63 Ngo Thoi Nhiem, Vo Thi Sau Ward, District 3, Ho Chi Minh City, Vietnam",
    "te": "090 111 9111",
    "ic": "",
    "mi": "",
    "pr": "1"
  }
}` 
//#endregion

clinics_array['india'] = JSON.parse(clinic_array_india);
clinics_array['indonesia'] = JSON.parse(clinic_array_Indonesia);
clinics_array['malaysia'] = JSON.parse(clinic_array_malaysia);
clinics_array['philippines'] = JSON.parse(clinic_array_philippines);
clinics_array['thailand'] = JSON.parse(clinic_array_thailand);
clinics_array['vietnam'] = JSON.parse(clinic_array_vietname);