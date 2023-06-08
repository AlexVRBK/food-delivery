<template>
  <div class="order">
    <BannerPage title="Ваше замовлення" />
    <div class="cart-page">
      <div class="about_container-images">
          <img
                src="@/assets/images/cart-two.png"
                alt="Description of the image"
                class="container-images"
              />
        </div>
      <div class="cart-page_order" 
      v-if="cartProducts.length > 0">
        <div v-for="product in cartProducts" 
        class="cart-page_wrapper"
         :key="product.id">
          <div class="cart-page_container">
            <div class="cart-page_name">{{ product.name }}</div>
            <div class="cart-page_count">Кількість: {{ product.count }}</div>
            <div class="cart-page_total">{{ product.total }} грн</div>
          </div>
          <div>
            <div class="cart-page_delete">
              <div class="basket__item-delete" 
              @click="removeProduct(product.id)">
                <span></span>
              </div>
            </div>
            <img class="cart-page_img" 
            :src="require(`@/assets/images/${product.image}`)" 
            alt="" />
          </div>
        </div>
        <div class="order-form">
          <h2>Деталі замовленння:</h2>
          <form @submit="submitForm">
            <div class="form-group">
              <input id="name" 
              placeholder="Ім'я"
              type="text" 
              v-model="name" 
              required />
            </div>
            <div class="form-group">
              <input id="phone" 
              placeholder="Телефон"
              type="tel" 
              v-model="phone" 
              required />
            </div>
            <div class="form-group">
              <textarea id="notes"
              placeholder="Побажання до замовлення"
               v-model="notes"
               required></textarea>
            </div>
            <div class="form-group">
              <div class="radio-group">
                <label>
                  <input type="radio" 
                  value="pickup" 
                  v-model="deliveryType" />
                  Самовивіз
                </label>
                <label>
                  <input type="radio" 
                  value="delivery" 
                  v-model="deliveryType" />
                  Доставка кур'єром:
                </label>
              </div>
              <div v-if="deliveryType === 'pickup'" 
              class="pickup-location">
                Точка видачі: вул. Михайла Грушевського 45
              </div>
              <div v-else-if="deliveryType === 'delivery'" 
              class="form-group">
                <label for="address">Адреса доставки</label>
                <input id="address" 
                type="text" 
                v-model="address" 
                required />
              </div>
            </div>
           
            <button type="submit">Оформити замовлення</button>
          </form>
          <div class="total" 
      v-if="cartProducts.length > 0">
        Разом: {{ totalAmount }} грн
      </div>
      <div v-if="orderPlaced">
  <h2>Успішне оформлення замовлення!</h2>
  <p>Дякуємо за ваше замовлення. Наші менеджери зв'яжуться з вами найближчим часом.</p>
  <div class="about_container-images">
          <img
                src="@/assets/images/cart-fourl.png"
                alt="Description of the image"
                class="container-images"
              />
        </div>
</div>
        </div>
      </div>
       <div v-else>
        <h1>Кошик порожній!</h1>
        <p>Виберіть позиції з меню на сайті і натисніть "Купити", щоб оформити замовлення</p>
      </div>
    </div>
  </div>
</template>


<script>
import BannerPage from '@/components/blocks/BannerPage.vue';

export default {
  name: 'OrderPage',
  data() {
    return {
      name: '',
      phone: '',
      notes: '',
      deliveryType: 'pickup',
      address: '',
      orderPlaced: false,
    };
  },
  components: {
    BannerPage
  },
  computed: {
    cartProducts() {
      return this.$store.state.basket;
    },
    totalAmount() {
      return this.cartProducts.reduce((total, product) => total + product.total, 0);
    }
  },
  methods: {
   submitForm() {
  // Виконується дія при відправці форми
  console.log('Замовлення надіслано!');
  console.log('Ім\'я:', this.name);
  console.log('Телефон:', this.phone);
  console.log('Побажання до замовлення:', this.notes);
  console.log('Тип доставки:', this.deliveryType);
  if (this.deliveryType === 'delivery') {
    console.log('Адреса доставки:', this.address);
  }
  console.log('Товари:');
  this.cartProducts.forEach((product) => {
    console.log('- Назва:', product.name);
    console.log('- Кількість:', product.count);
    console.log('- Вартість:', product.total);
  });

  setTimeout(() => {
    this.placeOrder(); // Викликаємо метод для оформлення замовлення

    // Після успішного оформлення замовлення
    this.orderPlaced = true; // Встановлюємо прапор оформлення замовлення

    setTimeout(() => {
      // Очищаємо корзину через 5 секунд
      this.$store.dispatch('ClearBasket');
    }, 5000);
  }, 2000);
},

    placeOrder() {
      // Добавьте код для оформлення замовлення
      console.log('Замовлення оформлено!');
      console.log('Ім\'я:', this.name);
      console.log('Телефон:', this.phone);
      console.log('Побажання до замовлення:', this.notes);
      console.log('Тип доставки:', this.deliveryType);
      if (this.deliveryType === 'delivery') {
        console.log('Адреса доставки:', this.address);
      }
      console.log('Товари:');
      this.cartProducts.forEach((product) => {
        console.log('- Назва:', product.name);
        console.log('- Кількість:', product.count);
        console.log('- Вартість:', product.total);
      });
    },
     ClearBasket() {
    this.$store.dispatch('ClearBasket');
  },
    removeProduct(id) {
      this.$store.dispatch('RemoveProductToCard', id);
    },
  }
};
</script>



<style lang="scss">

.order {
  width: 100%;
  margin-top: 50px;
}

.cart-page {
   max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 100px;
    margin-top: 20px;
    text-align: center;

    &_delete{
      margin-left: 120px;
      margin-bottom: 10px;
    }
    
    &_name{
      flex: 1;
      font-size: 25px;
      
    }
    &_img{
      width: 150px;
      height: 170px;
      object-fit: cover;
      margin-left: auto;
      border-radius: 5%;
    }
    &_count{
      text-align: left;
      font-size: 18px;
      margin-top: 30px;
    }
    &_total{
      text-align: left;
      font-size: 18px;
      margin-top: 10px;
    }
    &_order{
      display: flex;
      flex-direction: column; /* Задаємо напрямок у колонку */
      align-items: flex-start; 
      padding: 50px;
      border-radius: 3%;
      background: url("@/assets/images/bg-blue.png");
    }
    &_container{
      color: #ffffff;
      margin-right: 50px;
    }
    
}

.cart-page_wrapper{
  background: rgba(0, 147, 215, 0.4);
  width: 600px;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 20px;
  &:hover{
      box-shadow: 0 0 5px #00ffff;
    }
}

h2 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.total {
  margin-top: 20px;
  font-weight: bold;
  color: #0c0c0c;
  text-align: left;
}

.order-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0093d7;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
            background: #013f5c;
          }
}

.order-form {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(0, 147, 215, 0.4);
  border: 1px solid transparent;
  color: #FFFFFF;
  border-radius: 2%;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #020c11;
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='tel'],
  textarea {
    width: 400px;
    padding: 10px;
    border: none;
    border-radius: 7px;
    font-size: 14px;
    &:hover{
      box-shadow: 0 0 5px #00ffff;
    }
  }

  .radio-group {
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: left;
    label {
      margin-right: 15px;
    }
  }

  .pickup-location {
    color: #050505;
    margin-top: 30px;
  }
}

button[type='submit'] {
  background-color: #0093d7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.success-message {
  margin-top: 10px;
  color: #0093d7;
  font-weight: bold;
}


</style>
