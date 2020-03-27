// body
const Services = [
  // body procedures
  {
    id: 1,
    Heading: ['Աբդոմինոպլաստիկա /որովայնի ձգում', 'Абдоминопластика', 'Abdominoplasty'],
    SubHeading: [
      'Բարելավում է որովայնի առաջային պատի տեսքը՝  հղիությունից կամ  քաշի նշանակալի կորստից հետո:',
      'Улучшает внешний вид брюшной области после беременности или значительной потери веса.',
      'Improves the appearance of the abdominal area after pregnancy or significant weight loss'
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Աբդոմինոպլաստիկան, որը կչվում է նաև «թամի թակ» վիրահատություն, վիրաբուժական ճանապարհով հեռացվում է որովային առաջային պատին պորտից ցած առկա ավելցուկայի մաշկը և ճարպը: Կախված բուժառուի ցանկությունից, որովայնի պատի մկանները կարող են ձգվել: Կտրվածքն ունի կիսալուսնի ձև/ երկարությունը կախված է հեռացման ենթակա մաշկի և ճարպի քանակից:`,
          `Абдоминопластика, также называемая хирургической подтяжкой живота, хирургическим путем удаляет избыток кожи и жираиз области живота. В зависимости от потребностей пациента мышцы брюшной стенки подтягиваются. Разрез имеет форму полумесяца (длина зависит от массы кожи и удаляемого жира).`,
          `Abdominoplasty, also called tummy tuck surgery, surgically removes the excess skin and fat that lies between the umbilicus and the overhanging skin (or to a cesarean scar) from the abdominal area. Depending on the needs of the patient, the muscles of the abdominal wall are tightened. The incision is a half-moon shape (length is dependent on the mass of skin and fat to be removed).`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [`Մոտ 2-4 ժամ`, `Примерно от двух до четырех часов.`, `Approximately two to four hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Բուժառուներն ավելի հաճախ վիրահատվում են ընդհանուր անզգայացմամբ: Այս միջամտությունը կարելի է իրականացնել տեղային նյարդային բլոկով:`,
          `Чаще всего пациенты находятся под общим наркозом. Эту процедуру также можно выполнить с регионарным нервным блоком, полученным с помощью местных анестетиков.`,
          `Most commonly patients are placed under general anesthesia. This procedure can also be performed with a regional nerve block obtained with local anesthetic agents.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          `Երկուսն էլ հնարավոր են՝ կախված բուժառուի առողջական վիճակից և բժշկի նախընտրությունից:`,
          `Любой возможен и зависит от здоровья пациента и предпочтения доктора.`,
          `Either is possible and depends on the patient’s health and the doctor’s preference.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Ժամանակավոր անհարմարավետություն, մեջքի ցավ, հետվիրահատական այտուցվածություն, ցավ և փափկություն շրջակա հատվածներում, որովայնի մաշկի բորբոքում, ինչպես նաև կապտուկների առկայություն:`,
          `Временный дискомфорт, боль в пояснице, послеоперационный отек, раздражительностьили болезненность в окружающих областях, онемение кожи живота и кровоподтеки являются возможными побочными эффектами.`,
          `Temporary discomfort, low back pain, post-operative swelling, soreness or tenderness in the surrounding areas, numbness of abdominal skin and bruising are possible side effects.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Վարակը, մաշկի լաթի կամ կտրվածքի տակ արյունահոսությունը, թոքային զարկերակի թրոմբոէմբոլիան, կելոիդ սպիների առաջացումը, ուշացած լավացումը կամ կրկնակի վիրահատության անհրաժեշտությունն ինքնին ռիսկեր են, սպիերի ընդլայնում:`,
          `Инфекция, кровотечение под кожным лоскутом или в месте разреза, тромбоэмболия легочной артерии (тромб, который проходит в легкие), рубцы (келоиды), отсроченное заживление или необходимость повторной операции - потенциальные риски, расширение рубца `,
          `Infection, bleeding under the skin flap or at the incision site, pulmonary embolism (a blood clot that travels to the lung), scarring (keloids), delayed healing, or the need for a second reversionary operation are potential risks, enlargement of the scar.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Բուժառուն կարող է վերադառնալ աշխատանքի 2-4 շաբաթների ընթացքում: Բժշկի վերագնահատումից հետո բուժառուն կարող է վերադառնալ առավել ծանրաբեռնված գործունեության մոտ 4-6 շաբաթ անց: Սպիերը պետք է հարթվեն և վերանան վիրահատությունից հետո 3 ամսից 1 տարվա ընթացքում: Բուժառուն պետք է մարմնի գոտի կրի նվազագույնը 4 շաբաթների ընթացքում:`,
          `Пациент может вернуться на работу в течение двух-четырех недель. После повторной оценки врачом пациент может вернуться к более активной работе примерно через четыре-шесть недель. Шрамы должны исчезать и сплющиваться от трех месяцев до года после операции. Пациентов просят носить пояс тела в течение по крайней мере четырех недель.`,
          `The patient may return to work within two to four weeks. Upon re-evaluation by the physician, the patient may return to activity that is more strenuous after approximately four to six weeks. Scars should fade and flatten anywhere from three months to one year after surgery. Patients are asked to wear a body girdle for at least four weeks.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Արդյունքները կպահպանվեն շատ տարիներ, եթե բուժառուն քաշ չհավաքի կամ չհղիանա:`,
          `Результат будет длиться много лет, если пациент не прибавит в весе или не забеременеет.`,
          `The result will last many years, unless the patient gains weight or becomes pregnant.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 2,
    Heading: [`Մինի աբդոմինոպլաստիկա`, `Мини -Абдоминопластика `, 'Abdominoplasty – Mini'],
    SubHeading: [`Բորելավում է որովայնի առաջային պատի արտաքին տեսքը`, `Улучшает внешний вид брюшной полости.`, `Improves the appearance of the abdominal area.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Մինի աբդոմինոպլաստիկան/որովայնի ձգումը/ սահմանափակվում է ցայլքի վերին հատվածի մաշկի հեռացումով և
          լիպոսակցիայի միջոցով ճարպի հեռացմամբ: Բուժառուն պետք է ունենա նվազագույն կամ չափավոր մաշկային
          ավելցուկ, որովայնային ճարպի քիչ քանակություն և աննշան կամ չափավոր մկանային անբավարարություն:
          Վիրաբույժը հեռացնում է որովայնի ճարպը, հեռացնում է վերցայլքային մաշկային ավելցուկը, իսկ մկանային
          թուլության դեպքում հեռացվում է նաև որովայնային մաշկի միջային հատվածը: Վերջապես, մաշկը կարվում է,
          պորտի պահպանմամբ`,
          `Мини-абдоминопластика (подтяжка живота) ограничивается удалением надлобковой кожи (кожа над лобковой областьи) и удалением жира с помощью липосакции. У пациента должна быть минимальная или умеренная избыточность кожи, небольшое количество жира в брюшной области и незначительная и умеренная вялость мышц. Хирург удаляет брюшной жир, удаляет избыточную лобковую кожную избыточность, а в случае мышечной вялости удаляется медиальную часть брюшной кожи. Наконец кожа ушивается с сохранением пупка.`,
          `A mini abdominoplasty (tummy tuck) is limited to supra-pubic skin removal (skin above the pubic area) and fat removal using liposuction. The patient must have minimal to moderate skin redundancy, a small amount of abdominal fat, and minor to moderate muscle flaccidity. The surgeon aspirates the abdominal fat, removes the supra-pubic skin redundancy, and in cases of muscle flaccidity, the medial part of the abdominal skin is removed. Finally the skin is sutured with the umbilicus preserved.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [`1-3 ժամ`, `От одного до трех часов.`, `One to three hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Այս վիրահատությունը կարող է իրականացվել ընդհանուր, էպիդուրալ կամ սեդացիայով տեղային անզգայացմամբ՝
          ըստ վիրաբույժի և բուժառուի նախապատվության:`,
          `Эта операция может быть выполнена под общей, эпидуральной или местной анестезией с седацией в соответствии с предпочтениями хирурга / пациента.`,
          `This surgery can be performed under general, epidural or local anesthesia with sedation, according to surgeon/patient preference.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [`Երկուսն էլ`, `Оба варианта возможны`, `Either.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Վարակ, բորբոքում, վերքի ուշացած լավացում, կելոիդ սպիների առաջացում,
          Որովայնային մաշկի թմրածությունը կվերականգնվի մի քանի ամիս անց:`,
          `Инфекция, кровоподтеки, отсроченное заживление раны или отпугивание келоидами у пациентов с этой предрасположенностью и послеоперационными осложнениями. Онемение кожи живота восстановится через несколько месяцев.`,
          `Infection, bruising, delayed healing of the wound or keloid scaring in patients with this predisposition, and post-operative complications. Numbness of abdominal skin will recover after several months.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Երտասարդ, առողջ բուժառուների մոտ ռիսկերը ցածր են: Թոքային էմբոլիան հնարավոր է, բայց շատ հազվադեպ:`,
          `У молодых, здоровых пациентов риск низок. Легочная эмболия возможна, но очень редко. `,
          `In young, healthy patients the risk is low. Pulmonary embolism is possible but very rare.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Հետվիրահատական ցավազրկումն իրականացնում են երկարատև ազդեցությամբ տեղային անզգայացնողների
          միջոցով: Անհրաժեշտ է 7-10 օր հետվիարահատական խնամք: Որովայնի էլաստիկ սեղմումը պետք է օգտագործվի 4
          շաբաթների ընթացքում:`,
          `Послеоперационное обезболивание достигается с использованием анестетика с длительнымэффектом. Требуетса от семи до десяти дней послеоперационного ухода. Компрессионое белье в области  живота необходимо использовать в течение четырех недель.`,
          `Post-operative pain relief is achieved with the use of long-duration effect local anesthetic. The same attention should be taken as for a general or gynecological surgery: seven to ten days of post-operative care. Elastic compression of the abdomen must be used for four weeks.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Վիրահատության արդյունքը կպահպանվի շատ տարիներ, բացառությամբ բուժառուի մոտ քաշի ավելացման կամ
        հղիության դեպքերի:`,
          `Результат будет длиться много лет, если пациент не прибавит в весе или не забеременеет.`,
          `The result will last many years, unless the patient gains weight or becomes pregnant.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 3,
    Heading: ['Բազուկներիկ ձգում', 'Брахиопластика', 'Arm Lift'],
    SubHeading: [`Կրճատում է ավելորդ մաշկը և ճարպը:`, `Уменьшает лишнюю кожу и жир с рук.`, `Reduces excess skin and fat from the arms.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Բազուկների վիրահատական երիտասարդացումը մնում է մշտական խնդիր, ինչպես բուժառուի, այնպես էլ վիրաբույժի համար՝ չնայած դրա բարելավմանն ուղղված մեթոդների բազմազանությանը: Բազուկների ձգման / Բրախիոպլաստիկայի/ նպատակը կայանում է նրանում, որ կրճատվի ավելորդ մաշկը և փոքրացվի բազուկի շրջագիծը: Էլաստիկ մաշկի և քիչ կախվածության դեպքում ավելցուկային ճարպը կարող հեռացվել լիպոսակցիայի միջոցով, սակայն մաշկի նշանակալի  կախվածությունը կարող է շտկվել միայն վիրահատական միջամտությամբ։ Կտրվածքը պետք է տեղակայվի բազկի միջային մակերեսին, անութափոսից մինչև միջային վերկոճ, այնուհետև հեռացվում է ավելցուկային մաշկն ու ենթամաշկային ճարպը, մաշկը կարվում է կոսմետիկ կարերով։`,
          `Хирургическое омоложение плечевой области остается постоянной проблемой как для пациента, так и для хирурга, несмотря на множество методов, предложенных для его улучшения. Цель подтяжки руки (брахиопластика) состоит в том, чтобы уменьшить избыточность кожи и уменьшить окружность руки. При хорошем тонусе кожи или минимальном провисании кожи жировые отложения можно уменьшить с помощью липосакции. Но заметная избыточность или слабость кожи могут быть улучшены только хирургическим путем. Разрез должен быть размещен в подмышечной складке и во внутренней стороне руки вдоль линии, проходящей от подмышечной впадины к надмыщелку локтя. Затем удаляют кусочек кожного покрова и жир, а подкожную клетку и кожу закрывают, используя обычные эстетические швы.`,
          `The surgical rejuvenation of the upper arms remains a persistent problem for both the patient and the surgeon, despite the many techniques that have been proposed for its improvement. The goal of the arm lift (brachioplasty) is to reduce skin redundancy and to reduce the circumference of the arm. When there is good skin tone or minimal skin sagging, fat deposits can be reduced by liposuction. But marked skin redundancy or laxity can only be improved by surgery. The incision has to be placed in an axillar crease and in the internal aspect of the arm along a line extending from the axilla to the epicondyle of the elbow. Then a piece of skin-dermis and fat is removed and the subcutis and skin are closed using routine aesthetic suturing.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [`2-3 ժամ:`, `Два-три часа`, `Two to three hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [`Անզգայացումը կարող է լինել ընդհանուր կամ տեղային սեդացիայով:`, `Анестезия может быть общей или местной с седацией.`, `The anesthesia can be general or local with sedation.`]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [`Երկուսն էլ հնարավոր են:`, `Оба варианта возможны.`, `Both options are possible.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [`Որոշ դեպքերում կարող է ի հայտ գալ բազուկների այտուց:`, `В некоторых случаях может возникнуть отек или лимфедема рук.`, `In some cases edema or lymphoedema of the arms can result.`]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Լավ տեսանելի կամ կելոիդ սպիեր և մաշկային նյարդերի վնասվածք:`,
          `Хорошо видимые или келоидные рубцы и повреждения кожного нерва.`,
          `Highly visible or keloid scars and cutaneous nerve injuries.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Վերականգնման փուլը կարող է տևել 6-10 օր: Էլաստիկ բինտ կամ կոմպրեսիոն հագուստը խորհորդ է տրվում կրել մի քանի ամիս:`,
          `Процесс заживления может занять от семи до десяти дней. Эластичный бинт или компрессионная одежда могут быть рекомендованы в течение нескольких месяцев.`,
          `The healing process may take seven to ten days. An elastic bandage or compression garment may be recommended for several months.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Լավ և կայուն արդյունքներ կարող են լինել ինչպես սովորական և լավ մաշկի տոնուսով երիտասարդ և բուժառուների մոտ, այնպես էլ մոծահասակների մոտ: Երբեմն հետվիրահատական էլաստիկ կոմպրեսիայի օգնությամբ:`,
          `Хорошие и стабильные результаты могут быть достигнуты у молодых пациентов с ожирением и хорошим тонусом кожи, а также у взрослых более старшего возраста, иногда с помощью нескольких месяцев послеоперационной эластической компрессии.`,
          `Good and stable results can be achieved in young patients with adiposities and good skin tone as well as in adults of older age, sometimes with the help of several months of postoperative elastic compression.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 4,
    Heading: ['Մարմնի ձգում', 'подтяжка туловища ', 'Body Lift'],
    SubHeading: [
      `Բարելավում է որովայնի ստորին հատվածի տեսքը և առջևից և հետևից`,
      `Улучшает внешний вид нижней части живота спереди назад.`,
      `Improves the appearance of the lower abdomen from front to back.`
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Գոտկատեղի լիպեկտոմիան կամ մարմնի ձգումը՝ մարդու իրանի կան գոտկատեղի շրջանում կախված մաշկի և ճարպի շրջանաձև հեռացումն է: Դա կարելլի է համարել լայնածավալ թամի թակ, որը շարունակվում է կողքերով, որպեսզի հոռացվի կողքերի կախված մաշկը / love handle /, որը շարունակվում է դեպի մեջքի ստորին հատված: Մաշկի այդպիսի լայնածավալ հեռացման առավելությունը կայանում է նրանում, որ հետույքի վերևի հատվածում առկա կախվածությունը վերանումը, ինչը ստեղծում է հետույքի բարձրացման տպավորություն   Երբեմն   այս հատվածի ճարպը գոտկատեղ լիպեկտոմիայի ընթացքում օգտագործվում է հետույքի մեծացման նպատակով:
          Վիրահատությունը սովորաբար սկսվում է փորի վրա պառկած դիրքում և բուժառուն պտտվում է մեջքի վրա   այն ժամանակ, երբ ավարտված է լինում հետույքի և մեջքի ստորին հատվածի սկզբնական վիրահատությունը, որպեսզի հնարավոր լինի իրականացնել որովայնի առաջային պատի շրջանի ձգումը, ինչն էլ եզրափակում է <<գոտկատեղի լիպեկտոմիան
          `,
          `Липэктомия пояса или подтяжка туловища - это круговое удаление рыхлой висящей кожи и жира вокруг талии или линии «пояса» человека. Это можно считать обширной подтяжкой живота, которая продолжается по сторонам, чтобы удалить обвисшую кожу  которая продолжается на нижней части спины. Преимущество такого обширного удаления кожи состоит в том, что устраняется обвисшость над ягодицами, что также приводит к подъему ягодиц. Иногда жир в этой области используется для увеличения ягодиц во время липэктомии пояса, восстановления уплощенных ягодиц до более молодой и выступающей формы. Операция обычно начинается с того, что пациент находится в положении лежа на животе вниз и после того, как завершают начальные операцию на задних ягодицах и пояснице, требуется чтобы тело было повернуто на спину, чтобы можно было выполнить подтяжку живота. `,
          `Belt lipectomy or trunkal body lift is a circumferential removal of loose hanging skin and fat from around the waist or “belt” line of an individual. It could be considered an extensive tummy tuck that continues around the sides to remove the loose “love handle” skin that continues onto the lower back. The advantage to this extensive removal of skin is that the looseness above the buttocks is removed which has the effect of lifting the buttocks as well. Sometimes the fat in this area is used to augment the buttocks during belt lipectomy, restoring the flattened buttocks to a more youthful and projecting shape. The surgery typically begins with the patient in the prone position (belly down) and requires the body be turned onto the back once the initial posterior buttocks and lower back area surgery is completed so that the stomach or abdominal area “tummy tuck” can be performed which completes the “belt” lipectomy.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [`Երեք ու կեսից մինչև հինգ ժամ:      `, `Три с половиной до пяти часов.`, `Three and a half to five hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Սովորաբար կիրառվում է ընդհանուր անզգայացում, բայց սպինալ անզգայացումը ևս կիրառելի է:`,
          `Обычно общая анестезия, но спинальная анестезия также возможна.`,
          `Typically general anesthesia but spinal anesthesia is also an option.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          `Սովորաբար պահանջվում է մնալ մեկ գիշեր, քանի որ միջամտությունը լայնածավալ բնույթ ունի:`,
          `Из-за обширного характера процедуры обычно требуется ночлег.`,
          `Because of the extensive nature of the procedure an overnight stay is usually required.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Սա սովոաբար հանգեցնում է հետվիրահատական շրջանի լայն սպիի, կտրվածքների վերին, երբեմն նաև ստորին հատվածում որոշակի թմրածության, մնացորդային կախվածության և մաշկի անհավասարության: Կարող են լինել նաև յուրաքանչյուր վիրաբուժական միջամտությանը բնորոշ բոլոր սովորական ընդհանուր կողմնակի ազդեցությունները:`,
          `Разрыв линии шва над ягодицами (из-за тенденции пациента сгибаться в области талии при выполнении обычной гигиены, которая натягивает ушивание шва, раздвигая его). Это обычно приводит к более широкому рубцу в задней области. Некоторая нечувствительность области выше и иногда ниже разрезов, остаточная обвисшость и неровности кожи, и все обычные общие побочные эффекты любой хирургической процедуры.`,
          `Breakdown of the suture line above the buttocks (because of patient’s tendency to bend at the waist when performing normal hygiene which strains the suture closure pulling it apart). This usually leads to a wider scar in the posterior surgical area. Some numbness of the area above and sometimes below the incisions, residual looseness and irregularity of the skin, and all the usual common side effects of any surgical procedure.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Վիրահատական ռիսկերը նույնն են ինչ սովորական աբդոմինոպլաստիկայի պարագայում:`,
          `Риск операции такой же, как и при обычной абдоминопластике.`,
          `Risks of surgery are the same as with conventional abdominoplasty.`
        ]
      },
      {
        name: ['Վերականգնում ', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Վերականգնումը երկարաձգվում է քանի որ անհրաժեշտ է խուսափել գոտկային շրջանում իրանի ծալումից, քանի դեռ վերքերը չեն լավացել։`,
          `Восстановление продлено из-за необходимости избегать сгибания в талии в течение месяца, пока не произойдет адекватное заживление.`,
          `Recovery is prolonged because of the requirement of avoiding bending at the waist for a month until adequate healing has occurred.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [`Արդյունքները սովորաբար գոհացնող են:`, `Результаты, как правило, очень радуют.`, `Results are typically very gratifying.`]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 5,
    Heading: ['Սեռական  շուրթերի փոքրացում', 'Уменьшение половых губ', 'Labia Minora Reduction'],
    SubHeading: [`Փոխում է ձգված կամ ընդլայնված ներքին սեռական շութերի ձևը:`, `Изменяет форму растянутых или увеличенных внутренних половых губ.`, `Reshapes stretched or enlarged inner labia.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Սեռական  շուրթերի փոքրացման վիրահատությունը կամ լաբիոպլաստիկան, հեշտոցի մեծացած ներքին
          շուրթերի վերափոխումն ու փոքրացումն է: փոքր ամոթաշրթերի մեծացումը կարող է լինել մանկությունից, բայց
          հաճախ այն ձեռք է բերվում ծննդաբերության, տարիքի կամ վարակի պատճառով: Այն կարող է անհանգստացնել
          հիվանդին ֆունկցիոնալ (հագուստ կրելիս, սպորտի ժամանակ) կամ գեղագիտական առումներով: Միջամտության
          ժամանակ հեռացվում է ավելցուկային մաշկի եւ լորձաթաղանթի այնպես, որ սպին հազիվ տեսանելի է լինում:
          Միջամտությունը կարող է համակցված լինել կլիտորի շուրջ մաշկի ավելցուկի հեռացմամբ եւ մեծ ամոթաշրթերի
          վիրահատության հետ:`,
          `Операция по уменьшению малых половых губ, или лабиопластика, представляет собой ремоделирование расширенных внутренних губ вульвы. Увеличение малых половых губ может быть очевидным с детства, но чаще всего оно приобретается, вызванное родами, возрастом или инфекцией. Это может беспокоить пациента функционально (носить одежду, заниматься спортом) или эстетически. Процедура удаляет кожу и слизистую оболочку таким образом, чтобы шрам был едва заметен. Процедура может сочетаться с уменьшением клиторального капюшона (удаление избытка кожи вокруг клитора) и операциями на больших половых губах.`,
          `Labia minora reduction surgery, or labioplasty, is a remodeling of the enlarged inner lips of the vulva. Enlargement of the labia minora may be apparent from childhood, but most often it is acquired, caused by childbirth, age or infection. It may bother the patient in a functional (wearing clothes, during sports) or in an aesthetic way. The procedure removes skin and mucosa in a way that the scar is barely visible. The procedure may be combined with a clitoral hood reduction (removal of the skin excess around the clitoris) and labia majora surgery.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [
          `Միջամտությունը սովորաբար տեւում է 1-3 ժամ, կախված այն բանից  արդյոք դա կատարվում է լրացուցիչ միջամտություններով:`,
          `Процедура обычно занимает от одного до трех часов в зависимости от того, выполняется ли она с дополнительными процедурами.`,
          `The procedure typically takes between one to three hours depending on whether it is performed with additional procedures.`
        ]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Առավել լավ արդյունքներ եւ հարմարավետության համար ընդհանուր անզգայացումը այս վիրահատության կանոնն է:
          Այնուամենայնիվ, որոշ բուժառուների պարագայում կարող է ընտրվել տեղային անզգայացումը:`,
          `Для лучших результатов и большего комфорта общая анестезия является правилом для этой операции. Однако у некоторых пациентов может быть выбран местный наркоз.`,
          `For better results and more comfort, general anesthesia is the rule for this surgery. However, in some patients, local anesthesia may be chosen.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          `Բուժառուն կարող է դուրս գալ վիրահատական հաստատությունից անզգայացումից վերականգնվելուց հետո նույն
          օրը:`,
          `Пациент может покинуть хирургическое учреждение в тот же день после выздоровления от наркоза.`,
          `The patient can leave the surgical facility the same day after recovery from anesthesia.`
        ]
      },
      {
        name: ['Հնրավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Միջամտությունն անցնում է առանց լուրջ կողմնակի ազդեցություների: Երբեմն /դեպքերի 5%-ում/ կարող է
          առաջանալ վերքի անբավարարություն, բայց վերքերի բուժումը տեղային մեթոդներուվ լուծում է խնդիրը: Որոշ
          բուժառուների մոտ սպին ընդլայնվելու հակում ունի, ինչն ավելի ուշ կարող է շտկվել:`,
          `Когда применяется тщательная техника, процедура проходит без серьезных побочных эффектов. Иногда (<5% случаев) может произойти разрушение раны, но лечение с помощью местного ухода за раной решает проблему. У некоторых пациентов рубец имеет тенденцию к расширению, что может быть исправлено позже.`,
          `When meticulous technique is applied, the procedure is without major side effects. Sometimes (< 5% of cases) breakdown of the wound may occur, but healing with local wound care resolves the problem. In some patients, the scar tends to broaden, which can be corrected later.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Այս տեսակի վիրահատության հետ կապված ոչ մի կարեւոր ռիսկեր չկան:`,
          `Никакие важные риски не связаны с этим типом хирургии.`,
          `No important risks are correlated to this type of surgery.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Տվյալ հատվածը կարող է այտուցվել 4-6 շաբաթվների ընթացքում: Կախված տեխնիկայից, կարող է գունային
          անհամապատասխանություն լինել, որը կանցնի որոշ ժամանակ անց: Աշխատանքի վերադառնալ հնարավոր է մեկ
          շաբաթ անց: Սեռական ակտիվությունը թույլատրվում է վեցից ութ շաբաթ անց:`,
          `Область может быть опухшей в течение 4-6 недель. В зависимости от метода, может быть несоответствие цвета, которое имеет тенденцию исчезать через некоторое время. Вернуться на работу можно через неделю. Сексуальная активность разрешается через шесть-восемь недель.`,
          `The area may be swollen for 4-6 weeks. Depending on the technique, there may be a color mismatch that tends to fade after some time. Return to work is possible after one week. Sexual activity is allowed after six to eight weeks.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Լավ վիրաբուժական տեխնիկայի կիրառման պարագայում արդյունքները գոհացնող են՝ բարելավված մարմնի
          պատկերով և ավելի մեծ ֆիզիկական հարմարավետությամբ:`,
          `С хорошей хирургической техникой результаты очень хороши с улучшенным изображением тела и большим физическим комфортом.`,
          `With good surgical technique, the results are very satisfying with an improved body image and greater physical comfort.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 6,
    Heading: ['Ճարպի փոխպատվասում', 'Перенос жира', 'Fat Transfer '],
    SubHeading: [``, `Улучшает лицо и тело, используя жир, собранный из другого участка тела.`, `Enhances the face and body using fat collected from another area of the body.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Ճարպի փոխպատվաստումը, որը կոչվում է նաև ճարպի ներարկում կամ լպոֆիլինգ, միջամտություն է, որի պարագայում օգտագործվում է մարդու սեփական ճարպը՝ մաշկի անհավասարությունները և ծալքերը լցնելու նպատակով: Սա այժմ լավ մշակված տեխնիկա է, որը 90-ականների սկզբին կատարելագործվել է՝ դառնալով կանխատեսելի միջամտություն:
          Լիպեֆիլլինգի համար գեղագիտական ցուցումներն են սմքած այտեր, այտոսկրերի ճարպի վերացում, քիթ-շրթունքային խորը ծալքերի առկայությունը, որոշ դեպքերում ստորին կոպի և այտի միջև գծերի առկայությունը: 
          Սա ամենատարածված մեթոդն է նաև շուրթերի բարելավման համար: Բացի այդ լիպոֆիլինգը կարելի է օգտագործել վատ իրականացված լիպոսակցիայի կամ վնասվածքի արդյունքում առաջացած անհարթությունների վերացման համար:
          Անհրաժեշտ ճարպը ստացվում է սահմանափակ հատվածի լիպոսակցիայի միջոցով 3-5 մմ երկարությամբ 1 կամ մի քանի կտրվածքների միջոցով: Դա սովորաբար վերցվում է փորից կամ կոնքի ներքին հատվածից: Վերցված ճարպը մշակվում է  ցենտրիֆուգման, ֆիլտրման կամ լվացման միջոցով: Արդյունքը հանդիսանում է ներարկման պատրաստ մաքուր հեղուկ ճարպային հյուսվածքը:
          Ճարպը ներարկվում է անհրաժեշտ հատվածներոււմ: Ճարպը հավասարաչափ տարածվում է տվյալ հատվածներում՝ հյուսվածքում ոչ մեծ քանակությամբ ներարկման միջոցով, այնպես որ ներարկված ճարպը լավ շրջապատված լինի առողջ հյուսվածքով:
          `,
          `Перенос жира, также называемый трансплантацией жира, инъекциями жира и липофилингом, - это процедура, в которой для заполнения неровностей и бороздок используется собственный жир человека. В настоящее время это хорошо зарекомендовавший себя метод, усовершенствованный в начале 90-х годов для предсказуемой процедуры.
        Эстетические показания для прохождения липофилинга включают в себя впалые щеки, исчезновение жира из скул, глубокие бороздки, идущие от носа к уголкам рта, и в некоторых случаях линии между нижними веками и щекой. Это также один из наиболее распространенных методов, используемых для увеличения губ. Кроме того, липофилинг можно использовать для сглаживания всех типов неровностей, таких как те, которые возникают в результате плохо выполненной липосакции или травм.
        Необходимый жир получается путем ограниченной липоскульптуры через один или несколько разрезов размером от 3 до 5 мм. Это обычно берется из живота или внутренней части бедра. Аспирированный жир обрабатывается центрифугированием, фильтрацией или промывкой. Результатом является чистая жидкая жировая ткань, готовая к инъекции.
        Затем жир вводится в случае необходимости. Жир равномерно распределяется в области путем введения небольших количеств в ткани, так что введенный жир хорошо окружен здоровой тканью. Это гарантирует, что пересаженный жир остается в контакте с окружающими тканями, которые должны снабжать его кислородом и питательными веществами.
        `,
          `Fat transfer, also called fat grafting, fat injections and lipofilling, is a procedure that uses a person’s own fat to fill in irregularities and grooves. This is now a well-established technique that was perfected in the early nineties to a predictable procedure.
        Aesthetic indications for undergoing lipofilling include sunken cheeks, the disappearance of fat from the cheekbones, deep grooves running from the nose to the corners of the mouth, and in some instances of lines between the lower eyelids and the cheek. It is also one of the most common methods used for lip enhancement. In addition, lipofilling can be used to smooth out all types of irregularities such as those resulting from poorly performed liposuction or injuries.
        The necessary fat is obtained by a limited liposculpture through one or several 3 to 5 mm incisions. It is normally taken from the abdomen or inner thigh. The aspirated fat is processed by centrifuging, filtering or rinsing. Pure liquid fatty tissue ready for injection is the result.
        The fat is then injected where needed. The fat is evenly distributed into the area by injecting minute amounts in the tissues so that the injected fat is well surrounded by healthy tissue. This ensures that the transplanted fat remains in contact with the surrounding tissues that must supply it with oxygen and nutrients.
        `
        ]
      },

      {
        name: [' Տևողություն', 'Продолжительность', 'Length'],
        value: [
          `Մոտ 1 ժամ ՝ կախխված բուժման ենթակա հատվածների քանակից:`,
          `Около часа, в зависимости от размера обрабатываемых участков.`,
          `About an hour, depending on the size of the areas to be treated.`
        ]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Դոնորային և բուժման ենթակա հատվածի տեղային ինֆիլտացիա անեսթետիկով:`,
          `Местная инфильтрационная анестезия донорской области и области, подлежащей лечению.`,
          `Local infiltration anaesthesia of the donor area and the area to be treated.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [`Երկուսն էլ կիրառելի են`, `Оба варианта возможны.`, `Either.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Դոնոր տարածք. Կապտուկներ, այտուցվածություն, թմրածութուն, մինչև 24 ժամ տևող անզգայացնող հեղուկի դրենաժ:
          Բուժվող տարածք. Կապտուկներ, այտուցվածություն հատկապես շուրթերի պարագայում, թմրածություն:
          Բուժման ենթարկված հատվածները կլինեն բավականին այտուցված վիրահատությունից անմիջապես հետո/ հատկապես շուրթերը/: Այդ իսկ պատճառով կարևոր է առաջին մի քանի ժամերի ընթացքում օգտագործել սառը թրջոց՝ այտուցները նվազեցնելու նպատակով:
          Այտուցը կավելանա մինչև 3 օր, բայց հետո աստիճանաբար կպակասի: Մոտ մեկ շաբաթից 10 օր անց բուժառուն կկարողանա դուրս գալ և վերադառնալ նորմալ սոցիալաան կյանքի: Եթե որոշ կապտուկներ առաջացել են, ապա դրանք կարող են տեսանելի լինել ավելի երկար, սակայն կարող են ծածկվել շպարի միջոցով:
          Բուժառուն պետք է այցելի վիրաբույժին 5-7 օր անց, այնուհետև 3 շաբաթ անց: Այդ ընթացքում այտուցների մեծ մասը կնվազեն, սակայն կարող է թվալ գերշտկված վիճակ:
          Վիրաբույժները սովորաբար գերշտկում են անում, ինչը նշանակում է առավել մեծ քանակությմաբ ճարպի ներարկում, քան պետք է, որովհետև փոխպատվաստված ճարպի 25-30% չի գոյատևում: Վերջնական արդյունքը գնահատվում է 3 ամիս անց: Այնուհետև վիրաբույժն անում է նկարներ, որպեսզի դրանք համեմատի մինչ միջամտությունն արված նկարների հետ: Երկրորդ փուլը կարող է նախատեսվել ծավալի յուրաքանչյուր դեֆիցիտ լրացնելու նպատակով:
          `,
          `Донорская область: синяки, отеки, чуткость, до 24 часов дренирование анестезирующей жидкости.
        Обработанная область: синяки, отеки (особенно губы при лечении), чуткость.
        Области, которые были обработаны, будут сразу опухшими сразу после операции, особенно губы, если они были обработаны. Поэтому важно использовать холодный компресс и компресс в первые несколько часов, чтобы минимизировать набухание. Холодная упаковка - это мешок, наполненная кубиками льда и водой.
        Отек будет увеличиваться примерно до третьего дня, но затем постепенно стихнет. Примерно через неделю или десять дней пациенты чувствуют себя уверенно, выходя на улицу и возобновляя нормальную общественную жизнь. Если какие-либо синяки появились, они могут оставаться видимыми немного дольше, но могут быть достаточно хорошо спрятаны под макияж.
        Пациенты должны пройти обследование у хирурга через пять-семь дней и снова через три недели. К тому времени большая часть припухлости уменьшится, но коррекция может все еще выглядеть преувеличенной. Хирурги обычно чрезмерно корректируют, что означает инъекцию большего количества жира, чем фактически необходимо, потому что от 25 до 30% пересаженных жировых клеток не выживают. Окончательный результат оценивается через три месяца. Затем хирург сделает фотографии для сравнения с теми, что были сделаны до процедуры. Второй сеанс может быть запланирован, чтобы восполнить любой дефицит в объеме.
        `,
          `Donor area: bruising, swelling, tenderness, up to 24 hours drainage of anaesthetic liquid.
        Treated area: bruising, swelling (especially the lips if treated), tenderness.
        The areas that have been treated will be rather swollen immediately after the operation, especially the lips if they have been treated. It is therefore important to use a cold pack and a compress in the first few hours to minimize the swelling. A cold pack is a freezer bag filled with ice cubes and water.
        The swelling will increase until about the third day, but will then gradually subside. After about a week to ten days patients feel confident about going out and resuming a normal social life. If any bruises have developed, they might remain visible for a little longer but can be hidden reasonably well with makeup.
        Patients should have a check-up with the surgeon after five to seven days and again three weeks later. By then most of the swelling will have subsided, but the correction may still look rather exaggerated. Surgeons usually over-correct, which means injecting more fat than is actually needed because 25 to 30% of the transplanted fat cells do not survive. The final result is assessed after three months. The surgeon will then take photographs to be compared with those taken before the procedure. A second session may be scheduled to top up any shortfall in volume.
        `
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [`Անհամաչափություն, անհավասարություն, գերշտկում և վարակ:`, `Асимметрия, неровности, чрезмерная коррекция и инфекция.`, `Asymmetry, irregularities, overcorrection, and infection.`]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Այտուցվածությունը սովորաբար սկսում է նվազել երրորդ օրվանից: Սոցիալական գործունեությունը կարող է վերսկսվել մոտ 1 շաբաթ անց, երբեմն որոշակի շպարի օգնությամբ:`,
          `Отечность обычно уменьшается с третьего дня, и социальные действия могут быть возобновлены примерно через неделю, иногда с помощью некоторого макияжа.

        `,
          `Swelling usually diminishes from the third day on, and social activities can be restarted after about one week, sometimes with the help of some make-up.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Խորը կնճիռների և ծալքերի շտկում, բուժված շեղումների շտկում: Բուժված հատվածների ծավալի մեծացում, ինչպիսիք են այտոսկրերը, այտերը և կզակը: Նշված հատվածի մաշկի որկի բարելավումը կարող է լինել դրական կողմնակի ազդեցություն: Շտկումը կարելի է մշտական համարել այն բանից հետո, երբ օրգանիզմը կլանում է ճարպի 20-50 տոկոսը`,
          `Коррекция глубоких морщин и складок. Исправление обработанных неровностей и вмятин. Увеличение объема обработанных участков, таких как скулы, щеки и подбородок. Улучшение качества вышележащей кожи может быть положительным побочным эффектом. После того, как организм усваивает процент жира (от 20 до 50%), коррекцию можно считать постоянной.

        `,
          `Correction of deep wrinkles and folds. Correction of the treated irregularities and dents. Volume augmentation of the treated areas such as cheekbones, cheeks, and the chin. Improved quality of the overlying skin can be a positive side effect. After the body absorbs a percentage of the fat (between 20 and 50%) the correction can be considered permanent.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 7,
    Heading: ['Լիպոսակցիա', 'Липосакция ', 'Liposuction'],
    SubHeading: [
      `Բարելավում է դեմքի և մարմնի ուրվագծերը՝ հեռացնելով անցանկալի ճարպային կուտակումները:`,
      ` Улучшает контуры лица и тела, удаляя нежелательные жировые отложения. `,
      `Improves facial and body contours by removing unwanted fat deposits.`
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Լիպոսակցիայի միջոցով հեռացվում են անցանկալի ճարպային հատվածները՝ կանյուլայի և  վակումային սարքի միջոցով: Լիպոսակցիան, այդ թվում տումեսցենտ և սուպերթաց եղանակները, սովորաբար կատարվում են հեռացման ենթակա ճարպային հատվածներում ֆիզիոլոգիական լուծույթի ներարկումից հետո, ինչն իր մեջ ներառում է տեղային անզգայացնող և ադրենալին՝ արյունահոսությունը նվազեցնելու համար: Լիպոսակցիայի այս մեթոդի առավելությունն անվտանգության բարձր աստիչան է, ճարպի հեշտ հեռացումը, ինչպես նաև հետվիրահատական անհարմարավետության նվազեցումը:
          Լիպոսակցիայի համար ամենատարածված հատվածներն են՝ կզակը, այտերը, վիզը, վերին բազուկները, կրծքերից վեր ընկած հատվածը, փորը, հետույքը, կոնքերը, ազդրերը, ծնկները. սրունքները:
          Կան մի քանի տարածված մեթոդներ, որոնցից են ավանդական մեթոդը, լազերային մեթոդը և ուլտրաձայնային մեթոդը: Ավանդական մեթոդի դեպքում ճարպի հեռացման համար օգտագործում է հատուկ խողովակ՝ կանյուլա, իսկ լազերային կամ ուլտրաձայնային մեթոդն օգտագործում է լազեր կամ ուլտրաձայնային էներգիա՝ ճարպը լուծելու նպատակով, այն հռացնելուց առաջ: Անհրաժեշտ է խորհրդակցել բժշկի հետ նախընտրելի մեթոդի ընտրության համար:
          `,
          ` Липосакция удаляет участки нежелательного жира с помощью трубки и вакуумного устройства. Методы липосакции, в том числе тумесцентные или супер-влажные, обычно выполняются после инфузии целевых жировых клеток физиологическим раствором, содержащим местный анестетик и адреналин, для уменьшения кровопотери. Преимущества этой техники липосакции включают повышенную безопасность, более легкое удаление жира, а также уменьшенный послеоперационный дискомфорт. Это также уменьшает послеоперационные синяки и отеки. Наиболее распространенными местами для липосакции являются подбородок, щеки, шея и плечи, область над грудью, живот, ягодицы, бедра, колени, икры и лодыжки. Обычно используются несколько методов, включая «Традиционную технику», «Лазерную технику» и «Ультразвуковую технику (UA)». Традиционная техника использует полую трубку для удаления жира, а лазерная и ультразвуковая техника использует лазерную или ультразвуковую энергиючтобы  растворить этот жир до его удаления. Посоветуйтесь со своим врачом о том, какая техника будет лучше для вас `,
          `Liposuction surgery removes areas of unwanted fat with a tube and a vacuum device. Liposuction techniques, including tumescent or super-wet, typically are performed after targeted fat cells are infused with a saline solution containing a local anesthetic and adrenalin to decrease blood loss. Benefits of this liposuction technique include increased safety, easier fat removal, as well as diminished postoperative discomfort. This also reduces post-operative bruising and swelling.
        The most common locations for liposuction are the chin, cheeks, neck, and upper arms, the area above the breasts, abdomen, buttocks, hips, thighs, knees, calves, and ankles.
        There are several techniques commonly used including the “Traditional Technique”, “Laser Technique,” and the “Ultrasonic Technique (UA).” The Traditional Technique utilizes a hollow tube to remove the fat and the Laser and Ultrasonic Technique utilizes laser or ultrasonic energy to dissolve that fat before it is removed. See your physician regarding which technique would be best for you.
        `
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [`1-2 ժամ կամ ավելի:`, `От одного до двух часов или больше.`, `One to two hours or more.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Կարող է կիրառվել ընդհանուր անզգայացում կամ ներերակային սեդացիա և տեղային անզգայացում`,
          `Может использоваться общая анестезия или внутривенная седация и местная анестезия. Стационарная / Амбулаторная `,
          `General anesthesia can be used or intravenous sedation and local anesthesia are used.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [`Ամբուլատոր միջամտություն է:`, `Это амбулаторная процедура. `, `This is an outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կաղմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Ժամանակավոր կապտություն, այտուցվածություն, փափկություն, ցավ կամ այրոցի զգացողություն:`,
          ` Временные синяки, отеки, онемение, болезненность или жжение. `,
          `Temporary bruising, swelling, numbness, soreness or burning sensations.
        `
        ]
      },
      {
        name: [' Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Վարակ/ բորբոքում/, ասիմետրիա/ անհամաչափություն/, պիգմենտացիայի փոփոխություններ /հիպո կամ հիպերպիգմենտացիա/ , մաշկի վնասվածք, արյան և հեղուկի լայնածավալ կորուստ:`,
          ` Инфекция, асимметрия, рябь кожи, изменения пигментации (гипо / гипер), повреждение кожи, задержка жидкости и / или чрезмерная потеря крови и жидкости. `,
          `Infection, asymmetry, rippling of the skin, pigmentation changes (hypo/hyper), injury to the skin, fluid retention and/or excessive loss of blood and fluids.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Բուժառուն սովորաբար վերադառնում է աշխատանքի 5-14 օր անց: Առավել ծանրաբեռնված գործունեությունը կարող է վերսկսվել 2-4  շաբաթ անց: Ամբողջական վերականգգնումն այտուցներից և կապտուկներից կարող է տևել 1-6 ամիս՝ կախված հեռացվող ճարպի քանակից և բուժված հատվածներից:`,
          `Пациент обычно возвращается на работу через пять-четырнадцать дней. Более напряженная деятельность может быть возобновлена через две-четыре недели. Полное выздоровление от отеков и ушибов может занять от одного до шести месяцев в зависимости от количества удаляемого жира и участков, которые были обработаны. `,
          `The patient usually returns to work after five to fourteen days. More strenuous activity may be resumed after two to four weeks. Full recovery from swelling and bruising may take one to six months depending upon the amount of fat that is removed and the areas that were treated.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Արդյունքը մշտական է և պետք է լրացվի ողջամիտ դիետայով և հետևողական վարժություններով:`,
          ` Эффект является постоянным и должен быть дополнен разумной диетой и последовательными упражнениями.`,
          `The effect is permanent and must be augmented with a sensible diet and consistent exercise.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 8,
    Heading: ['Ազդրի ձգում', 'Подтяжка бедер', 'Thigh Lift'],
    SubHeading: [``, `Улучшает внешний вид нижних конечностей.`, `Improves the appearance of the upper legs.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Ազդրի ձգումը պատկանում է վիրահատությունների այն տեսակին, որոնց ժամանակ հեռացվում են ոտքի վերին հատվածի /ազդրի/ ավելցուկային մաշկը և ճարպը՝ ուրվագծերը բարելավելու նպատակով:`,
          `Подтяжка бедер относится к различным операциям, которые удаляют кожу и жир из области верхней части ноги (бедра), чтобы улучшить контуры, удаляя объемные и рыхлые мягкие ткани.

        `,
          `A thigh lift refers to a variety of operations that remove skin and fat from the upper leg (thigh) area in order to improve contours by removing bulk and loose soft tissues.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [
          `2-4  ժամ՝ կախված հեռացման ենթակա հյուսվածքի քանակից: Սովորաբար պահանջվում է առնվազն մեկ դիրքային փոփոխություն, կրկնակի նախապատրաստում և վիրահատական դաշտի մշակում, քանի որ հիվանդներ շրջվում են առջևից հետ կամ հակառակը:`,
          `От двух до четырех с половиной часов в зависимости от количества удаляемой ткани. Обычно требуется, по крайней мере, одно изменение положения,  когда пациенты переключаются спереди назад и наоборот.`,
          `Two to four and one half hours depending on the amount of tissue to be removed. Usually requires at least one position change and re-prepping and draping as patients are switched from front to back or vice versa.`
        ]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [`Անզգայացումը կարող է լինել ընդհանուր կամ տեղային սեդացիայով:`, `Анестезия может быть общей или местной с седацией.`, `The anesthesia can be general or local with sedation.`]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [`Երկուսն էլ հավանական են`, `Оба варианта возможны.`, `Both options are possible.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Ամենատարածված կողմնակի ազդեցությունը հանդիսանում է կարերի անբավարարությունը աճուկային շրջանում, քանի որ հիվանդի շարժումների ժամանակ մեծ լարվածություն է առաջանում այդ շրջանի կարերի վրա։ Այս նույն պատճառով կարող են առաջանալ լայացած սպիեր:`,
          `Наиболее распространенным побочным эффектом является разрыв раны на пересечении линий шва в паху из-за чрезмерного растягивания плотного закрытия, вызванного движением пациента. Расширенные шрамы также могут возникать из-за напряжения в этих областях.`,
          `The most common side effect is wound breakdown at the intersection of suture lines in the groin because of excessive stretch of the tight closure caused by patient movement. Widened scars can also occur because of tension in these areas.
        `
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Նույնն են ինչ յուրաքանչյուր այլ վիրահատությունների ժամանակ: Թոքային էմպոլիզմը հանդիսանում է հազվադեպ բարդություն:`,
          `Аналогичен рискам, связанным с любой хирургией, включая инфекцию, гематому и сбор жидкости. Легочная эмболия является отдаленной возможностью.

        `,
          `Similar to risks associated with any surgery, including infection, hematoma and fluid collection. Pulmonary embolism is a remote possibility.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Անհրաժեշտ է սահմանափակել շարժումները 3-4 շաբաթների ընթացքում, այդ թվում ոտքերի տարածամն և ծալման սահմանափակում: Միջամտությունը նախընտրելի է անել տարվա ցուրտ ամիսներին, քանի որ կարևոր է հետվիարահատական հատուկ հագուստի կրելը:`,
          `Требуется от трех до четырех недель ограниченных движений, включая отсутствие разгибания ног или чрезмерного сгибания. Эту процедуру лучше всего проводить в более холодные месяцы года, потому что важна специальная послеоперационная одежда для поддержки.`,
          `Requires three to four weeks of restricted movement including no spreading of the legs or excessive flexion. This procedure is best done in colder months of the year because special post-operative garment wear for support is important.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Վիրահատության այս տեսակը լավ է տարվում և գնահատվում բուժառուի կողմից:  `,
          `Этот тип хирургии, как правило, хорошо переносится и ценится пациентами.`,
          `This type of surgery is generally well tolerated and appreciated by patients.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  // breast procedures
  {
    id: 9,
    Heading: ['Կրծքերի մեծացում', 'УвеличениеГруди', 'Breast Augmentation'],
    SubHeading: ['Բարելավում է կրծքերի չափը և տեսքը', 'Операция для увеличения и улучшение формы груди.', `Improves the size and appearance of the breasts.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          'Կրծքերի մեծացումը, որը կոչվում է նաև կրծքերի ընդլայնում, բարելավում է կրծքերի չափը և տեսքը՝ աղային կամ սիլիկոնե կրծքային իմպլանտների իմպլանտացիայի միջոցով, որոնք տեղադրվում են կրծքային մկանի տակ կամ վրա՝ բարելավելով կոսմետիկ տեսքը:',
          'Увеличение груди или аугментационнаямаммопластика позволяет увеличить размер и улучшить форму молочных желез путем установки физрастворных или силиконовых имплантатов на поверхность грудной мышцы или под нее.',
          `Breast augmentation, also called breast enlargement, improves the size and appearance of the breasts by implanting saline or silicone breast implants either under or over the chest muscle, thus producing a cosmetic enhancement.
        `
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Այս միջամտությունը տևում է մոտ 2 ժամ:', 'Приблизительно два часа.', `This procedure takes approximately two hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Ընդհանուր անզգայացում կամ կիրառվում է ներերակային սեդացիա՝ համատեղված տեղային անզգայացման հետ:',
          'Наркоз или местная анестезия в сочетании с внутривенной седацией. В обоих случаях пациент спит.',
          `A general anesthesia is administrated and the patient is completely asleep, or an intravenous sedation is used, combined with local anesthesia.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          'Երկուսն էլ հնարավոր տարբերակներ են՝ կախված վիրաբույժի նախընտրությունից',
          'Необходимость госпитализации зависит, главным образом, от предпочтений хирурга.',
          `Either inpatient or outpatient depending on the preference of the surgeon.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Թեթև, ժամանակավոր անհարմարավետություն, թեթև և չափավոր այտուցվածություն, պտուկի զգայունության փոփոխություն / ավելացում կամ նվազում/ և ժամանակավոր կապտածություն: Կրծքերը կարող են մի քանի շաբաթների ընացքում զգայուն լինել ստիմուլյացիայի նկատմամբ:',
          'Временный дискомфорт, небольшой или умеренный отек, изменение чувствительности сосков (увеличение/снижение), синяки. В течение нескольких недель может отмечаться болезненность или повышенная чувствительность при прикосновении к груди.',
          `Mild, temporary discomfort, mild to moderate swelling, a change in nipple sensation (either increased or decreased), and temporary bruising. Breasts may be sensitive to stimulation for a few weeks.
        `
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'և՛ մեկ կրծքի, և՛ երկուսի իմպլանտները կարող են հեռացվել կամ փոխարինվել այնպիսի խնդիրների պատճառով, ինչպիսիք են՝ դեֆլացին, իմպլանտի պատռվելը, իմպալնտի շուրջ սպիական հյուսվածքների ձևավորումը /կապսուլյար կոնտրակտուրա/, ինչը կարող է պատճառ հանդիսանալ կրծքում կարծրության և ձգվածության զգացողության համար, թմրածություն և/կամ վարակ/բորբոքում/: Մյուս ռիսկերնից են պտուկի կամ կրծքի մաշկի զգայունության ավելացումը կամ պակասումը, որը  երբեմն կարող է մշտական լինել:',
          'Возможно, потребуется удаление и/или переустановка одного или обоих имплантатов для решения такихпроблемкак: разрыв имплантата, его сдутие, формирование грубой рубцовой ткани вокруг имплантата (капсулярная контрактура), что приводит к болезненным ощущениям и значительному уплотнению груди, кровотечение, инфекционные осложнения. К другим возможным осложнениям относится увеличение/снижение чувствительности сосков или кожи груди, которое у некоторых пациенток носит постоянный характер.',
          `Either one breast implant or both may need to be removed and/or replaced to treat problems including: deflation, implant rupture, the formation of scar tissue around the implant (capsular contracture), which may cause the breast to feel tight or hard, bleeding and/or infection. Other risks are an increase or decrease in sensitivity of the nipples or breast skin, which occasionally may be permanent.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է վերադառնալ աշխատանքի մի քանի օրից: Նա պետք է խուսափի իր կրծքերի հետ ցանկացած ֆիզիկական շփումից մոտ 3-4 շաբաթ: Սպիերը կհարթվեն վիրահատությունից 3 ամսից մինչ 1 տարի անց՝ կախված անհատի օրգանիզմի յուրահատկություններից։',
          'Пациент может вернуться к работе через несколько дней после операции. Необходимо исключить любое физическое воздействие на область груди в течение 3-4 недель (исключением является ношение специального компрессионного белья). Рубцы бледнеют в сроки от 3-х месяцев до 2-х лет после операции (точные сроки зависят от особенностей организма пациента).',
          `The patient can return to work within a few days. She should avoid any physical contact with her breasts (excluding her bra) for approximately three to four weeks. Scars should fade and flatten anywhere from three months to two years after surgery, depending upon how the individual patient heals.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Արդյունքները տատանվում են բուժառուից բուժառու: Այնուամենայնիվ, ընդհանուր արդյունքը կրծքի չափի մեծացումն է՝ արտաքին տեսքի բարելավումով:',
          'Очень индивидуальны. В целом, эффект можно охарактеризовать как увеличение размера и улучшение формы груди.',
          `The outcome varies from patient to patient. However the overall effect is enhancement of breast size for improved appearance.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 10,
    Heading: ['Կրծքերի ձգում', 'ПодтяжкаГруди', 'Breast Lift'],
    SubHeading: ['Բարելավում է կրծքի ձևը', 'Улучшает форму груди.', `Improves breast shape.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Կրծքերի ձգման վիրահատությունը կոչվում է նաև մաստոպեկցիա, սրա ժամանակ հեռացնում է կրծքի շուրջ եղած ավելորդ մաշկը, որն առաջացել են հղիության ժամանակ կամ քաշի տատանման արդյունքում:
          Կրծքագեղձի իմպլանտները նույնպես կարող են օգտագործվել այս միջամտության հետ համատեղությամբ՝ ցանկալի արդյունքի հասնելու համար:
          `,
          'Подтяжка груди или мастопексия заключается в удалении избытков перерастянутой кожи, образовавшихся на груди после беременности или в результате значительных колебаний веса. В некоторых случаях для достижения наилучшего результата в сочетании с мастопексией возможна установка силиконовых имплантатов',
          `Breast lift surgery, also called mastopexy, removes excess skin in and around the breast that has been stretched during pregnancy or weight fluctuations. Breast implants may also be used in conjunction with this procedure to ach,ieve the desired result..`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ 2-3 ժամ:', 'Приблизительно 2-3 часа.', `Approximately two to three hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Կիրառվում է ընդհանուր անզգայացում: Միջամտությունը կարող է իրականացվել նաև ներերակային սեդացիայով, տեղային անզգայացմամբ:',
          'Обычно это наркоз, но возможна и местная анестезия с внутривенной седацией. И в том, и в другом случае пациентка спит.',
          `General anesthesia is administered and the patient is completely asleep. The procedure can also be performed under intravenous sedation and local anesthesia.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          'Երկուսն էլ հնարավոր են ՝ կախված բուժառուի առողջական վիճակից և բժշկի նախընտրությունից:',
          'Необходимость госпитализации зависит от состояния здоровья пациентки и предпочтений хирурга.',
          `Either is possible depending on the patient’s medical condition and the preference of the surgeon.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Հնարավոր են անցանկալի սպիացում՝ կելոիդային ձևավորմամբ, մաշկի կորուստ, վարակ/ բորբոքում/, պտուկների անհամաչափ դիրք, պտուկի և/կամ կրծքերի զգայունության մշտական կորստի հավանականություն:',
          'Образование синяков, отеки, легкий дискомфорт, онемение кожи груди или, напротив повышенная ее чувствительность, сухость кожи груди.',
          `Temporary bruising, swelling, some mild discomfort, numbness, and dry/tender breast skin.
        `
        ]
      },
      {
        name: ['', 'Риски', 'Risks'],
        value: [
          '',
          'Медленное заживление ран, в том числе с формированием келоидных рубцов. Кроме того, возможна частичная потеря кожи груди, инфекционные осложнения, асимметрия сосков, необратимая потеря чувствительности сосков и/или кожи груди.',
          `Unfavorable scarring with keloid formations is possible. In addition skin loss, infection, unevenly positioned nipples (asymmetry), and the possibility of permanent loss of feeling in the nipples and/or the breasts.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է վերադառնալ աշխատանքի մեկ կամ մի քանի շաբաթ անց և կարող է վերսկսել ծանրաբեռնված գործունեությունը 1 ամիս անց: Սպիերի լավացումը կարող է տևել  մի քանի ամսից մինչ 1 տարի:',
          'Пациент может вернуться на работу в течение первой недели после операции. Возобновление силовых нагрузок возможно через месяц. Окончательное формирование рубцов занимает от нескольких месяцев до одного года.',
          `The patient can return to work within one week or more and may resume strenuous activities after one month. The fading of scars may take several months to one year.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Արդյունքները տատանվում են կախված բուժառուից:
          Այլ գործոններ, որոնք կարող են ազդել արդյունքների վրա՝ ծանրություն ուժը, հղիություն, ծերացում և քաշի փոփոխութուն: Սրանք գործոններ են, որոնք կարող են հանգեցնել նոր պտոզի։
          `,
          'Результаты индивидуальны. Факторы, влияющие на результат: сила тяжести, беременность, старение, изменение массы тела – все это может привести к повторному провисанию груди. Результат может быть более долговечным при одномоментной установке имплантатов, которые дают дополнительную опору тканям груди.',
          `The outcome varies from patient to patient. Other factors that may influence results are: gravity, pregnancy, aging, and weight changes which may cause new sagging. Results may last longer or be enhanced when breast implants are inserted as part of the procedure adding support to the newly positioned breast tissue.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 11,
    Heading: ['Կրծքերի փոքրացում', 'Уменьшение Груди', 'Breast Reduction'],
    SubHeading: [
      'Փոքրացվում է կրծքերի չափը և բարելավվում է ֆիզիկական և էմոցիոնալ ախտանիշները, որոնք առաջանում են շատ մեծ կրծքերի պատճառով',
      'Уменьшает размер груди и избавляет пациента от физического и психического дискомфорта, связанного с очень большим размером молочных желез.',
      `Reduces breast size and improves physical and emotional symptoms caused by very large breasts.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Կրծքերի փոքրացման վիրահատությունը, կոչվում է նաև փոքրացնող մամոպլաստիկա, սրա ժամանակ փոքրացվում է կրծքի չափը և բարելավվում է ձևը:
          Որպես կանոն, կանայք, ովքեր դիմում են այս միջամտության համար, ունեն իրենց կրծքերի քաշի և ձևի մեծության հետ կապված ախտանշաններ: Այս ախտանշաններից են մեջքի և պարանոցի ցավերը և ուսերի վրա կրծկալի հետքերի առկայությունը: Կտրվածքները կախված են կրծքերի նախնական չափից և վիրահատությունից հետո ակնկալվող չափից:
          Կտրվածքը կատարվում է պտուկի և արեոլայի շուրջ, որն ուղեկցվում է արեոլաի ներքևում ուղղահայաց կտրվածքով, ստորկրծքային ծալքի հորիզոնական կտրվածքով կամ առանց դրա: Կարճ սպիի մեթոդը հաճախ կիրառվում են կրծքերի փոքրացման վիրահատության շամանակ և թույլ է տալիս չափի գերազանց փոքրացում և ձևի բարելավում՝ միաժամանակ սահմանափակելով կտրվածքի չափերը:
          Որոշ դեպքերում, շատ մեծ կրքերի փոքրացման համար, երբեմն  կարիք է լինում հեռացնել պտուկարեոլային կոմպլեքսը, և վերապատվաստել այն նոր տեղում որպես ազատ աուտոտրանսպլանտատ /գրաֆտ/: Պտուկ-արեոլային կոմպլեքսի հեռացումը և վերապատվաստումը հանգեցնում են պտուկի զգայունության կորստի և կրծքով կերակրելու անկարողության:
          `,
          `Уменьшающая или редукционная маммопластика позволяет уменьшить молочные железы и улучшить их форму. Обычно женщины, обращающиеся за этой операцией, страдают рядом физических симптомов, связанных с весом молочных желез. К таким симптомам относятся боль в спине, шее, а также отпечатки лямок бюстгальтера на плечах. Форма и протяженность разрезов зависят от размера груди до операции и от желаемого размера груди после.
          Обычно делается разрез вокруг ареолы, затем добавляется вертикальный компонент ниже ареолы и, в некоторых случаях, горизонтальный компонент в борозде под грудью. Методики редукции груди с коротким рубцом весьма распространены и позволяют значительно уменьшить размер молочных желез, улучшить их форму, при этом не оставляя слишком длинных рубцов на коже. Если грудь до операции очень большая, в некоторых случаях требуется полное отделение соска с ареолой, которые в дальнейшем помещаются обратно на холм молочной железы и приживаются как свободный трансплантат. Этот прием приводит к потере чувствительности соска, а также невозможности грудного вскармливания в дальнейшем.
          `,
          `Breast reduction surgery, also referred to as reduction mammoplasty, reduces the size and improves the shape of the breasts. Typically, women who are candidates for this procedure have physical symptoms related to the weight or shape of their breasts. These symptoms include back pain, neck pain, and bra strap grooves in the shoulders. The incisions vary based on the breast size before the operation and the final post-operative size.
        An incision is made around the nipple and areola accompanied by a vertical incision below the areola with or without a horizontal incision made in the crease below the breast. Short scar techniques are frequently applicable in breast reduction surgery and allow excellent reduction of size with improved shape while limiting the extent of the incisions.
        For reduction of very large breasts, in some cases the nipple and areola may need to be surgically removed and reapplied as a graft. Removing and reapplying the nipple/areola tissue will result in the loss of nipple sensation and the inability to breastfeed.
        `
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: [
          'Միջամտությունը սովորաբար պահանջում է 2-4 ժամ՝ կախված ըտրված մեթոդից և կրծերի չափից:',
          'Операция обычно занимает 2-4 часа. Продолжительность зависит от исходного размера молочных желез и от выбранной методики.',
          `The procedure usually requires two to four hours of operating time depending on the technique chosen and the size of the breasts.`
        ]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Սովորաբար միջամտությունը կատարվում է ընդհանուր անզգայացմամբ: Փոքր կրճատումները կարող են իրականացվել տեղային անզգայացմամբ համակցված ներերակային անզգայացման հետ:',
          'Обычно это наркоз в сочетании с инфильтрацией зоны операции раствором местного анестетика. Небольшие редукции могут выполняться под внутривенной седацией.',
          `The procedure is typically performed under general anesthesia supplemented with local anesthesia. Smaller reductions can be performed under intravenous sedation without the need for general anesthesia.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          'Կախված կրծքերի չափից, անզգայացման ընտրված ձևից և վիրահատական միջամտության տևողությունից, բուժառուն կարող է տուն վերադառնալ հենց վիրահատության օրը կամ 2-3 օր անց:',
          'В зависимости от исходного размера груди, вида обезболивания и продолжительности операции, пациентка может идти домой в день операции, либо остаться на ночь в послеоперационном отделении клиники.',
          `Depending on the size of the breasts, type of anesthesia selected, and length of the surgical procedure, patients may return home on the same day as their surgery or spend the night at an aftercare facility or hospital.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: ['Երկարատև այուցվածություն և վերքերի երկրորդային լավացում', 'Продолжительные отеки и длительное заживление ран.', `Prolonged swelling and delayed healing.`]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Ռիսկերը, որոնք ասոցացվում են կրծքերի փոքրացման հետ, ներառում են՝ անբերանպաստ սպիացում, պտուկի զգայունության կորուստ, կրծքով կերակրման անկարողություն, պտուկի և կրծքի հյուսվածքի կորուստ, չբավարող ձև և էսթետիկ նպատակներին հասնելու ձախողում/ անհնարինություն:',
          'Формирование грубых рубцов, потеря чувствительности соска, потеря способности к грудному вскармливанию, потеря соска и/или ткани молочной железы, неэстетичная форма груди.',
          `Risks associated with breast reduction include: unfavorable scarring, loss of nipple sensation, loss of ability to breastfeed, loss of nipple and breast tissue, unsatisfactory shape, and failure to achieve aesthetic goals.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Սովորաբար վերականգնումը պահանջում է 1-2 շաբաթ: Մեծամասամբ բուժառուներն այդ ժամանակահատվածում վերադառնում են իրենց նորմալ գործունեությանը: Ծանրաբեռնված ֆիզիկական գործունեությունը խորհուրդ չի տրվում վիրահատությունից հետո 3-6 շաբաթների ընթացքում:',
          'Чтобы прийти в себя после операции обычно требуется 1-2 недели. Большинство пациенток возвращаются к нормальной жизни в эти сроки. Силовыенагрузкиследуетограничить в первые 3-6 месяцевпослеоперации.',
          `Typically recovery requires one to two weeks. Most patients return to normal activities within that period of time. Strenuous physical activities are discouraged for three to six weeks after the surgery.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Մամոպլաստիկայի ենթարկված բուժառուների մեծամասնությունը գոհ են կրծքի չափից և ձևից, ցավի և անհարմարավետության նշանների նվազումից, որոնք զգալի շատ էին կրծքի մեծ քաշի պատճառով: Կրծքերի փոքրացումը հեշտացնում է ֆիզիկական գործունեությունը/ ակտիվությունը/ և բուժառուները վայելում են իրենց նոր արտաքին տեսքը և հնարավորությունը հագնել շորեր, որոնք անհարմարավետ էին կամ ոչ գրավիչ մինչ վիրահատությունը:',
          'Большинство пациенток, перенесших редукционную маммопластику, довольны размером и формой своей груди. Симптомы, связанные с большим весом груди, такие, как боль в спине и дискомфорт при ношении белья, после операции исчезают. У женщин появляется больше возможностей для занятий спортом , им нравится их новая фигура и часто они обновляют гардероб, покупая вещи, которые не могли позволить себе носить до операции.',
          `Most patients who undergo a reduction mammoplasty are pleased with the size and the shape of their breasts and are delighted with the improvement and lessening of the symptoms of pain and discomfort that they experienced due to the weight of their breasts. Breast reduction makes physical activities easier and patients enjoy their new appearance and ability to wear clothing that was uncomfortable or unattractive before the surgery was performed.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 12,
    Heading: ['Տղամարդկաց կրծքերի փոքրացում', 'Уменьшение Грудных Желез У Мужчин', 'Male Breast Reduction'],
    SubHeading: [
      'Փոքրացնում է գերաճած կուրծքը և պտուկները՝ կրծքերին համապատասխան տեսք հաղորդելու նպատակով:',
      'Операция для уменьшения чересчур развитых грудных желез и сосков у мужчин.',
      `Reduces overly developed male breasts and nipples to provide a masculine chest appearance..
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          'Տղամարդկանց կրծքերի փոքրացման վիրահատության ժամանակ փոքրացնվում է գերաճած տղամարդկային կրծքերը և պտուկները՝ լիպոսակցիայի և/կամ վիրահատական ճանապարհով հեռացնելով ավելորդ  գեղջային կամ ճարպային հյաուսվածքը:',
          'Суть процедиру в удалении чересчур развитой грудной железы у мужчин путем липосакции и/или прямого иссечения избыточной железистой ткани.',
          `Male breast reduction surgery reduces overly developed male breasts and nipples using liposuction and/or by surgically removing excess glandular tissue.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ մեկ ու կեսից երեք ժամ:', 'Приблизительно от часа-полутора до трех часов.', `Approximately one and one-half to three hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Կիրառվում է ընդհանուր անզգայացում կամ ներեակային սեդացիա , ինչպես նաև տեղային անզգայացում:',
          'Наркоз, либо местная анестезия в сочетании с внутривенной седацией.',
          `Either general anesthesia is used or intravenous sedation and local anesthesia are used.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Կախված անզգայացման տեսակից:', 'Не обязательна.', `This is an outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Հնարավոր են ժամանակավոր կապտուկներ, այտուցվածություն, թմրածություն, ցավ և/կամ այրոց:',
          'Временные синяки, отеки, онемение, болезненность и/или чувство жжения в послеоперационной области.',
          `Temporary bruising, swelling, numbness, soreness, and/or a burning sensation are possible.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Վարակ, մաշկի վնասվածք, մաշկի կախվածություն և թուլություն, ասիմետրիա, պիգմենտացիոն փոփոխություններ, ավելորդ սպիագոյացում, հյուսվածքների հեռացման պարագայում պտուկի զգայունության կորուստ, ուրվագծերի անհավասարոււթյուն և որոշ դեպքերում կրկնակի վիրահատության անհրաժեշտություն՝ հավելյալ հյուսվածքների հեռացման համար:',
          'Инфицирование, скопление жидкости в послеоперационной области, повреждение кожи, складчатость или провисание кожи, асимметрия, изменения пигментации, образование грубых рубцов, потеря чувствительности соска, неровности контура, а иногда – необходимость повторной процедуры для удаления остаточной ткани и достижения полной коррекции.',
          `Infection, fluid build-up, injury to the skin, rippling or looseness of the skin, asymmetry, pigmentation changes, excessive scarring if tissue was cut away, loss of nipple sensation, contour irregularities and in some instances the need for a second procedure to remove additional tissue is required.`
        ]
      },
      {
        name: [' Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Բուժառուն կարող է վերադառնալ աշխատանքի 6 օր անց; Առավել ծանրաբեռնված գործունեությունը կարող է վերսկսել 2-3 շաբաթ անց:
          Այտուցերի և կապտուկների մեծ մասը կանցնեն 3-6 ամիս անց:
          `,
          'Пациент может возвращаться на работу через неделю после операции. Силовые нагрузки возможны через 2-3 недели. Синяки и отеки окончательно рассосутся через 3-6 месяцев.',
          `The patient may go back to work after seven days. More strenuous activity may be resumed after two to three weeks. Most of the swelling and bruising will disappear after three to six months.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Մշտական է, սակայն քաշի ավելացումը կարող է պատճառ հադիսանալ կրծքագեղձի մեծացման:',
          'Стойкие, однако значительный набор веса может вновь привести к увеличению грудных желез.',
          `Permanent, although subsequent weight gain may cause the breast area to once again become larger.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 13,
    Heading: ['Կրկնակի կրծքի վիրահատություն', 'Повторные Операции На Груди', 'Revision Breast Surgery'],
    SubHeading: [
      'Բարելավում կամ ուղղում է կրծքերի մեծացման նախորդ վիրահատության արդյունքները:',
      'Улучшает или корректируют результаты предыдущих маммопластик.',
      `Improves or corrects the results of previous breast enhancement surgery.
    `
    ],

    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Կրծքագեղձի կրկնակի վիրահատության ամենատարածված պատճառներից է իմպլանտի դեֆլիացիան, իմպլանտի փոխարինումը / չափը կամ տեսակը/, կապսուլյար կոնտրակտուրան, իմպլանտի ոչ ճիշտ տեղակայումը, դաբլ-բաբլ /double-bubble/ դեֆորմացիան կամ այս խնդիրների համակցությունը: Երբ կրծքի իմպլանտը տեղադրվում է, նրա շուրջ ձևավորվում է կապսուլա՝ որպես ավանդական բուժման բնական գործընթաց: Կապսուլան երբեմն կարող է ձգել կամ սեղմել իմպլանտին՝ ստեղծելով կրծքի աղավաղված ձև:
          Կրկնակի վիրահատության նպատակն է օգնել վերականգնել առաջացած թերությունները և գրավիչ արտաքին տեսքը:
          `,
          'К наиболее частым причинам повторных операций на груди относятся «сдутие» имплантатов, необходимость замены имплантатов (смена размера или типа), капсулярная контрактура, смещение имплантатов, деформация «double-bubble» (двойная складка в нижней части груди), а также сочетание этих факторов. После установки имплантата, вокруг него формируется рубцовая капсула, что является отражением нормальных процессов заживления. Иногда эта капсула может сокращаться, сжимая имплантат и деформируя тем самым грудь. Цель повторной операции – восстановить эстетичный контур груди и придать ей более привлекательный вид.',
          `The more common reasons for seeking revision breast surgery are implant deflation, implant exchange (size or type), capsular contracture, implant malposition, double-bubble deformity, or a combination of these issues. When a breast implant is inserted, a scar forms around it as part of the natural healing process, called a capsule. The capsule may sometimes tighten and compress the implant creating a distorted breast shape. The goal of revision surgery is to help restore a more youthful contour and attractive appearance`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['1-2 ժամ', 'От часа до двух, в зависимости от причины повторной операции.', `One to two hours, depending on the condition to be treated.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Կարող է կիրառվել տեղային անզգայացում և ներերակային սեդացիա, չնայած՝ ընդհանուր անզգայացումը կարող է ավելի ցանկալի լինել:',
          'Возможна местная анестезия в сочетании с внутривенной седацией, однако лучше использовать наркоз.',
          `Local anesthesia and intravenous sedation may be used, although general anesthesia may be more desirable.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Երկուսն էլ՝ կախված բուժառուի նախապատվությունից և վիրահատության ծավալից', 'Зависит от типа операции и предпочтений пациентки.', `Either, depending on patient preference.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Ի սկզբանե կարող է լինել որոշակի գունավորում և այտուցվածություն, պտուկի կամ կրծքագեձի զգայունության փոփոխություն:',
          'Покраснение и отек, изменение чувствительности соска и кожи груди.',
          `Discoloration and swelling may occur initially, changes in nipple or breast sensation.  `
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Ռիսկերը ներառում են անզգայացման կողմնակի ազդեցություններ, արյան կուտակում, որը կարող է հեռացվել վիրաբուժական ճանապարհով և վարակ:',
          'Неблагоприятные реакции на анестезию, образование скоплений крови, которые надо эвакуировать хирургическим путем, инфицирование.',
          `Risks include adverse reactions to anesthesia, blood accumulation that may need to be drained surgically, and infection.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Կախված աշխատանքի տեսակից բուժառուն կարող է վերադառնալ աշխատանքի 6-10 օրվա հետո: Պետք է կրծքերի հստակ խնամք լինի վիրահատությունից հետո  առնվազն մեկ ամիս տևողությամբ:',
          'Пациенты обычно возвращаются к работе через 7-10 дней после операции (точные сроки зависят от характера выполняемой работы). С грудью нужно обращаться бережно в течение по крайней мере первого месяца после операции.',
          `The patient should be able to return to work within seven to ten days depending on the type of work. Special care must be taken to be gentle with your breasts for at least one month after surgery.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Ընդհանուր առմամբ կայուն է: Այնուամենայնիվ, ծանրությունը և ծերացման հետևանքներն ի վերջո կփոխեն գրեթե յուրաքաանչյուր կնոջ կրծքի չափը և ձևը: ',
          'Зависят от степени растянутости собственных тканей груди, особенно если с момента предыдущей операции пациентка рожала или худела. Обычно результаты стабильные. Однако сила тяжести и процессы старения неизбежно меняют форму груди практически любой женщины.',
          `Depends on the patient’s breast laxity or sagginess after having had children or losing weight. Generally stable. However, gravity and the effects of aging will eventually alter the size and shape of virtually every woman’s breasts.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  // face and head procedures
  {
    id: 14,
    Heading: ['Բլեֆարոպլաստիկա', 'Блефаропластика(пластика век)', 'Blepharoplasty (Eyelid Surgery)'],
    SubHeading: [
      'Ձգվում է վերին կոպերի կախված մաշկը և նվազեցվում է աչքերի տակ գոյացած փափուկ պարկերը:',
      'Операция, для устранениянависающих избытков кожи на верхнем веке иизбавление от мешков под глазами.',
      `Tightens drooping upper eyelid skin and reduces puffy bags below the eyes.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          'Բլեֆարոպլաստիկան  կոպերի վիրահատությունը երիտասարդացնում է վերին և ստորին կոպերը՝ հեռացնելով ավելցուկային ճարպը, մաշկը և մկանները:',
          'Блефаропластика (пластика век) омолаживает верхние и нижние веки путем удаления избыточной кожи, жира и перерастянутой мышечной ткани.',
          `Blepharoplasty (eyelid surgery) rejuvenates the upper and lower eyelids by removing excess fat, skin and muscle.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ 2 ժամ', 'Около двух часов.', `Approximately two hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Սովորաբար օգտագործվում է ներերակային հանգստացում, սեդացիա և տեղային անզգայացում:',
          'Общая анестезия или местная анестезия с внутривенной седацией.',
          `General anesthesia or intravenous sedation and local anesthesia are used.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Սա ամբուլատոր միջամտություն է:', 'Это амбулаторная процедура.', `This is an outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Ժամանակավոր անհարմարավետության զգացում, կոպերի շրջանում ձգվածության զգացողություն, այտուցվածություն կամ կապտուկներ:Առաջին մի քանի շաբաթների ընթացքում կարող է լինել գերհոգնածություն և առատ արցունքահոսության զգայունություն: Հնարավոր է նաև ժամանակավոր չորություն, այրոց կամ աչքերի քոր, սակայն սրանք հազվադեպ հանդիպող կողմնկի ազդեցություններ են:',
          'Временный дискомфорт, чувство «натяжения» в области век, такжесиняки и отеки. В течение первых нескольких недель после операции может наблюдаться слезоточивость и повышенная чувствительность к свету. Также временно может быть сухость, жжение или зуд в глазах (эти явления возникают редко).',
          `Temporary discomfort, feeling of “tightness” in the eyelid area, swelling or bruising. Excessive tearing and sensitivity to light for the first few weeks should be expected. Temporary dryness, burning, or itching of eyes may also occur but these side effects are rare.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Ժամանակավոր խամրածություն կամ կրկնակի տեսողություն, վարակ, արյունահոսություն, աչքերի չորություն, սպիտակ կետիկների ձևավորում, աննշան անհամաչափություն առողջացման կամ սպիացման ընթացքում, դժվարություն աչքերն ամբողջությամբ փակելիս , ինչը հազվադեպ է մշտական լինում: Տեսողության մշտակն կորուստը ռիսկ է, սակայն դա չափազանց հազվադեպ է լինում:',
          'Временная нечеткость видения или двоение в глазах, инфицирование, кровотечение, отек в области углов глаз, сухость глаз, асимметричное заживление рубцов, временный дискомфорт при зажмуривании, заниженное положение нижнего века, требующее повторной операции. Случаи необратимой потери зрения очень редки.',
          `Temporary blurred or double vision, infection, bleeding, swelling at the corners of the eyelids, dry eyes, formation of whiteheads, slight asymmetry in healing or scarring, difficulty in closing eyes completely (which is rarely permanent), and a lowered position of the lower eyelid of the lower lids which may require further surgery. Permanent loss of vision is a risk but this is extremely rare.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է սկսել կարդալ մետ 2-3 օր անց և կարող է ակնկալել, որ աշխատանքի կվերադառնա մոտ 5 կամ 10 օրերի ընթացքում: Կոնտակտային լինզաների օգտագործումը կարող է վերսկսել 2 շաբաթ անց / բժշկի վերագնահատումից հետո/: Բուժառուն չպետք է ալկոհոլ օգտագործի վիրահատությունից հետո: Լարված գորժունեությունը և ալկոհոլի օգտագործումը կարող է վերսկսել 3 ամսից: Կապտուկները և այտուցվածությունը կվերանան մի քանի շաբաթ անց:',
          'Пациент можетначатьчитать через 2-3 дня после операции, а вернуться к работечерез 5-10 дней. Ношение контактных линз можно через 2 недели после операции, но только после повторногоосмотра хирурга. После операции нельзя употреблять алкоголь. Силовые нагрузки и потребление алкогольных напитков возможны через 3 недели после операции. Синяки и отеки проходят через несколько недель.',
          `The patient may begin reading after about two to three days and can expect to return to work at approximately five to ten days. Use of contact lens may be resumed after two weeks (upon re-evaluation by the physician). The patient should not consume alcohol after the surgery. More strenuous activities and alcohol consumption may be resumed after three weeks. Bruising and swelling should be gone after several weeks.`
        ]
      },
      {
        name: ['Արդյունքեր', 'Результаты', 'Results'],
        value: [
          'Ոմանց պարագայում այս վիրահատության արդյունքում առաջացած բարելավումը կտևի մի քանի տարի, բայց կարող է լինել նաև մշտական:',
          'Очень индивидуальны: у некоторых пациентов сохраняются на несколько лет, у других пожизненно.',
          `For some, the improvements from this procedure will last several years and may be permanent for others.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 15,
    Heading: ['Դեմքի ձգում  ամբողջությամբ', 'Полная подтяжка лица', 'Face Lift – Full'],
    SubHeading: [
      ' Բարելավում է դեմքի կախված մաշկը, ստորին ծնոտի շրջանի և պարանոցի կախված մաշկը:',
      'Позволяет подтянуть провисающую кожу лица и шеи, и в нижней зоне лица.',
      `Improves sagging facial skin, jowls and loose neck skin.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          'Դեմքի ամբողջական կամ մասնակի ձգումը բարելավում է նաև մաշկի վիճակը և դեմքի ստորին 2/3-իհյոււսվածքները, ականջներից մինչև այտերը և ցած դեպի ծնոտի գիծը և դա տեղի է ունենում ավելցուկային ճարպի հեռացման, մկանների ձգման և մաշկի վերատեղադրման միջոցով:',
          'Полная подтяжка позволяет подтянуть дряблую кожу и подлежащие ткани нижних двух третей лица. Разрезы располагаются перед ушами; из этих разрезов хирург получает доступ к щекам и линии нижней челюсти. Удаляются избытки жира, подтягиваются мышцы, кожа перераспределяется по их поверхности, ее избытки иссекаются.',
          `A full or complete facelift improves the skin and tissues of the lower two-thirds of the face, from the ears, across to the cheeks, and down to the jaw line, by removing excess fat, tightening muscles and re-draping skin.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ 4 ժամ:', 'Около четырех часов.', `Approximately four hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          '',
          'Обычно это общийнаркоз. По желанию пациента можно применить местную анестезию с внутривенной седацией.',
          `Usually general anesthesia is used or the patient may elect to have sedation and local anesthesia.`
        ]
      },
      {
        name: ['Ստացիոնար/ Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          'Սովորաբար սա ամբուլատոր միջամտություն է, այնուամենայնիվ որոշ բուժառուներ կարող են կարճաժամկետ հոսպիտալացվել:',
          'Операция может выполняться амбулаторно, но для некоторых пациентов все же предпочтительна госпитализация.',
          `Usually this is an outpatient procedure, although some patients may require a short hospital stay.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Ժամանակավոր կապտուկներ, այտուցվածություն, մաշկի թմրածություն և փափկություն, ինչպես նաև գերզգայունություն և չոր մաշկ: Տղամարդկանց համար մշտական անհրաժեշտություն է սափրել ականջների հետևում, որտեղ տեղափոխվում է մաշկի այն հատվածը, որտեղ մորուք է աճում։',
          'Временные синяки, отеки, онемение или повышенная чувствительность кожи, а также чувство натяжения и сухость кожи. У мужчин появляется постоянная необходимость бриться за ушами, так как сюда перемещается кожа щек, на которой растут волосы.',
          `Temporary bruising, swelling, numbness and tenderness of the skin, as well as a tight feeling and dry skin. For men, permanent need to shave behind ears, where beard-growing skin is repositioned.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Զգայունություն կամ դեմքի մկանների նյարդավորումն ապահովող նյարդերի վնասվածք, սովորաբար ժամանակավոր է լինում, բայց հազվադեպ կարող է լինել նաև մշտական, վարակներ, արյունահոսություն, վերքերի ուշ լավացում, կոպիտ սպիերի ձևավորում, անհամաչափություն և մազերի աճման գծի փոփոխություն:',
          'Повреждение чувствительных и двигательных нервов лица (нарушения обычно бывают временными), инфицирование, кровотечение, медленное заживление ран, формирование грубых рубцов, асимметрии, изменение положения границы роста волос.',
          `Injury to the nerves that control facial muscles or feeling (which is usually temporary but in rare cases may be permanent), infection, bleeding, poor healing, excessive scarring, asymmetry and a change in the hairline.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է վերադառնալ աշխատանքի 10-14 օր հետո: Առավել ծանրաբեռնված գործունեությունը կարող է վերսկսվել 2 կամ ավել շաբաթներ անց: Կապտուկները կարող են անհայտանալ 7-9 օր անց:Վիրահատությունից հետո մի քանի ամիսների ընթացքուքում պետք է սահմանափակել արևի ազդեցութունը: Խորհուրդ է տալիս օգտագործել արևապաշտպան քսուք, ինչը պաշտպանում է ուլտրամանուշակագույն ճառագայթներից/UVA, UVB/:',
          'Пациент можетвернуться к работе на 10-14 сутки. Возобновление силовых нагрузок возможно не ранее, чем через две недели с момента операции. Синяки рассасываются за7-10 дней. После операции необходимо исключить нахождение под прямыми солнечными лучами на несколько месяцев. Рекомендуется использование солнцезащитного крема, защищающего как от UVA, так и от UVB спектров ультрафиолетового излучения.',
          `The patient may return to work after ten to fourteen days. More strenuous activity may be resumed after two weeks or more. Bruising should begin to disappear after seven to ten days. Sun exposure must be limited for several months after surgery. The use of a sun block that provides both UVA and UVB (ultraviolet) protection is recommended.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Կարելի է ակնկալել, որ օպտիմալ արտաքին տեսքը պահպանում է 5-10 Տարի:
       `,
          'В большинстве случаев эффект от подтяжки лица сохраняется на 5-10 лет.',
          `Most facelifts can be expected to maintain optimum appearance for five to ten years.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 16,
    Heading: ['Դեմքի ձգում- մինի /Midface', 'Подтяжка Лица – Мини-Подтяжка Средней Зоны Лица', 'Facelift – Mini/Midface'],
    SubHeading: [
      `Երիտասարդացնում է դեմքի կետրոնական  հատվածը`,
      'Омолаживает центральную часть лица.',
      `Rejuvenates the central section of the face.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Մինի կամ midface ձգումը երիտասարդացնումէ դեմքի կենտրոնական հատվածը՝ ստորին կոպից մինչև վերին շուրթ, հյուսվածքների վերատեղադրման և փափուկ հյուսվածքների ծավալի ավելացման միջոցով, որոնք տարիքի հետ պակասում են դեմքի միջին մասում՝ արևի ազդեցությունից և ծանրությունից:`,
          'Мини-подтяжка или подтяжка средней зоны лица дает эффект омоложения центральной части лица – от нижнего века до верхней губы. Это достигается путем подтягивания провисающих мягких тканей и увеличения их объема в средней зоне. С возрастом происходит потеря этого объема, обусловленная воздействием внешних факторов, в том числе силы тяжести и солнечного излучения.',
          `The mini or mid-facelift rejuvenates the central section of the face, from the lower eyelid to the upper lip, by repositioning sagging tissues and enhancing the volume of soft tissue that is lost in the midface with age, sun exposure and gravity.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Միջամտությունը տևում է մոտ 1-2 ժամ:', 'Приблизительно 1-2 часа.', `The procedure takes approximately one to two hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Կիրառվում է ընդհանուր անզգայացում կամ ներերակային  սեդացիա, ինչպես նաև՝ տեային անզգայացում:',
          'Наркоз или местная анестезия с внутривенной седацией.',
          `General anesthesia or intravenous sedation and local anesthesia are used.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: [
          'Կարող է լինել ինչպես ստացիոնար, այնպես էլ ամբուլատոր միջամտություն՝ կախված այն բանից, թե միաժամանակ կատարվու՞մ են  արդյոք այլ միջամտություններ ևս:',
          'Необходимость госпитализации зависит от того, проводится ли подтяжка средней зоны отдельно, или в сочетании с другими операциями.',
          `May be either an inpatient or outpatient procedure depending upon whether other procedures are being performed at the same time.`
        ]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցությոուններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Ժամանակվոր այտուցվածություն, թմրածություն, դիմային մկանների թուլություն կամ աչքերի չորություն:',
          'Временные отеки, онемение кожи, слабость лицевых мышц, сухость глаз.',
          `Temporary swelling, numbness, weakness of facial muscles or dry eyes.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Հնարավոր է վարակ, կայուն/տևական այտուցվածություն, կայուն չոր աչքեր, մկանների մշտական թուլություն կամ որոշ հատվածներում մշտական թմրածություն:',
          'Инфицирование, стойкие отеки, стойкая сухость глаз, стойкий паралич лицевых мышц и потеря чувствительности кожи.',
          `Infection, persistent swelling, persistent dry eyes, permanent muscle weakness or areas of permanent numbness are possible.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է վերադառնալ աշխատանքի 7-14 օրվա ընթացքում: Առավել լարված գործունեությունը կարող է վերսկսվել 3 ամիս անց:',
          'Пациенты могут возвращаться к работе на 7-14 сутки после операции. Возобновление силовых нагрузок возможно через 3 недели.',
          `The patient may resume work in seven to fourteen days. More strenuous activities may be resumed after three weeks.`
        ]
      },
      {
        name: ['Արդյուննքներ', 'Результаты', 'Results'],
        value: ['Արդյունքները սովորաբար մշտական են:', 'Операция дает стойкий результат.', `The results are usually permanent.`]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 17,
    Heading: ['Դիմային իմպլանտներ', 'Лицевые Имплантаты', 'Facial Implants'],
    SubHeading: ['Ապահովում է դեմքի առավել ներդաշնակ տեսքը', 'Делает лицо более гармоничным и пропорциональным.', `Provides a more harmonious appearance to the face`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          'Դիմային իմպլանտները պինդ և նախապես ձևավորված, եռաչափ օբյեկտներ են, որոնք օգտագործվում են տարբեր հատվածների  չափի և արտաքին տեսքի բարելավման համար՝  ներառյալ ծնոտը, կզակը, քիթը, այտերը և հարքթային շրջանը: Դիմային իմպլանտի տեղադրման վիրահատությունն ապահովում է դեմքի ներդաշնակությունը:Գոյություն ունեն իմպլանտների տարբեր ձևեր տեսակներ` կախված ծավալի ընդլայնման հատվածից:',
          'Для изменения контуров различных частей лица (подбородка, нижней челюсти, носа, щек и др.) используются твердые трехмерные лицевые имплантаты с заданной формой. Установка таких имплантатов позволяет придать лицу более гармоничные очертания. Имплантаты могут быть изготовлены из различных материалов. Форма имплантата зависит от области лица, для которой он предназначен. ',
          `Facial implants are solid, pre-shaped, three-dimensional objects used to improve the size and appearance of different areas including the chin, jaw, nose, cheeks and beside the nose (paranasal). Facial implant surgery provides a more harmonious appearance to the face. There are different types of implant material used to achieve these contour changes. There are also different shapes of implants according to the area to be enhanced.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ մեկ ու կես ժամ:', 'Приблизительно полтора часа.', `Approximately one and a half hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Սովորաբար  կիրառվում է ընդհանուր անզգայացում կամ ներերակային սեդացիա, ինչպես նաև տեղային անզգայացում:',
          'Наркоз или местная анестезия с внутривенной седацией.',
          `General anesthesia or intravenous sedation and local anesthesia are commonly used.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Սա ամբուլատոր միջամտություն է:', 'Обычноне требуется.', `This is an outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: ['Ժամանակավոր անհարմարրավետություն, այտուցվածություն, թույլ կապտուկներ:', 'Временный дискомфорт, отеки, небольшие синяки.', `Temporary discomfort and swelling, mild bruising.`]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Կարող է առաջանալ իմպլանտը հեռացնելու և/կամ փոխելու ահրաժեշտություն, այնպիսի խնդիրների լուծման համար, ինչպիսիք են՝ իմպլանտի պատռվելը, վարակը և իմպլանտի տեղաշարժը: Իմպլանտի մերժումը հանդիսանում է ծայրահեղ հազվադեպ հանդիպող ռիսկ:',
          'Возможно, потребуется удаление и/или замена имплантатов, связанная с их разрывом, инфицированием или смещением. Риск отторжения имплантата также существует, но он очень мал.',
          `The implant may need to be removed and/or replaced to treat problems including: implant rupture, infection and implant misplacement. Implant rejection is a risk but is extremely rare.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն մի քանի օր անց կարող է վերդառնալ աշխատանքի և նորմալ գործունեության: Նա չի կարող ալկոհոլ օգտագործել վիրահատությունից հետո: Կապտուկները և այտուցները կանհայտանան շաբաթներ անց:',
          'Пациенты могут вернуться к обычной жизни через несколько дней после операции. Употреблять алкоголь после операции нельзя. Синяки и отеки проходят в течение нескольких недель.',
          `The patient can return to work and normal activities within in few days. The patient should not consume alcohol after surgery. Bruising and swelling should have disappeared after several weeks.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Արդյունքը բուժառուից բուժառու տարբերվում է , բայց արդյունքները հիմնականում մշտական են: Ընդհաուր արդյունքը/ազդեցությունը դեմքի դեֆեկտային ուրվագծերի արտաքին բարելավումն է:',
          'Индивидуальны; эффект от операции всегда стойкий. В целом, результат можно охарактеризовать как улучшение контуров отдельных частей лица, приводящее к гармонизации лица в целом.',
          `The outcome varies from patient to patient, but results are essentially permanent. The overall effect is an enhancement of the deficient contours of the face with an improved appearance.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 18,
    Heading: ['Դեմքի լիպոսակցիա', 'Липосакция Лица', 'Facial Liposuction'],
    SubHeading: ['Հեռացնում է դեմքի և պարանոցի շրջանի ավելցուկային ճարպի հատվածները', 'Убирает избытки жира с области лица и шеи. ', `Removes areas of excess fat from the face and neck.`],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          'Դեմքի լիպոսակցիան դարձել է սովորական կոսմետիկ միջամտություն, որն իրականացվում է ինչպես առանձին, այնպես էլ դեմքի ձգման կամ դիմային այլ միջամտոթյունների հետ համատեղ: Այս դեպքում հեռացվում է դեմքի անցանկալի ճարպային հյաուսվածքը  կանյուլայի և վակուումի սարքի միջոցով, ինչի արդյունքում բարելավվում և ավելի ընդգծված  են դառնում դիմագծերը  /ինչպես օրինակ ծնոտի գիծը/, երբեմն նաև կիրառվում է լազերային լիպոլիզի մեթոդը:',
          'В последнее время липосакция лица стала очень распространена; она может использоваться сама по себе, а также в сочетании с подтяжкой лица или другими эстетическими вмешательствами на лице. Суть процедуры состоит в удалении избытков жировой ткани с помощью канюли, подсоединенной к вакуум-аспиратору, что позволяет подчеркнуть контуры лица, в частности, линию нижней челюсти. Помимо этой стандартной методики есть и другие, например, с использованием лазерного липолиза.',
          `Facial liposuction has become a common cosmetic procedure, either on its own or in conjunction with facelift or other facial procedures. It consists of the removal of unwanted fatty tissue with a cannula and vacuum device promoting and improving facial shape like jaw line or even using laser lipolysis approach.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['30 րոպեից մինչ 1 ժամ:', 'От получаса до часа.', `Half an hour to one hour approximately.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Կախված բուժառուից կարող է կիրառվոլ և՛ ներերակային սեդացիա, և՛ տեղային կան ընդհանուր անզգայացում:',
          'В зависимости от состояния здоровья и пожеланий пациента, может быть использован наркоз, внутривенная седация или местная анестезия.',
          `Depending on the patient, intravenous sedation, local or general anesthesia can be used.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Ամբուլատոր միջամտություն է', 'Амбулаторная процедура.', `Outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Այտուցվածությունը, ցավոտությունը և ժամանակավոր այրուցը սովորաաբար զգալի են աշխատող հատվածներում: Հինանալի վերահսկվում է ամբուլատոր բուժման պայմաններում:',
          'Отеки, болезненность, чувство жжения в области липосакции. Все эти неприятности легкорешаются амбулаторно.',
          `Swelling, soreness, and a temporary burning sensation are usually experienced in worked areas. Perfectly controllable with outpatient treatment.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Վարակը, դեմքի ասիմետրիան անհամաչափությունը, պիգմենտացիաի փոփոխությունները, հիպեր կամ հիպո և հատվածների զգայունության թուլացում:',
          'Инфицирование, асимметрия лица, изменения пигментации (гипо- или гиперпигментация), снижение чувствительности кожи в зонах липосакции.',
          `Infection, asymmetry of the face, pigmentation changes (hyper or hypo) and decreased sensibility of the areas.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Ամբողջական վերականգնումը տևում է 12-18 օր, որոնց ընթացքում բուժառուն պետք է հագնի սեղմող հագուստ:',
          'Полное восстановление занимает от двадцати до двадцати восьми дней. В течение этого времени обязательно ношение компрессионной повязки.',
          `Full recovery time is between twenty to twenty-eight days, during which the patient will be asked to wear a compression garment.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Այս միջամտությունը լավ արդյունքներ է տալիս այն մարդկանց մոտ, ովքեր ունեն պարանոցի և կզակի շրջանում ավելցուկային ճարպ, լավ մաշկային  էլաստիկություն և պլատիզմայի նվազագույն ծալքեր:',
          'Процедура дает хороший результат у пациентов с избытками жира по линии нижней челюсти и на шее, при условии хорошего тонуса кожи и отсутствия на шее мышечных тяжей.',
          `The procedure achieves good results in patients with excess fat along the jowl and in the neck, good skin elasticity, and minimal platysmal banding.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 19,
    Heading: ['Ճարպի տեղափոխում', 'ПересадкаЖира (Липофиллинг)', 'Fat Transfer (facial)'],
    SubHeading: [
      'Բարելավում է դեմքի և մաշկի արտաքի տեսքը՝ օգտագործելով մարմնի այլ հատտվածներից հավաքված ճարպը:',
      'Улучшение Контуров Лица И Тела Собственным Жиром.',
      `Enhances the face and body using fat collected from another area of the body..`
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Ճարպի տեղափոխումը, որը կոչվում է նաև ճարպի պատվաստում, ճարպի ներարկում և լիպոֆիլինգ, միջամտություն է, որում անճշտությունները և ճեղքերը լցնելու համար օգտագործվում է անձի սեփական ճարպը: Այժմ այն լավ հաստատված մեթոդ է, որը կատարելագործվել է 90-ականների սկզբներին՝ դառնալով կանխատեսելի միջամտություն:
          Լիպոֆիլլինգի համար գեղագիտական ցուցումներն իրենց մեջ ներառում են սմքած այտեր, այտոսկրերի ճարպի վերացում, քթից դեպի բերանի անկյունները ձգվող խորը ծալքերի բծերի և որոշ դեպքերում ստորին կոպի և այտի միջև գծերի սահմանների վերացումը: 
          Սա ամենատարածված մեթոդն է նաև շուրթերի բարելավման համար: Բացի այդ լիպոֆիլինգը կարելի է օգտագործել վատ իրականացված լիպոսակցիայի կամ վնասվածքի արդյունքում առաջացած անհարթությունների վերացման համար:
          Անհրաժեշտ ճարպը ստացվում է սահմանաթակ հատվածի լիպոսակցիայի միջոցով 3-5 մմ երկարությամբ 1 կամ մի քանի կտրվածքների միջոցով: Դա սովորաբար վերցվում է փորից կամ կոնքի ներքին հատվածից: Վերցված ճարպը մշակվում է  ցենտրիֆուգացման, ֆիլտրացման կամ լվացման միջոցով: Արդյունքը հանդիսանում է ներարկման պատրաստ մաքուր հեղուկ ճարպային հյուսվածքը:
          Այնուհետև ճարպը ներարկվում  է անհրաժեշտ հատվածներոււմ: Ճարպը հավասարաչափ տարածվում է տվյալ հատվածներում՝ հյուսվածքում ոչ մեծ քանակությամբ ներարկման միջոցով, այնպես որ ներարկված ճարպը լավ շրջապատված լինի առողջ հյուսվածքով:Սա երաշխավորում է, որ փոխադրված ճարպը մնա շրջակա հյուսվածքի հետ կապի մեջ, որոնք պետք է մատակարարեն թթվածին և սնուցիչներ:
          `,
          `Пересадка жира, также известная как липофиллинг, липографтинг или жировые инъекции, позволяет использовать собственный жир для устранения неровностей контуров тела. Методика была разработана и внедрена в практику в начале 90-х, и на сегодняшний день широко используется.
        К эстетическим показаниям для липофиллинга относятся запавшие щеки, отсутствие жира в области скуловых выступов, глубокие носогубные борозды, а также борозды между нижним веком и щекой. Также это один из основных методов увеличения губ. Кроме того, липофиллинг можно использовать для устранения любых неровностей на теле, например, образовавшихся после липосакции или в результате травмы.
        Необходимый жир добывается путем липосакции, через один или несколько проколов по 3-5 мм. Обычно донорской зоной бывает живот или внутренняя поверхность бедер. Полученный жир обрабатывается путем центрифугирования, фильтрации или промывания. В результате обработки получается жидковатой консистенции чистый жир, готовый к введению.
        После этого жир вводится туда, где это необходимо. Жир вводится в реципиентную зону маленькими порциями, так, чтобы небольшие участки введенного жира были со всех сторон окружены здоровыми тканями. Контакт пересаженного жира с окружающими живыми тканями обеспечивает доступ жировых клеток к кислороду и питательным веществам.
        `,
          `Fat transfer, also called fat grafting, fat injections and lipofilling, is a procedure that uses a person’s own fat to fill in irregularities and grooves. This is now a well-established technique that was perfected in the early nineties to a predictable procedure.
        Aesthetic indications for undergoing lipofilling include sunken cheeks, the disappearance of fat from the cheekbones, deep grooves running from the nose to the corners of the mouth, and in some instances of lines between the lower eyelids and the cheek. It is also one of the most common methods used for lip enhancement. In addition, lipofilling can be used to smooth out all types of irregularities such as those resulting from poorly performed liposuction or injuries.
        The necessary fat is obtained by a limited liposculpture through one or several 3 to 5 mm incisions. It is normally taken from the abdomen or inner thigh. The aspirated fat is processed by centrifuging, filtering or rinsing. Pure liquid fatty tissue ready for injection is the result.
        The fat is then injected where needed. The fat is evenly distributed into the area by injecting minute amounts in the tissues so that the injected fat is well surrounded by healthy tissue. This ensures that the transplanted fat remains in contact with the surrounding tissues that must supply it with oxygen and nutrients.
        `
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ 1 ժամ ՝ կախխված բուժման ենթակա հատվածից:', 'Зависит от объема липофиллинга; в среднем, около одного часа.', `About an hour, depending on the size of the areas to be treated.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Դոնորային և բուժման ենթակա հատվածի տեղային ինֆիլտացիա անզգայացնող դեղորայքով',
          'Применяется местная инфильтрационная анестезия зоны липосакции и зоны введения.',
          `Local infiltration anaesthesia of the donor area and the area to be treated.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Երկուսն էլ կիրառելի են', 'Необязательна.', `Either.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Դոնոր շրջան. Կապտուկներ, այտուցվածություն, թմրածութուն, մինչև 24 ժամ տևող անզգայացնող հեղուկի դրենաժ:
          Բուժվող տարածք. Կապտուկներ, այտուցվածություն հատկապես շուրթերի պարագայում, թմրածություն:
          Բուժման ենթարկված հատվածները կլինեն բավականին այտուցված վիրահատությունից անմիջապես հետո հատկապես շուրթերը: Այդ իսկ պատճառով կարևոր է առաջին մի քանի ժամերի ընթացքում օգտագործել սառը թրջոց՝ այտուցները նվազեցնելու նպատակով: 
          Այտուցը կավելանա մինչև 3 օր, բայց հետո աստիճանաբար կպակասի: Մոտ մեկ շաբաթից 10 օր անց բուժառուն կկարողանա դուրս գալ և վերադառնալ նորմալ սոցիալական կյանքի: Եթե որոշ կապտուկներ առաջացել են , ապա դրանք կարող են տեսանելի լինել ավելի երկար, սակայն կարող են ծածկվել լավ շպարի միջոցով:
          Բուժառուն պետք է այցելի վիրաբույժին 5-7 օր, այնուհետև 3 շաբաթ անց: Այդ ընթացքում այտուցների մեծ մասը կնվազեն, սակայն հատվածները կարող են դեռևես գերշտկված երևել:
          Վիրաբույժները սովորաբար գերշտկում են անում, ինչը նշանակում է առավել մեծ քանակությմաբ ճարպի ներարկում, քան պետք է, որովհետև փոխպատվաստված ճարպի 25-30% չի գոյատևում: Վերջնական արդյունքը գնահատվում է 3 ամիս անց: Այնուհետև վիրաբույժն անում է նկարներ, որպեսզի դրանք համեմատի մինչ միջամտությունն արված նկարների հետ: Երկրորդ փուլը կարող է նախատեսվել ծավալի յուրաքանչյուր պակաս դեֆիցիտ լրացնելու նպատակով:
          `,
          `Донорская зона: синяки, отеки, болезненность, подтекание жидкости, представляющей собой раствор анестетика, в течение первых суток после операции.
        Зона введения: синяки, отеки (особенно это касается губ), болезненность.
        Отек в зоне липофиллинга быстрее всего нарастает сразу после операции, особенно если это губы. Поэтому в первые часы после процедуры для сдерживания отека применяется холодный компресс. Обычно это просто пакет со льдом.
        Отек нарастает в течение первых трех дней, а потом начинает идти на спад. Примерно через 7-10 дней после операции пациенты начинают чувствовать себя уверенно и выходить на люди. Если в ходе процедуры образовались синяки, их рассасывание может занять чуть больше времени, но их всегда можно замаскировать макияжем.
        Пациент должен показаться хирургу через 5-7 дней, а затем через 3 недели с момента операции. К этому времени отек спадает практически полностью, однако все еще сохраняется эффект гиперкоррекции. Гиперкоррекция – это обычный прием, т.е. хирурги, как правило, вводят больше жира, чем нужно; это связано с тем, что до 25-30% жира погибает после пересадки. Финальный результат становится очевиден к 3-м месяцам после операции. По истечении этого срока хирург делает фотографии, чтобы сравнить их с фотографиями до процедуры. Любая потеря первоначального объема в зоне липофиллинга может быть скомпенсирована с помощью второй сессия введения жира.
        `,
          `Donor area: bruising, swelling, tenderness, up to 24 hours drainage of anaesthetic liquid.
        Treated area: bruising, swelling (especially the lips if treated), tenderness.
        The areas that have been treated will be rather swollen immediately after the operation, especially the lips if they have been treated. It is therefore important to use a cold pack and a compress in the first few hours to minimize the swelling. A cold pack is a freezer bag filled with ice cubes and water.
        The swelling will increase until about the third day, but will then gradually subside. After about a week to ten days patients feel confident about going out and resuming a normal social life. If any bruises have developed, they might remain visible for a little longer but can be hidden reasonably well with makeup.
        Patients should have a check-up with the surgeon after five to seven days and again three weeks later. By then most of the swelling will have subsided, but the correction may still look rather exaggerated. Surgeons usually over-correct, which means injecting more fat than is actually needed because 25 to 30% of the transplanted fat cells do not survive. The final result is assessed after three months. The surgeon will then take photographs to be compared with those taken before the procedure. A second session may be scheduled to top up any shortfall in volume.
        `
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: ['Անհամաչափություն, անհավասարություն, գերշտկում և վարակ:', 'Асимметрия, неровности контура, гиперкоррекция, инфицирование.', `Asymmetry, irregularities, overcorrection, and infection.`]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Այտուցվածությունը սովորաբար սկսում է նվազել երրորդ օրվանից : Սոցիալական գործունեությունը կարող է վերսկսվել մոտ 1 շաբաթ անց, երբեմն որոշակի շպարի օգնությամբ:`,
          `Отек начинает спадать на третий день; пациенты могут выходить на люди к концу первой недели. Иногда приходится использовать макияж, чтоб замаскировать следы операции.`,
          `Swelling usually diminishes from the third day on, and social activities can be restarted after about one week, sometimes with the help of some make-up.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Խորը կնճիռների և ծալքերի շտկում, արդեն վիրահատված հատվածներում շեղումների շտկում: Բուժված հատվածների ծավալի մեծացում, ինչպիսիք են այտոսկրերը, այտերը և կզակը: Նշված հատվածի մաշկի որկի բարելավումը կարող է լինել դրական կողմնակի ազդեցություն: Շտկումը կարելի է մշտական համարել այն բանից հետո, երբ օրգանիզմը կլանում է ճարպի 20-50 տոկոսը:',
          'Липофиллинг позволяет скорректировать глубокие морщины и борозды, а также неровности, в том числе образовавшиеся в результате липосакции. Другой эффект – это увеличение объема, в частности в таких зонах, как скулы, щеки и подбородок. Положительным «побочным эффектом» может оказаться улучшение качества кожи в области липофиллинга. После того, как часть введенного жира рассосется (20-50%), результат можно считать окончательным.',
          `Correction of deep wrinkles and folds. Correction of the treated irregularities and dents. Volume augmentation of the treated areas such as cheekbones, cheeks, and the chin. Improved quality of the overlying skin can be a positive side effect. After the body absorbs a percentage of the fat (between 20 and 50%) the correction can be considered permanent.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 20,
    Heading: ['Օտոպլաստիկա - Ականջների պլաստիկա ', 'Отопластика', 'Otoplasty'],
    SubHeading: [
      'Բարելավում է ականջների տեսքը',
      ' Операция для устранения деформации ушных раковин.',
      `Improves the appearance of the ears.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Օտոպլաստիկան, որը կոչվում է նաև ականջների վիրահատություն, առաջ եկած ականջները տանում է գլխին մոտ կամ փոքրացնում է մեծ ականջների չափերը: Ականջների կոսմետիկ վիրահատությունն ավելի հաճախ իրականացվում է 4-14 տարեկան երեխաների պարագայում:`,
          `Отопластика, или пластика ушных раковин, позволяет прижать оттопыренные уши к голове и/или уменьшить их размер. Эта косметическая операция наиболее часто выполняется детям в возрасте от четырех до четырнадцати лет, и может покрываться страховкой.`,
          `Otoplasty, also called ear surgery, sets prominent ears back closer to the head and/or reduces the size of large ears. Cosmetic ear surgery is most often performed on children between the ages of four and fourteen and may be covered by insurance.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ 2 ժամ:', 'Около 2-х часов.', `Approximately two hours.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Փոքր երեխաների  պարագայում սովորաբար օգտագործվում է ընդհանուր անզգայացում, ավելի մեծ երեխաների և մեծահասակների դեպքում ընդհանուր կամ տեղային անզգայացումը կարող է կիրառվել սեդացիայի հետ համտեղ:',
          'Детям обычно дается наркоз. Подростки и взрослые, как правило, оперируется под местной анестезией в сочетании с внутривенной седацией. Наркоз также возможен.',
          `Young children are usually given general anesthesia. For older children or adults, a general or local anesthesia can be used along with sedation.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Սովորաբար սա ամբուլատոր միջամտություն է:', 'Это амбулаторная операция.', `Usually this is an outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Ժամանակավորապես զարկերի ավելացում, ցավ, այտուցվածություն, կարմրություն և/կամ թմրածություն:',
          'Чувство пульсирующей боли в области ушей, отек, покраснение, онемение.',
          `Temporary throbbing, aching, swelling, redness and/or numbness.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Աճառների ինֆեկցիա, սպիերի գերաճ, հազվադեպ արյան կուտակումներ, որոնք անհրաժեշտ է դատարկել, ականջների տեսքի տարբերություն, ականջախեցու լոշտակության վերականգնում, որը պահանջում է կրկնակի վիրահատություն։',
          'Инфицирование ушного хряща, образование грубых рубцов, подкожное скопление крови, требующее эвакуации, асимметрия, неестественный результат, рецидив лопоухости, требующий повторной пластики.',
          `Infection of cartilage, excessive scarring, blood clots that may need to be drained, mismatched or artificial-looking ears, or the recurrence of the protrusion, which requires repeat surgery.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է վերադառնալ դպրոց կամ աշխատանքի 5-7 օրվա ընթացքում և վերսկսել ծանրաբեռնված գործունեությունը 1-2 ամսից:  Սեղմող հագուստը պետք է կրել 4 շաբաթների ընթացքում:',
          'Пациент может возвращаться в школу или на работу через 5-7 дней после операции; силовые нагрузки и контактный спорт можно возобновлять через 1-2 месяца. Необходимо ношение компрессионной повязки в течение 4-х недель.',
          `The patient may return to school or work within five to seven days, and resume strenuous activity, such as contact sports in one to two months. A compression garment is required to use for 4 weeks.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: ['Սովորաբար մշտական', 'Обычно стойкие.', `Usually permanent.`]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 21,
    Heading: ['Հարբերանային պերիորալ  երիտասարդացում', 'Омоложение Околоротовой Области', 'Perioral Rejuvenation'],
    SubHeading: [
      'Բարելավում է շուրթերի արտաքին տեսքը՝ բերանի շուրջ ծավալի վերականգնման և/կամ առկա կնճիռների հարթեցման միջոցով:',
      'Процедура, которая улучшает вид губ путем добавления в них объема и/или сглаживания морщин вокруг рта.',
      `Improves the appearance of the lips by restoring volume and/or reduction of wrinkles around the mouth.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Պերիորալ երիտասարդացումը վերականգնում է շուրթերի ծավալը ներարկային ֆիլերներերի կամ ճարպի փոխադրման/ լիպոֆիլինգ միջոցով:
          Կնճիռների հարթեցման մեթոդները ներառում են դեմքի լազերային վերամշակում և քիմիական պիլինգ: Սրանք կարելի է բաժանել աբլատիվ /կնճռոտած մաշկի բարակ շերտի հեռացում/ և ոչ աբլատիվ միջամտությունների:
          Աբլատիվ միջամտությունները ներառում են CO2 լազեր, Erbium-YAG լազեր, քիմիական կամ մեխանիկական պիլինգներ։ Որոշ ոչ աբլատիվ միջամտություններից են ինտենսիվ իմպուլսային լույսը/IPL/ և ռադիոհաճախականության տեխնիկա: սրանք սովորաբար պահանջում են մի քանի այցեր՝ ցանկալի արդյունքի հասնելու համար:
          `,
          `Процедура предполагает увеличение объема губ с помощью инъекционных филлеров или пересадки жира (липофиллинга). К методикам сглаживания морщин относятся лазерная шлифовка лица и химические пилинги. Существуют абляционные (предполагающие удаление верхнего слоя кожи с морщинами) и неабляционные методики. К абляционным относятся CO2 лазер, эрбиевый-YAG лазер и химические/механические пилинги. К неабляционным относятся методики, основанные на интенсивном пульсирующем свете (IPL), ирадиочастотные методики; такие процедуры проводятся в несколько сеансов до достижения желаемого результата.`,
          `Perioral rejuvenation restores the volume of the lips with injectable fillers or with fat transfer (lipofilling). Techniques to reduce or eliminate wrinkles include laser facial resurfacing and chemical peels. One can distinguish between ablative (removing a thin layer of wrinkled skin) and non-ablative procedures. Ablative procedures include CO2 laser, Erbium-YAG laser and chemical or mechanical peels and some non-ablative procedures are intense pulsed light (IPL) and radio frequency techniques which typically require several sessions to achieve the desired result.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Մոտ 30 րոպերց 1 ժամ:', 'От тридцати минут до часа.', `Approximately thirty minutes to one hour.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Վիրաբույժը կորոշի՝ անզգայացման, որ տարբերակն է լավագույնը համապատասխանում ընտրված միջամտությանը: Այն կարող է լինել կոնտակտայինից մինչև տեղային, տեղային գումարած սեդացիա կամ ընդհանուր անզգայացում:',
          'Хирург сам выбирает тип обезболивания в зависимости от проводимой процедуры. Возможны местная аппликационная анестезия (крем), местная анестезия, местная анестезия в сочетании с внутривенной седацией или наркоз.',
          `The surgeon will decide what type of anesthesia is best according to the chosen procedure. It will vary from topical to local, local plus sedation, or general anesthesia.`
        ]
      },
      {
        name: ['Ստացիոնար/Ամբուլաատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Սրանք ամբուլատոր միջամտություններ են', 'Все процедуры проводятся амбулаторно.', `These are outpatient procedures.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Շուրթերի միջամտությունների մեծ մասն առաջացնում են ժամանակավոր այտուցվածության տարբեր աստիճաններ: Թեթև ժամանակավոր անհարմարավետությունը նորմալ երևույթ է, հազվադեպ լինում են նաև թեթև կապտուկներ, բորբոքում: Աբլատիվ մեթոդների կիրառման պարագայում հաճախ կարելի է տեսնել մաշկի պիլինգ և/կամ կարմածություն՝ կախված ընտրված մեթոդից:',
          'Любые процедуры на губах приводят к развитию отека различной степени выраженности. Возможен временный незначительный дискомфорт, редко – небольшие синяки. Использование абляционных методик приводит к отшелушиванию поверхностных слоев кожи и/или покраснению, степень которых зависит от выбранной методики.',
          `Most procedures on the lips will cause a varying degree of temporary swelling. Mild temporary discomfort is normal, rarely mild bruising. When ablative techniques are used, one often sees skin peeling and/or redness according to the chosen technique.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          'Վարակ, չափերի գերշտկում և/կամ ասիմետրիա, մաշկի պիգմենտացիայի փոփոխություններ կամ սովորական հերպես:',
          'Инфицирование, гиперкоррекция по объему, неровности и/или асимметрия в результате использования филлеров, изменения пигментации кожи, для лазерных шлифовок характерны герпетические высыпания.',
          `Infection, overcorrection in size, irregularities and/or asymmetry with fillers, changes in skin pigmentation, or fever blisters (herpes simplex) with resurfacing techniques.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Մեծամասամբ բուժառուները կարողանում են վերադառնալ աշխատանքի և նորմալ գործունեության հենց նույն օրը: Կապտուկները և այտուցվածությունը կանցնեն մի քանի օր անց: Աբլատիվ միջամտության պարագայում վերականգնումը կարող է տևել մի քանի օր: Մաշկի գույնի փոփոխությունը կարող է առկա լինել օրեր կամ շաբաթներ շարունակ, բայց կարող է ծածկվել շպարի օգնությամբ: Աբլատիվ միջամտության պարագայում խորհուրդ է տրվում շաբաթներ շարունակ օգտագործել արևապաշտպան քսուք:`,
          `В большинстве случаев пациент может возвращаться к работе и к обычной жизни сразу после процедуры. Синяки и отеки проходят в течение нескольких дней. При использовании абляционных методик реабилитация может затягиваться. Изменения пигментации кожи могут сохраняться на несколько дней или даже недель, но они легко камуфлируются макияжем. После абляционных процедур рекомендуется избегать воздействия прямых солнечных лучей в течение нескольких недель.`,
          `In most cases, the patient can return to work and normal activities the same day. Bruising and swelling should have resolved after several days. When an ablative procedure is used, the recovery time can be several days. Changes in color of the skin can be present for several days or weeks, but can be camouflaged with makeup. When using ablative procedures, it is recommended to use sun screen for several weeks.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          'Արդյունքները տարբերվում են բուժառուից բուժառու: Կարելի է ակնկալել բերանի շուրջ երիտասարդության վերականգնում և շրթունքների ձևի բարելավում: ոչ մշտական ֆիլերների օգտագործման պարագայում, արդյունքները կարող են պահպանվել մի քանի ամիս: Մաշկի մակերեսային շերտերի վերամշակման ժամանակ բերանի շուրջ կնճիռների կարող են կամ ամբողջական վերանալ կամ քչանալ՝ կախված բուժառուից:',
          'Индивидуальны. В общем случае, происходит омоложение всей области вокруг рта и улучшение формы губ. При использовании рассасывающихся филлеров результат длится всего несколько месяцев. Степень сглаживания морщин вокруг рта после шлифовки различна у разных пациентов.',
          `The outcome varies from patient to patient. One can expect a restoration of a youthful appearance of the mouth area and an enhancement of lip shape. When using non-permanent fillers, results will be lost after several months. Reduction to complete disappearance of wrinkles around the mouth after resurfacing varies by patient.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 22,
    Heading: ['Ռինոպլաստիկա/Քթի պլաստիկա', 'Ринопластика', 'Rhinoplasty'],
    SubHeading: [
      'Բարելավում է քթի արտաքին ձևը',
      'Операция для улучшения формы наружного носа.',
      `Improves the external shape of the nose
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Ռինոպլաստիկան, որը կոչվում է նաև քթի վրաբուժություն, փոխում է քիթը՝ փոքրացնելով կամմեծացնելով այն, հեռացնելով սապատը, փոփոխելով քթի ծայրի կամ կամրջի ձևը, նեղացնելով քթանցքերի բացվածքը  կամ փոխելով քթի և վերին շուրթի միջև եղած անկյունը: Այս միջամտությունը կարող է նաև թեթևացնել շնչառության հետ կապված որոշ խնդիրներ, երբ համատեղվում է քթի միջնապատի վիրահատության հետ:`,
          `Ринопластика, или пластика носа, позволяет изменить форму носа, его размер в сторону уменьшения или увеличения, убрать горб, а также поменять форму отдельных частей носа: кончика, пирамиды, ноздрей, угла между носом и верхней губой (носогубного). Ринопластика, комбинированная с операцией на носовой перегородке, также может способствовать улучшению носового дыхания`,
          `Rhinoplasty, also called nose surgery, reshapes the nose by reducing or increasing the size, removing a hump, changing the shape of the tip or bridge, narrowing the span of the nostrils, or changing the angle between the nose and upper lip. This procedure may also relieve some breathing difficulties when combined with surgery performed on the nasal septum.`
        ]
      },

      {
        name: ['Տևողություն', 'Продолжительность', 'Length'],
        value: ['Վիրահատությունը տևում է 1 ժամ և ավելի:', 'Операция длится от одного часа и больше.', `Surgery takes approximately one hour or more.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          'Ընդհանուր կամ ներերկային սեդացիա կամ տեղային անզգայացում:',
          'Наркоз или внутривенная седация с местным обезболиванием',
          `General or intravenous sedation and local anesthesia are used.`
        ]
      },
      {
        name: ['Ստացիոնր/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Սա ամբուլատոր միջամտություն է:', 'Эта операция не требует госпитализации.', `This is an outpatient procedure.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Ժամանակվոր այտուցվածություն, կապտուկներ աչքերի և/կամ քթի շուրջ և որոշ այտուցվածություն և քթով դժվարաշնչություն:',
          'Временный отек, синяки вокруг глаз и носа, иногда кровотечение и заложенность носа.',
          `Temporary swelling, bruising around the eyes and/or nose, and some bleeding and nasal stuffiness.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Հնարավոր է վարակ, ասիմետրիա/անհամաչափություն, քթի ոչ գոհացնող տեսք և ոչ ամբողջական բարելավում/ ինչը կպահանջի հավելյալ վիրահատություն/:`,
          `Инфицирование, асимметрия, неудовлетворенность формой носа или недостаточная ее коррекция (в таком случае возможна повторная операция).`,
          `Infection, asymmetry, unsatisfactory nasal shape and incomplete improvement (which would require additional surgery) are possible.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Բուժառուն կարող է աշխատանքի վերադառնալ 1 շաբաթ անց: Առավել ծանրաբեռնված/լարված գործունեությունը կվերսկսվի 2-3 շաբաթ անց: Բուժառուն պետք է մոտ 8 շաբաթ խուսափի քթի վրա ազդող յուրաքանչյուր գործողությունից և քթի արևայրուքից: Օգտակար է արևապաշտպան քսուքի օգտագործումւ, որն ապահովում է և՛ UVA, և՛UVB պաշտպանություն: Վերջնական արդյունքների գրանցումը կարող է տևել 1 տարի , երբեմն նաև ավելի երկար:',
          'Пациент должен придти на прием к хирургу через 7 дней после операции. К работе можно вернуться через две-три недели. К занятиям контактными видами спорта, если есть реальная возможность травмировать нос, пациент допускается через девять недель после операции. Рекомендуется использование солнцезащитного крема, блокирующего как A, так и B лучи ультрафиолетового спектра. Финальный результат можно оценивать не ранее, чем через год с момента операции.',
          `The patient may go back to work after one week. Activities that are more strenuous may be resumed after two to three weeks. The patient should avoid any activity that could impact on the nose or allow it to become sunburned for at least eight weeks. The use of a sunblock that provides both UVA and UVB protection is useful. The final results may take one year and sometimes longer to achieve.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: ['Մշտական:', 'Стойкие.', `Permanent.`]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  // Non-Surgical Procedures
  {
    id: 23,
    Heading: ['Բոտուլինում տոքսին', 'Ботулотоксин', 'Botulinum Toxin'],
    SubHeading: [
      'Հարթեցնում է դեմքի մկանների կրճատման արդյունքում առաջացած կնճիռները:',
      'Сглаживает морщины, которые появляются из-за работы мимических мышц',
      `Smoothes out lines and wrinkles caused by facial muscle contractions.
    `
    ],
    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Բոտուլինում տոքսին Ա-ն, որն ավելի հայտնի է որպես BOTOX®, արտադրանք է, որն օգտագործվում է էսթետիկ վիրաբուժության մեջ՝ դեմքի կնճիռները շտկելու նպատակով: Շտկումը տեղի է ունենում,  քանի որ բոտուլինումի տոքսինը ժամանակավորապես կաթվածահար է անում այդ գծերի համար պատասխանատու մկանները: Դա մաշկին թույլ է տալիս վերականգնվել երկար տարիների կնճռոտումից հետո:
          Սկսած վաղ 1990-ականներից, բոտուլինումի տոքսինն օգտագործվել է այնպիսի խանգարումների բուժման համար, ինչպիսիք են՝ կոպերի գերկծկումները, դիմային սպազմը և մասամբ պարալիզված պացիենտների մոտ առկա մկանային կոնտրակտուրաները:
           Այս կիրառումները բավարար փորձ են ապահովել նյութի հատկությունները լավ իմանալու համար: Ճիշտ օգտագործման պարագայում այն բացարձակ անվտանգ է: Բոտուլինումի տոքսինի էսթետիկ ազդեցությունները հայտնաբերվել են տասնամյակներ առաջ: Այդ ժամանակներից ի վեր այն բարեհաջող կերպով օգտագործվել է այդ նպատակով:
          Գոյություն ունեն բոտուլինում տոքսինի մի քանի ապրանքանիշներ, ներառյալ՝ BOTOX®, Dysport®, Xeomin® և այլն:Բոտուլինումի տոքսինով բուժման լավագույն ցուցումներն են դեմքի վերին երրորդականում՝ հոնքերի միջև ուղղահայաց գծերի, ճակատի հորիզոնական կնճիռներև և  ագռավի ճանկերի շտկումը: Այլ կիրառումներն ավելի հազվադեպ են հանդիպում և լավագույնս կատարվում են փորձառու մասնագետնորի կողմից: Աովորաբար նախընտրելի է թերբուժումը: Գերբուժումը կարող է հանգեցնել դեմքի արտահայտության նվազմանը:
          `,
          `Ботулинический токсин типа A, более известный как BOTOX (Ботокс) – вещество, используемое в эстетической медицине для коррекции мимических морщин на лице. Ботулотоксин вызывает временный паралич мимических мышц, работа которых как раз и приводит к образованию морщин. В результате после многих лет непрерывного растягивания и сокращения у кожи наступает период покоя и восстановления.
        С начала 1990-х годов ботулотоксин успешно используется для лечения тиков век, спазмов лицевых мышц, а также мышечных спазмов у частично парализованных пациентов. Таким образом, накоплен достаточный клинический опыт применения данного продукта. При условии правильного использования, ботулотоксин полностью безопасен. Эстетические эффекты ботулотоксина были открыты более 10-ти лет назад. С тех пор вещество успешно применяется еще и в эстетических целях.
        На сегодняшний день существует несколько препаратов ботулотоксина, в том числе BOTOX, Dysport и Xeomin. Больше всего показаний для инъекций ботулотоксина в верхней трети лица – для коррекции вертикальных морщин между бровями, горизонтальных морщин на лбу и «гусиных лапок» в углах глаз. В других областях ботулотоксин менее показан и лучше всего работает в руках опытных специалистов. Обычно рекомендуется небольшая гипокоррекция, т.е. достижение чуть меньшего эффекта, чем хотелось бы. Гиперкоррекция приводит к отсутствию лицевой мимики.
        `,
          `Botulinum toxin type A, better known as BOTOX®, is a product used in aesthetic surgery to correct annoying expression lines in the face. The correction occurs because botulinum toxin temporarily paralyzes the muscles responsible for these lines. This allows the skin to recover from years of squinting and frowning.
        Since the early 1990s, botulinum toxin has been used to treat disorders such as exaggerated blinking, facial spasms, and muscle contractions affecting partly paralyzed patients.
        These applications have provided sufficient experience to know the product well. It is perfectly safe so long as it is used properly. The aesthetic effects of botulinum toxin were discovered over a decade ago. Since then it has also been successfully used for this purpose.
        There are several brands of botulinum toxin available* including BOTOX®, Dysport®, and Xeomin®. The best indications for treatment with botulinum toxin lie in the upper third of the face, for correction of vertical frown lines between the eyebrows, horizontal furrows on the forehead and crow’s feet. Other uses are less common, and are best performed by experienced practitioners. Light under-treatment is usually preferred. Over-treatment can result in a diminished expression in the face.
        `
        ]
      },

      {
        name: ['Տևողությունը', 'Продолжительность', 'Length'],
        value: ['10-30 րոպե:', 'От десяти до тридцати минут.', `Ten to thirty minutes.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: ['Ոչինչ կամ տեղային անզգայացնող քսուք', 'Процедура выполняется без обезболивания или после нанесения крема с местноанестезирующим эффектом.', `None or topical anesthetic cream.`]
      },
      {
        name: ['Հիվանդանոցային/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Ամբուլատոր', 'Процедура проводится амбулаторно', `Outpatient.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          'Բուժումից անմիջապես հետո միայն ասեղի փոքր ծակոցի տեղերն են տեսանելի: Որոշ պացիենտներ/բուժառուներ/ փոքր-ինչ գլխացավ են ունենում առաջին շաբաթվա ընթացքում:',
          'Сразу же после процедуры на коже заметны небольшие точки вколов. Возможны небольшие синяки. Некоторых пациентов беспокоит головная боль в первую неделю после процедуры.',
          `Immediately after treatment only the small pinpricks are visible. Light bruising. Some patients experience a slight headache during the first week.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Առողջ անձանց մոտ չկան մշտական ռիսկեր: Միաստենիա գրավիսը հակացուցում է այս բուժման համար։ Անհամաչափություն, կոպերի կախվածություն կարող է լինել 1-5% հավանականությամբ, այն միշտ վերականգնվում է 3-4 շաբաթների ընթացքում:`,
          `У здоровых пациентов сведены к минимуму. Противопоказанием к проведению процедуры является миастения гравис (патологическая мышечная слабость). Возможна асимметрия. В 1-5% случаев наблюдается опущение верхнего века (одного или с 2-х сторон). Это осложнение всегда спонтанно разрешается в течение 3-4 недель.`,
          `There are no permanent risks in healthy individuals. Myasthenia Gravis is a contraindication. Asymmetry. Drooping of the eyelid can occur in one to five percent ; it always recovers spontaneously within three to four weeks.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          `Արդյունքը երևում է 3-4 օր անց և պահպանվում է 4-6 ամիս:  Բուժումը չկրկնելու պարագայում մկանների օրիգինալ շարժումն ինքնաբուխ կերպով վերականգնվում են:  `,
          `Эффект развивается через 3-4 дня и длится 4-6 месяцев. Без повторных сеансов процедуры мимика лица всегда спонтанно восстанавливается.`,
          `The effect only arises after three to four days, and lasts for four to six months. When treatment is not repeated the original movement always comes back spontaneously.`
        ]
      },
      {
        name: ['Արդյունքներ', 'Результаты', 'Results'],
        value: [
          `Դեմքի արտահայտչական կնճիռների շտկում, որը բարելավվում  է բուժման կրկնման պարագայում: Դեմքի առավել հանգիստ արտահայտություն:`,
          `Процедура приводит к сглаживанию мимических морщин. Для поддержания эффекта необходимы повторные сеансы. После процедуры мимика лица становится менее выразительной в целом. `,
          `Correction of expression wrinkles, which improves with repetition of the treatment. More relaxed facial expression.`
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 24,
    Heading: ['Ֆիլլեր', 'Филлеры', 'Fillers'],
    SubHeading: [
      `Լրացնում է մաշկի տակ եղած ծավալը կնճիռները հարթեցնելու կամ դեմքի արտահայտությունը բարելավման նպատակով:`,
      `Вводятся подкожно, для воссоздания объема определенной части лица, разглаживая морщины у улучшая черты лица.`,
      `Replace volume under the skin to fill wrinkles or enhance facial features.
    `
    ],

    Description: [
      {
        name: ['Միջամտություն', 'Процедура', 'Procedure'],
        value: [
          `Փափուկ հյուսվածքի ֆիլլերները, որոնք կոչվում են նաև մաշկային, դիմային կամ պարզապես ՛՛ֆիլլերներ՛՛, օգտագործվում են փափուկ հյուսվածքներում առկա դեֆեկտները լրացնելու նպատակով, /սովորաբար դեմքի վրա առկա կնճիռների, ծալքերի և փոսիկներ՚: Որոշ ֆիլլերներ նախատեսված են ծավալի ավելացման համար, որպես օրինակ այտոսկրերի, կզակի, հաճախ նաև շուրթերի բարելավման համար: Ամենակարևոր տարբերությունը կայանում է ոչ մշտական ֆիլլերների, որոնք ինքնաբերաբար անհայտանում են որոշ ժամանակ անց, և մշտական ֆիլլերների  միջև, որոնք մնում են հյուսվածքներում ընդմիշտ: Ոչ մշտական ֆիլլերիների մեծ մասը բավականին անվտանգ են, բայց ցանկալի է կիրառել հիալուրոնաթթվի, կոլլագենի կամ կալցիումի հիդրօքսիապատիտի վրա հիմնված ֆիլլերներ։
          Միշտ պահանջեք, որ Ձեր բժիշկը տեղեկացնի, թե որ ապրանքանիշն է պատրաստվում օգտագործել:
          Ֆիլլերներն ուղղակիրորեն ներարկվում են բուժման ենթակա շրջան, հաճախ անզգայացնող քսուքի կիրառումից հետո: Արդյունքը լինում է անմիջապես և տևում է 2-18 ամիս՝ կախված արտադրանքից և բուժման ենթակա հատվածից:
          `,
          `Мягкотканные филлеры, также известные как дермальные, лицевые филлеры или просто «филлеры», используются для заполнения дефектов мягких тканей, таких как морщины, борозды и неровности кожи лица. Некоторые филлеры разработаны специально для увеличения объема определенных частей лица – скул, подбородка, губ.
        Сегодня на рынке существует огромный выбор продуктов. Все эти препараты можно разделить на две большие группы – рассасывающиеся филлеры, которые самопроизвольно рассасываются в течение определенного времени, и перманентные филлеры, которые остаются в тканях пожизненно. Большинство рассасывающихся филлеров вполне безопасны, однако рекомендуется все же использовать те филлеры, безопасность которых подтверждена Американским Управлением по Контролю за Пищевыми Продуктами и Лекарственными Средствами (FDA). Это препараты на основе гиалуроновой кислоты, коллагена и микросфер гидроксиапатита кальция. Всегда уточняйте у своего доктора, какой именно продукт он собирается использовать.
        Филлеры вводятся непосредственно в ту зону, контуры которой мы хотим улучшить. Обычно перед введением на лицо наносится обезболивающий крем. Эффект проявляется сразу же, а длительность его существования составляет от 2-х до 18-ти месяцев, что определяется типом филлера и зоной введения.
        `,
          `Soft tissue fillers, also called dermal fillers, facial fillers, or simply “fillers”, are used to fill up defects in the soft tissues, typically wrinkles, folds and dents in the face. Some fillers are intended to add volume, for example to the cheekbone or the chin and are often used for lip enhancement.
        There are many products on the market. The most important distinction is between non-permanent fillers, which disappear spontaneously after a while, and the permanent fillers, which stay embedded in the tissues forever. Most non-permanent fillers are quite safe to use, but it is advisable to demand fillers that are generally accepted, or FDA approved, such the ones based on hyaluronic acid, collagen and calcium hydroxyapatite microspheres. Always demand to know which product your physician is going to use.
        Fillers are injected directly into the area to be treated, often after application of a topical anesthetic cream. The effect is immediate, and lasts between two to 18 months, depending on the type of product and the treated area.
        `
        ]
      },

      {
        name: [' Տևողությունը', 'Продолжительность', 'Length'],
        value: [`10-20 րոպե`, `Десять-двадцать минут.`, `Ten to twenty minutes.`]
      },

      {
        name: ['Անզգայացում', 'Обезболивание', 'Anesthesia'],
        value: [
          `Սովորաբար կիրառվում է անզգայացնող քսուք, երբեմն էլ տեղայի անզգայացնող ներարկում:`,
          `Крем с местноанестезирующим действием, иногда инъекция местного анестетика.`,
          `Usually topical anesthetic cream, sometimes a local anesthetic injection.`
        ]
      },
      {
        name: ['Հիվանդանոցային/Ամբուլատոր', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['Ամբուլատոր', 'Процедура выполняется амбулаторно.', `Outpatient.`]
      },
      {
        name: ['Հնարավոր կողմնակի ազդեցություններ', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: [
          `Ժամանակավոր այտուցվածություն/հատկապես շուրթերի շրջանում կիրառման պարագայում/, կարմրութուն, փափկություն և կապտուկներ: Սառը պարկերի օգտագործումը բուծումից հետո կարող է նազեցնել կողմնակի ազդեցությունները:`,
          'Временный отек (особенно после введения филлера в губы), покраснение, болезненность и синяки в зоне введения. Холодный компресс сразу после процедуры позволит свести эти побочные эффекты к минимуму.',
          `Transient swelling (mainly when used in the lips), redness, tenderness, and bruising. Cold application after treatment can minimize these side effects.`
        ]
      },
      {
        name: ['Ռիսկեր', 'Риски', 'Risks'],
        value: [
          `Կա լայն տարածված կոնսենսուս, որ ցանկալի չէ կիրառել հիմնական ֆիլլերներ, քանի որ դրանք երբեմն առաջացնում են կողնակի ազդեցություններ, որոնք շատ բարդ երբեմն էլ անհնար է լուծել առանց վիրահատական միջամտության: Բոլոր ֆիլլերների համար ռիսկերը ներառում են անհարթությունները, գեր կամ թերշտկումը, անհամաչափությունը և վարակը:`,
          'Существует распространенное мнение, что, хотя использование перманентных филлеров кажется привлекательным для пациентов, к возможности их введения нужно все-таки подходить взвешенно, т.к. они могут дать осложнения, которые устраняются только хирургическим путем. Любые филлеры чреваты такими осложнениями, как неровности контура, образование шишковидных скоплений филлера, гипер- или гипокоррекция, асимметрия и инфицирование. Что касается перманентных филлеров, для них характерно образование стойких видимых на глаз «шишек» и развитие отсроченных воспалительных реакций.',
          `There is widespread consensus that, although they may seem appealing, permanent fillers are not to be recommended lightly as they sometimes induce adverse reactions which are very difficult if not totally impossible to treat without surgery. For all fillers, risks include irregularities or lumpiness, over- or under-correction, asymmetry and infection. Permanently visible lumps or late reactions with some permanent fillers can result.`
        ]
      },
      {
        name: ['Վերականգնում', 'Реабилитационный Период', 'Recovery'],
        value: [
          'Այտուցի կամ կարմրության առկայության դեպքում ան սովորաբար կարգավորվում է 24-48 ժամ անց: Շատ բուժառուներ կարող են դիմահարդարվել և անմիջապես վերադառնալ աշխատանքի ',
          'Отек и краснота обычно проходят через 24-48 часов. Большинство пациентов возвращается к обычной жизни сразу же после процедуры; иногда для маскировки следов инъекций приходится использовать макияж.',
          `If present, swelling and redness usually settles after 24 to 48 hours. Most patients can go back to their activities immediately with some make-up.`
        ]
      },
      {
        name: ['', 'Результаты', 'Results'],
        value: ['', 'Частичная/полная коррекция морщин и борозд. Улучшение черт лица.', `Partial or complete correction of wrinkles and folds. Enhancement of facial features.`]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  },
  {
    id: 24,
    Heading: ['', 'Устранение Венозных Деформаций', 'Vein Treatments'],
    SubHeading: [
      ``,
      `Процедуры, позволяющие избавиться от видимых венозных “сеточек” на лице, ногах и кистях рук.`,
      `Eliminate unsightly veins which commonly develop on the face, legs, and hands.
    `
    ],

    Description: [
      {
        name: ['', 'Процедура', 'Procedure'],
        value: [
          ``,
          `
        Нехирургическое устранение венозных деформаций позволяет избавиться от видимых мелких венозных сосудов путем запаивания их просвета, после чего оставшаяся венозная стенка разрушается организмом.<br>
•	<b>Склеротерапия </b> – это инъекции специального раствора в нежелательные вены очень тонкой иглой. Препарат (обычно основанный на физиологическом растворе или глицерине) воздействует на внутреннюю выстилку вен, приводя к ее набуханию и слипанию. Этот простой, но эффективный способ устранения мелких варикозных вен и венозных сеточек доставляет минимум дискомфорта пациентам и применяется уже более сотни лет.<br>
•	<b>Лазерное склерозирование </b>, самая эффективная методика устранения венозных деформаций на лице и сосудистых “звездочек”, заключается в избирательном нагревании определенного пигмета крови, концентрация которого наиболее высокая в венах, что приводит к спадению венозной стенки. Пульсирующий пучок лазерного излучения доставляет минимальный дискомфорт, и процедура может проводиться без обезболивания.
`,
          `Non-surgical vein treatments get rid of unsightly veins by causing the veins to collapse and be absorbed by the body.<br>
        •	<b>Sclerotherapy</b> involves injections of a solution into the unwanted veins using a fine needle. The solution (made with substances such as saline or glycerin) causes the lining of the veins to swell and stick together. This simple, effective varicose and spider vein treatment involves minimal discomfort and has been in use for over a hundred years.<br>
        •	<b>Laser vein therapy</b>, which is most effective on the face and small spider veins, causes the veins to collapse by heating up the pigment in the blood that is concentrated in the veins. Treatments create mild discomfort with each pulse of the laser and can be performed without anesthetic.
        `
        ]
      },

      {
        name: ['', 'Продолжительность', 'Length'],
        value: [
          '',
          'От тридцати минут до часа, в зависимости от области воздействия.',
          `Treatments take approximately 30 minutes to one hour to complete, depending on the number of areas being addressed.`
        ]
      },

      {
        name: ['', 'Обезболивание', 'Anesthesia'],
        value: ['', 'Для повышения комфортности проведения процедуры можно использовать местноанестезирующий крем.', `Topical anesthetic can be used for enhanced patient comfort.`]
      },
      {
        name: ['', 'Госпитализация', 'Inpatient/Outpatient'],
        value: ['', 'Это амбулаторные процедуры, которые можно проводить вне операционной.', `These are outpatient treatments which may be performed in the physician’s office.`]
      },
      {
        name: ['', 'Возможные Побочные Эффекты', 'Possible Side Effects'],
        value: ``
      },
      {
        name: ['', 'Риски', 'Risks'],
        value: [
          ``,
          `
        •	<b>Склеротерапия может привести к образованию синяков, пятен гиперпигментации, неровностей, обусловленных подкожным скоплением излившейся из сосудов крови, отеков, телеангиоэктазий (скоплений расширенных подкожных кровеносных сосудов), изъязвлений и воспалительных изменений.<br>
•	<b>Лазерное склерозирование также может привести к образованию синяков, ожогам, изменениям пигментации, а также повреждению нервов и снижению чувствительности.

        `,
          `•	<b>Sclerotherapy</b> may result in temporary bruising, brown spots, lumps from trapped blood, swelling, telangiectactic matting (a collection of fine blood vessels), ulcers, and inflammation. <br>
        •	<b>Laser vein therapy</b> risks include temporary bruising, burns, changes in skin coloring, and discomfort caused by nerve damage.
        `
        ]
      },
      {
        name: ['', 'Реабилитационный Период', 'Recovery'],
        value: [
          ``,
          `Пациенты могут возвращаться к работе сразу после процедуры. Занятий спортом и силовых нагрузок необходимо избегать в течение недели после процедуры (это тот срок, за который стенки вен должны окончательно слипнуться). С той же целью после процедуры, возможно, понадобится ношение компрессионных чулок в течение нескольких недель. Важно избегать воздействия прямых солнечных лучей, пока не утихнут все воспалительные изменения – это обычно занимает от нескольких дней до недели.`,
          `Patients can return to work immediately after vein treatment. They will need to avoid exercise or strenuous activity for approximately one week so that treated veins remain collapsed. After vein treatments on the legs, the patient may need to wear support stockings for one or more weeks to maintain pressure on the treated veins. It is important to avoid sun exposure until inflammation has subsided, which could be several days to a week after treatment.`
        ]
      },
      {
        name: ['', 'Результаты', 'Results'],
        value: [
          ``,
          `•	После <b>склеротерапии</b> расширенные вены обычно пропадают в сроки от трех недель до шести месяцев.<br>
          •	После <b>лазерного склерозирования</b> сосудистые «звездочки» исчезают в течение месяца.<br>
          Для полного удаления всех расширенных подкожных вен, возможно, понадобятся дополнительные сеансы процедуры.
          `,
          `•	After <b>sclerotherapy</b> the treated veins clear away within three weeks to six months.<br>
        •	After <b>laser vein therapy</b> treated spider veins clear away in about a month.<br>
        Both treatments may need to be repeated to completely clear away the unwanted veins.
        `
        ]
      }
    ],
    Media: {
      Images: [],
      Videos: []
    }
  }
];

export default function(state = Services, action) {
  return state;
}
