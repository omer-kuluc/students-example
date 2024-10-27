let students = [
  {
      id: 1,
      name: "Atakan",
      lastname: "Arıkan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Busenur",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Ece",
      lastname: "Kubilay",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Elif Yağmur",
      lastname: "Şahin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Gaye",
      lastname: "Dinç",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Gökdeniz",
      lastname: "Keleş",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Hilal",
      lastname: "Baran",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Mehmet Akif",
      lastname: "Küçükyılmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Merve",
      lastname: "Özel",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Muhammet Ali",
      lastname: "Şafak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Ömer",
      lastname: "Kuluç",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];


btnList.addEventListener('click', showList);

let womenCount = 0;
let menCount = 0;
let womenList = [];
let menList = []
indexWomen = 0;
indexMen = 0;

function showList() {
    for (const stu of students){
        classList.innerHTML+= `<li class='classList-item'>id :${stu.id}, isim: ${stu.name}, soyisim : ${stu.lastname},
        cinsiyet : ${stu.gender}, bölüm :  ${stu.section}, rol : ${stu.role}</li>`;
        if(stu.gender==='Kadın') {
            womenList[indexWomen] = stu;
            womenCount++;
            indexWomen++;
        }
        else {
            menList[indexMen]=stu;
            menCount++;
            indexMen++;
        }
    }
    womenCountTxt.innerText = womenCount;
    menCountTxt.innerText = menCount;
    const stuCount = document.querySelector('.student-count');
    stuCount.classList.remove('hidden');
    const listSection = document.querySelector('.list-section');
    listSection.classList.remove('hidden');

    printWomenList();
    printMenList();
}


function printWomenList() {
    womenListArea.classList.remove('hidden');
    for(const wom of womenList) {
        womenListArea.innerHTML+= `<li class='women-list-item'> isim : ${wom.name}, soyisim :${wom.lastname} </li>`
        
    }
    
}

function printMenList() {
    menListArea.classList.remove('hidden');
    for(const men of menList) {
        menListArea.innerHTML+= `<li class='men-list-item'> isim : ${men.name}, soyisim :${men.lastname} </li>`

    }
}

