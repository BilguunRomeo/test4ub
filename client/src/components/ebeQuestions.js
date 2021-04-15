export const json = {
  title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээ, үйлчилгээнд хамрагдсан ЭБЭ-ийн хийх ярилцлагын асуумж",
  logo: "http://test4ub.org/images/Main.png",
  logoWidth: 60,
  logoHeight: 60,
  goNextPageAutomatic: true,
  showNavigationButtons: true,
  showProgressBar: "bottom",
  pages: [
    {
      questions: [
        {
          name: "a",
          type: "text",
          title: "Судлаачын дугаар",
          isRequired: true,
          autoComplete: "name"
        }, {
          name: "b",
          type: "text",
          title: "Өвөрмөц ялгах код",
          isRequired: true,
          autoComplete: "name"
        }, {
          name: "c",
          type: "text",
          title: "Он, сар, өдөр",
          isRequired: true,
          inputType: "date"
        }, {
          name: "d",
          type: "radiogroup",
          title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээг хамгийн сүүлд хаана өгсөн бэ?",
          hasOther: false,
          isRequired: true,
          choices: ["Өмнө нь өгч байгаагүй", "Дүүргийн эрүүл мэндийн төв", "ХӨСҮТ", "ТББ-ын эмнэлэг", "Хувийн эмнэлэг/ лаборатори"]
        }
      ],
    },
    {
      title: "Цаашдаа хамгийн сүүлд шинжилгээ өгсөн газрын талаар тодруулж асуух болно. Та тухайн байгууллагынхаа талаарх сэтгэгдлээ хуваалцана уу",
      questions: [
        {
          type: "checkbox",
          name: "e",
          title: "Шинжилгээ өгөх газрын талаарх мэдээлэл хаанаас авсан вэ?",
          hasOther: true,
          otherText: "Бусад : Бичнэ үү:",
          isRequired: true,
          choices: ["Test4ub.org сайт", "Мэдээллийн хуудас", "Хүрч очих ажилтан", "Найз", "Олон нийтийн сүлжээ", "Grindr", "72112236, 72720077, 77112236 утсаар"]
        }, {
          type: "radiogroup",
          name: "f",
          title: "Шинжилгээ өгөх газрыг олоход хялбар байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "g",
          title: "Шинжилгээ өгөх газрыг олоход яагаад хэцүү байсан бэ?",
          hasOther: false,
          otherText: "Бусад : Бичнэ үү:",
          visibleIf: "{f}='Үгүй'",
          isRequired: true,
          choices: ["Хаяггүй байсан", "Хол байсан", "Хөтөч байгаагүй"]
        }, {
          type: "radiogroup",
          name: "h",
          title: "Үйлчилгээний цагийн хуваарь нь таны цаг завтай нийцэж байна уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "i",
          title: "Үйлчилгээний цагийн хуваарь ямар байвал танд тохиромжтой вэ?",
          hasOther: true,
          visibleIf: "{i}='Үгүй'",
          otherText: "Бусад : Бичнэ үү:",
          isRequired: true,
          choices: ["Хагассайн өдөр", "Бүтэнсайн өдөр", "18 цагаас хойш"]
        }, {
          type: "radiogroup",
          name: "j",
          title: "Эмнэлэг / төвийн ажилтан танд өөрийгөө танилцуулсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "k",
          title: "Эмнэлэг / төвийн ажилтнууд нууцыг тань хадгална гэдгээ хэлсэн үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "l",
          title: "Эмнэлэг / төвийн ажилтнуудын харьцаа таны хүссэн шиг байж чадсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Хүссэн хэмжээнд хүрээгүй", "Огт үгүй"]
        }, {
          type: "radiogroup",
          name: "m",
          title: "Эмнэлэгийн хүлээн авах ажилтны харьцаа ямар байсан бэ?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Найрсаг", "Үл тоосон", "Доромжилсон", "Уулзаагүй"]
        },
      ],
    }, {
      title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээ, үйлчилгээнд хамрагдсан ЭБЭ-ийн хийх ярилцлагын асуумж",
      questions: [
        {
          type: "radiogroup",
          name: "n",
          title: "Эмчийн харьцаа ямар байсан бэ?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Найрсаг", "Үл тоосон", "Доромжилсон"]
        }, {
          type: "radiogroup",
          name: "o",
          title: "Сувилагчийн харьцаа ямар байсан бэ?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Найрсаг", "Үл тоосон", "Доромжилсон", "Уулзаагүй"]
        }, {
          type: "radiogroup",
          name: "p",
          title: "Энэ байгууллагаас үнэгүй бэлгэвч болон чийгшүүлэгч авсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Зөвхөн бэлгэвч", "Зөвхөн чийгшүүлэгч", "Тийм, бэлгэвч болон чийгшүүлэгч", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "q",
          title: "Үйлчлүүлэгч эсвэл бэлгийн хавьтагчтайгаа бэлгэвч хэрэглэх талаар хэрхэн тохиролцох тухай мэдээлэл авсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "r",
          title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээ хийхдээ таны зөвшөөрлийг авсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "s",
          title: "Танд шинжилгээний өмнөх зөвлөгөөгөөр дараах мэдээллийг өгсөн үү",
          hasOther: true,
          otherText: "Бусад : Бичнэ үү:",
          isRequired: true,
          choices: ["ХДХВ-ын талаарх ойлголт шинжилгээний ач холбогдол", "Урьдчилан сэргийлэх боломж, бэлгийн хавьтагчаа шинжилгээнд хамруулах тухай", "Хувийн мэдээлэл нууцлах", "Дээрх мэдээлэл өгөөгүй"]
        }, {
          type: "radiogroup",
          name: "t",
          title: "Танд шинжилгээний дараах зөвлөгөөгөөр дараах мэдээллийг өгсөн үү",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Шинжилгээний хариуг тайлбарласан", "Цонх үе, давтан шинжилгээ хийх талаар", "Урьдчилан сэргийлэх тусламж үйлчилгээнд илгээх, холбон зуучлах (өртөлтийн өмнөх, дараах сэргийлэх багц)", "Аюлгүй бэлгийн харилцааны талаар", "Дээрх мэдээлэл өгөөгүй"]
        }, {
          type: "radiogroup",
          name: "u",
          title: "Эмнэлэг / төвийн ажилтан таныг анхааралтай сонсож байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Маш анхааралтай сонссон", "Нэг их анхааралтай сонсоогүй", "Миний яриаг огт анхаарахгүй байсан"]
        }, {
          type: "radiogroup",
          name: "v",
          title: "Эмнэлэг / төвийн ажилтны тайлбарласан зүйл ойлгомжтой байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "w",
          title: "Эмнэлэг / төвийн ажилтан танд асуулт асуух боломж өгсөн үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Боломж өгсөн боловч энэ нь миний хүссэн хэмжээнд хүрээгүй", "Асуулт асуух боломж огт өгөөгүй"]
        }, {
          type: "radiogroup",
          name: "x",
          title: "Та асуух гэсэн бүх асуултаа асууж чадсан уу",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Зөвхөн зарим асуултаа л асуусан", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "y",
          title: "Эмээр хамгаалах талаар мэдээлэл авч байсан уу? (PrEP)",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Өртөлтийн өмнөх сэргийлэлт (PrEP)", "Өртөлтийн дараах сэргийлэлт (PEP)", "Авч байгаагүй"]
        }, {
          type: "checkbox",
          name: "z",
          title: "Та энэ талаарх (PrEP) мэдээллийг хаанаас авсан вэ? (олон хувилбар сонгож болно)",
          hasOther: false,
          visibleIf: "{y}='Өртөлтийн өмнөх сэргийлэлт (PrEP)'",
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Хүрч очих ажилтан", "Эмч, эмнэлгийн ажилтан", "Сургалт", "www.test4ub.org вэб сайт", "72112236, 72720077, 77112236", "Test4UB подкаст", "Богино хэмжээний кинонууд", "Facebook: test4ub", "Instagram: test4ub", "Сурталчилгааны материалууд (реклам, постер, комик ном, бусад)"]
        }
      ]
    }, {
      title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээ, үйлчилгээнд хамрагдсан ЭБЭ-ийн хийх ярилцлагын асуумж",
      questions: [
        {
          type: "radiogroup",
          name: "aa",
          title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээ өгөхдөө удаан хүлээсэн үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["30 минут хүртэл", "1 цаг хүртэл", "1 цагаас дээш"]
        }, {
          type: "radiogroup",
          name: "ab",
          title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээний хариу хэр удаж гарсан бэ?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["30 минут хүртэл", "1 цаг хүртэл", "1 цагаас дээш", "24 цаг ба түүнээс дээш"]
        }, {
          type: "radiogroup",
          name: "ac",
          title: "Та шинжилгээнийхаа хариуг авсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ad",
          title: "Та халдвар илрүүлэх шинжилгээ өгөхдөө ямар нэгэн төлбөр төлсөн үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ae",
          title: "Та ХДХВ-ийн шинжилгээ өгөхдөө БЗДХ илрүүлэх шинжилгээ давхар хийлгэсэн үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "af",
          title: "Хүлээлгийн хэсэг цэвэрхэн, суух сандалтай, тав тухтай байсан уу? (Хүлээлгийн хэсэг гэдэг нь эмчид үзүүлэхийн тулд хүлээж байгаа газар юм)",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ag",
          title: "Бие засах газрын ариун цэвэр ямар байсан бэ?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ah",
          title: "Хүлээлгийн хэсэгт эрүүл мэндийн тухай унших зүйл, санамж, сэтгүүл, зурагт хуудас байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ai",
          title: "Эдгээр унших зүйл нь танд сонирхолтой санагдсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "aj",
          title: "Та эмнэлэг / төвийн ажилтнуудтай ганцаарчлан ярилцсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ak",
          title: "Таны ярьж байгаа зүйлийг бусад хүмүүс сонсохгүй байх боломжтой байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "al",
          title: "Та эмнэлэг / төвийн ажилтантай ярилцаж байхад бусад ажилтнууд та хоёрын яриаг тасалдуулж байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "am",
          title: "Та эмнэлэг / төвийн ажилтантай ярилцаж байхад бусад үйлчлүүлэгчид та хоёрын яриаг тасалдуулж байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "an",
          title: "Та үйлчилгээ авахдаа ялгаварлан гадуурхалт эсвэл гутаан доромжлолд өртсөн үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        },
      ]
    }, {
      title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээ, үйлчилгээнд хамрагдсан ЭБЭ-ийн хийх ярилцлагын асуумж",
      questions: [
        {
          type: "radiogroup",
          name: "ao",
          title: "Таныг хэрхэн ялгаварлан гадуурхаж, гутаан доромжилсон вэ?",
          hasOther: true,
          visibleIf: "{an}='Тийм'",
          otherText: "Бусад: Бичнэ үү:",
          isRequired: true,
          choices: ["Загнасан, хэл амаар доромжилсон", "Биеийн хэлэмж, үйлдлээр", "Үл тоомсорлосон", "Зохимжгүй үг хэллэг ашигласан"]
        }, {
          type: "radiogroup",
          name: "ap",
          title: "Хэний зүгээс ялгаварлан гадуурхал, гутаан доромжлолд өртсөн бэ?",
          hasOther: true,
          otherText: "Бусад: Бичнэ үү:",
          isRequired: true,
          choices: ["Эмч", "Сувилагч", "Үйлчилгээний ажилтан", "Бусад үйлчлүүлэгч", "Хүрч очих ажилтан"]
        }, {
          type: "radiogroup",
          name: "aq",
          title: "Ялгаварлан гадуурхагдсан, гутаан доромжлогдсон, эсвэл сөрөг хандлагын талаар гомдол яаж гаргахаа мэдэх үү? Хэрвээ мэдэх бол ямар аргаар бичнэ үү.",
          hasOther: true,
          otherText: "Тийм, бичнэ үү:",
          isRequired: true,
          choices: ["Үгүй"]
        }, {
          type: "radiogroup",
          name: "ar",
          title: "Та өмнө нь гомдол гаргаж байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм, вэб сайтаар", "Тийм, санал хүсэлтийн хайрцгаар", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "as",
          title: "Хэрвээ гомдол гаргаж байсан бол таны гаргасан гомдлыг шийдсэн үү?",
          hasOther: false,
          visibleIf: "{ar} contains 'Тийм",
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "at",
          title: "Та дахин энэ байгууллагаар үйлчлүүлэх үү?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "checkbox",
          name: "au",
          title: "Хэрвээ үйлчлүүлэхгүй бол яагаад ?",
          hasOther: true,
          visibleIf: "{at}='Үгүй'",
          otherText: "Бусад: Бичнэ үү",
          isRequired: true,
          choices: ["Орчин таалагдаагүй", "Эмч болон бусад ажилтны хандлага таалагдаагүй", "Байршил тохиромжгүй", "Төлбөр өндөр байсан", "Ажиллах цагийн хуваарь тохиромжгүй", "Хүлээлгийн хугацаа урт", "Нууцыг хадгалах боломж муу"]
        }, {
          type: "radiogroup",
          name: "av",
          title: "Та ХДХВ-ийн халдвар илрүүлэх шинжилгээг өөртөө хийж байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "aw",
          title: "Та ХОА-аар ХДХВ-ийн халдвар илрүүлэх шинжилгээ хийлгэж байсан уу?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }, {
          type: "radiogroup",
          name: "ax",
          title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээг хаана өгөхийг илүүд үзэж байна вэ?",
          hasOther: true,
          otherText: "Бусад, бичнэ үү:",
          isRequired: true,
          choices: ["ТББ эмнэлэг", "ХӨСҮТ", "Дүүргийн эрүүл мэндийн төв", "ХОА-тай уулзсан газарт", "Хүссэн газартаа өөр өөрийгөө шинжлэх"]
        }, {
          type: "text",
          name: "ay",
          title: "ХДХВ-ийн халдвар илрүүлэх шинжилгээг илүү хүртээмжтэй болгоход таны бодлоор юу хийх хэрэгтэй байна вэ?",
          hasOther: false,
          otherText: "Тодорхойлно уу:",
          isRequired: true,
          choices: ["Тийм", "Үгүй"]
        }
      ]
    }
  ]
};