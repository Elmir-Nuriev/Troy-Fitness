export type Language = 'ru' | 'en' | 'ka' | 'tr';

export const translations = {
  "ru": {
    "nav": {
      "about": "О клубе",
      "zones": "Зоны",
      "pricing": "Тарифы",
      "trainers": "Тренеры",
      "calculator": "Калькулятор",
      "status": "Загрузка",
      "contacts": "Контакты",
      "bookBtn": "Записаться",
      "openStatus": "Открыто до 23:45",
      "callUs": "Позвонить",
      "topSchedule": "08:00 – 23:45",
      "topAddress": "Батуми, ул. Давида Агмашенебели 2г",
      "logoSubtitle": "BATUMI • PREMIUM CLUB"
    },
    "hero": {
      "badge": "Премиальный фитнес-клуб в Батуми",
      "titleStart": "СИЛА.",
      "titleMiddle": "ЭСТЕТИКА.",
      "titleEnd": "ДИСЦИПЛИНА.",
      "subtitle": "Современное пространство для тренировок на ул. Давида Агмашенебели 2г. Профессиональное оборудование, мощная вентиляция, зона свободных весов и персональный подход.",
      "ctaPrimary": "Выбрать абонемент",
      "ctaSecondary": "Пробная тренировка",
      "addressBadge": "Батуми, Агмашенебели 2г",
      "ratingPlatform": "/ 5.0 Google & FB",
      "waChatTooltip": "Написать в WhatsApp",
      "waMessage": "Здравствуйте! Хочу узнать подробнее о тренировках в Vortex Fitness Batumi",
      "stats": {
        "space": "1 200 м²",
        "spaceDesc": "Пространства зала",
        "equipment": "80+",
        "equipmentDesc": "Премиум тренажеров",
        "rating": "4.9 ★",
        "ratingDesc": "На основе 240+ отзывов",
        "hours": "08:00 – 23:45",
        "hoursDesc": "Ежедневно без выходных"
      }
    },
    "status": {
      "liveTracker": "Live Tracker",
      "title": "Загруженность зала в реальном времени",
      "subtitle": "Планируйте тренировку в максимально комфортное время",
      "now": "Сейчас в зале",
      "forecastFor": "Прогноз на",
      "clickBarHint": "Нажмите на столбец для просмотра",
      "comfort": "Комфортная атмосфера",
      "moderate": "Умеренная активность",
      "busy": "Пиковая активность",
      "hoursLegend": "График активности за день:",
      "today": "Сегодня",
      "idealTimeTitle": "Идеальное время:",
      "idealTimeDesc": "Утренние часы (08:00 – 12:00) и после 21:30.",
      "legendComfort": "До 40% (Свободно)",
      "legendOptimal": "40–75% (Оптимально)",
      "legendPeak": "75%+ (Пик)"
    },
    "about": {
      "badge": "ПОЧЕМУ VORTEX FITNESS",
      "title": "Все условия для вашего прогресса",
      "desc": "Клуб спроектирован с учетом потребностей как опытных атлетов, так и тех, кто только начинает свой путь в фитнесе.",
      "bannerTitle": "Первое посещение без стресса и очередей",
      "bannerDesc": "Дежурный тренер бесплатно познакомит вас с залом и техникой безопасности",
      "bannerBtn": "Узнать стоимость абонементов",
      "items": [
        {
          "title": "Профессиональные тренажеры",
          "desc": "Анатомически выверенная биомеханика, гантельный ряд до 50 кг и олимпийские помосты."
        },
        {
          "title": "Мощная вентиляция и климат-контроль",
          "desc": "Непрерывная подача свежего охлажденного воздуха даже в разгар батумского лета."
        },
        {
          "title": "Панорамная кардио-зона",
          "desc": "Беговые дорожки, эллипсоиды и степперы с интерактивным мониторингом пульса."
        },
        {
          "title": "Фитнес-бар и спортпит",
          "desc": "Свежие протеиновые коктейли, BCAA, изотоники и премиальный кофе перед тренировкой."
        },
        {
          "title": "Комфортные раздевалки и душ",
          "desc": "Электронные замки, просторные душевые кабины, мощные фены и питьевая вода."
        },
        {
          "title": "Сертифицированные тренеры",
          "desc": "Опытные наставники с высшим спортивным образованием и практикой от 7 лет."
        }
      ]
    },
    "zones": {
      "badge": "ПРОСТРАНСТВО",
      "title": "Зоны клуба VORTEX FITNESS",
      "desc": "Продуманное зонирование исключает очереди к снарядам даже в пиковые часы",
      "feature1": "Оборудование европейского стандарта",
      "feature2": "Идеальная чистота и дезинфекция",
      "tryZone": "Попробовать в этой зоне",
      "items": [
        {
          "id": "power",
          "title": "Зона свободных весов",
          "desc": "Гантельный ряд от 1 до 50 кг, силовые рамы, помосты для тяги, олимпийские грифы и регулируемые скамьи.",
          "tag": "Силовая зона",
          "image": "/images/power-zone.jpg"
        },
        {
          "id": "cardio",
          "title": "Панорамный кардио-театр",
          "desc": "Беговые дорожки, эллипсы и велотренажеры с видом на город и персональными мультимедиа-экранами.",
          "tag": "Кардио зона",
          "image": "/images/cardio-zone.jpg"
        },
        {
          "id": "functional",
          "title": "Функциональный тренинг",
          "desc": "Зона кроссфита и растяжки: канаты, тумбы для прыжков, петли TRX, медболы и массажные роллеры.",
          "tag": "Cross & Stretch",
          "image": "/images/vortex-hero.jpg"
        },
        {
          "id": "bar",
          "title": "Фитнес-бар и лаунж",
          "desc": "Зона отдыха с правильным питанием, протеиновыми шейками, смузи, витаминами и качественным кофе.",
          "tag": "Бар и отдых",
          "image": "/images/bar-zone.jpg"
        }
      ]
    },
    "pricing": {
      "badge": "ТАРИФЫ И АБОНЕМЕНТЫ",
      "title": "Инвестируйте в свое здоровье и силу",
      "desc": "Прозрачные цены без скрытых платежей. Выберите подходящий формат тренировок.",
      "currencyToggle": "Валюта:",
      "defaultBadge": "ХИТ ПРОДАЖ",
      "guarantee1": "Оплата картой Visa / Mastercard / Apple Pay / Наличными",
      "guarantee2": "Официальный договор, чеки и прозрачные условия заморозки",
      "guarantee3": "Без скрытых списаний и навязанных услуг",
      "plans": [
        {
          "name": "Разовое посещение",
          "priceGEL": 20,
          "period": "1 день",
          "desc": "Идеально для первого знакомства с клубом или гостей Батуми",
          "features": [
            "Полный доступ ко всем зонам зала",
            "Индивидуальный шкафчик и душ",
            "Фен и питьевая вода",
            "Консультация дежурного тренера"
          ],
          "popular": false,
          "buttonText": "Выбрать"
        },
        {
          "name": "1 Месяц Безлимит",
          "priceGEL": 130,
          "period": "30 дней",
          "desc": "Самый гибкий абонемент без ограничений по времени посещения",
          "features": [
            "Безлимитный вход 08:00 – 23:45",
            "Вводный инструктаж в подарок",
            "Доступ ко всем зонам и тренажерам",
            "Электронный шкафчик и душ",
            "Скидка 10% в фитнес-баре"
          ],
          "popular": false,
          "buttonText": "Купить абонемент"
        },
        {
          "name": "3 Месяца ХИТ",
          "priceGEL": 340,
          "period": "90 дней",
          "desc": "Оптимальный срок для устойчивой трансформации тела",
          "features": [
            "Безлимитный вход каждый день",
            "Возможность заморозки на 14 дней",
            "2 гостевых визита для друзей",
            "Индивидуальная программа тренировок",
            "Скидка 10% в фитнес-баре"
          ],
          "popular": true,
          "badge": "ХИТ ПРОДАЖ",
          "buttonText": "Купить со скидкой"
        },
        {
          "name": "1 Год VIP",
          "priceGEL": 990,
          "period": "365 дней",
          "desc": "Максимальная выгода и комфорт для постоянных резидентов клуба",
          "features": [
            "Полный безлимит 365 дней в году",
            "Заморозка абонемента до 45 дней",
            "5 гостевых визитов для близких",
            "1 персональная тренировка в подарок",
            "Фирменный шейкер Vortex Fitness",
            "Постоянная скидка 15% в спорт-баре"
          ],
          "popular": false,
          "badge": "МАКСИМАЛЬНАЯ ВЫГОДА",
          "buttonText": "Оформить VIP"
        }
      ]
    },
    "calculator": {
      "badge": "КАЛЬКУЛЯТОР",
      "title": "Расчет ИМТ и суточной нормы калорий",
      "desc": "Узнайте свой индекс массы тела и точную норму питания под ваши спортивные цели",
      "gender": "Пол",
      "male": "Мужчина",
      "female": "Женщина",
      "age": "Возраст (лет)",
      "height": "Рост (см)",
      "weight": "Вес (кг)",
      "goal": "Главная цель",
      "goalLose": "Сжигание жира",
      "goalMaintain": "Тонус и форма",
      "goalMuscle": "Набор массы",
      "calcBtn": "Рассчитать",
      "resultTitle": "Ваш персональный расчет:",
      "bmiLabel": "Ваш индекс ИМТ:",
      "bmrLabel": "Базовый метаболизм (BMR):",
      "tdeeLabel": "Суточный расход (TDEE):",
      "recLabel": "Рекомендация тренера:",
      "claimBtn": "Получить консультацию",
      "underweight": "Дефицит массы",
      "normalWeight": "Нормальный вес",
      "overweight": "Избыточный вес",
      "obesity": "Ожирение",
      "kcal": "ккал",
      "recommendedCalories": "Рекомендуемая норма калорий:",
      "kcalPerDay": "ккал / сутки для вашей цели",
      "recLose": "Для качественного жиросжигания рекомендуем 3 силовые тренировки в неделю + 20-30 минут кардио в пульсовой зоне 120-140 bpm.",
      "recMuscle": "Для гипертрофии мышц рекомендуем прогрессивную силовую нагрузку 3-4 раза в неделю с акцентом на базовые упражнения и достаточное потребление белка (1.8-2г/кг).",
      "recMaintain": "Для поддержания тонуса и здоровья рекомендуем гармоничное сочетание силовых сетов, функционального тренинга и растяжки 2-3 раза в неделю.",
      "bookingServicePrefix": "План питания и тренировок"
    },
    "trainers": {
      "badge": "КОМАНДА",
      "title": "Персональные тренеры",
      "desc": "Профессиональные наставники, которые приведут вас к результату без травм и перегрузок",
      "bookTrainer": "Записаться к тренеру",
      "customPlan": "Индивидуальный план",
      "bookingPrefix": "Тренировки с тренером",
      "list": [
        {
          "name": "Георгий Беридзе",
          "role": "Старший тренер / Бодибилдинг и пауэрлифтинг",
          "exp": "Стаж: 9 лет",
          "desc": "Мастер спорта. Специализация: быстрый и безопасный набор мышечной массы, развитие абсолютной силы и коррекция осанки.",
          "image": "/images/trainer-1.jpg"
        },
        {
          "name": "Елена Вачнадзе",
          "role": "Функциональный тренинг, TRX и растяжка",
          "exp": "Стаж: 7 лет",
          "desc": "Специалист по оздоровительному фитнесу. Здоровое похудение, развитие гибкости, женский тренинг и послеродовое восстановление.",
          "image": "/images/trainer-2.jpg"
        }
      ]
    },
    "reviews": {
      "badge": "ОТЗЫВЫ КЛИЕНТОВ",
      "title": "Что говорят о VORTEX FITNESS",
      "desc": "Нам доверяют сотни жителей Батуми и экспатов со всего мира. Рейтинг 4.9 из 5.0.",
      "totalCount": "Более 240 подтвержденных отзывов",
      "verified": "Проверенный отзыв",
      "moreVideos": "Смотрите больше реальных видео и отзывов:",
      "list": [
        {
          "name": "Давид Махарадзе",
          "city": "Батуми",
          "text": "Отличный просторный зал! Есть все нужные силовые тренажеры и гантели вплоть до 50 кг. Мощная вентиляция спасает в жару, в зале всегда свежо.",
          "rating": 5
        },
        {
          "name": "Александр Соколов",
          "city": "Батуми (экспат)",
          "text": "Занимаюсь здесь уже полгода. Очень дружелюбная атмосфера, чистота в раздевалках и душе, отличный фитнес-бар с качественным протеином.",
          "rating": 5
        },
        {
          "name": "Мариам Кварацхелия",
          "city": "Батуми",
          "text": "Прекрасный зал с великолепной кардио-зоной! Занимаюсь с тренером Еленой, за 2 месяца скинула 6 кг и чувствую себя потрясающе.",
          "rating": 5
        }
      ]
    },
    "faq": {
      "badge": "FAQ",
      "title": "Часто задаваемые вопросы",
      "items": [
        {
          "q": "Что нужно взять с собой на первую тренировку?",
          "a": "Удобную спортивную форму, чистые сменные кроссовки и персональное полотенце. Питьевая вода и фен уже есть в клубе."
        },
        {
          "q": "Какие способы оплаты вы принимаете?",
          "a": "Мы принимаем наличные в лари, банковские карты Visa, Mastercard, а также бесконтактную оплату Apple Pay и Google Pay."
        },
        {
          "q": "Можно ли заморозить абонемент на время отпуска или болезни?",
          "a": "Да, на абонементах от 3 месяцев предусмотрена бесплатная заморозка (14 дней на 3 месяца и до 45 дней на годовом VIP)."
        },
        {
          "q": "Как выбрать время без большого наплыва людей?",
          "a": "Зал работает ежедневно с 08:00 до 23:45. Наиболее свободные часы — утром с 08:00 до 12:00 и вечером после 21:30. Текущую загруженность можно смотреть на графике выше."
        }
      ]
    },
    "contact": {
      "badge": "ЛОКАЦИЯ",
      "title": "Ждем вас на тренировку",
      "addressTitle": "Адрес клуба:",
      "addressValue": "Батуми, ул. Давида Агмашенебели, 2г",
      "addressNote": "Удобный подъезд и собственная парковка",
      "phoneTitle": "Телефон / WhatsApp:",
      "phoneValue": "+995 514 03 07 09",
      "phoneNote": "Звонки и сообщения в WhatsApp / Telegram",
      "hoursTitle": "График работы:",
      "hoursValue": "Понедельник – Воскресенье: 08:00 – 23:45",
      "hoursNote": "Без перерывов и праздничных выходных",
      "socialTitle": "Социальные сети:",
      "routeBtn": "Маршрут на карте",
      "writeWa": "Написать в WhatsApp",
      "mapAddress": "ул. Давида Агмашенебели 2г, Батуми"
    },
    "footer": {
      "brandDesc": "Премиальный фитнес-клуб в Батуми. Профессиональное оборудование, просторный зал, кондиционирование и лучшие условия для тренировок на ул. Давида Агмашенебели 2г.",
      "navTitle": "Навигация",
      "hoursTitle": "Режим работы",
      "hoursSchedule": "Пн – Вс: 08:00 – 23:45",
      "hoursSubnote": "Без перерывов на обед и выходных дней.",
      "openToday": "Открыто сегодня",
      "contactTitle": "Контакты",
      "addressText": "Батуми, ул. Давида Агмашенебели, 2г",
      "waChat": "WhatsApp чат",
      "allRightsReserved": "Все права защищены.",
      "backToTop": "Наверх"
    },
    "modal": {
      "title": "Запись в VORTEX FITNESS",
      "subtitle": "Оставьте контактные данные, и мы свяжемся с вами в течение 10 минут",
      "name": "Ваше имя",
      "namePlaceholder": "Ваше имя",
      "phone": "Телефон / WhatsApp",
      "phonePlaceholder": "+995 ___ __ __ __",
      "service": "Интересующая услуга",
      "serviceTrial": "Бесплатная пробная тренировка",
      "serviceSub": "Покупка абонемента",
      "serviceCoach": "Персональный тренер",
      "time": "Удобное время посещения",
      "defaultTime": "День (12-17)",
      "times": [
        "Утро (08-12)",
        "День (12-17)",
        "Вечер (17-23)"
      ],
      "planOptions": [
        "1 Месяц Безлимит (130 ₾)",
        "3 Месяца ХИТ (340 ₾)",
        "1 Год VIP (990 ₾)",
        "Разовое посещение (20 ₾)"
      ],
      "submit": "Отправить заявку",
      "submitting": "Отправка...",
      "successTitle": "Заявка успешно принята!",
      "successDesc": "Наш администратор скоро свяжется с вами для подтверждения времени визита.",
      "orDirectWa": "Или напишите нам напрямую в WhatsApp:",
      "openWa": "Открыть чат WhatsApp (+995 514 03 07 09)",
      "summaryName": "Имя:",
      "summaryPhone": "Телефон:",
      "summaryService": "Услуга:",
      "confirmWa": "Подтвердить в WhatsApp сейчас",
      "close": "Закрыть",
      "guest": "Гость",
      "notSpecified": "не указан",
      "waTemplate": "Здравствуйте! Меня зовут {name}. Хочу записаться в Vortex Fitness Batumi на: {service}. Мой телефон: {phone}. Удобное время: {time}."
    }
  },
  "en": {
    "nav": {
      "about": "About",
      "zones": "Zones",
      "pricing": "Pricing",
      "trainers": "Trainers",
      "calculator": "Calculator",
      "status": "Status",
      "contacts": "Contacts",
      "bookBtn": "Book Now",
      "openStatus": "Open until 23:45",
      "callUs": "Call Us",
      "topSchedule": "08:00 – 23:45",
      "topAddress": "Batumi, 2g David Agmashenebeli St.",
      "logoSubtitle": "BATUMI • PREMIUM CLUB"
    },
    "hero": {
      "badge": "Premium Fitness Club in Batumi",
      "titleStart": "STRENGTH.",
      "titleMiddle": "AESTHETICS.",
      "titleEnd": "DISCIPLINE.",
      "subtitle": "Modern state-of-the-art training space at 2g David Agmashenebeli St. Professional equipment, powerful climate control, heavy free weights and custom coaching.",
      "ctaPrimary": "Explore Memberships",
      "ctaSecondary": "Free Trial Workout",
      "addressBadge": "Batumi, Agmashenebeli 2g",
      "ratingPlatform": "/ 5.0 Google & FB",
      "waChatTooltip": "Chat on WhatsApp",
      "waMessage": "Hello! I would like to learn more about workouts at Vortex Fitness Batumi",
      "stats": {
        "space": "1,200 m²",
        "spaceDesc": "Total gym floor",
        "equipment": "80+",
        "equipmentDesc": "Premium machines",
        "rating": "4.9 ★",
        "ratingDesc": "Based on 240+ reviews",
        "hours": "08:00 – 23:45",
        "hoursDesc": "Daily with zero days off"
      }
    },
    "status": {
      "liveTracker": "Live Tracker",
      "title": "Real-time Gym Occupancy",
      "subtitle": "Plan your training session during quiet, comfortable hours",
      "now": "Currently in gym",
      "forecastFor": "Forecast for",
      "clickBarHint": "Click a column to inspect",
      "comfort": "Comfortable & Quiet",
      "moderate": "Moderate Activity",
      "busy": "Peak Hours",
      "hoursLegend": "Daily occupancy forecast:",
      "today": "Today",
      "idealTimeTitle": "Ideal Workout Time:",
      "idealTimeDesc": "Morning hours (08:00 – 12:00) and late evening after 21:30.",
      "legendComfort": "Up to 40% (Quiet)",
      "legendOptimal": "40–75% (Optimal)",
      "legendPeak": "75%+ (Peak)"
    },
    "about": {
      "badge": "WHY VORTEX FITNESS",
      "title": "Engineered for your peak performance",
      "desc": "Our gym is thoughtfully designed for both elite lifters and newcomers starting their fitness journey.",
      "bannerTitle": "Stress-free first visit with zero queues",
      "bannerDesc": "An on-duty coach will introduce you to the equipment and gym safety for free",
      "bannerBtn": "View Membership Pricing",
      "items": [
        {
          "title": "Professional Equipment",
          "desc": "Biomechanically precise machines, dumbbells up to 50 kg, and Olympic lifting platforms."
        },
        {
          "title": "Advanced Ventilation & AC",
          "desc": "Continuous intake of fresh filtered air even during peak Batumi summer heat."
        },
        {
          "title": "Panoramic Cardio Theater",
          "desc": "High-tech treadmills, ellipticals, and stair-climbers with interactive metrics."
        },
        {
          "title": "Fitness Bar & Nutrition",
          "desc": "Protein shakes, BCAAs, electrolyte drinks, and fresh barista espresso before training."
        },
        {
          "title": "Spacious Lockers & Showers",
          "desc": "Electronic smart locks, hot showers, powerful blow dryers, and pure filtered water."
        },
        {
          "title": "Certified Personal Coaches",
          "desc": "Experienced mentors who will structure your routine and keep you injury-free."
        }
      ]
    },
    "zones": {
      "badge": "FACILITY",
      "title": "Club Zones at VORTEX FITNESS",
      "desc": "Distinct dedicated zones ensure you never wait for equipment, even during peak hours",
      "feature1": "European standard equipment",
      "feature2": "Pristine hygiene and daily disinfection",
      "tryZone": "Try This Zone",
      "items": [
        {
          "id": "power",
          "title": "Free Weights & Powerlifting",
          "desc": "Dumbbell sets up to 50 kg, power racks, deadlift platforms, Olympic barbells, and adjustable benches.",
          "tag": "Strength Zone",
          "image": "/images/power-zone.jpg"
        },
        {
          "id": "cardio",
          "title": "Panoramic Cardio Theater",
          "desc": "Smart treadmills and ellipticals with city panoramas and interactive workout monitors.",
          "tag": "Cardio Zone",
          "image": "/images/cardio-zone.jpg"
        },
        {
          "id": "functional",
          "title": "Functional & CrossFit Arena",
          "desc": "Turf track, battle ropes, plyo boxes, TRX straps, kettlebells, and dedicated stretch zones.",
          "tag": "Cross & Stretch",
          "image": "/images/vortex-hero.jpg"
        },
        {
          "id": "bar",
          "title": "Fitness Bar & Social Lounge",
          "desc": "Relaxation space serving clean protein shakes, amino acids, cold drinks, and specialty espresso.",
          "tag": "Lounge & Bar",
          "image": "/images/bar-zone.jpg"
        }
      ]
    },
    "pricing": {
      "badge": "MEMBERSHIPS & PRICING",
      "title": "Invest in your health, strength, and vitality",
      "desc": "Transparent pricing with zero hidden fees. Choose the plan that fits your lifestyle.",
      "currencyToggle": "Currency:",
      "defaultBadge": "BESTSELLER",
      "guarantee1": "Payment via Visa / Mastercard / Apple Pay / Cash",
      "guarantee2": "Official agreement, receipts, and flexible freezing terms",
      "guarantee3": "No hidden fees or unwanted recurring charges",
      "plans": [
        {
          "name": "Single Visit Pass",
          "priceGEL": 20,
          "period": "1 Day",
          "desc": "Great for trying out the facilities or travelers visiting Batumi",
          "features": [
            "Full access to all club zones",
            "Individual locker and shower access",
            "Hairdryer and drinking water included",
            "Initial gym walkthrough"
          ],
          "popular": false,
          "buttonText": "Select Pass"
        },
        {
          "name": "1 Month Unlimited",
          "priceGEL": 130,
          "period": "30 Days",
          "desc": "Maximum flexibility with unrestricted access at any time",
          "features": [
            "Unlimited entry 08:00 – 23:45",
            "Complimentary introductory workout",
            "Access to all strength and cardio equipment",
            "Smart electronic locker and showers",
            "10% discount at the fitness bar"
          ],
          "popular": false,
          "buttonText": "Buy Membership"
        },
        {
          "name": "3 Months HIT",
          "priceGEL": 340,
          "period": "90 Days",
          "desc": "The optimal timeframe to build true, lasting body transformation",
          "features": [
            "Unlimited daily entry",
            "14-day vacation freeze option",
            "2 free guest passes for friends",
            "Customized starter workout split",
            "10% discount at the fitness bar"
          ],
          "popular": true,
          "badge": "BESTSELLER",
          "buttonText": "Claim Discount"
        },
        {
          "name": "1 Year VIP",
          "priceGEL": 990,
          "period": "365 Days",
          "desc": "Ultimate value, prestige, and VIP perks for dedicated gym members",
          "features": [
            "Full unlimited access all year round",
            "Up to 45 days membership freeze",
            "5 complimentary guest passes",
            "1 free 1-on-1 personal training session",
            "Exclusive branded Vortex Fitness shaker",
            "Permanent 15% discount at the fitness bar"
          ],
          "popular": false,
          "badge": "BEST VALUE",
          "buttonText": "Get VIP Access"
        }
      ]
    },
    "calculator": {
      "badge": "CALCULATOR",
      "title": "BMI & Caloric Requirement Calculator",
      "desc": "Enter your body metrics to find your BMI score and daily calorie target for your goals",
      "gender": "Gender",
      "male": "Male",
      "female": "Female",
      "age": "Age (years)",
      "height": "Height (cm)",
      "weight": "Weight (kg)",
      "goal": "Primary Goal",
      "goalLose": "Fat Loss",
      "goalMaintain": "Maintenance & Health",
      "goalMuscle": "Muscle Gain",
      "calcBtn": "Calculate Now",
      "resultTitle": "Your Calculated Metrics:",
      "bmiLabel": "Your BMI Score:",
      "bmrLabel": "Basal Metabolic Rate (BMR):",
      "tdeeLabel": "Total Daily Energy (TDEE):",
      "recLabel": "Trainer Recommendation:",
      "claimBtn": "Get Free Consultation",
      "underweight": "Underweight",
      "normalWeight": "Normal weight",
      "overweight": "Overweight",
      "obesity": "Obese",
      "kcal": "kcal",
      "recommendedCalories": "Recommended Daily Calories:",
      "kcalPerDay": "kcal / day for your target",
      "recLose": "For effective fat loss, we recommend 3 strength sessions per week + 20-30 minutes of cardio at 120-140 bpm.",
      "recMuscle": "For muscle hypertrophy, we recommend progressive strength training 3-4 times a week focusing on compound lifts and adequate protein (1.8-2g/kg).",
      "recMaintain": "For overall health and muscle tone, we recommend a balanced blend of strength sets, functional training, and stretching 2-3 times weekly.",
      "bookingServicePrefix": "Nutrition & Training Plan"
    },
    "trainers": {
      "badge": "OUR TEAM",
      "title": "Certified Personal Coaches",
      "desc": "Professional instructors dedicated to getting you results safely and efficiently",
      "bookTrainer": "Book a Coach",
      "customPlan": "Personalized Plan",
      "bookingPrefix": "Training with Coach",
      "list": [
        {
          "name": "Giorgi Beridze",
          "role": "Head Coach / Bodybuilding & Powerlifting",
          "exp": "Experience: 9 years",
          "desc": "Master of Sports. Specializes in lean mass building, absolute strength development, and postural alignment.",
          "image": "/images/trainer-1.jpg"
        },
        {
          "name": "Elene Vachnadze",
          "role": "Functional Training, TRX & Mobility",
          "exp": "Experience: 7 years",
          "desc": "Wellness specialist. Safe weight reduction, mobility improvement, women's fitness, and postpartum recovery.",
          "image": "/images/trainer-2.jpg"
        }
      ]
    },
    "reviews": {
      "badge": "TESTIMONIALS",
      "title": "What Members Say About VORTEX FITNESS",
      "desc": "Trusted by hundreds of Batumi locals and expats. Rated 4.9 out of 5.0.",
      "totalCount": "Over 240 verified reviews",
      "verified": "Verified Review",
      "moreVideos": "See more real workout videos and reviews:",
      "list": [
        {
          "name": "David Makharadze",
          "city": "Batumi",
          "text": "Top tier gym! They have all the heavy iron you need and dumbbells up to 50kg. The ventilation keeps the air crisp and cool even during peak summer heat.",
          "rating": 5
        },
        {
          "name": "Alexander Sokolov",
          "city": "Batumi (Expat)",
          "text": "I have been training here for 6 months. Great community, spotless changing rooms, and an awesome protein smoothie bar.",
          "rating": 5
        },
        {
          "name": "Mariam Kvaratskhelia",
          "city": "Batumi",
          "text": "Wonderful gym with stunning cardio views! Training with coach Elene helped me lose 6 kg in two months. Feeling stronger than ever!",
          "rating": 5
        }
      ]
    },
    "faq": {
      "badge": "FAQ",
      "title": "Frequently Asked Questions",
      "items": [
        {
          "q": "What should I bring for my first workout?",
          "a": "Comfortable gym attire, clean athletic shoes (sneakers), and a personal towel. Filtered drinking water and blow dryers are provided."
        },
        {
          "q": "Which payment options do you support?",
          "a": "We accept Georgian Lari in cash, Visa, Mastercard, as well as Apple Pay and Google Pay contactless options."
        },
        {
          "q": "Can I pause or freeze my membership while traveling?",
          "a": "Yes! Memberships of 3 months and longer include complimentary freezing (14 days on 3-month passes, and up to 45 days on annual VIP)."
        },
        {
          "q": "When is the gym least crowded?",
          "a": "The gym is open daily from 08:00 to 23:45. The quietest hours are mornings (08:00 – 12:00) and late evenings after 21:30. Check our live status tracker above!"
        }
      ]
    },
    "contact": {
      "badge": "LOCATION",
      "title": "Visit Us for a Workout",
      "addressTitle": "Gym Address:",
      "addressValue": "Batumi, 2g David Agmashenebeli St.",
      "addressNote": "Easy roadside access with dedicated parking",
      "phoneTitle": "Phone / WhatsApp:",
      "phoneValue": "+995 514 03 07 09",
      "phoneNote": "Calls and messages via WhatsApp / Telegram",
      "hoursTitle": "Operating Hours:",
      "hoursValue": "Monday – Sunday: 08:00 – 23:45",
      "hoursNote": "Open daily without breaks or day-offs",
      "socialTitle": "Social Media:",
      "routeBtn": "Get Directions",
      "writeWa": "Chat on WhatsApp",
      "mapAddress": "2g David Agmashenebeli St., Batumi"
    },
    "footer": {
      "brandDesc": "Premium fitness club in Batumi. Professional equipment, spacious workout zones, climate control, and supreme training conditions at 2g David Agmashenebeli St.",
      "navTitle": "Navigation",
      "hoursTitle": "Working Hours",
      "hoursSchedule": "Mon – Sun: 08:00 – 23:45",
      "hoursSubnote": "Open daily without breaks or day-offs.",
      "openToday": "Open today",
      "contactTitle": "Contacts",
      "addressText": "Batumi, 2g David Agmashenebeli St.",
      "waChat": "WhatsApp chat",
      "allRightsReserved": "All rights reserved.",
      "backToTop": "Back to top"
    },
    "modal": {
      "title": "Book a Visit at VORTEX FITNESS",
      "subtitle": "Leave your contact info and our team will get in touch within 10 minutes",
      "name": "Your Name",
      "namePlaceholder": "Your full name",
      "phone": "Phone / WhatsApp",
      "phonePlaceholder": "+995 ___ __ __ __",
      "service": "Preferred Service",
      "serviceTrial": "Free Trial Workout",
      "serviceSub": "Buy Membership",
      "serviceCoach": "Personal Trainer Session",
      "time": "Preferred Time",
      "defaultTime": "Afternoon (12-17)",
      "times": [
        "Morning (08-12)",
        "Afternoon (12-17)",
        "Evening (17-23)"
      ],
      "planOptions": [
        "1 Month Unlimited (130 ₾)",
        "3 Months HIT (340 ₾)",
        "1 Year VIP (990 ₾)",
        "Single Visit (20 ₾)"
      ],
      "submit": "Send Application",
      "submitting": "Sending...",
      "successTitle": "Booking Received!",
      "successDesc": "Our team has received your request and will contact you shortly to confirm your visit.",
      "orDirectWa": "Or text us directly on WhatsApp:",
      "openWa": "Open WhatsApp chat (+995 514 03 07 09)",
      "summaryName": "Name:",
      "summaryPhone": "Phone:",
      "summaryService": "Service:",
      "confirmWa": "Confirm on WhatsApp Now",
      "close": "Close",
      "guest": "Guest",
      "notSpecified": "not specified",
      "waTemplate": "Hello! My name is {name}. I want to sign up at Vortex Fitness Batumi for: {service}. My phone: {phone}. Preferred time: {time}."
    }
  },
  "ka": {
    "nav": {
      "about": "კლუბი",
      "zones": "ზონები",
      "pricing": "ტარიფები",
      "trainers": "ტრენერები",
      "calculator": "კალკულატორი",
      "status": "სტატუსი",
      "contacts": "კონტაქტი",
      "bookBtn": "ჩაწერა",
      "openStatus": "ღიაა 23:45-მდე",
      "callUs": "დარეკვა",
      "topSchedule": "08:00 – 23:45",
      "topAddress": "ბათუმი, აღმაშენებლის 2გ",
      "logoSubtitle": "ბათუმი • პრემიუმ კლუბი"
    },
    "hero": {
      "badge": "პრემიუმ კლუბი ბათუმში",
      "titleStart": "ძალა.",
      "titleMiddle": "ესთეტიკა.",
      "titleEnd": "დისციპლინა.",
      "subtitle": "თანამედროვე პრემიუმ სივრცე ბათუმში, აღმაშენებლის 2გ-ში. პროფესიონალური ტექნიკა, მძლავრი ვენტილაცია და ინდივიდუალური მიდგომა.",
      "ctaPrimary": "ტარიფები",
      "ctaSecondary": "საცდელი ვიზიტი",
      "addressBadge": "ბათუმი, აღმაშენებლის 2გ",
      "ratingPlatform": "/ 5.0 Google & FB",
      "waChatTooltip": "მოგვწერეთ WhatsApp-ში",
      "waMessage": "გამარჯობა! მსურს მეტი გავიგო ვარჯიშის შესახებ Vortex Fitness Batumi-ში",
      "stats": {
        "space": "1 200 მ²",
        "spaceDesc": "დარბაზის ფართი",
        "equipment": "80+",
        "equipmentDesc": "პრემიუმ ტრენაჟორი",
        "rating": "4.9 ★",
        "ratingDesc": "240+ შეფასება",
        "hours": "08:00 – 23:45",
        "hoursDesc": "ყოველდღე უქმეების გარეშე"
      }
    },
    "status": {
      "liveTracker": "Live Tracker",
      "title": "დარბაზის რეალური დატვირთულობა",
      "subtitle": "დაგეგმეთ თქვენი ვარჯიში ყველაზე მშვიდ და კომფორტულ დროს",
      "now": "ახლა დარბაზში",
      "forecastFor": "პროგნოზი საათისთვის",
      "clickBarHint": "დააჭირეთ სვეტს სანახავად",
      "comfort": "თავისუფალი (სიმშვიდე)",
      "moderate": "ზომიერი",
      "busy": "პიკი",
      "hoursLegend": "აქტივობის გრაფიკი საათების მიხედვით:",
      "today": "დღეს",
      "idealTimeTitle": "იდეალური დრო:",
      "idealTimeDesc": "დილის საათები (08:00 – 12:00) და საღამოს 21:30-ის შემდეგ.",
      "legendComfort": "40%-მდე (თავისუფალი)",
      "legendOptimal": "40–75% (ოპტიმალური)",
      "legendPeak": "75%+ (პიკი)"
    },
    "about": {
      "badge": "რატომ VORTEX FITNESS",
      "title": "ყველა პირობა თქვენი მაქსიმალური პროგრესისთვის",
      "desc": "ჩვენი დარბაზი შექმნილია როგორც გამოცდილი სპორტსმენებისთვის, ისე დამწყებთათვის.",
      "bannerTitle": "პირველი ვიზიტი სტრესისა და რიგების გარეშე",
      "bannerDesc": "მორიგე მწვრთნელი უფასოდ გაგაცნობთ დარბაზს, ტრენაჟორებსა და უსაფრთხოების წესებს",
      "bannerBtn": "ტარიფების ნახვა",
      "items": [
        {
          "title": "პროფესიონალური ტექნიკა",
          "desc": "სწორი ბიომექანიკა, ჰანტელები 50 კგ-მდე და ოლიმპიური შტანგები."
        },
        {
          "title": "მძლავრი ვენტილაცია",
          "desc": "სუფთა და გრილი ჰაერის უწყვეტი ნაკადი ცხელ ზაფხულშიც კი."
        },
        {
          "title": "პანორამული კარდიო",
          "desc": "უახლესი სარბენი ბილიკები და ელიფსები ქალაქის ლამაზი ხედით."
        },
        {
          "title": "ფიტნეს-ბარი & კვება",
          "desc": "პროტეინის შეიკები, BCAA, იზოტონიკები და ხარისხიანი ესპრესო."
        },
        {
          "title": "კომფორტული გასახდელი",
          "desc": "ელექტრონული საკეტები, ცხელი შხაპი, ფენები და სუფთა წყალი."
        },
        {
          "title": "პროფესიონალი მწვრთნელები",
          "desc": "გამოცდილი მენტორები, რომლებიც გარანტირებულ შედეგამდე მიგიყვანენ."
        }
      ]
    },
    "zones": {
      "badge": "სივრცე",
      "title": "VORTEX FITNESS-ის სავარჯიშო ზონები",
      "desc": "დარბაზის ყოველი მეტრი გათვლილია თქვენი კომფორტისა და ეფექტური ვარჯიშისთვის",
      "feature1": "ევროპული სტანდარტის ტექნიკა",
      "feature2": "იდეალური სისუფთავე და ჰიგიენა",
      "tryZone": "ამ ზონაში ვარჯიში",
      "items": [
        {
          "id": "power",
          "title": "თავისუფალი წონები",
          "tag": "ძალოვანი ზონა",
          "desc": "ჰანტელები 1-დან 50 კგ-მდე, ძალოვანი რამები, ოლიმპიური გრიფები და რეგულირებადი სკამები.",
          "image": "/images/power-zone.jpg"
        },
        {
          "id": "cardio",
          "title": "პანორამული კარდიო",
          "tag": "კარდიო ზონა",
          "desc": "სარბენი ბილიკები, ელიფსები და ველოტრენაჟორები ქალაქის ხედითა და ეკრანებით.",
          "image": "/images/cardio-zone.jpg"
        },
        {
          "id": "functional",
          "title": "ფუნქციური ვარჯიში",
          "tag": "Cross & Stretch",
          "desc": "კროსფიტის ზონა: ბაგირები, ტუმბოები, TRX მარყუჟები, მედბოლები და მასაჟორები.",
          "image": "/images/vortex-hero.jpg"
        },
        {
          "id": "bar",
          "title": "ფიტნეს-ბარი & Lounge",
          "tag": "ბარი & დასვენება",
          "desc": "სწორი კვება, პროტეინის შეიკები, სმუზები, ვიტამინები და ხარისხიანი ყავა.",
          "image": "/images/bar-zone.jpg"
        }
      ]
    },
    "pricing": {
      "badge": "ტარიფები და აბონემენტები",
      "title": "საუკეთესო ინვესტიცია საკუთარ ჯანმრთელობაში",
      "desc": "გამჭვირვალე ფასები ყოველგვარი ფარული გადასახადებისა და ზედმეტი პირობების გარეშე.",
      "currencyToggle": "ვალუტა:",
      "defaultBadge": "პოპულარული",
      "guarantee1": "გადახდა: Visa / Mastercard / Apple Pay / ნაღდი",
      "guarantee2": "ოფიციალური ხელშეკრულება და გაყინვის პირობები",
      "guarantee3": "ფარული გადასახადებისა და ზედმეტობის გარეშე",
      "plans": [
        {
          "name": "ერთჯერადი ვიზიტი",
          "priceGEL": 20,
          "period": "1 დღე",
          "desc": "დარბაზის გაცნობისთვის ან ქალაქის სტუმრებისთვის",
          "popular": false,
          "buttonText": "ვიზიტის არჩევა",
          "features": [
            "დარბაზის სრული წვდომა",
            "კარადა და შხაპი",
            "ფენი და სასმელი წყალი",
            "მორიგე მწვრთნელის რჩევა"
          ]
        },
        {
          "name": "1 თვე ულიმიტო",
          "priceGEL": 120,
          "period": "30 დღე",
          "desc": "მოქნილი აბონემენტი დროის შეზღუდვის გარეშე",
          "popular": false,
          "buttonText": "აბონემენტის ყიდვა",
          "features": [
            "ულიმიტო ყოველდღიური წვდომა",
            "შესვლა ნებისმიერ დროს",
            "ყველა ზონა და საშხაპე",
            "მორიგე მწვრთნელის მხარდაჭერა"
          ]
        },
        {
          "name": "3 თვე HIT",
          "priceGEL": 300,
          "period": "90 დღე",
          "desc": "საუკეთესო ვადა სხეულის რეალური ცვლილებისთვის",
          "popular": true,
          "badge": "საუკეთესო არჩევანი",
          "buttonText": "HIT პაკეტის აღება",
          "features": [
            "ულიმიტო ყოველდღიური წვდომა",
            "გაყინვა 14 დღით",
            "2 უფასო ვიზიტი მეგობრისთვის",
            "ვარჯიშის საწყისი გეგმა",
            "10% ფასდაკლება ბარზე"
          ]
        },
        {
          "name": "1 წელი VIP",
          "priceGEL": 950,
          "period": "365 დღე",
          "desc": "მაქსიმალური სარგებელი მუდმივი წევრებისთვის",
          "popular": false,
          "buttonText": "VIP სტატუსის მიღება",
          "features": [
            "365 დღე ულიმიტო შესვლა",
            "გაყინვა 30 დღით",
            "5 სასაჩუქრე ვიზიტი",
            "2 უფასო პერსონალური ვარჯიში",
            "15% ფასდაკლება ბარზე",
            "VIP ლოკერი და პრიორიტეტი"
          ]
        }
      ]
    },
    "calculator": {
      "badge": "BMI კალკულატორი",
      "title": "BMI & კალორიების ონლაინ გაანგარიშება",
      "desc": "შეიყვანეთ თქვენი პარამეტრები სხეულის მასის ინდექსისა და დღიური კალორიების გამოსათვლელად",
      "gender": "სქესი",
      "male": "მამაკაცი",
      "female": "ქალი",
      "age": "ასაკი (წელი)",
      "height": "სიმაღლე (სმ)",
      "weight": "წონა (კგ)",
      "goal": "თქვენი მთავარი მიზანი",
      "goalLose": "წონის კლება",
      "goalMaintain": "ტონუსი და ჯანმრთელობა",
      "goalMuscle": "კუნთოვანი მასა",
      "calcBtn": "გამოთვლა",
      "resultTitle": "თქვენი პერსონალური შედეგი:",
      "bmiLabel": "თქვენი BMI ინდექსი:",
      "bmrLabel": "ბაზალური მეტაბოლიზმი (BMR):",
      "tdeeLabel": "კალორიების დღიური ხარჯი:",
      "recLabel": "რეკომენდაცია:",
      "claimBtn": "უფასო კონსულტაციაზე ჩაწერა",
      "underweight": "წონის დეფიციტი",
      "normalWeight": "ნორმალური წონა",
      "overweight": "ჭარბი წონა",
      "obesity": "სიმსუქნე",
      "kcal": "კკალ",
      "recommendedCalories": "რეკომენდებული დღიური კალორიები:",
      "kcalPerDay": "კკალ / დღეში თქვენი მიზნისთვის",
      "recLose": "წონის ხარისხიანი კლებისთვის გირჩევთ კვირაში 3 ძალოვან ვარჯიშს + 20-30 წუთიან კარდიოს 120-140 bpm პულსზე.",
      "recMuscle": "კუნთოვანი მასის მომატებისთვის რეკომენდებულია პროგრესული ძალოვანი ვარჯიში კვირაში 3-4-ჯერ, საბაზისო ვარჯიშები და ცილის სათანადო მიღება (1.8-2გ/კგ).",
      "recMaintain": "სხეულის ტონუსისა და ჯანმრთელობისთვის გირჩევთ ძალოვანი სეტების, ფუნქციური ვარჯიშებისა და გაწელვის ჰარმონიულ შეხამებას კვირაში 2-3-ჯერ.",
      "bookingServicePrefix": "კვებისა და ვარჯიშის გეგმა"
    },
    "trainers": {
      "badge": "პროფესიონალთა გუნდი",
      "title": "ჩვენი სერტიფიცირებული მწვრთნელები",
      "desc": "გამოცდილი მენტორები, რომლებიც დაგეხმარებიან მიზნის უსაფრთხოდ და სწრაფად მიღწევაში.",
      "bookTrainer": "მწვრთნელთან ჩაწერა",
      "customPlan": "ინდივიდუალური გეგმა",
      "bookingPrefix": "ვარჯიში მწვრთნელთან",
      "list": [
        {
          "name": "გიორგი ბერიძე",
          "role": "უფროსი მწვრთნელი / ბოდიბილდინგი",
          "exp": "სტაჟი: 9 წელი",
          "desc": "სპორტის ოსტატი. კუნთოვანი მასის მომატება, ძალის განვითარება და პოზის კორექცია.",
          "image": "/images/trainer-1.jpg"
        },
        {
          "name": "ელენე ვაჩნაძე",
          "role": "ფუნქციური ვარჯიში & TRX",
          "exp": "სტაჟი: 7 წელი",
          "desc": "ჯანსაღი წონის კლება, მოქნილობა, ქალთა ფიტნესი და ტრავმების შემდგომი აღდგენა.",
          "image": "/images/trainer-2.jpg"
        }
      ]
    },
    "reviews": {
      "badge": "შეფასებები",
      "title": "რას ამბობენ VORTEX FITNESS-ზე",
      "desc": "ჩვენ გვენდობა ასობით ბათუმელი და ქალაქის სტუმარი. რეიტინგი 4.9 / 5.0.",
      "totalCount": "240-ზე მეტი დადასტურებული შეფასება",
      "verified": "დადასტურებული შეფასება",
      "moreVideos": "ნახეთ მეტი რეალური ვიდეო და შეფასება:",
      "list": [
        {
          "name": "დავით მახარაძე",
          "city": "ბათუმი",
          "text": "შესანიშნავი დარბაზია! არის ყველა საჭირო რკინა და მძიმე ჰანტელები 50 კგ-მდე. კონდიცირება მუშაობს იდეალურად, დარბაზში ყოველთვის სუფთა ჰაერია.",
          "rating": 5
        },
        {
          "name": "ალექსანდრე სოკოლოვი",
          "city": "ბათუმი",
          "text": "უკვე 6 თვეა აქ ვვარჯიშობ. მეგობრული გარემოა, სისუფთავე და შესანიშნავი ფიტნეს-ბარი უგემრიელესი პროტეინებით.",
          "rating": 5
        },
        {
          "name": "მარიამ კვარაცხელია",
          "city": "ბათუმი",
          "text": "საუკეთესო დარბაზი ულამაზესი კარდიო ხედით! მწვრთნელ ელენესთან 2 თვეში 6 კგ დავიკელი და თავს შესანიშნავად ვგრძნობ.",
          "rating": 5
        }
      ]
    },
    "faq": {
      "badge": "კითხვა - პასუხი",
      "title": "ხშირად დასმული კითხვები",
      "items": [
        {
          "q": "რა მჭირდება პირველი ვარჯიშისთვის?",
          "a": "სპორტული ტანსაცმელი, სუფთა გამოსაცვლელი სპორტული ფეხსაცმელი (ბოტასები) და პირადი პირსახოცი. დარბაზში არის სასმელი წყალი და თმის საშრობი."
        },
        {
          "q": "გადახდის რა მეთოდები გაქვთ?",
          "a": "ვიღებთ ნაღდ ფულს (ლარი), ასევე Visa, Mastercard, Apple Pay და Google Pay საბანკო ბარათებს."
        },
        {
          "q": "შემიძლია აბონემენტის გაყინვა?",
          "a": "დიახ, 3-თვიან აბონემენტზე მოქმედებს 14-დღიანი გაყინვა, ხოლო წლიურ VIP აბონემენტზე — 45 დღემდე უფასო გაყინვა."
        },
        {
          "q": "როგორ შევარჩიო პირველი ვარჯიშის დრო?",
          "a": "დარბაზი მუშაობს ყოველდღე 08:00-დან 23:45-მდე. ყველაზე თავისუფალი დროა დილის საათები (08:00 – 12:00) და საღამოს 21:30-ის შემდეგ. მიმდინარე დატვირთულობის ნახვა შეგიძლიათ ზემოთ მოცემულ გრაფიკზე."
        }
      ]
    },
    "contact": {
      "badge": "ლოკაცია",
      "title": "გელით სავარჯიშოდ ბათუმში",
      "addressTitle": "მისამართი:",
      "addressValue": "ბათუმი, დავით აღმაშენებლის ქ. 2გ",
      "addressNote": "მოსახერხებელი პარკინგი და მარტივი მისადგომი",
      "phoneTitle": "ტელეფონი / WhatsApp:",
      "phoneValue": "+995 514 03 07 09",
      "phoneNote": "ზარები და შეტყობინებები WhatsApp / Telegram-ში",
      "hoursTitle": "სამუშაო საათები:",
      "hoursValue": "ორშაბათი – კვირა: 08:00 – 23:45",
      "hoursNote": "შესვენებისა და უქმე დღეების გარეშე",
      "socialTitle": "სოციალური ქსელები:",
      "routeBtn": "მარშრუტი რუკაზე",
      "writeWa": "WhatsApp-ში მიწერა",
      "mapAddress": "დავით აღმაშენებლის ქ. 2გ, ბათუმი"
    },
    "footer": {
      "brandDesc": "პრემიუმ ფიტნეს-კლუბი ბათუმში. პროფესიონალური ტრენაჟორები, ფართო დარბაზი, კონდიცირება და საუკეთესო პირობები დავით აღმაშენებლის ქ. 2გ-ში.",
      "navTitle": "ნავიგაცია",
      "hoursTitle": "სამუშაო საათები",
      "hoursSchedule": "ორშ – კვ: 08:00 – 23:45",
      "hoursSubnote": "შესვენებისა და დასვენების დღეების გარეშე.",
      "openToday": "დღეს ღიაა",
      "contactTitle": "კონტაქტი",
      "addressText": "ბათუმი, დავით აღმაშენებლის ქ. 2გ",
      "waChat": "WhatsApp ჩათი",
      "allRightsReserved": "ყველა უფლება დაცულია.",
      "backToTop": "ზემოთ"
    },
    "modal": {
      "title": "VORTEX FITNESS-ში ჩაწერა",
      "subtitle": "შეავსეთ მარტივი ფორმა და ჩვენ დაგიკავშირდებით 10 წუთში",
      "name": "თქვენი სახელი",
      "namePlaceholder": "თქვენი სახელი",
      "phone": "ტელეფონი / WhatsApp",
      "phonePlaceholder": "+995 ___ __ __ __",
      "service": "სასურველი მომსახურება",
      "serviceTrial": "უფასო საცდელი ვარჯიში",
      "serviceSub": "აბონემენტის შეძენა",
      "serviceCoach": "პერსონალური მწვრთნელი",
      "time": "მოსვლის სასურველი დრო",
      "defaultTime": "დღე (12-17)",
      "times": [
        "დილა (08-12)",
        "დღე (12-17)",
        "საღამო (17-23)"
      ],
      "planOptions": [
        "1 თვე ულიმიტო (130 ₾)",
        "3 თვე პოპულარული (340 ₾)",
        "1 წელი VIP (990 ₾)",
        "ერთჯერადი ვიზიტი (20 ₾)"
      ],
      "submit": "განაცხადის გაგზავნა",
      "submitting": "იგზავნება...",
      "successTitle": "განაცხადი წარმატებით მიღებულია!",
      "successDesc": "ჩვენი ადმინისტრატორი მალე დაგიკავშირდებათ დეტალების დასაზუსტებლად.",
      "orDirectWa": "ან მოგვწერეთ პირდაპირ WhatsApp-ში:",
      "openWa": "WhatsApp ჩათის გახსნა (+995 514 03 07 09)",
      "summaryName": "სახელი:",
      "summaryPhone": "ტელეფონი:",
      "summaryService": "მომსახურება:",
      "confirmWa": "დადასტურება WhatsApp-ში",
      "close": "დახურვა",
      "guest": "სტუმარი",
      "notSpecified": "მითითებული არ არის",
      "waTemplate": "გამარჯობა! მე მქვია {name}. მსურს ჩავეწერო Vortex Fitness Batumi-ში: {service}. ჩემი ნომერი: {phone}. სასურველი დრო: {time}."
    }
  },
  "tr": {
    "nav": {
      "about": "Kulüp",
      "zones": "Alanlar",
      "pricing": "Fiyatlar",
      "trainers": "Eğitmenler",
      "calculator": "Hesaplayıcı",
      "status": "Doluluk",
      "contacts": "İletişim",
      "bookBtn": "Kayıt Ol",
      "openStatus": "23:45'e kadar açık",
      "callUs": "Bizi Arayın",
      "topSchedule": "08:00 – 23:45",
      "topAddress": "Batum, Agmashenebeli Cad. 2g",
      "logoSubtitle": "BATUM • PREMİUM KULÜP"
    },
    "hero": {
      "badge": "Batum Premium Fitness",
      "titleStart": "GÜÇ.",
      "titleMiddle": "ESTETİK.",
      "titleEnd": "DİSİPLİN.",
      "subtitle": "Agmashenebeli Cad. 2g adresinde modern antrenman alanı. Profesyonel ekipmanlar, güçlü havalandırma ve kişisel yaklaşım.",
      "ctaPrimary": "Fiyatları Gör",
      "ctaSecondary": "Deneme Dersi",
      "addressBadge": "Batum, Agmashenebeli 2g",
      "ratingPlatform": "/ 5.0 Google & FB",
      "waChatTooltip": "WhatsApp'tan Yazın",
      "waMessage": "Merhaba! Vortex Fitness Batumi antrenmanları hakkında detaylı bilgi almak istiyorum",
      "stats": {
        "space": "1.200 m²",
        "spaceDesc": "Salon alanı",
        "equipment": "80+",
        "equipmentDesc": "Modern ekipman",
        "rating": "4.9 ★",
        "ratingDesc": "240+ gerçek yorum",
        "hours": "08:00 – 23:45",
        "hoursDesc": "Hergün kesintisiz açık"
      }
    },
    "status": {
      "liveTracker": "Live Tracker",
      "title": "Gerçek Zamanlı Salon Doluluğu",
      "subtitle": "Antrenmanınızı en sakin ve rahat saatlerde planlayın",
      "now": "Şu anda salonda",
      "forecastFor": "Tahmini saat:",
      "clickBarHint": "Görüntülemek için sütuna tıklayın",
      "comfort": "Sakin & Ferah",
      "moderate": "Orta",
      "busy": "Yoğun",
      "hoursLegend": "Günlük doluluk tahmini:",
      "today": "Bugün",
      "idealTimeTitle": "İdeal Antrenman Zamanı:",
      "idealTimeDesc": "Sabah saatleri (08:00 – 12:00) ve akşam 21:30 sonrası.",
      "legendComfort": "%40 altı (Sakin)",
      "legendOptimal": "%40–75 (İdeal)",
      "legendPeak": "%75 üstü (Yoğun)"
    },
    "about": {
      "badge": "NEDEN VORTEX FITNESS",
      "title": "Gelişiminiz için tasarlanmış birinci sınıf ortam",
      "desc": "Kulübümüz hem profesyonel sporcuların hem de spora yeni başlayanların tüm ihtiyaçları düşünülerek tasarlandı.",
      "bannerTitle": "Stressiz ve sırasız ilk ziyaret",
      "bannerDesc": "Görevli antrenör salonu ve güvenlik kurallarını size ücretsiz olarak tanıtacaktır",
      "bannerBtn": "Fiyatları Gör",
      "items": [
        {
          "title": "Profesyonel Ekipman",
          "desc": "Kusursuz biyomekanik, 50 kg'a kadar dambıl ve olimpik halterler."
        },
        {
          "title": "Güçlü Havalandırma",
          "desc": "Sıcak yaz günlerinde bile kesintisiz taze ve serin hava akışı."
        },
        {
          "title": "Panoramik Kardiyo",
          "desc": "Şehir manzaralı son teknoloji koşu bantları ve bisikletler."
        },
        {
          "title": "Fitness Bar & Besin",
          "desc": "Taze protein shakeler, BCAA, izotonik içecekler ve espresso."
        },
        {
          "title": "Konforlu Soyunma Odası",
          "desc": "Elektronik kilitli dolaplar, sıcak duş, fön ve içme suyu."
        },
        {
          "title": "Uzman Antrenörler",
          "desc": "Hedeflerinize güvenle ve hızla ulaşmanızı sağlayan koçlar."
        }
      ]
    },
    "zones": {
      "badge": "ALANLAR",
      "title": "VORTEX FITNESS Salon Bölgeleri",
      "desc": "Geniş alan dağılımı sayesinde yoğun saatlerde bile alet sırası beklemezsiniz",
      "feature1": "Avrupa standartlarında ekipman",
      "feature2": "Kusursuz hijyen ve temizlik",
      "tryZone": "Bu Alanda Dene",
      "items": [
        {
          "id": "power",
          "title": "Serbest Ağırlık",
          "tag": "Kuvvet Alanı",
          "desc": "1-50 kg dambıllar, power rackler, olimpik barlar ve ayarlanabilir sehpalar.",
          "image": "/images/power-zone.jpg"
        },
        {
          "id": "cardio",
          "title": "Panoramik Kardiyo",
          "tag": "Kardiyo Alanı",
          "desc": "Şehir manzaralı koşu bantları, eliptikler ve multimedya ekranlar.",
          "image": "/images/cardio-zone.jpg"
        },
        {
          "id": "functional",
          "title": "Fonksiyonel Alan",
          "tag": "Cross & Stretch",
          "desc": "Crossfit ve esneme: halatlar, sıçrama kutuları, TRX ve masaj topları.",
          "image": "/images/vortex-hero.jpg"
        },
        {
          "id": "bar",
          "title": "Fitness Bar & Lounge",
          "tag": "Bar & Dinlenme",
          "desc": "Doğru beslenme, protein shakeler, vitaminler ve kaliteli kahve.",
          "image": "/images/bar-zone.jpg"
        }
      ]
    },
    "pricing": {
      "badge": "ÜYELİKLER VE TARİFELER",
      "title": "Sağlığınıza ve gücünüze yatırım yapın",
      "desc": "Gizli ücret olmadan şeffaf fiyatlandırma. Size en uygun paketi seçin.",
      "currencyToggle": "Para Birimi:",
      "defaultBadge": "EN ÇOK SATAN",
      "guarantee1": "Ödeme: Visa / Mastercard / Apple Pay / Nakit",
      "guarantee2": "Resmi sözleşme ve şeffaf dondurma şartları",
      "guarantee3": "Gizli ücret veya ek kesinti yok",
      "plans": [
        {
          "name": "Tek Girişlik Bilet",
          "priceGEL": 20,
          "period": "1 Gün",
          "desc": "Salonu tanımak veya Batum misafirleri için",
          "popular": false,
          "buttonText": "Giriş Bileti Al",
          "features": [
            "Tüm alanlara sınırsız erişim",
            "Özel kilitli dolap ve duş",
            "Fön ve temiz içme suyu",
            "Görevli antrenör desteği"
          ]
        },
        {
          "name": "1 Ay Sınırsız",
          "priceGEL": 120,
          "period": "30 Gün",
          "desc": "Zaman kısıtlaması olmayan esnek paket",
          "popular": false,
          "buttonText": "Aylık Paket Al",
          "features": [
            "Her gün sınırsız giriş",
            "Saat kısıtlaması yok",
            "Tüm alanlar ve duş dahil",
            "Ücretsiz salon tanıtımı"
          ]
        },
        {
          "name": "3 Ay POPÜLER",
          "priceGEL": 300,
          "period": "90 Gün",
          "desc": "Kalıcı ve gözle görülür vücut gelişimi için",
          "popular": true,
          "badge": "EN ÇOK TERCİH EDİLEN",
          "buttonText": "3 Aylık Paket Al",
          "features": [
            "Her gün sınırsız giriş",
            "14 gün dondurma hakkı",
            "2 ücretsiz misafir girişi",
            "Başlangıç antrenman programı",
            "Fitness barda %10 indirim"
          ]
        },
        {
          "name": "1 Yıl VIP",
          "priceGEL": 950,
          "period": "365 Gün",
          "desc": "Maksimum avantaj ve VIP ayrıcalıklar",
          "popular": false,
          "buttonText": "VIP Üyelik Al",
          "features": [
            "365 gün sınırsız giriş",
            "30 gün dondurma hakkı",
            "5 ücretsiz misafir girişi",
            "2 ücretsiz özel ders",
            "Fitness barda %15 indirim",
            "VIP dolap ve öncelik"
          ]
        }
      ]
    },
    "calculator": {
      "badge": "HESAPLAYICI",
      "title": "VKİ ve Günlük Kalori İhtiyacı Hesaplama",
      "desc": "Hedeflerinize göre Vücut Kitle İndeksinizi ve günlük kalori ihtiyacınızı öğrenin",
      "gender": "Cinsiyet",
      "male": "Erkek",
      "female": "Kadın",
      "age": "Yaş",
      "height": "Boy (cm)",
      "weight": "Kilo (kg)",
      "goal": "Temel Hedef",
      "goalLose": "Yağ Yakımı / Kilo Verme",
      "goalMaintain": "Form Koruma & Sağlık",
      "goalMuscle": "Kas Kazanımı / Hacim",
      "calcBtn": "Hesapla",
      "resultTitle": "Kişisel Hesaplama Sonucunuz:",
      "bmiLabel": "VKİ İndeksiniz:",
      "bmrLabel": "Bazal Metabolizma (BMR):",
      "tdeeLabel": "Günlük Enerji Tüketimi (TDEE):",
      "recLabel": "Antrenör Tavsiyesi:",
      "claimBtn": "Ücretsiz Danışmanlık Al",
      "underweight": "Zayıf",
      "normalWeight": "Normal Kilo",
      "overweight": "Fazla Kilo",
      "obesity": "Obezite",
      "kcal": "kcal",
      "recommendedCalories": "Önerilen Günlük Kalori:",
      "kcalPerDay": "hedefinize uygun günlük kcal",
      "recLose": "Etkili yağ yakımı için haftada 3 kuvvet antrenmanı + 120-140 bpm nabız aralığında 20-30 dakika kardiyo öneriyoruz.",
      "recMuscle": "Kas gelişimi için haftada 3-4 kez temel hareketlere odaklanan artan ağırlıklı kuvvet antrenmanı ve yeterli protein (1.8-2g/kg) öneriyoruz.",
      "recMaintain": "Formunuzu korumak ve genel sağlık için haftada 2-3 kez kuvvet, fonksiyonel antrenman ve esneme hareketlerinin dengeli kombinasyonunu öneriyoruz.",
      "bookingServicePrefix": "Beslenme ve Antrenman Planı"
    },
    "trainers": {
      "badge": "EKİBİMİZ",
      "title": "Sertifikalı Kişisel Eğitmenler",
      "desc": "Sakatlanmadan ve en hızlı şekilde hedefinize ulaşmanızı sağlayacak uzmanlar",
      "bookTrainer": "Eğitmenle Randevu Al",
      "customPlan": "Kişisel Plan",
      "bookingPrefix": "Antrenörle Çalışma",
      "list": [
        {
          "name": "Giorgi Beridze",
          "role": "Baş Antrenör / Vücut Geliştirme",
          "exp": "Deneyim: 9 yıl",
          "desc": "Spor ustası. Kas kütlesi artırma, kuvvet geliştirme ve duruş düzeltme uzmanı.",
          "image": "/images/trainer-1.jpg"
        },
        {
          "name": "Elene Vachnadze",
          "role": "Fonksiyonel Antrenman & TRX",
          "exp": "Deneyim: 7 yıl",
          "desc": "Sağlıklı zayıflama, esneklik artırma, kadınlara özel fitness ve toparlanma.",
          "image": "/images/trainer-2.jpg"
        }
      ]
    },
    "reviews": {
      "badge": "YORUMLAR",
      "title": "VORTEX FITNESS Hakkında Ne Diyorlar?",
      "desc": "Yüzlerce Batumlu ve expat bize güveniyor. Puanımız 5.0 üzerinden 4.9.",
      "totalCount": "240'tan fazla doğrulanmış yorum",
      "verified": "Doğrulanmış Yorum",
      "moreVideos": "Daha fazla gerçek video ve inceleme görün:",
      "list": [
        {
          "name": "David Makharadze",
          "city": "Batum",
          "text": "Harika ve ferah bir salon! 50 kg'a kadar dambıllar ve tüm kuvvet aletleri mevcut. Güçlü havalandırma sayesinde yazın bile hava çok temiz.",
          "rating": 5
        },
        {
          "name": "Alexander Sokolov",
          "city": "Batum (Expat)",
          "text": "6 aydır burada antrenman yapıyorum. Çok samimi bir ortam, tertemiz duşlar ve harika protein shakeler var.",
          "rating": 5
        },
        {
          "name": "Mariam Kvaratskhelia",
          "city": "Batum",
          "text": "Panoramik şehir manzaralı kardiyo alanına bayıldım! Eğitmen Elene ile 2 ayda 6 kilo verdim, kendimi çok iyi hissediyorum.",
          "rating": 5
        }
      ]
    },
    "faq": {
      "badge": "SSS",
      "title": "Sıkça Sorulan Sorular",
      "items": [
        {
          "q": "İlk antrenmanıma gelirken yanımda ne getirmeliyim?",
          "a": "Rahat spor kıyafetleri, temiz bir spor ayakkabı ve kişisel havlu. İçme suyu ve saç kurutma makineleri salonda mevcuttur."
        },
        {
          "q": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          "a": "Nakit (GEL), Visa, Mastercard ve Apple Pay / Google Pay temassız ödemelerini kabul ediyoruz."
        },
        {
          "q": "Seyahat durumunda üyeliğimi dondurabilir miyim?",
          "a": "Evet, 3 ay ve üzeri üyeliklerde ücretsiz dondurma hakkı bulunmaktadır (3 aylıkta 14 gün, yıllık VIP'de 45 güne kadar)."
        },
        {
          "q": "Salonun en sakin olduğu saatler hangileridir?",
          "a": "Salonumuz her gün 08:00 – 23:45 arası açıktır. En sakin saatler sabahları (08:00 – 12:00) ve akşam 21:30 sonrasıdır. Yukarıdaki canlı durum grafiğinden takip edebilirsiniz!"
        }
      ]
    },
    "contact": {
      "badge": "KONUM",
      "title": "Antrenmana Bekliyoruz",
      "addressTitle": "Salon Adresi:",
      "addressValue": "Batum, David Agmashenebeli Cad., 2g",
      "addressNote": "Kolay ulaşım ve özel otopark imkanı",
      "phoneTitle": "Telefon / WhatsApp:",
      "phoneValue": "+995 514 03 07 09",
      "phoneNote": "WhatsApp ve Telegram aramaları ve mesajları",
      "hoursTitle": "Çalışma Saatleri:",
      "hoursValue": "Pazartesi – Pazar: 08:00 – 23:45",
      "hoursNote": "Öğle molası veya tatil olmadan her gün açık",
      "socialTitle": "Sosyal Medya:",
      "routeBtn": "Haritada Yol Tarifi",
      "writeWa": "WhatsApp'tan Yazın",
      "mapAddress": "David Agmashenebeli Cad. 2g, Batum"
    },
    "footer": {
      "brandDesc": "Batum'da premium fitness kulübü. Profesyonel ekipmanlar, ferah salon, iklimlendirme ve David Agmashenebeli Cad. 2g'de en iyi antrenman ortamı.",
      "navTitle": "Navigasyon",
      "hoursTitle": "Çalışma Saatleri",
      "hoursSchedule": "Pzt – Paz: 08:00 – 23:45",
      "hoursSubnote": "Öğle molası ve tatil günü yoktur.",
      "openToday": "Bugün açık",
      "contactTitle": "İletişim",
      "addressText": "Batum, David Agmashenebeli Cad., 2g",
      "waChat": "WhatsApp sohbeti",
      "allRightsReserved": "Tüm hakları saklıdır.",
      "backToTop": "Yukarı"
    },
    "modal": {
      "title": "VORTEX FITNESS Kayıt",
      "subtitle": "İletişim bilgilerinizi bırakın, 10 dakika içinde size dönüş yapalım",
      "name": "Adınız",
      "namePlaceholder": "Adınız Soyadınız",
      "phone": "Telefon / WhatsApp",
      "phonePlaceholder": "+995 ___ __ __ __",
      "service": "İlgilendiğiniz Hizmet",
      "serviceTrial": "Ücretsiz Deneme Antrenmanı",
      "serviceSub": "Üyelik Satın Alma",
      "serviceCoach": "Özel Ders (PT)",
      "time": "Tercih Edilen Saat",
      "defaultTime": "Öğle (12-17)",
      "times": [
        "Sabah (08-12)",
        "Öğle (12-17)",
        "Akşam (17-23)"
      ],
      "planOptions": [
        "1 Ay Sınırsız (130 ₾)",
        "3 Ay POPÜLER (340 ₾)",
        "1 Yıl VIP (990 ₾)",
        "Tek Giriş (20 ₾)"
      ],
      "submit": "Başvuruyu Gönder",
      "submitting": "Gönderiliyor...",
      "successTitle": "Başvurunuz Alındı!",
      "successDesc": "Yöneticimiz ziyaret saatini teyit etmek için kısa süre içinde sizinle iletişime geçecektir.",
      "orDirectWa": "Veya doğrudan WhatsApp üzerinden yazın:",
      "openWa": "WhatsApp Sohbetini Aç (+995 514 03 07 09)",
      "summaryName": "İsim:",
      "summaryPhone": "Telefon:",
      "summaryService": "Hizmet:",
      "confirmWa": "WhatsApp'ta Hemen Onayla",
      "close": "Kapat",
      "guest": "Misafir",
      "notSpecified": "belirtilmedi",
      "waTemplate": "Merhaba! Benim adım {name}. Vortex Fitness Batumi'ye kayıt olmak istiyorum: {service}. Telefonum: {phone}. Tercih edilen saat: {time}."
    }
  }
} as const;
