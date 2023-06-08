<template>
  <div class="del-page">
    <BannerPage
      title="Доставка"
    />
    <div class="del_container">
      <div class="about_container-images">
          <img
                src="@/assets/images/cart-three.png"
                alt="Description of the image"
                class="container-images"
              />
        </div>
           <p class="del_container-descr">Тепер суші преміум-класу можна замовити не тільки в ресторані  японської кухні,<br> але й додому та в офіс. <br><br> <span>Кур`єр доставить замовлення вчасно і не залишить вас голодним.</span></p>
          <div>
            <h1>Доставляємо швидко і без стресу для клієнта</h1>
              <img
                src="@/assets/images/del.png"
                alt="Description of the image"
                class="del-images"
              />
          </div>
          <div>
            <h1>1. Як зробити замовлення</h1>
            <img
                src="@/assets/images/del1.png"
                alt="Description of the image"
                class="del-img"
              />
          </div>
          <div>
            <h1>2. Оплата</h1>
            <img
                src="@/assets/images/del2.png"
                alt="Description of the image"
                class="del-img"
              />
          </div>
          <div>
            <h1>3. Як отримати замовлення</h1>
            <img
                src="@/assets/images/del3.png"
                alt="Description of the image"
                class="del-img"
              />
          </div>
          <div>
            <h1>Зона доставки</h1>
          <p>В даний час доставка здійснюється на території, яка виділена кольором, але ми готові піти назустріч при великих замовленнях.<br> <br>Уточнюйте деталі у менеджера.</p>
          <div>
            <img
                src="@/assets/images/map.jpg"
                alt="Description of the image"
                class="del-img"
              />
          </div>
          </div>
     </div>
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'DeliveryPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .del-page {
    margin-top: 50px;
    margin-bottom: 100px;
    background: #ffffff;
  }
   .del_container{
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    &-descr{
      font-size: 23px;
      margin: 50px;
      color: #020202;
      text-align: left;
      
    }
     p{
      font-size: 20px;
      text-align: left;
     }
  }

  .del-images{
    width: 300px;
    border-radius: 10%
  }
</style>