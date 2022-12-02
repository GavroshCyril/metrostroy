import { createSlice } from '@reduxjs/toolkit'

export const localizationSlice = createSlice({
  name: 'localization',
  initialState: {
    en: {
        nav: {
          home: "Home",
        },
        home: {
          title: "Virtual Museum of the",
          subtitle: "Minsk Metro",
          moscowTitle: "Moskovskaya (1st metro line)",
          moscowSubtitle:
            "Moskovskaya line (line 1) - the first line of the Minsk metro, opened on June 30, 1984. The 19.2 km long line includes fifteen stations. The Moscow line passes almost entirely under the main thoroughfare of the city",
          avtozavodskayaTitle: "Avtozavodskaya (2nd metro line)",
          avtozavodskayaSubTitle:
            "Avtozavodskaya line (2nd line) - the second line of the Minsk Metro, opened on December 31, 1990. Now the 18.1 km long line includes fourteen stations and crosses Minsk from the southeast to the west",
          zelenoluzskayaTitle: "Zelenoluzhskaya (3rd metro line)",
          zelenoluzskayaSubTitle:
            "Zelenoluzhskaya line (3rd line) - the third line of the Minsk Metro, opened on November 6, 2020. Now the 3.53 km long line includes four stations and will cross Minsk from south to north",
        },
        media: {
          title: "The history of the development of the Minsk metro",
          let: "The",
          description01:
            "decision on the construction of a subway in the capital of the BSSR, the city of Minsk, was adopted by the Council of Ministers of the USSR on February 4, 1977. On May 3, 1977, the construction of the metro began, and on November 4, 1977, tunneling work began from the construction site of the future Park Chelyuskintsev station. On June 29, 1984, on the eve of the 40th anniversary of the liberation of Minsk from Nazi invaders during the Great Patriotic War, the regular movement of trains of the Minsk Metro began. The first line was launched from the Institute of Culture station to the Moskovskaya station, 7.84 kilometers long with eight stations and the Moskovskoye electric depot. The operation of the first section of the metro line showed the need to extend the branch, and in 1986 a section from the Moskovskaya station to the Vostok station with a length of 1.71 kilometers was put into operation.",
          label: "Archival images of the construction of the subway:",
          description02:
            "A distinctive feature of the construction of the Minsk metro was the shallow depth of the stations. Due to the high level of groundwater rise, the stations had to be placed literally under the earth's surface, at a depth of only 10-17 meters. The deepest station today is Yubileinaya Ploshchad, located at a depth of more than 25 meters. The operation of the first section of the metro line showed the need to extend the branch, and in 1986 a section from the Moskovskaya station to the Vostok station with a length of 1.71 kilometers was put into operation. Since 1985, the construction of the first section of the second metro line from the Traktorny Zavod station to the Frunzenskaya station has begun. Its length was 6.12 kilometers. In 1990, the first six stations of the Avtozavodskaya line were put into permanent operation.",
          infoTitle:
            "With the launch of the subway, the urgent transport problem was solved",
          infoSubtitle:
            "Back in the days of the existence of the USSR, about 150 large plants, factories and trusts were located in Minsk. It was extremely difficult for ground public transport to solve communication issues in the capital. Since the launch of the Minsk metro, this problem has been successfully solved, and the metro has become the most popular type of public transport. Already in the first year, more than 80 million people used its services.",
        },
        contact: {
          title: "Information",
          name: "Exhibition exposition",
          free: "Is free",
          infoText:
            "Excursions are conducted only for organized groups (from 5 to 20 people) by appointment. The exposition areas are located at the level of the station ticket halls, the entrance is behind the control line.",
          locate: "Location of the museum: Partizansky avenue, 149B",
          writeInfo:
            "Registration for a tour of the exhibition exposition is carried out:",
          numberPhone:
            "by phone (8017) 219-60-67 from 15:00 to 16:15 on Mon, Wed and Fri",
          email:
            "on the basis of preliminary applications received by e-mail. mail mail@metropoliten.by",
          label: "Images of the Minsk Metro Museum:",
        },
        login: {
          title: "Log in",
          subTitle: "to get access to the administrator's office",
          login: "Login",
          password: "Password",
          logIn: "Login to your personal account",
        },
        fBranch: {
          malTitle: "Malinovka",
          malSubTitle:
            "Located at the intersection of Dzerzhinsky Avenue and Yesenin Street near the Malinovka and Brilevichi microdistricts",
          petroTitle: "Petrovshchina",
          petroSubTitle:
            "Located at the intersection of Dzerzhinsky Avenue and Golubev Street in the Yugo-Zapad microdistrict",
          michTitle: "Michalovo",
          michSubTitle:
            "Located at the intersection of Gursky Street and Dzerzhinsky Avenue",
          grushTitle: "Grushevka",
          grushSubTitle:
            "It is located under the intersection of Shchorsa Street with Dzerzhinsky Avenue",
        },
        sBranch: {
          kamTitle: "Kamennaya gorka",
          kamSubTitle:
            "Entrances to the station are located in the underground passages under the intersection of the street. Pritytsky, Kuntsevshchina and Lobanka",
          sportTitle: "Sportivnaya",
          sportSubTitle:
            "It is located in the western part of the city at the intersection of Pritytskogo and Zhudro streets",
          frunzTitle: "Frunzenskaya",
          frunzSubTitle:
            "Entrances to the station are located in underground passages under the intersection of Romanovskaya Sloboda, Melnikayte, Kalvariyskaya, Rakovskaya, Sukhoi and Yubileinaya squares",
          partizTitle: "Partisanskaya",
          partizSubTitle:
            "Located at the intersection of Partizansky Avenue and Kozlova Street",
        },
        search: {
          title: "Minsk metro projects (1969-1977)",
          description01:
            "The second half of the 20th century was marked by rapid construction and industrial growth for Minsk. The city, which until recently was almost wiped off the face of the earth during the war years, developed rapidly: new plants and factories, educational and cultural institutions appeared, new residential areas were built. By the beginning of the 70s, about 140 enterprises worked in Minsk, including the flagships of the industry of the republic and the Union: a tractor and automobile plant, bearing, motor, gear plants, machine-tool plants, electronic computers and many others. Against the backdrop of the rapid development of Minsk, more and more people flocked to the metropolis.",
          leninprosp: "Leninsky Prospekt (now Independence Avenue) in the 1960s",
          description02:
            "At the same time, this state of affairs has led to an increase in the volume of passenger traffic, average travel distances and a rapidly increasing load on the transport system in the city, to the point that the most significant city streets have exhausted their capacity. The main city highway - Leninsky Prospekt - did not escape this either.",
          description03:
            "In 1969, the main design organization of the city 'Minskproekt' developed a comprehensive scheme for the development of urban transport. Three options were considered to improve the challenging traffic environment: express bus, light rail and subway. As shown by simple calculations, the expansion of the tram and trolleybus network, as well as a significant replenishment of the ground transport fleet, will not be able to solve the problem. In a big city, with its complex and diverse economy, the load on land transport increases, and its speed inevitably decreases. Taking into account these circumstances and the specific development of Minsk, the option of introducing express buses directly to solve the transport problem could not be applied.",
          alertTitle: "In a word, Minsk needed the subway, and only it.",
          alertDesc01:
            "But only the desire of the townspeople and the justification of the design institute was not enough. Such a project was supposed to receive support from the republican party bodies, and then be approved by the top leadership of the USSR. In addition, according to unspoken Soviet standards, only a city that reached the mark of 1 million inhabitants could apply for the metro. At that time, the population of Minsk was about 900 thousand. There were rumors that in order to achieve the coveted number, it was decided to artificially increase the number of inhabitants in the city - to attract people from the Belarusian regions, primarily young people to enter educational institutions, as well as military families. How these assumptions correspond to the truth is difficult to say, but the fact remains:",
          alertDesc02:
            "in 1972, the millionth resident was officially born in Minsk.",
          description04:
            "On July 6, 1976, the Council of Ministers of the USSR issued an order approving the technical design of the first section of the Minsk Metro from eight stations: Moskovskaya (Institute of Culture), Lenin Square, Central Square (Oktyabrskaya), Victory Square, Yakub Square Kolas, Academic (Academy of Sciences), Park Chelyuskintsev, Volgograd (Moscow). The estimated cost of the project amounted to 119.3 million rubles, including the equity participation of the Minsk City Executive Committee - 9.64 million rubles. However, the start date for construction has not been determined.",
          description04bold: "Thanks to the initiative of Peter Masherov",
          description05:
            "as well as the First Secretary of the Central Committee of the Communist Party of Belarus Tikhon Yakovlev, on behalf of the Council of Ministers of the Byelorussian SSR and the Central Committee of the Communist Party of Belarus, an application was again submitted with a request to develop working drawings in 1976, the beginning of the construction itself in 1977, as well as the allocation of public funds in the current five-year plan. Letters were sent to the Council of Ministers of the USSR for consideration by its chairman A. Kosygin. In the end, the intended goal was achieved, and on February 4, 1977, the Council of Ministers of the USSR issued an order to begin construction of the metro in Minsk. On May 3, 1977, many Minskers gathered near Chelyuskintsev Park to witness the historic event. In a solemn atmosphere, the first bucket of earth was extracted by an excavator, marking the beginning of the construction of the Minsk Metro.",
          perspectiva:
            "Perspective scheme of the Minsk metro on the eve of the start of construction",
        },
        map: {
          title: "Minsk metro scheme",
          redbranch: "Avtozavodskaya line",
          bluebranch: "Moskovskaya line",
          greenbranch: "Zelenoluzhskaya line",
        },
        tBranch: {
          vokzTitle: "Vokzalnaya",
          vokzSubTitle:
            "It is located at the intersection of Druzhnaya and Vokzalnaya streets. It is a transfer to the Moscow line ('Lenin Square')",
          bogushTitle: "Frantishek Bogushevich Square",
          bogushSubTitle:
            "The square is located at the intersection of Dzerzhinsky Avenue, Klara Zetkin and Nemiga streets in the historical district of Pleschanka",
          yubileyTitle: "Yubileynaya Square",
          yubileySubTitle:
            "The terminal station of the Zelenoluzhskaya line and is located at the intersection of Dry and Kalvariyskaya streets",
          slobodaTitle: "Kovalskaya Sloboda",
          slobodaSubTitle:
            "The terminal station of the Zelenoluzhskaya line and is located at the intersection of Zhukovsky and Voronyansky streets",
        },
        printMaterial: "Print version",
        downloadMaterial: "Download material in Word format",
        admin: {
          title: "Admin panel",
          subTitle: "to get access to the administrator's office",
          login: "Login",
          password: "Password",
          logIn: "Login to your personal account",
        },
      },
    ru: {
        home: {
          title: "Виртуальный музей",
          subtitle: "Минского метрополитена",
          moscowTitle: "Московская (1-ая линия метро)",
          moscowSubtitle:
            "Московская линия (1-я линия) - первая линия Минского метрополитена, открыта 30 июня 1984г. Линия длиной 19,2 км включает 15 станций. Московская линия почти целиком проходит под главной магистралью города",
          avtozavodskayaTitle: "Автозаводская (2-ая линия метро)",
          avtozavodskayaSubTitle:
            "Автозаводская линия (2-я линия) - вторая линия Минского  метрополитена, открыта 31 декабря 1990 года. Сейчас линия длиной 18,1 км включает четырнадцать станций и пересекает Минск с юго-востока на запад",
          zelenoluzskayaTitle: "Зеленолужская (3-ая линия метро)",
          zelenoluzskayaSubTitle:
            "Зеленолужская линия (3-я линия) - третья линия Минского метрополитена, открыта 6 ноября 2020 года. Сейчас линия длиной 3,53 км включает четыре станции и будет пересекать Минск с юга на север",
        },
        media: {
          title: "Первая очередь (1977-1984)",
          label: "Архивные изображения:",
          let: "C",
          description01:
            "о дня торжественной церемонии на станции «Парк Челюскинцев», темпы работ по строительству были довольно высокими. 16 июня 1977 года была забита первая свая минского метро, а 4 ноября состоялся торжественный митинг по случаю начала проходки тоннелей. Стройка набирала обороты, и в 1979 году строительно-монтажные работы велись уже на пяти станциях и перегонах между ними. Последней в ноябре 1980 года было начало строительство станции «Октябрьская». Первоначально открытие метрополитена было запланировано ко дню Победы в 1985 году, но метростроители взяли на себя обязательство завершить все работы к юбилею освобождения Беларуси, а именно до июля 1984 года. Поскольку все станции возводились открытым способом, нормальное движение по Ленинскому проспекту было невозможно – для наземного транспорта организовали объездные пути. От тротуара до тротуара центральную магистраль города пересекали внушительные деревянные щиты с буквой «М». Главной трудностью для строителей стал высокий уровень грунтовых вод, а главное – так называемые «плывуны», воду из которых откачивали при помощи множества скважин.",
          description02:
            "Материалы для стройки обеспечивали предприятия из Москвы, Ленинграда, Киева, Риги, Баку и многих других городов. Для снабжения бетоном, раствором и арматурными каркасами в жилом районе Шабаны был построен собственный завод железобетонных изделий. В отношении местности самым сложным стало строительство станции «Площадь Ленина». Здесь была проведена большая работа по перепланировке территории: перед сооружением будущей станции требовалось перенести очень густую сеть привокзальных подземных коммуникаций (электрические кабели, трубы водо- и газоснабжения), снести несколько прилегающих к вокзалу зданий, пересадить множество деревьев. Примыкающие к станции тоннели прокладывались под семнадцатью железнодорожными путями вокзала «Минск-Пассажирский» без остановки движения поездов, а также под жилыми домами. Проходка тоннелей в таких условиях связана с неизбежными трудностями, для преодоления которых впервые в Минске была применена обделка тоннелей из чугунных колец, а чеканка тоннеля была произведена расширяющимся цементом. Чтобы проложить один только тоннель к станции «Институт культуры», пришлось вынуть 15 тысяч кубометров грунта, уложить 1640 кубометров сборного железобетона и 1000 тонн чугунных колец.",
          description03:
            "Самый сложный участок от Белорусского государственного цирка до Площади Победы были пройден открытым способом. Впечатляющим научно-техническим решением явилась проходка перегонных тоннелей под рекой Свислочь. Для неё была разработана технология на основе моделирования. Произведённое в Белорусском политехническом институте моделирование русла реки Свислочь с защитной дамбой и забоя под ней в масштабе 1:40 показало, что проходка тоннеля возможна при осушении песчаных отложений и без их искусственного закрепления. Изначально же планировалось предварительное замораживание надтоннельной зоны, что потребовало бы значительных материальных вложений и задержало начало проходки минимум на год.",
          description04:
            "Вместо этого по дну реки уложили искусственное русло на площади 1500 квадратных метров, где проложили 10 стальных труб диаметром 1,2 метра, ограниченных с двух сторон временными плотинами из диафрагм. Над рекой соорудили временный передвижной мост, чтобы затем производить бурение скважин для замораживания грунта и монтажа установок глубинного водопонижения на время тоннельных работ. При штурме реки строителям порой приходилось работать по колено в воде. На пути встречались крупные валуны и деревянные сваи старого моста, на которых к тому же намертво заделаны основания железобетонных опор. Справиться с такими преградами можно было только при помощи взрывчатки. Несмотря на всё это, работы были завершены быстрыми темпами – самый трудный участок перегонных тоннелей был сооружён менее чем за год, а сама Свислочь была пройдена всего за 26 рабочих дней.",
          infoTitle:
            "С пуском метрополитена была решена назревшая транспортная проблема",
          infoSubtitle:
            "Еще в бытность существования СССР в Минске располагалось порядка 150 крупных заводов, фабрик и трестов. Наземному общественному транспорту было крайне тяжело решать вопросы сообщения в столице. С момента пуска Минского метрополитена эта проблема успешно решена, а метро стало самым популярным видом общественного транспорта. Уже за первый год его услугами воспользовались более 80 миллионов человек.",
        },
        contact: {
          title: "Информация",
          name: "Выставочная экспозиция",
          free: "бесплатно",
          infoText:
            "Экскурсии проводятся только для организованных групп (от 5 до 20 человек) по предварительной записи. Экспозиционные площади расположены на уровне кассовых залов станции, вход находится за линией контроля.",
          locate: "Местонахождение музея: Партизанский просп., 149В",
          writeInfo: "Запись на экскурсию по выставочной экспозиции осуществляется:",
          numberPhone: "по телефону (8017) 219-60-67 с 15:00 до 16:15 по пн, ср и пт",
          email:
            "на основании предварительных заявок, поступивших на эл. почту mail@metropoliten.by",
          label: "Изображения музея минского метрополитена:",
        },
        login: {
          title: "Авторизируйтесь",
          subTitle: "чтобы получить доступ к кабинету администратора",
          login: "Логин",
          password: "Пароль",
          logIn: "Войти в личный кабинет",
        },
        fBranch: {
          malTitle: "Малиновка",
          malSubTitle:
            "Находится на пересечении проспекта Дзержинского и улицы Есенина рядом с микрорайонами Малиновка и Брилевичи",
          petroTitle: "Петровщина",
          petroSubTitle:
            "Находится на пересечении проспекта Дзержинского и улицы Голубева в микрорайоне Юго-Запад",
          michTitle: "Михалово",
          michSubTitle:
            "Находится на пересечении улицы Гурского и проспекта Дзержинского",
          grushTitle: "Грушевка",
          grushSubTitle:
            "Находится под пересечением улицы Щорса с проспектом Дзержинского",
        },
        tBranch: {
          vokzTitle: "Вокзальная",
          vokzSubTitle:
            "Располагается на пересечении Дружной и Вокзальной улиц. Является пересадочной на Московскую линию («Площадь Ленина»)",
          bogushTitle: "Площадь Франтишка Богушевича",
          bogushSubTitle:
            "Площадь располагается на пересечении проспекта Дзержинского, улиц Клары Цеткин и Немига в историческом районе Плещанка",
          yubileyTitle: "Юбилейная площадь",
          yubileySubTitle:
            "Конечная станция Зеленолужской линии и расположена на пересечении Сухой и Кальварийской улицы",
          slobodaTitle: "Ковальская слобода",
          slobodaSubTitle:
            "Конечная станция Зеленолужской линии и расположена на пересечении улиц Жуковского и Воронянского",
        },
        sBranch: {
          kamTitle: "Каменная горка",
          kamSubTitle:
            "Входы на станцию расположены в подземных переходах под пересечением ул. Притыцкого, Кунцевщина и Лобанка",
          sportTitle: "Спортивная",
          sportSubTitle:
            "Находится в западной части города на пересечении улиц Притыцкого и Жудро",
          frunzTitle: "Фрунзенская",
          frunzSubTitle:
            "Входы на станцию расположены в подземных переходах под пересечением улиц Романовская Слобода, Мельникайте, Кальварийской, Раковской, Сухой и Юбилейной площади",
          partizTitle: "Партизанская",
          partizSubTitle:
            "Расположена у пересечения Партизанского проспекта и улицы Козлова",
        },
        search: {
          title: "Проекты минского метро (1969-1977)",
          description01:
            "Вторая половина ХХ века для Минска ознаменовалась бурным строительством и ростом промышленности. Город, ещё недавно почти стёртый с лица земли в годы войны, стремительно развивался: появлялись новые заводы и фабрики, образовательные и культурные учреждения, строились новые жилые массивы. К началу 70-х годов в Минске работало около 140 предприятий, среди которых флагманы индустрии республики и Союза: тракторный и автомобильный завод, заводы подшипниковый, моторный, шестерён, станкостроительные заводы, электронных вычислительных машин и многие другие. На фоне стремительного развития Минска в мегаполис стекалось всё больше людей.",
          leninprosp:
            "Ленинский проспект (ныне проспект Независимости) в 1960-е годы",
          description02:
            "В то же время, такое положение вещей привело к увеличению объёма пассажироперевозок, средней дальности поездок и стремительно нарастающей нагрузке на транспортную систему в городе вплоть до того, что наиболее значимые городские улицы исчерпали свою пропускную способность. Не избежала этого и главная городская магистраль – Ленинский проспект.",
          description03:
            "В 1969 году главная проектная организация города «Минскпроект» разрабатывала комплексную схему развития городского транспорта. Для улучшения сложной транспортной обстановки было рассмотрено три варианта: автобус-экспресс, скоростной трамвай и метрополитен. Как показали простые расчёты, расширение трамвайной и троллейбусной сети, а также существенное пополнение парка наземного транспорта проблему решить не смогут. В большом городе, с его сложным и многообразным хозяйством, нагрузка на наземный транспорт возрастает, а его скорость неизбежно снижается. С учётом этих обстоятельств и специфической застройки Минска, вариант внедрения автобусов-экспрессов напрямую для решения транспортной проблемы не мог быть применён.",
          alertTitle: "Одним словом, Минску был нужен метрополитен, и только он.",
          alertDesc01:
            " Но одного только желания горожан и обоснования проектного института было мало. Такой проект должен был получить поддержку у республиканских партийных органов, а затем быть утверждён высшим руководством СССР. Кроме того, по негласным советским стандартам, на метрополитен мог претендовать только город, достигший отметки в 1 миллион жителей. На тот момент население Минска составляло около 900 тысяч. Ходили слухи о том, что для достижения заветного числа было решено искусственно увеличить количество жителей в городе – привлекать людей из белорусских регионов, в первую очередь молодёжь для поступления в учебные заведения, а также семьи военных. Насколько эти предположения соответствуют истине – сказать сложно, но факт остаётся фактом:",
          alertDesc02: "в 1972 году в Минске официально родился миллионный житель.",
          description04:
            "6 июля 1976 года Совет Министров СССР издал распоряжение об утверждении технического проекта первого участка Минского метрополитена из восьми станций: «Московская» (Институт культуры), «Площадь Ленина», «Центральная площадь» (Октябрьская), «Площадь Победы», «Площадь Якуба Коласа», «Академическая» (Академия наук), «Парк Челюскинцев», «Волгоградская» (Московская). Сметная стоимость проекта составила 119,3 миллиона рублей, в том числе долевое участие Минского горисполкома – 9,64 миллиона рублей. Однако при этом сроки начала строительства не были определены.",
          description04bold: "Благодаря инициативе Петра Машерова",
          description05:
            "а также Первого секретаря ЦК Компартии  Белоруссии Тихона Яковлева, от имени Совета министров Белорусской ССР и ЦК Компартии Белоруссии вновь была подана заявка с просьбой о разработке рабочих чертежей в 1976 году, начале самого строительства в 1977 году, также выделении государственных средств в текущей пятилетке. Письма направлялись в Совет Министров СССР для рассмотрения его председателем А. Косыгиным. В конце концов, намеченная цель была достигнута, и 4 февраля 1977 года Совет Министров СССР издал распоряжение о начале строительства метрополитена в Минске. 3 мая 1977 года множество минчан собралось у парка Челюскинцев, чтобы стать свидетелями исторического события. В торжественной обстановке экскаватором был извлечён первый ковш земли, положив начало строительству Минского метрополитена.",
          perspectiva:
            "Перспективная схема минского метро накануне начала строительств",
        },
        map: {
          title: "Схема минского метрополитена",
          redbranch: "Автозаводская линия",
          bluebranch: "Московская линия",
          greenbranch: "Зеленолужская линия",
        },
        printMaterial: "Версия для печати",
        downloadMaterial: "Скачать материал в формате Word",
      },
    bel: {
        home: {
          title: "Віртуальны музей",
          subtitle: "Мінскага метрапалітэна",
          moscowTitle: "Маскоўская (1-ая лінія метро)",
          moscowSubtitle:
            "Маскоўская лінія (1-я лінія) - першая лінія Мінскага метрапалітэна, адкрыта 30 чэрвеня 1984г. Лінія даўжынёй 19,2 км уключае пятнаццаць станцый. Маскоўская лінія амаль цалкам праходзіць пад галоўнай магістраллю горада",
          avtozavodskayaTitle: "Аўтазаводская (2-ая лінія метро)",
          avtozavodskayaSubTitle:
            "Аўтазаводская лінія (2-я лінія) - другая лінія Мінскага метрапалітэна, адкрыта 31 снежня 1990 года. Цяпер лінія даўжынёй 18,1 км уключае чатырнаццаць станцый і перасякае Мінск з паўднёвага ўсходу на захад.",
          zelenoluzskayaTitle: "Зеленалужская (3-я лінія метро)",
          zelenoluzskayaSubTitle:
            "Зеленалужская лінія (3-я лінія) - трэцяя лінія Мінскага метрапалітэна, адкрыта 6 лістапада 2020 года. Цяпер лінія даўжынёй 3,53 км уключае чатыры станцыі і будзе перасякаць Мінск з поўдня на поўнач.",
        },
        media: {
          title: "Гісторыя развіцця мінскага метрапалітэна",
          let: "П",
          description01:
            'астанова аб будаўніцтве метрапалітэна ў сталіцы БССР горадзе Мінску была прынята Саветам Міністраў СССР 4 лютага 1977 года. 3 мая 1977 года было пачата будаўніцтва метро, ​​а 4 лістапада 1977 года з будаўнічай пляцоўкі будучай станцыі "Парк Чалюскінцаў" пачаты работы па праходцы тунэляў. 29 чэрвеня 1984 года, напярэдадні 40-й гадавіны вызвалення Мінска ад нямецка-фашысцкіх захопнікаў у гады Вялікай Айчыннай вайны, пачаўся рэгулярны рух цягнікоў Мінскага метрапалітэна. Была запушчана першая лінія ад станцыі "Інстытут Культуры" да станцыі "Маскоўская", працягласцю 7,84 кіламетра з васьмю станцыямі і электрадэпо "Маскоўскае". Эксплуатацыя першага ўчастка лініі метро паказала неабходнасць падаўжэння галінкі і ў 1986 годзе быў уведзены ў эксплуатацыю ўчастак ад станцыі "Маскоўская" да станцыі "Усход" працягласцю 1,71 кіламетра.',
          label: "Архіўныя выявы будаўніцтва метрапалітэна",
          description02:
            'Адметнай асаблівасцю будаўніцтва Мінскага метрапалітэна стала невялікая глыбіня залажэння станцый. З-за высокага ўзроўню ўздыму грунтавых вод станцыі прыйшлося размяшчаць літаральна пад зямной паверхняй, на глыбіні ўсяго 10-17 метраў. Самай глыбокай на сённяшні дзень з`яўляецца станцыя "Юбілейная плошча", размешчаная на глыбіні больш за 25 метраў. Эксплуатацыя першага ўчастка лініі метро паказала неабходнасць падаўжэння галінкі і ў 1986 годзе быў уведзены ў эксплуатацыю ўчастак ад станцыі "Маскоўская" да станцыі "Усход" працягласцю 1,71 кіламетра. З 1985 года было пачата будаўніцтва першага ўчастка другой лініі метро ад станцыі "Трактарны завод" да станцыі "Фрунзенская". Яго працягласць склала 6,12 кіламетра. У 1990 годзе ў пастаянную эксплуатацыю ўведзены першыя шэсць станцый Аўтазаводскай лініі.',
          infoTitle:
            "З пускам метрапалітэна была вырашана наспелая транспартная праблема",
          infoSubtitle:
            "Яшчэ ў бытнасць існавання СССР у Мінску размяшчалася каля 150 буйных заводаў, фабрык і трэстаў. Наземнаму грамадскаму транспарту было вельмі цяжка вырашаць пытанні зносін у сталіцы. З моманту пуску Мінскага метрапалітэна гэта праблема паспяхова вырашана, а метро стала самым папулярным відам грамадскага транспарту. Ужо за першы год яго паслугамі скарысталіся больш за 80 мільёнаў чалавек.",
        },
        contact: {
          title: "Інфармацыя",
          name: "Выставачная экспазіцыя",
          free: "бясплатна",
          infoText:
            "Экскурсіі праводзяцца толькі для арганізаваных груп (ад 5 да 20 чалавек) па папярэднім запісе. Экспазіцыйныя плошчы размешчаны на ўзроўні касавых залаў станцыі, уваход знаходзіцца за лініяй кантролю.",
          locate: "Месцазнаходжанне музея: Партызанскі прасп., 149В",
          writeInfo: "Запіс на экскурсію па выставачнай экспазіцыі ажыццяўляецца:",
          numberPhone: "па тэлефоне (8017) 219-60-67 з 15:00 да 16:15 па пн, ср і пт",
          email:
            "на падставе папярэдніх заявак, якія паступілі на эл. пошту mail@metropoliten.by",
          label: "Выявы музея мінскага метрапалітэна:",
        },
        login: {
          title: "Аўтарызуйцеся",
          subTitle: "каб атрымаць доступ да кабінета адміністратара",
          login: "Лагін",
          password: "Пароль",
          logIn: "Увайсці ў асабісты кабінет",
        },
        fBranch: {
          malTitle: "Малінаўка",
          malSubTitle:
            "Знаходзіцца на скрыжаванні праспекта Дзяржынскага і вуліцы Ясеніна побач з мікрараёнамі Малінаўка і Брылевічы",
          petroTitle: "Пятроўшчына",
          petroSubTitle:
            "Знаходзіцца на скрыжаванні праспекта Дзяржынскага і вуліцы Голубева ў мікрараёне Паўднёвы Захад",
          michTitle: "Міхалова",
          michSubTitle:
            "Знаходзіцца на скрыжаванні вуліцы Гурскага і праспекта Дзяржынскага",
          grushTitle: "Грушаўка",
          grushSubTitle:
            "Знаходзіцца пад скрыжаваннем вуліцы Шчорса з праспектам Дзяржынскага.",
        },
        sBranch: {
          kamTitle: "Каменная горка",
          kamSubTitle:
            "Уваходы на станцыю размешчаны ў падземных пераходах пад скрыжаваннем вул. Прытыцкага, Кунцаўшчына і Лабанка",
          sportTitle: "Спартыўная",
          sportSubTitle:
            "Знаходзіцца ў заходняй частцы горада на скрыжаванні вуліц Прытыцкага і Жудро",
          frunzTitle: "Фрунзенская",
          frunzSubTitle:
            "Уваходы на станцыю размешчаны ў падземных пераходах пад скрыжаваннем вуліц Раманаўская Слабада, Мельнікайтэ, Кальварыйскай, Ракаўскай, Сухой і Юбілейнай плошчы",
          partizTitle: "Партызанская",
          partizSubTitle:
            "Размешчана ля скрыжавання Партызанскага праспекта і вуліцы Казлова",
        },
        search: {
          title: "Праекты мінскага метро (1969-1977)",
          description01:
            "Другая палова ХХ стагоддзя для Мінска адзначылася бурным будаўніцтвам і ростам прамысловасці. Горад, яшчэ нядаўна амаль сцёрты з зямлі ў гады вайны, імкліва развіваўся: з'яўляліся новыя заводы і фабрыкі, адукацыйныя і культурныя ўстановы, будаваліся новыя жылыя масівы. Да пачатку 70-х гадоў у Мінску працавала каля 140 прадпрыемстваў, сярод якіх флагманы індустрыі рэспублікі і Саюза: трактарны і аўтамабільны завод, заводы падшыпнікавы, маторны, шасцерняў, станкабудаўнічыя заводы, электронных вылічальных машын і многія іншыя. На фоне імклівага развіцця Мінска ў мегаполіс сцякалася ўсё больш людзей.",
          leninprosp: "Ленінскі праспект (цяпер праспект Незалежнасці) у 1960-я гады",
          description02:
            "У той жа час, такі стан рэчаў прывёў да павелічэння аб'ёму пасажыраперавозак, сярэдняй далёкасці паездак і імкліва нарастальнай нагрузкі на транспартную сістэму ў горадзе аж да таго, што найбольш значныя гарадскія вуліцы вычарпалі сваю прапускную здольнасць. Не пазбегла гэтага і галоўная гарадская магістраль - Ленінскі праспект.",
          description03:
            "У 1969 годзе галоўная праектная арганізацыя горада 'Мінскпраект' распрацоўвала комплексную схему развіцця гарадскога транспарту. Для паляпшэння складанай транспартнай абстаноўкі было разгледжана тры варыянты: аўтобус-экспрэс, хуткасны трамвай і метрапалітэн. Як паказалі простыя разлікі, пашырэнне трамвайнай і тралейбуснай сеткі, а таксама істотнае папаўненне парка наземнага транспарту праблему вырашыць не змогуць. У вялікім горадзе, з яго складанай і разнастайнай гаспадаркай, нагрузка на наземны транспарт узрастае, а яго хуткасць непазбежна зніжаецца. З улікам гэтых абставін і спецыфічнай забудовы Мінска, варыянт укаранення аўтобусаў-экспрэсаў напрамую для вырашэння транспартнай праблемы не мог быць прыменены.",
          alertTitle: "Адным словам, Менску быў патрэбен метрапалітэн, і толькі ён.",
          alertDesc01:
            " Але аднаго толькі жадання гараджан і абгрунтавання праектнага інстытута было мала. Такі праект павінен быў атрымаць падтрымку ў рэспубліканскіх партыйных органаў, а потым быць зацверджаны вышэйшым кіраўніцтвам СССР. Акрамя таго, паводле негалосных савецкіх стандартаў, на метрапалітэн мог прэтэндаваць толькі горад, які дасягнуў адзнакі ў 1 мільён жыхароў. На той момант насельніцтва Мінска складала каля 900 тысяч. Хадзілі чуткі аб тым, што для дасягнення запаветнага ліку было вырашана штучна павялічыць колькасць жыхароў у горадзе - прыцягваць людзей з беларускіх рэгіёнаў, у першую чаргу моладзь для паступлення ў навучальныя ўстановы, а таксама сем'і вайскоўцаў. Наколькі гэтыя здагадкі адпавядаюць ісціне - сказаць складана, але факт застаецца фактам:",
          alertDesc02: "у 1972 годзе ў Менску афіцыйна нарадзіўся мільённы жыхар.",
          description04:
            "6 ліпеня 1976 года Савет Міністраў СССР выдаў распараджэнне аб зацвярджэнні тэхнічнага праекта першага ўчастка Мінскага метрапалітэна з васьмі станцый: 'Маскоўская' (Інстытут культуры), 'Плошча Леніна', 'Цэнтральная плошча' (Кастрычніцкая), 'Плошча Перамогі', 'Плошча Якуба Коласа', 'Акадэмічная' (Акадэмія навук), 'Парк Чалюскінцаў', 'Валгаградская' (Маскоўская). Каштарысная вартасць праекта склала 119,3 мільёна рублёў, у тым ліку долевы ўдзел Мінскага гарвыканкама - 9,64 мільёна рублёў. Аднак пры гэтым тэрміны пачатку будаўніцтвы не былі вызначаны.",
          description04bold: "Дзякуючы ініцыятыве Пятра Машэрава",
          description05:
            "а таксама Першага сакратара ЦК Кампартыі Беларусі Ціхана Якаўлева, ад імя Савета міністраў Беларускай ССР і ЦК Кампартыі Беларусі зноў была пададзена заяўка з просьбай аб распрацоўцы працоўных чарцяжоў у 1976 годзе, пачатку самога будаўніцтва ў 1977 годзе, таксама выдзяленні дзяржаўных сродкаў у бягучай пяцігодцы. Лісты накіроўваліся ў Савет Міністраў СССР для разгляду яго старшынёй А. Касыгіным. У рэшце рэшт намечаная мэта была дасягнута, і 4 лютага 1977 года Савет Міністраў СССР выдаў распараджэнне аб пачатку будаўніцтва метрапалітэна ў Мінску. 3 мая 1977 года мноства мінчан сабралася ля парка Чалюскінцаў, каб стаць сведкамі гістарычнай падзеі. Ва ўрачыстай абстаноўцы экскаватарам быў выняты першы коўш зямлі, паклаўшы пачатак будаўніцтву Мінскага метрапалітэна.",
          perspectiva:
            "Перспектыўная схема мінскага метро напярэдадні пачатку будаўніцтва",
        },
        map: {
          title: "Схема мінскага метрапалітэна",
          redbranch: "Аўтазаводская лінія",
          bluebranch: "Маскоўская лінія",
          greenbranch: "Зеленалужская лінія",
        },
        tBranch: {
          vokzTitle: "Вакзальная",
          vokzSubTitle:
            "Размяшчаецца на скрыжаванні Дружнай і Вакзальнай вуліц. З'яўляецца перасадачнай на Маскоўскую лінію («Плошча Леніна»)",
          bogushTitle: "Плошча Францішка Багушэвіча",
          bogushSubTitle:
            "Плошча размяшчаецца на скрыжаванні праспекта Дзяржынскага, вуліц Клары Цэткін і Няміга ў гістарычным раёне Плешчанка.",
          yubileyTitle: "Юбілейная плошча",
          yubileySubTitle:
            "Канчатковая станцыя Зеленалужскай лініі і размешчана на скрыжаванні Сухой і Кальварыйскай вуліцы",
          slobodaTitle: "Кавальская слабада",
          slobodaSubTitle:
            "Канчатковая станцыя Зеленалужскай лініі і размешчана на скрыжаванні вуліц Жукоўскага і Варанянскага.",
        },
        printMaterial: "Версія для друку",
        downloadMaterial: "Спампаваць матэрыял у фармаце Word",
      },
    currentLocale: "en"
  },
  reducers: {
    update: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("state", state)
      console.log("action", action)
    //   action.payload.locale

    //   state.id = action.payload.id
    //   state.name = action.payload.name
    //   state.currentLocalization = () => {
    //       let abc
    //     switch (action.payload.locale) {
    //             case "en":
    //                 abc = state.localization.en
    //             case "ru":
    //                 abc= state.localization.ru
    //             case "ru":
    //                 abc = state.localization.by
    //             default:
    //                 abc = state.localization.en
    //         }
    //     return state.currentLocalization = abc
    //   }
        state.currentLocale = action.payload
    },
    updateLocalisationResouces: (state, action) => {
      console.log("state", state)
      console.log("action", action)

      state.en = action.payload.en
      state.ru = action.payload.ru
      state.bel = action.payload.by
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const selectLocalizedState = (state) => {
    // state.locale
    // let abc
    console.log("state.currentLocale", state.localization.currentLocale)
    // switch (state.localization.currentLocale) {
    //     case "en":
    //         state.localization.currentLocalization = state.localization.en
    //     case "ru":
    //         state.localization.currentLocalization = state.localization.ru
    //     case "by":
    //         state.localization.currentLocalization = state.localization.by
    //     // default:
    //     //     state.localization.currentLocalization  = state.localization.en
    // }

    return state.localization[state.localization.currentLocale]
}

export const selectState = (state) => state.localization
export const selectLocale = (state) => state.localization.currentLocale
// export const isUserLoggedIn = (state) => state.user.id !== ""

// Action creators are generated for each case reducer function
export const { update, updateLocalisationResouces } = localizationSlice.actions

export default localizationSlice.reducer