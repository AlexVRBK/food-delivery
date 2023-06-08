<template>
  <div class="menu">
    <app-container>
      <div class="menu__title">
        <AppTitle>
          Перегляньте наше меню
        </AppTitle>
      </div>
      <div class="menu__sub-title">
        <p>Улюблені страви в <router-link to="/menu">один</router-link>  клік!</p>
      </div>
      <div class="menu__tab">
        <MenuTab @click="SelectedTab" />
      </div>
      <div class="menu__cards">
        <div v-for="(card, index) in cards" 
        :key="card.id">
          <MenuCard
            v-if="index < 6"
            :card="card"
            class="menu__card"
            @click="AddProducts"
          />
        </div>
      </div>
      <div class="menu__button">
        <router-link to="/menu">
          <AppButton
            text="МЕНЮ"
            color="coral"
            size="medium"
          />
        </router-link>
      </div>
    </app-container>
  </div>
</template>


<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import AppTitle from "@/components/components/AppTitle.vue";
import MenuTab from './MenuTab.vue';
import MenuCard from './MenuCard.vue';

export default {
    name: 'MenuBlock',

    components: {
        AppContainer,
        AppTitle,
        AppButton,
        MenuTab,
        MenuCard
    },

    data() {
        return {
            cards: [],
        };
    },

    computed: {
        burgers() {
            return this.$store.state.burgers;
        },
        wok() {
            return this.$store.state.wok;
        },
        sushi() {
            return this.$store.state.sushi;
        }
    },

    methods: {
       AddProducts(product) {
            const existingProduct = this.$store.state.basket.find(item => item.id === product.id);
            if (existingProduct) {
                // Якщо товар вже є в кошику, збільшуємо його кількість
                const newCount = existingProduct.count + 1;
                this.$store.dispatch('ChangeAmountProduct', { id: product.id, count: newCount });
            } else {
                // Якщо товару немає в кошику, додаємо його
                this.$store.dispatch('AddItemToCart', { ...product, count: 1 });
            }
       },

        SelectedTab(name) {
            switch(name) {
                case 'Burgers': {
                    this.cards = [...this.burgers];
                    break;
                }
                case 'Wok': {
                    this.cards = [...this.wok];
                    break;
                }
                case 'Sushi': {
                    this.cards = [...this.sushi];
                    break;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        background: url("./../../../assets/images/bg-shape-menu.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 154px;
        padding-bottom: 140px;

        @media screen and (max-width: 768px) {
            padding: 80px 0;
        }

        &__title {
            display: flex;
            justify-content: center;

            @media screen and (max-width: 576px) {
                text-align: center; 
            }
        }

        &__sub-title {
            display: flex;
            justify-content: center;

            & p {
                font-size: 16px;
                line-height: 27px;
                text-align: center;
                letter-spacing: 0.36px;
                color: #546285;
                width: 466px;
            }

            & a {
                text-decoration: none;
                color: #0093d7;
            }
        }

        &__tab {
            display: flex;
            justify-content: center;
        }

        &__cards {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px 0;
            margin-top: 40px;

            @media screen and (max-width: 768px) {
                justify-content: center;
            }
        }

        &__button {
            display: flex;
            justify-content: center;
            margin-top: 65px;
        }
    }

</style>