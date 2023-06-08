import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const CART_KEY = 'cart';

export default new Vuex.Store({
  state: {
      burgers: [
        {
          id: 0,
          name: 'CHIKEN BURGER',
          price: 159,
          description: 'Котлета куряча, ніжна булочка, сир чеддер, салат, маринована цибуля, томати, мариновані огірки',
          image: 'burgers/chiken-burger.png',
        },
        {
          id: 1,
          name: 'DOUBLE CHIKEN BURGER',
          price: 229,
          description: 'Подвійна куряча котлета, ніжна булочка, подвійний сир чеддер, салат, маринована цибуля, томати',
          image: 'burgers/double-chiken-burger.png',
        },
        {
          id: 2,
          name: 'KOCWOC CHICKEN BURGER',
          price: 149,
          description: 'Курячі стріпси, ніжна булочка, салат, маринована цибуля, огірок , соус тар-тар, фірмовий соус',
          image: 'burgers/kocwoc-chicken-burger.png',
        },
        {
          id: 3,
          name: 'BBQ BURGER',
          price: 199,
          description: 'Котлета з яловичини, хрусткий бекон, ніжна булочка, сир Чеддер, маринована цибуля, соус BBQ',
          image: 'burgers/bbq-burger.png',
        },
        {
          id: 4,
          name: 'DOUBLE CLASSIC BURGER',
          price: 279,
          description: 'Подвійна котлета з яловичини, ніжна булочка, подвійний сир чеддер, салат, фірмовий соус burger.',
          image: 'burgers/double-classic-burger.png',
        },
        {
          id: 5,
          name: 'CLASSIC BURGER',
          price: 169,
          description: 'Котлета з яловичини, ніжна булочка, сир чедер, салат, маринована цибуля, томати, фірмовий соус burger.',
          image: 'burgers/classic-burger.png',
        },
        {
          id: 6,
          name: 'CLASSIC BURGER',
          price: 180,
          description: 'Котлета з яловичини, ніжна булочка, сир чедер, салат, маринована цибуля, томати, фірмовий соус burger.',
          image: 'burgers/classic-burger.png',
        },
        {
          id: 7,
          name: 'CLASSIC BURGER',
          price: 119,
          description: 'Котлета з яловичини, ніжна булочка, сир чедер, салат, маринована цибуля, томати, фірмовий соус burger.',
          image: 'burgers/classic-burger.png',
        },
        {
          id: 8,
          name: 'CLASSIC BURGER',
          price: 220,
          description: 'Котлета з яловичини, ніжна булочка, сир чедер, салат, маринована цибуля, томати, фірмовий соус burger.',
          image: 'burgers/classic-burger.png',
        },
        {
          id: 9,
          name: 'CLASSIC BURGER',
          price: 210,
          description: 'Котлета з яловичини, ніжна булочка, сир чедер, салат, маринована цибуля, томати, фірмовий соус burger.',
          image: 'burgers/classic-burger.png',
        }
      ],
      wok: [
        {
          id: 10,
          name: 'ЛОКШИНА УДОН З КУРКОЮ',
          price: 247,
          description: 'Курка смажена в соусі теріякі, пшенична локшина, цукіні, болг. перець, фірмовий соус в тайському стилі',
          image: 'wok/udon-chiken.jpg',
        },
        {
          id: 11,
          name: 'ЛОКШИНА УДОН КОКТЕЙЛЬ',
          price: 289,
          description: 'Креветки тигрові, мідії чилійські, восьминіг бейбі, кальмар, червона цибуля, спаржа, фірмовий соус в тайському стилі',
          image: 'wok/udon-koktail.jpg',
        },
        {
          id: 12,
          name: 'ФРУНЧОЗА З КУРЧАМ ТЕРІЯКІ',
          price: 8.00,
          description: 'Курка смажена в соусі теріякі, локшина скляна, болг. перець, цукіні,  фірмовий соус в тайському стилі, зел. цибуля, кунжут.',
          image: 'wok/teriaki.jpg',
        },
        {
          id: 13,
          name: 'ФРУНЧОЗА З КРЕВЕТКОЮ',
          price: 339,
          description: 'Креветка тигрова, локшина скляна, болг. перець, цукіні, ананас, червона цибуля, спаржа, морква, зел. цибуля, кунжут.',
          image: 'wok/funchoza.jpg',
        },
        {
          id: 14,
          name: 'СОБА З ТЕЛЯТИНОЮ',
          price: 259,
          description: 'Ніжна телятина, локшина гречана, цукіні, болг.перець, морква, червона цибуля, вустрично-часничний соус',
          image: 'wok/soba.jpg',
        },
        {
          id: 15,
          name: 'ТЯ-ХАН З КУРКОЮ',
          price: 189,
          description: 'Курка смажена в соусі теріякі, морква, цукіні, перець болгарський, кукурудза, спаржа, соус соєвий, кокосове молоко',
          image: 'wok/tyxyn-chiken.jpg',
        },
        {
          id: 16,
          name: 'ТЯ-ХАН З КУРКОЮ',
          price: 210,
          description: 'Курка смажена в соусі теріякі, морква, цукіні, перець болгарський, кукурудза, спаржа, соус соєвий, кокосове молоко',
          image: 'wok/tyxyn-chiken.jpg',
        },
        {
          id: 17,
          name: 'ТЯ-ХАН З КУРКОЮ',
          price: 210,
          description: 'Курка смажена в соусі теріякі, морква, цукіні, перець болгарський, кукурудза, спаржа, соус соєвий, кокосове молоко',
          image: 'wok/tyxyn-chiken.jpg',
        },
        {
          id: 18,
          name: 'ТЯ-ХАН З КУРКОЮ',
          price: 210,
          description: 'Курка смажена в соусі теріякі, морква, цукіні, перець болгарський, кукурудза, спаржа, соус соєвий, кокосове молоко',
          image: 'wok/tyxyn-chiken.jpg',
        },
        {
          id: 19,
          name: 'ТЯ-ХАН З КУРКОЮ',
          price: 210,
          description: 'Курка смажена в соусі теріякі, морква, цукіні, перець болгарський, кукурудза, спаржа,кокосове молоко',
          image: 'wok/tyxyn-chiken.jpg',
        },
      ],
      sushi: [
        {
          id: 20,
          name: 'СЕТ ТРІО НОВИНКА',
          price: 569,
          description: 'Філе з лососем теріякі в оігрку.',
          image: 'sushi/trio-new.jpg',
        },
        {
          id: 21,
          name: 'БРОНЗОВИЙ ДРАКОН',
          price: 329,
          description: 'Рис, норі, сир Cremette, груша, авокадо, ікра тобіко, смажений вугор, соус унагі, кунжут.',
          image: 'sushi/drakon.jpg',
        },
        {
          id: 22,
          name: 'ЗАПЕЧЕНИЙ РОЛ З ВУГРЕМ',
          price: 269,
          description: 'Рис, вугор, окунь кабаякі, авокадо , сирна шапка з сиру гаудa.',
          image: 'sushi/rol-vugr.jpg',
        },
        {
          id: 23,
          name: 'ФІЛЕ ТРИ ЛОСОСЯ',
          price: 307,
          description: 'Рис, норі, сир Cremette, лосось обсмажений вогнем, свіжий лосось, копчений лосось, ікра масаго, фірмовий соус',
          image: 'sushi/three.jpg',
        },
        {
          id: 24,
          name: 'ТЕПЛИЙ РОЛЛ «ЗАРЯД»',
          price: 227,
          description: 'Рис, норі, сир Cremette, окунь унагі, креветка тигрова, лосось свіжий, темпура.',
          image: 'sushi/rol-energy.jpg',
        },
        {
          id: 25,
          name: 'СЕТ КОСМОС',
          price: 480,
          description: 'Філе вугор BBG, червоний дракон, два самураї, три лосося',
          image: 'sushi/set-kocmoc.jpg',
        },
        {
          id: 26,
          name: 'СЕТ КОСМОС',
          price: 480,
          description: 'Філе вугор BBG, червоний дракон, два самураї, три лосося',
          image: 'sushi/set-kocmoc.jpg',
        },
        {
          id: 27,
          name: 'СЕТ КОСМОС',
          price: 480,
          description: 'Філе вугор BBG, червоний дракон, два самураї, три лосося',
          image: 'sushi/set-kocmoc.jpg',
        },
        {
          id: 28,
          name: 'СЕТ КОСМОС',
          price: 480,
          description: 'Філе вугор BBG, червоний дракон, два самураї, три лосося',
          image: 'sushi/set-kocmoc.jpg',
        },
        {
          id: 29,
          name: 'СЕТ КОСМОС',
          price: 480,
          description: 'Філе вугор BBG, червоний дракон, два самураї, три лосося',
          image: 'sushi/set-kocmoc.jpg',
        },
        {
          id: 30,
          name: 'СЕТ КОСМОСS',
          price: 480,
          description: 'Філе вугор BBG, червоний дракон, два самураї, три лосося',
          image: 'sushi/set-kocmoc.jpg',
        },
      ],
      basket: [],
  },
  getters: {
    GetCountProducts(state) {
      return state.basket.length;
    }
  },
  mutations: {
    THE_ADD_PRODUCT(state, payload) {
      state.basket.push(payload);
      localStorage.setItem(CART_KEY, JSON.stringify(state.basket));
    },

    THE_CHANGE_BASKET(state, payload) {
      state.basket = payload;
      localStorage.setItem(CART_KEY, JSON.stringify(state.basket));
    },

    THE_CHANGE_AMOUNT_PRODUCT(state, payload) {
      state.basket.forEach(product => {
        if (product.id === payload.id) {
          product.count = payload.count;
          product.total = +(product.price * payload.count).toFixed(2);
        }
      });
      localStorage.setItem(CART_KEY, JSON.stringify(state.basket));
    },

    CLEAR_BASKET(state) {
      state.basket = [];
      localStorage.removeItem(CART_KEY);
    },
  },
  actions: {
    AddItemToCart({ commit }, payload) {
      commit('THE_ADD_PRODUCT', payload);
    },

    RemoveProductToCard({ state, commit }, payload) {
      let newBasket = state.basket.filter(item => item.id !== payload);
      commit('THE_CHANGE_BASKET', newBasket);
    },

    ChangeAmountProduct({ commit }, payload) {
      commit('THE_CHANGE_AMOUNT_PRODUCT', payload);
    },

    ClearBasket({ commit }) {
      commit('CLEAR_BASKET');
    },

    // Завантажує кошик з localStorage при запуску додатка
    LoadCartFromLocalStorage({ commit }) {
      const cart = localStorage.getItem(CART_KEY);
      if (cart) {
        commit('THE_CHANGE_BASKET', JSON.parse(cart));
      }
    },
  },
  modules: {
  }
})
