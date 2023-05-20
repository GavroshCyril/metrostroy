import { createSlice } from '@reduxjs/toolkit'

export const localizationSlice = createSlice({
  name: 'localization',
  initialState: {
    en: {
      nav_home: "Home",
      home_title: "Virtual Museum of the",
      home_subtitle: "Minsk Metro",
      home_moscowTitle: "Moskovskaya (1st metro line)",
      home_moscowSubtitle:
            "Moskovskaya line (line 1) - the first line of the Minsk metro, opened on June 30, 1984. The 19.2 km long line includes fifteen stations. The Moscow line passes almost entirely under the main thoroughfare of the city",
      home_avtozavodskayaTitle: "Avtozavodskaya (2nd metro line)",
      home_avtozavodskayaSubTitle:
            "Avtozavodskaya line (2nd line) - the second line of the Minsk Metro, opened on December 31, 1990. Now the 18.1 km long line includes fourteen stations and crosses Minsk from the southeast to the west",
      home_zelenoluzskayaTitle: "Zelenoluzhskaya (3rd metro line)",
      home_zelenoluzskayaSubTitle:
            "Zelenoluzhskaya line (3rd line) - the third line of the Minsk Metro, opened on November 6, 2020. Now the 3.53 km long line includes four stations and will cross Minsk from south to north",

      
    },
    ru: {
      home_title: "Виртуальный музей",
      home_subtitle: "Минского метрополитена",
      home_moscowTitle: "Московская (1-ая линия метро)",
      home_moscowSubtitle:
        "Московская линия (1-я линия) - первая линия Минского метрополитена, открыта 30 июня 1984г. Линия длиной 19,2 км включает 15 станций. Московская линия почти целиком проходит под главной магистралью города",
      home_avtozavodskayaTitle: "Автозаводская (2-ая линия метро)",
      home_avtozavodskayaSubTitle:
        "Автозаводская линия (2-я линия) - вторая линия Минского  метрополитена, открыта 31 декабря 1990 года. Сейчас линия длиной 18,1 км включает четырнадцать станций и пересекает Минск с юго-востока на запад",
      home_zelenoluzskayaTitle: "Зеленолужская (3-ая линия метро)",
      home_zelenoluzskayaSubTitle:
        "Зеленолужская линия (3-я линия) - третья линия Минского метрополитена, открыта 6 ноября 2020 года. Сейчас линия длиной 3,53 км включает четыре станции и будет пересекать Минск с юга на север",
    },
    bel: {
          home_title: "Віртуальны музей",
          home_subtitle: "Мінскага метрапалітэна",
          home_moscowTitle: "Маскоўская (1-ая лінія метро)",
          home_moscowSubtitle:
            "Маскоўская лінія (1-я лінія) - першая лінія Мінскага метрапалітэна, адкрыта 30 чэрвеня 1984г. Лінія даўжынёй 19,2 км уключае пятнаццаць станцый. Маскоўская лінія праходзіць пад галоўнай магістраллю горада",
            home_avtozavodskayaTitle: "Аўтазаводская (2-ая лінія метро)",
            home_avtozavodskayaSubTitle:
            "Аўтазаводская лінія (2-я лінія) - другая лінія Мінскага метрапалітэна, адкрыта 31 снежня 1990 года. Цяпер лінія даўжынёй 18,1 км уключае чатырнаццаць станцый і перасякае Мінск з паўднёвага ўсходу на захад.",
            home_zelenoluzskayaTitle: "Зеленалужская (3-я лінія метро)",
            home_zelenoluzskayaSubTitle:
            "Зеленалужская лінія (3-я лінія) - трэцяя лінія Мінскага метрапалітэна, адкрыта 6 лістапада 2020 года. Цяпер лінія даўжынёй 3,53 км уключае чатыры станцыі і будзе перасякаць Мінск з поўдня на поўнач.",

    },
    currentLocale: "en"
  },
  reducers: {
    update: (state, action) => {
      state.currentLocale = action.payload
    },
    updateLocalisationResouces: (state, action) => {
      state.en = action.payload.en
      state.ru = action.payload.ru
      state.bel = action.payload.bel
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