<template>
  <div class="menu">
    <div class="menu__wrapper">
      <img src="@/assets/images/menu.jpg" 
      alt="bg" 
      class="menu__image" />
      <div class="menu__tab">
        <MenuTab @click="SelectedTab" />
      </div>
      <div class="menu__cards">
        <MenuWrapper
          v-for="card in cards"
          :key="card.id"
          :card="card"
          class="menu__card"
          @click="AddProducts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MenuTab from '@/components/blocks/menuBlock/MenuTab.vue';
import MenuWrapper from '@/components/blocks/menuBlock/MenuWrapper.vue';

export default {
  name: 'MenuPage',
  components: {
    MenuTab,
    MenuWrapper
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
      switch (name) {
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
};
</script>

<style lang='scss' scoped>
.menu__wrapper {
  width: 1100px;
  padding: 50px;
  margin: 0 auto;
  background: url("@/assets/images/bg-blue.png");
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu__image {
  width: 900px;
  height: 600px;
  object-fit: contain;
}

.menu__tab {
  display: flex;
  justify-content: center;
}

.menu__cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.menu__card {
  margin-bottom: 20px; /* Доданий стиль */
}
</style>
