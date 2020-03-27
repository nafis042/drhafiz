import Slide1 from '../../assets/images/slider/webp/slide-1.webp';
import Slide2 from '../../assets/images/slider/webp/slide-2.webp';
import Slide3 from '../../assets/images/slider/webp/slide-3.webp';

const NewsList = [
  {
    id: 1,
    Heading: ['Վերնագիր', 'Заголобок', 'Heading'],
    ShortDescription: ['կարճ նկարագրույթյուն', 'краткое описание', 'short description'],
    Description: [
      `
    <h5 className='h5-responsive'>Ի՞նչ է Lorem Ipsum-ը ? </h5>
    <p>Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ականներից Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ  մնալով էապես անփոփոխ: Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում, իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է Lorem Ipsum-ի տարատեսակներ:</p>
    <h5 className='h5-responsive'>Ինչո՞ւ ենք այն օգտագործում</h5>
    <p>Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում: Ժամանակի ընթացքում ձևավորվել են Lorem Ipsum-ի տարբեր վերսիաներ երբեմն ներառելով պատահական տեքստեր, երբեմն էլ հատուկ իմաստ (հումոր և նմանատիպ բովանդակություն):</p>
    `,
      `
    <h5 className='h5-responsive'>Что такое Lorem Ipsum?</h5>
    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
    <h5 className='h5-responsive'>Почему он используется?
    </h5>
    <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
    </p>
    `,
      `
    <h5 className='h5-responsive'>What is Lorem Ipsum?</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    </p>
    <h5 className='h5-responsive'>Why do we use it?

    </h5>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
    </p>
    `
    ],
    Media: {
      Images: {
        webp: { thumbnails: [Slide2, Slide1, Slide3], originals: [Slide2, Slide1, Slide3] },
        jpg: { thumbnails: [Slide2, Slide1, Slide3], originals: [Slide2, Slide1, Slide3] }
      },
      Videos: []
    }
  }
  //   {
  //     id: 2,
  //     Heading: 'The generated Lorem Ipsum is therefore always free from repetition',
  //     ShortDescription: 'Nam libero tempore, cum soluta nobis est eligendi optio',
  //     Description: `
  //     <h5>Where does it come from?</h5>
  //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  //     <h5>Where can I get some?</h5>
  //     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>`,
  //     Media: {
  //       Images: {
  //         thumbnails: [Slide2, Slide1, Slide3],
  //         originals: [Slide2, Slide1, Slide3]
  //       },
  //       Videos: []
  //     }
  //   },
  //   {
  //     id: 3,
  //     Heading: 'It is a long established fact that a reader will be distracted by the readable content of a page ',
  //     ShortDescription: 'Nam libero tempore, cum soluta nobis est eligendi optio',
  //     Description: `
  //     <h5>Where does it come from?</h5>
  //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  //     <h5>Where can I get some?</h5>
  //     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  //     `,
  //     Media: {
  //       Images: {
  //         thumbnails: [Slide2, Slide1, Slide3],
  //         originals: [Slide2, Slide1, Slide3]
  //       },
  //       Videos: []
  //     }
  //   },
  //   {
  //     id: 4,
  //     Heading: 'It is a long established fact that a reader will be distract',
  //     ShortDescription: 'Nam libero tempore, cum soluta nobis est eligendi optio',
  //     Description: `
  //     <h5>Where does it come from?</h5>
  //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  //     <h5>Where can I get some?</h5>
  //     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  //     `,
  //     Media: {
  //       Images: {
  //         thumbnails: [Slide2, Slide1, Slide3],
  //         originals: [Slide2, Slide1, Slide3]
  //       },
  //       Videos: []
  //     }
  //   },
  //   {
  //     id: 5,
  //     Heading: 'It is a long established fact that a reader will be distracted by the readable content of ',
  //     ShortDescription: 'Nam libero tempore, cum soluta nobis est eligendi optio',
  //     Description: `
  //     <h5>Where does it come from?</h5>
  //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  //     <h5>Where can I get some?</h5>
  //     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  //     `,
  //     Media: {
  //       Images: {
  //         thumbnails: [Slide2, Slide1, Slide3],
  //         originals: [Slide2, Slide1, Slide3]
  //       },
  //       Videos: []
  //     }
  //   }
];

export default function(state = NewsList, action) {
  return state;
}
