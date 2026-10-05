export type Language = 'ru' | 'en' | 'ka';

export const translations = {
  ru: {
    nav: {
      about: "О клубе",
      zones: "Зоны зала",
      pricing: "Тарифы",
      trainers: "Тренеры",
      calculator: "Калькулятор",
      status: "Загруженность",
      contacts: "Контакты",
      bookBtn: "Записаться",
      openStatus: "Открыто до 23:45",
      callUs: "Позвонить",
    },
    hero: {
      badge: "Премиальный фитнес-клуб в Батуми",
      titleStart: "СИЛА.",
      titleMiddle: "ЭСТЕТИКА.",
      titleEnd: "ДИСЦИПЛИНА.",
      subtitle: "Современное пространство для тренировок на ул. Давида Агмашенебели 2г. Профессиональное оборудование, мощная вентиляция, зона свободных весов и персональный подход.",
      ctaPrimary: "Выбрать абонемент",
      ctaSecondary: "Пробная тренировка",
      stats: {
        space: "1 200 м²",
        spaceDesc: "Пространства зала",
        equipment: "80+",
        equipmentDesc: "Премиум тренажеров",
        rating: "4.9 ★",
        ratingDesc: "На основе 240+ отзывов",
        hours: "08:00 – 23:45",
        hoursDesc: "Ежедневно без выходных",
      }
    },
    status: {
      title: "Загруженность зала в реальном времени",
      subtitle: "Планируйте тренировку в максимально комфортное время",
      now: "Сейчас в зале",
      comfort: "Комфортная атмосфера",
      moderate: "Умеренная активность",
      busy: "Пиковая активность",
      hoursLegend: "График активности за день:",
      today: "Сегодня",
    },
    about: {
      badge: "ПОЧЕМУ TROY FITNESS",
      title: "Все условия для вашего прогресса",
      desc: "Мы создали зал, в котором одинаково комфортно и опытным атлетам, и тем, кто только начинает свой путь в фитнесе.",
      items: [
        {
          title: "Профессиональный тренажерный парк",
          desc: "Силовые рамы, гантельный ряд до 50 кг, кроссоверы и изолирующие тренажеры с идеальной биомеханикой.",
        },
        {
          title: "Мощная вентиляция и климат-контроль",
          desc: "Чистый и свежий воздух с постоянной циркуляцией даже в разгар жаркого батумского лета.",
        },
        {
          title: "Панорамная кардио-зона",
          desc: "Беговые дорожки последнего поколения, эллипсы и гребные тренажеры с интерактивными экранами.",
        },
        {
          title: "Фитнес-бар и спортивное питание",
          desc: "Протеиновые коктейли, BCAA, изотоники, витамины и свежий эспрессо перед тренировкой.",
        },
        {
          title: "Комфортные раздевалки и душевые",
          desc: "Просторные шкафчики с электронными замками, горячий душ с высоким напором, фены и питьевая вода.",
        },
        {
          title: "Опытный тренерский состав",
          desc: "Сертифицированные тренеры с профильным образованием, разрабатывающие индивидуальные планы питания и тренировок.",
        }
      ]
    },
    zones: {
      badge: "ПРОСТРАНСТВО КЛУБА",
      title: "Локации TROY FITNESS",
      desc: "Каждая зона спроектирована для максимальной эффективности и безопасности ваших занятий",
      items: [
        {
          id: "power",
          title: "Зона свободных весов и пауэрлифтинга",
          desc: "Помосты для становой тяги, регулируемые скамьи, олимпийские грифы, гантели от 1 до 50 кг и силовые рамы.",
          tag: "Тяжелые веса",
          image: "/images/power-zone.jpg"
        },
        {
          id: "cardio",
          title: "Панорамный кардио-театр",
          desc: "Линейка современных беговых дорожек, сайклов и эллипсоидов с видом на город и персональным мониторингом пульса.",
          tag: "Выносливость",
          image: "/images/cardio-zone.jpg"
        },
        {
          id: "bar",
          title: "Troy Fuel Bar & Релакс-зона",
          desc: "Спортивное питание мировых брендов, протеиновые батончики, шейкеры, изотоники и зона отдыха после занятий.",
          tag: "Восстановление",
          image: "/images/bar-zone.jpg"
        },
        {
          id: "main",
          title: "Главный силовой зал",
          desc: "Блочные тренажеры, станки для проработки спины, ног, груди и плеч с плавной траекторией движения.",
          tag: "Биомеханика",
          image: "/images/hero-gym.jpg"
        }
      ]
    },
    pricing: {
      badge: "ТАРИФЫ И АБОНЕМЕНТЫ",
      title: "Инвестируйте в свое здоровье и форму",
      desc: "Прозрачные цены без скрытых платежей. Возможность заморозки и гостевые визиты в подарок.",
      currencyToggle: "Валюта:",
      plans: [
        {
          name: "Разовое посещение",
          priceGEL: 20,
          period: "1 тренировка",
          desc: "Идеально для знакомства с залом или для гостей Батуми",
          features: [
            "Полный доступ ко всем зонам",
            "Шкафчик и раздевалка",
            "Душ и фен",
            "Питьевая вода"
          ],
          popular: false,
          buttonText: "Выбрать"
        },
        {
          name: "1 Месяц Безлимит",
          priceGEL: 130,
          period: "30 дней",
          desc: "Самый гибкий абонемент без ограничений по времени",
          features: [
            "Безлимитный вход с 08:00 до 23:45",
            "Вводный инструктаж дежурного тренера",
            "Доступ ко всем тренажерам и кардио",
            "Душевые и персональные шкафчики",
            "Скидка 10% на бар при первом заказе"
          ],
          popular: false,
          buttonText: "Купить абонемент"
        },
        {
          name: "3 Месяца ХИТ",
          priceGEL: 340,
          period: "90 дней",
          desc: "Оптимальный срок для видимой трансформации тела",
          features: [
            "Безлимитный доступ ежедневно",
            "Заморозка абонемента на 14 дней",
            "2 гостевых визита для друзей",
            "Составление базовой программы",
            "Скидка 10% в Troy Fuel Bar"
          ],
          popular: true,
          badge: "ВЫБОР КЛИЕНТОВ",
          buttonText: "Купить со скидкой"
        },
        {
          name: "1 Год VIP",
          priceGEL: 990,
          period: "365 дней",
          desc: "Максимальная выгода для постоянных резидентов",
          features: [
            "Полный безлимит 365 дней в году",
            "Заморозка карты до 45 дней",
            "5 гостевых визитов для друзей",
            "1 персональная тренировка в подарок",
            "Фирменный шейкер Troy Fitness",
            "Постоянная скидка 15% на спортпит"
          ],
          popular: false,
          badge: "МАКСИМАЛЬНАЯ ВЫГОДА",
          buttonText: "Оформить VIP"
        }
      ]
    },
    calculator: {
      badge: "УМНЫЙ РАСЧЕТ",
      title: "Фитнес-калькулятор и персональный план",
      desc: "Укажите свои параметры, чтобы рассчитать индекс массы тела (ИМТ) и суточную норму калорий",
      gender: "Пол",
      male: "Мужчина",
      female: "Женщина",
      age: "Возраст (лет)",
      height: "Рост (см)",
      weight: "Вес (кг)",
      goal: "Ваша главная цель",
      goalLose: "Снижение веса и рельеф",
      goalMaintain: "Тонус и здоровье",
      goalMuscle: "Набор мышечной массы",
      calcBtn: "Рассчитать план",
      resultTitle: "Ваш персональный результат:",
      bmiLabel: "Ваш ИМТ:",
      bmrLabel: "Базовый метаболизм (BMR):",
      tdeeLabel: "Расход калорий с тренировками:",
      recLabel: "Рекомендация:",
      claimBtn: "Записаться на разбор с тренером"
    },
    trainers: {
      badge: "КОМАНДА ПРОФЕССИОНАЛОВ",
      title: "Тренеры, которые приведут вас к результату",
      desc: "Каждый наставник TROY FITNESS имеет спортивный опыт, международные сертификаты и искреннюю страсть к результату клиентов.",
      bookTrainer: "Записаться к тренеру",
      list: [
        {
          name: "Георгий Беридзе",
          role: "Старший тренер / Пауэрлифтинг & Бодибилдинг",
          exp: "Опыт: 9 лет",
          desc: "Мастер спорта. Специализируется на силовых показателях, наборе качественной мышечной массы и коррекции осанки.",
          image: "/images/trainer-1.jpg"
        },
        {
          name: "Елена Вачнадзе",
          role: "Тренер по функциональному тренингу & Стретчингу",
          exp: "Опыт: 7 лет",
          desc: "Сертифицированный специалист FPA. Программы безопасного похудения, развитие гибкости, ЛФК и женский фитнес.",
          image: "/images/trainer-2.jpg"
        }
      ]
    },
    reviews: {
      badge: "ОТЗЫВЫ АТЛЕТОВ",
      title: "Что говорят о TROY FITNESS",
      desc: "Нам доверяют сотни жителей и гостей Батуми. Средняя оценка 4.9 из 5.",
      list: [
        {
          name: "Давид Махарадзе",
          city: "Батуми",
          text: "Отличный тренажерный зал! Есть всё необходимое железо, гантели тяжелые, скамейки устойчивые. Очень радует кондиционирование — в Батуми летом это спасение.",
          rating: 5
        },
        {
          name: "Александр Соколов",
          city: "Экспат",
          text: "Занимаюсь здесь уже полгода. Очень дружелюбная атмосфера, вежливый персонал, чисто в раздевалках. Бар с протеином прямо на входе — супер удобно!",
          rating: 5
        },
        {
          name: "Нино Чавчавадзе",
          city: "Батуми",
          text: "Брала персональные тренировки. За 3 месяца сбросила 8 кг и подтянула тело. Тренеры внимательные, следят за техникой. Рекомендую Троя Фитнес всем!",
          rating: 5
        }
      ]
    },
    faq: {
      badge: "ВОПРОС — ОТВЕТ",
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что нужно взять с собой на первую тренировку?",
          a: "Удобную спортивную форму, сменную чистую спортивную обувь (кроссовки) и личное полотенце. Воду можно взять с собой или набрать/приобрести в нашем фитнес-баре."
        },
        {
          q: "Какие способы оплаты вы принимаете?",
          a: "Мы принимаем оплату наличными в грузинских лари (GEL), а также банковскими картами Visa, Mastercard и через Apple Pay / Google Pay."
        },
        {
          q: "Есть ли у вас заморозка абонементов?",
          a: "Да, на абонементах от 3 месяцев доступна бесплатная заморозка (14 дней на 3 месяца, 30 дней на полгода и 45 дней на год)."
        },
        {
          q: "Подходит ли клуб для абсолютных новичков?",
          a: "Безусловно! При первом посещении дежурный инструктор покажет устройство зала, объяснит правила безопасности и покажет, как настраивать тренажеры под ваш рост."
        },
        {
          q: "Нужна ли предварительная запись для разового визита?",
          a: "Нет, предварительная запись не обязательна. Вы можете прийти в любое удобное время с 08:00 до 23:45 и оплатить разовое посещение на стойке рецепции."
        }
      ]
    },
    contact: {
      badge: "КАК НАС НАЙТИ",
      title: "Ждем вас на тренировке",
      addressTitle: "Адрес:",
      addressValue: "Грузия, г. Батуми, ул. Давида Агмашенебели, 2г",
      addressNote: "Рядом с центральными магистралями города, удобная парковка",
      phoneTitle: "Телефон / WhatsApp:",
      phoneValue: "+995 514 03 07 09",
      hoursTitle: "График работы:",
      hoursValue: "Понедельник – Воскресенье: 08:00 – 23:45",
      socialTitle: "Мы в соцсетях:",
      routeBtn: "Построить маршрут на картах",
      writeWa: "Написать в WhatsApp",
    },
    modal: {
      title: "Запись в TROY FITNESS",
      subtitle: "Заполните форму, и мы свяжемся с вами в течение 10 минут",
      name: "Ваше имя",
      phone: "Телефон / WhatsApp",
      service: "Интересующая услуга",
      serviceTrial: "Пробная тренировка (Бесплатно)",
      serviceSub: "Покупка абонемента",
      serviceCoach: "Персональный тренер",
      time: "Желаемое время визита",
      submit: "Отправить заявку",
      submitting: "Отправка...",
      successTitle: "Заявка успешно отправлена!",
      successDesc: "Мы получили ваш запрос и свяжемся с вами в ближайшее время.",
      orDirectWa: "Или напишите нам напрямую в WhatsApp:",
      close: "Закрыть"
    }
  },
  en: {
    nav: {
      about: "About",
      zones: "Gym Zones",
      pricing: "Memberships",
      trainers: "Trainers",
      calculator: "Calculator",
      status: "Live Occupancy",
      contacts: "Contacts",
      bookBtn: "Join Now",
      openStatus: "Open until 23:45",
      callUs: "Call",
    },
    hero: {
      badge: "Premier Fitness Center in Batumi",
      titleStart: "STRENGTH.",
      titleMiddle: "AESTHETICS.",
      titleEnd: "DISCIPLINE.",
      subtitle: "Modern fitness facility at 2g David Agmashenebeli St. Heavy-duty equipment, powerful air conditioning, free weights zone, and certified coaches.",
      ctaPrimary: "View Memberships",
      ctaSecondary: "Free Trial Session",
      stats: {
        space: "1,200 m²",
        spaceDesc: "Modern Space",
        equipment: "80+",
        equipmentDesc: "Commercial Machines",
        rating: "4.9 ★",
        ratingDesc: "Based on 240+ reviews",
        hours: "08:00 – 23:45",
        hoursDesc: "Open Every Day",
      }
    },
    status: {
      title: "Live Gym Occupancy",
      subtitle: "Plan your workout at the most comfortable time",
      now: "Current Occupancy",
      comfort: "Comfortable Atmosphere",
      moderate: "Moderate Flow",
      busy: "Peak Hours",
      hoursLegend: "Daily Activity Pattern:",
      today: "Today",
    },
    about: {
      badge: "WHY TROY FITNESS",
      title: "Everything Engineered for Your Progress",
      desc: "Designed for serious lifters and fitness beginners alike, offering an exceptional training environment in Batumi.",
      items: [
        {
          title: "Heavy-Duty Equipment",
          desc: "Olympic power racks, dumbbells up to 50 kg, cables, and precision biomechanical isolation machines.",
        },
        {
          title: "Superior Ventilation & AC",
          desc: "Powerful high-flow air purification and climate control for maximum oxygen during heavy training.",
        },
        {
          title: "Panoramic Cardio Theater",
          desc: "Latest treadmills, stationary bikes, and rowing machines with interactive screens and metrics.",
        },
        {
          title: "Fuel Bar & Supplements",
          desc: "Fresh protein shakes, pre-workouts, BCAA, hydration drinks, and Italian espresso.",
        },
        {
          title: "Locker Rooms & High-Flow Showers",
          desc: "Electronic key lockers, strong water pressure showers, hair dryers, and pure drinking water.",
        },
        {
          title: "Certified Coaching Staff",
          desc: "Professional trainers crafting customized nutritional advice and progressive workout routines.",
        }
      ]
    },
    zones: {
      badge: "GYM LOCATIONS",
      title: "Explore TROY FITNESS",
      desc: "Every zone is engineered for safety, biomechanical efficiency, and intense focus.",
      items: [
        {
          id: "power",
          title: "Free Weights & Powerlifting",
          desc: "Deadlift platforms, adjustable benches, Olympic barbells, dumbbells from 1 to 50 kg, and squat cages.",
          tag: "Heavy Iron",
          image: "/images/power-zone.jpg"
        },
        {
          id: "cardio",
          title: "Cardio Theater",
          desc: "Row of commercial grade treadmills and ellipticals overlooking the evening city lights.",
          tag: "Endurance",
          image: "/images/cardio-zone.jpg"
        },
        {
          id: "bar",
          title: "Troy Fuel Bar & Lounge",
          desc: "Premium sports nutrition, shaker bottles, protein bars, and a relaxed lounge area.",
          tag: "Recovery",
          image: "/images/bar-zone.jpg"
        },
        {
          id: "main",
          title: "Main Machine Arena",
          desc: "Complete circuit of selectorized machines targeting back, chest, legs, and arms.",
          tag: "Biomechanics",
          image: "/images/hero-gym.jpg"
        }
      ]
    },
    pricing: {
      badge: "MEMBERSHIP PLANS",
      title: "Invest in Your Health & Strength",
      desc: "Fair and transparent pricing with no hidden fees. Free freeze periods and guest passes included.",
      currencyToggle: "Currency:",
      plans: [
        {
          name: "Single Day Pass",
          priceGEL: 20,
          period: "1 Workout",
          desc: "Ideal for travelers, digital nomads, or testing the gym",
          features: [
            "All-day access to all gym zones",
            "Locker and shower access",
            "Hair dryer & filtered water",
            "Free high-speed Wi-Fi"
          ],
          popular: false,
          buttonText: "Get Day Pass"
        },
        {
          name: "1 Month Unlimited",
          priceGEL: 130,
          period: "30 Days",
          desc: "Ultimate flexibility with zero time restrictions",
          features: [
            "Unlimited entry 08:00 – 23:45",
            "Introductory coaching overview",
            "Free access to all equipment & cardio",
            "Showers and secure lockers",
            "10% discount on first Fuel Bar order"
          ],
          popular: false,
          buttonText: "Join 1 Month"
        },
        {
          name: "3 Months BESTSELLER",
          priceGEL: 340,
          period: "90 Days",
          desc: "The proven duration for noticeable body transformation",
          features: [
            "Daily unlimited access",
            "14-day membership freeze included",
            "2 guest passes for friends",
            "Personal workout routine guidance",
            "10% off at Troy Fuel Bar"
          ],
          popular: true,
          badge: "MOST POPULAR",
          buttonText: "Claim Discount"
        },
        {
          name: "1 Year VIP",
          priceGEL: 990,
          period: "365 Days",
          desc: "Maximum value for long-term health and discipline",
          features: [
            "Full unlimited access 365 days a year",
            "Card freeze up to 45 days",
            "5 guest passes for friends",
            "1 complimentary 1-on-1 PT session",
            "Exclusive Troy Fitness shaker",
            "Permanent 15% discount on supplements"
          ],
          popular: false,
          badge: "BEST VALUE",
          buttonText: "Get 1 Year VIP"
        }
      ]
    },
    calculator: {
      badge: "FITNESS METRICS",
      title: "BMI & Calorie Plan Calculator",
      desc: "Enter your body stats to calculate your BMI, daily caloric needs, and ideal training trajectory.",
      gender: "Gender",
      male: "Male",
      female: "Female",
      age: "Age (years)",
      height: "Height (cm)",
      weight: "Weight (kg)",
      goal: "Primary Goal",
      goalLose: "Fat Loss & Definition",
      goalMaintain: "Conditioning & Health",
      goalMuscle: "Muscle Hypertrophy",
      calcBtn: "Calculate Plan",
      resultTitle: "Your Custom Calculation:",
      bmiLabel: "Body Mass Index (BMI):",
      bmrLabel: "Basal Metabolic Rate (BMR):",
      tdeeLabel: "Maintenance Caloric Burn (TDEE):",
      recLabel: "Coach Recommendation:",
      claimBtn: "Book Free Consultation"
    },
    trainers: {
      badge: "COACHING STAFF",
      title: "Coaches Dedicated to Your Growth",
      desc: "Certified athletic mentors with national titles and passion for helping you unlock your full potential.",
      bookTrainer: "Book Coach",
      list: [
        {
          name: "Giorgi Beridze",
          role: "Head Coach / Powerlifting & Bodybuilding",
          exp: "9+ Years Experience",
          desc: "Master of sports. Specializing in progressive overload, muscle hypertrophy, and posture correction.",
          image: "/images/trainer-1.jpg"
        },
        {
          name: "Elena Vachnadze",
          role: "Functional Fitness & Flexibility Specialist",
          exp: "7+ Years Experience",
          desc: "Certified trainer specializing in safe weight management, mobility, rehabilitation, and core strength.",
          image: "/images/trainer-2.jpg"
        }
      ]
    },
    reviews: {
      badge: "TESTIMONIALS",
      title: "What Members Say About TROY",
      desc: "Trusted by hundreds of Batumi residents and travelers. 4.9 out of 5 stars.",
      list: [
        {
          name: "David Makharadze",
          city: "Batumi",
          text: "Excellent gym! All the heavy iron you need, dumbbells up to 50kg, sturdy benches. The air conditioning is a lifesaver in Batumi summers.",
          rating: 5
        },
        {
          name: "Alex Sokolov",
          city: "Expat",
          text: "Training here for 6 months. Great friendly community, clean locker rooms, and the protein shake bar right at the entrance is super convenient!",
          rating: 5
        },
        {
          name: "Nino Chavchavadze",
          city: "Batumi",
          text: "Took personal coaching sessions here. Lost 8kg and gained muscle tone in 3 months. Instructors are attentive and teach proper form. Highly recommend!",
          rating: 5
        }
      ]
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What should I bring for my first workout?",
          a: "Clean gym shoes, athletic clothing, and a personal towel. Filtered water is available on-site, or you can purchase hydration drinks at our fuel bar."
        },
        {
          q: "What payment methods are supported?",
          a: "We accept Georgian Lari cash, all major credit/debit cards (Visa, Mastercard), as well as Apple Pay and Google Pay."
        },
        {
          q: "Can I freeze my membership if I travel?",
          a: "Yes! 3-month cards include 14 days freeze, 6-month cards include 30 days, and annual cards include 45 days of free freeze."
        },
        {
          q: "Is Troy Fitness suitable for beginners?",
          a: "100%! Our floor coach is always on duty to show you how each machine works, how to adjust seat heights, and how to train safely."
        },
        {
          q: "Do I need an appointment for a single pass?",
          a: "No appointment needed! Just visit us anytime between 08:00 and 23:45 and grab a single day pass at the reception."
        }
      ]
    },
    contact: {
      badge: "FIND US",
      title: "Visit TROY FITNESS Batumi",
      addressTitle: "Location:",
      addressValue: "2g David Agmashenebeli St, Batumi, Georgia",
      addressNote: "Convenient location with ample street and visitor parking",
      phoneTitle: "Phone / WhatsApp:",
      phoneValue: "+995 514 03 07 09",
      hoursTitle: "Working Hours:",
      hoursValue: "Monday – Sunday: 08:00 AM – 11:45 PM",
      socialTitle: "Follow Us:",
      routeBtn: "Open in Maps",
      writeWa: "Chat on WhatsApp",
    },
    modal: {
      title: "Join TROY FITNESS",
      subtitle: "Fill in the details below, and our team will get back to you within 10 minutes",
      name: "Your Name",
      phone: "Phone / WhatsApp",
      service: "Preferred Service",
      serviceTrial: "Free Trial Workout",
      serviceSub: "Gym Membership",
      serviceCoach: "Personal Coaching",
      time: "Preferred Time of Visit",
      submit: "Submit Request",
      submitting: "Submitting...",
      successTitle: "Request Received!",
      successDesc: "Thank you! Our administrator will contact you shortly.",
      orDirectWa: "Or message us directly on WhatsApp:",
      close: "Close"
    }
  },
  ka: {
    nav: {
      about: "კლუბის შესახებ",
      zones: "ზონები",
      pricing: "ტარიფები",
      trainers: "მწვრთნელები",
      calculator: "კალკულატორი",
      status: "დატვირთულობა",
      contacts: "კონტაქტი",
      bookBtn: "ჩაწერა",
      openStatus: "ღიაა 23:45-მდე",
      callUs: "დარეკვა",
    },
    hero: {
      badge: "პრემიუმ ფიტნეს-კლუბი ბათუმში",
      titleStart: "ძალა.",
      titleMiddle: "ესთეტიკა.",
      titleEnd: "დისციპლინა.",
      subtitle: "თანამედროვე სავარჯიშო სივრცე დავით აღმაშენებლის ქ. 2გ-ში. პროფესიონალური ტრენაჟორები, მძლავრი ვენტილაცია და ინდივიდუალური მიდგომა.",
      ctaPrimary: "აბონემენტის არჩევა",
      ctaSecondary: "საცდელი ვარჯიში",
      stats: {
        space: "1 200 მ²",
        spaceDesc: "სავარჯიშო სივრცე",
        equipment: "80+",
        equipmentDesc: "პრემიუმ ტრენაჟორი",
        rating: "4.9 ★",
        ratingDesc: "240+ შეფასება",
        hours: "08:00 – 23:45",
        hoursDesc: "ყოველდღე უქმეების გარეშე",
      }
    },
    status: {
      title: "დარბაზის რეალური დატვირთულობა",
      subtitle: "დაგეგმეთ თქვენი ვარჯიში ყველაზე კომფორტულ დროს",
      now: "ახლა დარბაზში",
      comfort: "კომფორტული გარემო",
      moderate: "ზომიერი აქტივობა",
      busy: "პიკური საათები",
      hoursLegend: "აქტივობის გრაფიკი დღის განმავლობაში:",
      today: "დღეს",
    },
    about: {
      badge: "რატომ TROY FITNESS",
      title: "ყველა პირობა თქვენი პროგრესისთვის",
      desc: "კლუბი შექმნილია როგორც გამოცდილი სპორტსმენებისთვის, ასევე დამწყებთათვის.",
      items: [
        {
          title: "პროფესიონალური ტრენაჟორები",
          desc: "სათანადო ბიომექანიკა, ჰანტელების რიგი 50 კგ-მდე და ოლიმპიური შტანგები.",
        },
        {
          title: "ძლიერი ვენტილაცია და კონდიცირება",
          desc: "სუფთა და გრილი ჰაერის უწყვეტი ცირკულაცია ბათუმის ცხელ ზაფხულშიც კი.",
        },
        {
          title: "პანორამული კარდიო-ზონა",
          desc: "უახლესი სარბენი ბილიკები და ელიფსოიდები ინტერაქტიული მონიტორინგით.",
        },
        {
          title: "ფიტნეს-ბარი და სპორტული კვება",
          desc: "პროტეინის კოქტეილები, BCAA, იზოტონიკები და ხარისხიანი ესპრესო.",
        },
        {
          title: "კომფორტული გასახდელები და შხაპი",
          desc: "ელექტრონული საკეტები, ცხელი წყალი, თმის საშრობები და სასმელი წყალი.",
        },
        {
          title: "სერტიფიცირებული მწვრთნელები",
          desc: "გამოცდილი სპეციალისტები, რომლებიც დაგეხმარებიან მიზნების მიღწევაში.",
        }
      ]
    },
    zones: {
      badge: "სივრცე",
      title: "TROY FITNESS-ის ზონები",
      desc: "შექმნილია მაქსიმალური უსაფრთხოებისა და შედეგისთვის",
      items: [
        {
          id: "power",
          title: "თავისუფალი წონების ზონა",
          desc: "პლატფორმები, ჰანტელები 1-დან 50 კგ-მდე, რეგულირებადი სკამები და რამები.",
          tag: "ძალოვანი ზონა",
          image: "/images/power-zone.jpg"
        },
        {
          id: "cardio",
          title: "კარდიო თეატრი",
          desc: "სარბენი ბილიკები პანორამული ხედით ქალაქზე.",
          tag: "გამძლეობა",
          image: "/images/cardio-zone.jpg"
        },
        {
          id: "bar",
          title: "Troy Fuel Bar & მოსასვენებელი",
          desc: "სპორტული კვება, შეიკერები და დასვენების ზონა.",
          tag: "აღდგენა",
          image: "/images/bar-zone.jpg"
        },
        {
          id: "main",
          title: "ძირითადი სავარჯიშო დარბაზი",
          desc: "ბლოკური და იზოლირებული ტრენაჟორები სხეულის ყველა კუნთისთვის.",
          tag: "ბიომექანიკა",
          image: "/images/hero-gym.jpg"
        }
      ]
    },
    pricing: {
      badge: "ტარიფები და აბონემენტები",
      title: "ინვესტიცია თქვენს ჯანმრთელობაში",
      desc: "გამჭვირვალე ფასები ფარული გადასახადების გარეშე.",
      currencyToggle: "ვალუტა:",
      plans: [
        {
          name: "ერთჯერადი ვიზიტი",
          priceGEL: 20,
          period: "1 ვარჯიში",
          desc: "იდეალურია დარბაზის გასაცნობად ან ქალაქის სტუმრებისთვის",
          features: [
            "დარბაზის სრული წვდომა",
            "გასახდელი და შხაპი",
            "თმის საშრობი",
            "სასმელი წყალი"
          ],
          popular: false,
          buttonText: "არჩევა"
        },
        {
          name: "1 თვე ულიმიტო",
          priceGEL: 130,
          period: "30 დღე",
          desc: "ყველაზე მოქნილი აბონემენტი დროის შეზღუდვის გარეშე",
          features: [
            "ულიმიტო შესვლა 08:00 – 23:45",
            "ინსტრუქტაჟი დამწყებთათვის",
            "ყველა ზონის წვდომა",
            "ინდივიდუალური კარადები",
            "10% ფასდაკლება ბარზე"
          ],
          popular: false,
          buttonText: "შეძენა"
        },
        {
          name: "3 თვე პოპულარული",
          priceGEL: 340,
          period: "90 დღე",
          desc: "საუკეთესო პერიოდი რეალური ტრანსფორმაციისთვის",
          features: [
            "ულიმიტო ყოველდღიური წვდომა",
            "გაყინვა 14 დღით",
            "2 სტუმრის ვიზიტი მეგობრებისთვის",
            "ვარჯიშის საწყისი პროგრამა",
            "10% ფასდაკლება ბარზე"
          ],
          popular: true,
          badge: "არჩევანი",
          buttonText: "შეძენა ფასდაკლებით"
        },
        {
          name: "1 წელი VIP",
          priceGEL: 990,
          period: "365 დღე",
          desc: "მაქსიმალური სარგებელი მუდმივი წევრებისთვის",
          features: [
            "სრული ულიმიტო 365 დღე",
            "გაყინვა 45 დღემდე",
            "5 სტუმრის უფასო ვიზიტი",
            "1 უფასო პერსონალური ვარჯიში",
            "Troy Fitness-ის საფირმო შეიკერი",
            "მუდმივი 15% ფასდაკლება კვებაზე"
          ],
          popular: false,
          badge: "მაქსიმალური სარგებელი",
          buttonText: "VIP გაფორმება"
        }
      ]
    },
    calculator: {
      badge: "კალკულატორი",
      title: "BMI & კალორიების გაანგარიშება",
      desc: "შეიყვანეთ მონაცემები სხეულის მასის ინდექსისა და კალორიების გამოსათვლელად",
      gender: "სქესი",
      male: "მამაკაცი",
      female: "ქალი",
      age: "ასაკი (წელი)",
      height: "სიმაღლე (სმ)",
      weight: "წონა (კგ)",
      goal: "მთავარი მიზანი",
      goalLose: "წონის კლება",
      goalMaintain: "ტონუსი და ჯანმრთელობა",
      goalMuscle: "კუნთოვანი მასა",
      calcBtn: "გამოთვლა",
      resultTitle: "თქვენი შედეგი:",
      bmiLabel: "თქვენი BMI ინდექსი:",
      bmrLabel: "ბაზალური მეტაბოლიზმი (BMR):",
      tdeeLabel: "კალორიების ხარჯი ვარჯიშით:",
      recLabel: "რეკომენდაცია:",
      claimBtn: "კონსულტაციაზე ჩაწერა"
    },
    trainers: {
      badge: "გუნდი",
      title: "ჩვენი მწვრთნელები",
      desc: "პროფესიონალი მენტორები, რომლებიც დაგეხმარებიან მიზნის მიღწევაში.",
      bookTrainer: "მწვრთნელთან ჩაწერა",
      list: [
        {
          name: "გიორგი ბერიძე",
          role: "უფროსი მწვრთნელი / ბოდიბილდინგი",
          exp: "გამოცდილება: 9 წელი",
          desc: "სპორტის ოსტატი. კუნთოვანი მასის მომატება, ძალის განვითარება და პოზის კორექცია.",
          image: "/images/trainer-1.jpg"
        },
        {
          name: "ელენე ვაჩნაძე",
          role: "ფუნქციური ვარჯიშები და გაწელვა",
          exp: "გამოცდილება: 7 წელი",
          desc: "წონის უსაფრთხო კლება, მოქნილობა, ქალთა ფიტნესი და რეაბილიტაცია.",
          image: "/images/trainer-2.jpg"
        }
      ]
    },
    reviews: {
      badge: "შეფასებები",
      title: "რას ამბობენ TROY FITNESS-ზე",
      desc: "გვენდობა ასობით ბათუმელი და ქალაქის სტუმარი. რეიტინგი 4.9 / 5.",
      list: [
        {
          name: "დავით მახარაძე",
          city: "ბათუმი",
          text: "შესანიშნავი დარბაზია! არის ყველა საჭირო რკინა და მძიმე ჰანტელები. კონდიცირება მუშაობს იდეალურად.",
          rating: 5
        },
        {
          name: "ალექსანდრე სოკოლოვი",
          city: "ბათუმი",
          text: "უკვე 6 თვეა აქ ვვარჯიშობ. მეგობრული გარემოა, სისუფთავე და ბარი შესასვლელში ძალიან მოსახერხებელია.",
          rating: 5
        },
        {
          name: "ნინო ჭავჭავაძე",
          city: "ბათუმი",
          text: "პერსონალური ვარჯიშები ავიღე და 3 თვეში 8 კგ დავიკელი. მწვრთნელები ყურადღებიანები არიან.",
          rating: 5
        }
      ]
    },
    faq: {
      badge: "კითხვა - პასუხი",
      title: "ხშირად დასმული კითხვები",
      items: [
        {
          q: "რა მჭირდება პირველი ვარჯიშისთვის?",
          a: "სპორტული ტანსაცმელი, სუფთა გამოსაცვლელი ფეხსაცმელი (ბოტასები) და პირადი პირსახოცი."
        },
        {
          q: "გადახდის რა მეთოდები გაქვთ?",
          a: "ვიღებთ ნაღდ ფულს (ლარი), ასევე Visa, Mastercard, Apple Pay და Google Pay."
        },
        {
          q: "შემიძლია აბონემენტის გაყინვა?",
          a: "დიახ, 3-თვიან და ზემოთ აბონემენტებზე მოქმედებს უფასო გაყინვა (14-დან 45 დღემდე)."
        },
        {
          q: "არის თუ არა დარბაზი დამწყებთათვის შესაფერისი?",
          a: "რა თქმა უნდა! ჩვენი მორიგე მწვრთნელი გაგაცნობთ ტრენაჟორებს და გასწავლით უსაფრთხო ვარჯიშს."
        },
        {
          q: "საჭიროა წინასწარი ჩაწერა?",
          a: "არა, შეგიძლიათ მობრძანდეთ ნებისმიერ დროს 08:00-დან 23:45-მდე."
        }
      ]
    },
    contact: {
      badge: "მისამართი",
      title: "გელით სავარჯიშოდ",
      addressTitle: "მისამართი:",
      addressValue: "ბათუმი, დავით აღმაშენებლის ქ. 2გ",
      addressNote: "მოსახერხებელი პარკინგი და ლოკაცია",
      phoneTitle: "ტელეფონი / WhatsApp:",
      phoneValue: "+995 514 03 07 09",
      hoursTitle: "სამუშაო საათები:",
      hoursValue: "ორშაბათი – კვირა: 08:00 – 23:45",
      socialTitle: "სოციალური ქსელები:",
      routeBtn: "რუკაზე ნახვა",
      writeWa: "WhatsApp-ში მოწერა",
    },
    modal: {
      title: "TROY FITNESS-ში ჩაწერა",
      subtitle: "შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით 10 წუთში",
      name: "თქვენი სახელი",
      phone: "ტელეფონი / WhatsApp",
      service: "მომსახურება",
      serviceTrial: "უფასო საცდელი ვარჯიში",
      serviceSub: "აბონემენტის შეძენა",
      serviceCoach: "პერსონალური მწვრთნელი",
      time: "მოსვლის სასურველი დრო",
      submit: "განაცხადის გაგზავნა",
      submitting: "იგზავნება...",
      successTitle: "განაცხადი მიღებულია!",
      successDesc: "ჩვენი ადმინისტრატორი მალე დაგიკავშირდებათ.",
      orDirectWa: "ან მოგვწერეთ პირდაპირ WhatsApp-ში:",
      close: "დახურვა"
    }
  }
};
