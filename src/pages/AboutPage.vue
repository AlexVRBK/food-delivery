<template>
  <div class="about">
    <BannerPage
      title="Про нас"
    />
      <div class="about_container">
        <div class="about_container-images">
          <img
                src="@/assets/images/cart-one.png"
                alt="Description of the image"
                class="container-images"
              />
        </div>
          <div class="about_container-descr">
             <p><span>Магазин японської кухні «Космос»</span> — сімейне підприємство, мета якого донести витонченість японської кухні, ознайомити з гастрономічними цінностями країни квітучою сакури. Ми молода, зростаюча компанія, любимо і знаємо свою справу і прагнемо завоювати ваше кохання.</p>
          </div>
          <div>
              <img
                src="@/assets/images/about.jpg"
                alt="Description of the image"
                class="about-images"
              />
          </div>
          <div class="about_container-descr">
            <p>
            Ми сміливо стверджуємо, що готуємо не лише смачні, а й корисні суші, тому що не використовуємо харчові добавки або підсилювачі смаку. Ми з перших днів свого відкриття і до сьогодні використовуємо лише якісні, дорогі продукти. З такими продуктами працювати приємно, а від гарного настрою та роли виходять смачніше. Напевно, в цьому є секрет нашого успіху та активного розвитку.
            <br><br>
            Ми раді, що у наших клієнтів тепер є вибір не тільки замовити доставку, але й забрати самовивіз. Ми дбаємо, що б наша продукція була по кишені кожному і в той же час була виключно високою якості.
<br><br>
            Кожен день ми щиро прагнемо задовольнити Ваші смакові уподобання, повністю віддаючись мистецтву суші. Спробуйте самі та переконайтеся, що у нас є чим Вас здивувати!
          </p>
          </div>
     </div>
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'AboutPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .about {
    margin-top: 50px;
  }

  .about_container{
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    &-descr{
      text-align: left;
      margin: 50px;
    }
    span{
      color: #0093d7;;
    }
     p{
      font-size: 18px;;
     }
  }

  .about-images{
    width: 700px;
     border-radius: 10%;
  }
</style>