// menu items
const Menu = [
  {
    id: 0,
    name: ['হোম', 'Главная', 'Home'],
    path: '/'
  },
  {
    id: 1,
    name: ['চিকিৎসা সমূহ', 'Процедуры', 'Procedures'],
    path: '#',
    dropdownItems: [
      {
        id: 1,
        name: ['Մարմին', 'Тело', 'Body'],
        path: '#',
        dropdownItems: [
          {
            id: 1,
            name: ['Աբդոմինոպլաստիկա ', 'Абдоминопластика', 'Abdominoplasty'],
            path: '/procedures/1'
          },
          {
            id: 2,
            name: ['Մինի աբդոմինոպլաստիկա', 'Мини -Абдоминопластика ', 'Abdominoplasty – Mini'],
            path: '/procedures/2'
          },
          {
            id: 3,
            name: ['Բազուկներիկ ձգում', 'Брахиопластика', 'Arm Lift'],
            path: '/procedures/3'
          },
          {
            id: 4,
            name: ['Մարմնի ձգում', 'Подтяжка туловища ', 'Body Lift'],
            path: '/procedures/4'
          },
          {
            id: 5,
            name: ['Սեռական  շուրթերի փոքրացում', 'Уменьшение половых губ', 'Labia Minora Reduction'],
            path: '/procedures/5'
          },
          {
            id: 6,
            name: ['Ճարպի փոխպատվասում', 'Перенос жира ', 'Fat Transfer '],
            path: '/procedures/6'
          },
          {
            id: 7,
            name: ['Լիպոսակցիա', 'Липосакция ', 'Liposuction'],
            path: '/procedures/7'
          },
          {
            id: 8,
            name: ['Ազդրի ձգում', 'Подтяжка бедер', 'Thigh Lift'],
            path: '/procedures/8'
          }
        ]
      },

      {
        id: 2,
        name: ['Կուրծք', 'Грудь', 'Breast'],
        path: '#',
        dropdownItems: [
          {
            id: 1,
            name: ['Կրծքերի մեծացում', 'УвеличениеГруди', 'Breast Augmentation'],
            path: '/procedures/9'
          },
          {
            id: 2,
            name: ['Կրծքերի ձգում', 'Подтяжка Груди', 'Breast Lift'],
            path: '/procedures/10'
          },
          {
            id: 3,
            name: ['Կրծքերի փոքրացում', 'Уменьшение Груди', 'Breast Reduction'],
            path: '/procedures/11'
          },
          {
            id: 4,
            name: ['Տղամարդկաց կրծքերի փոքրացում', 'Уменьшение Грудных Желез У Мужчин', 'Male Breast Reduction'],
            path: '/procedures/12'
          },
          {
            id: 5,
            name: ['Կրկնակի կրծքի վիրահատություն ', 'Повторные Операции На Груди', 'Revision Breast Surgery'],
            path: '/procedures/13'
          }
        ]
      },
      {
        id: 3,
        name: ['Դեմք եւ Գլուխ', 'Лицо и голова', 'Face and Head'],

        dropdownItems: [
          {
            id: 1,
            name: ['Բլեֆարոպլաստիկա', 'Блефаропластика', 'Blepharoplasty (Eyelid Surgery)'],
            path: '/procedures/14'
          },
          {
            id: 2,
            name: ['Դեմքի ձգում  ամբողջությամբ', 'Полная подтяжка лица', 'Face Lift – Full'],
            path: '/procedures/15'
          },
          {
            id: 3,
            name: ['Դեմքի ձգում- մինի /Midface', 'Подтяжка Лица', 'Facelift – Mini/Midface'],
            path: '/procedures/16'
          },
          {
            id: 4,
            name: ['Դիմային իմպլանտներ', 'Лицевые Имплантаты', 'Facial Implants'],
            path: '/procedures/17'
          },
          {
            id: 5,
            name: ['Դեմքի լիպոսակցիա', 'Липосакция Лица', 'Facial Liposuction'],
            path: '/procedures/18'
          },
          {
            id: 6,
            name: ['Ճարպի տեղափոխում  ', 'Пересадка Жира ', 'Fat Transfer (facial)'],
            path: '/procedures/19'
          },
          {
            id: 7,
            name: ['Օտոպլաստիկա/Ականջների պլաստիկա  ', 'Отопластика', 'Otoplasty'],
            path: '/procedures/20'
          },
          {
            id: 8,
            name: ['Հարբերանային/պերիորալ երիտասարդացում', 'Омоложение Околоротовой Области', 'Perioral Rejuvenation'],
            path: '/procedures/21'
          },
          {
            id: 9,
            name: ['Ռինոպլաստիկա/Քթի պլաստիկա', 'Ринопластика', 'Rhinoplasty'],
            path: '/procedures/22'
          }
        ]
      },
      {
        id: 4,
        name: ['Ոչ վիրահատական  միջամտություններ', 'Нехирургические процедуры', 'Non-Surgical Procedures'],
        path: '#',
        dropdownItems: [
          {
            id: 1,
            name: ['Բոտուլինում տոքսին', 'Ботулотоксин', 'Botulinum Toxin'],
            path: '/procedures/23'
          },
          {
            id: 2,
            name: ['Ֆիլլեր', 'Филлеры', 'Fillers'],
            path: '/procedures/24'
          },
          {
            id: 3,
            name: ['', 'Устранение Венозных Деформаций', 'Vein Treatments'],
            path: '/procedures/25'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: ['খবর', 'Новости', 'News'],
    path: '/news'
  },
  {
    id: 3,
    name: ['গ্যালারি', 'Галерея', 'Gallery'],
    path: '/gallery'
  },

  {
    id: 4,
    name: ['আমার সম্পর্কে', 'Обо мне', 'About Me'],
    path: '/about_me'
  },
  {
    id: 5,
    name: ['যোগাযোগ করুন', 'Контакты', 'Contact Me'],
    path: '/contact_me'
  }
];

export default function(state = Menu, action) {
  return state;
}
