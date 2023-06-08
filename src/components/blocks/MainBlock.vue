<template>
    <div class="main-block">
        <app-container>
            <div class="main-block__wrapper">
                <div class="main-block__info">
                    <h1
                        ref="title"
                        class="main-block__title"
                    >
                        Смачна їжа на виніс з<span> доставкою</span> до дверей.
                    </h1>
                    <div
                        ref="description"
                        class="main-block__description"
                    >
                        Смачна, вишукана їжа завжди покращить настрій і перетворить звичайний чи навіть невдалий день у позитивний.
                    </div>
                    <div
                        ref="button"
                        class="main-block__btn"
                    >
                    <a href="tel:+380500302033">
                        <AppButton
                            ref="button"
                            text="Замовити"
                            color="coral"
                            size="medium"
                            class="main-block__button"
                        />
                        </a>
                    </div>
                    <div
                        ref="trustpilot"
                        class="main-block__trustpilot"
                    >
                        <p class="main-block__trustpilot-title">Tripadvizor</p>
                        <p class="main-block__trustpilot-txt"><span>4.8 out of 5</span> більше ніж 2000+ відгуків</p>
                    </div>
                </div>
                <div
                    ref="image"
                    class="main-block__image"
                ></div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import { gsap } from 'gsap';

export default {
    name: 'MainBlock',

    components: {
        AppContainer,
        AppButton
    },

    mounted() {
        this.AnimationMainBlock();
    },

    methods: {
        AnimationMainBlock() {
            const title = this.$refs.title;
            const description = this.$refs.description;
            const button = this.$refs.button;
            const trustpilot = this.$refs.trustpilot;
            const image = this.$refs.image;

            gsap.to(title, {
                opacity: '1',
                x: 0,
                duration: 0.1,
            });
            gsap.to(description, {
                opacity: '1',
                x: 0,
                duration: 0.2,
            });
            gsap.to(button, {
                opacity: '1',
                x: 0,
                duration: 0.3,
            });
            gsap.to(trustpilot, {
                opacity: '1',
                x: 0,
                duration: 0.4,
            });
            gsap.to(image, {
                opacity: '1',
                duration: 0.6,
                delay: 0.6
            });
        }
    }

}
</script>

<style lang="scss">
    .main-block {
        background: url("./../../assets/images/bg-shape-left.png");
        background-repeat: no-repeat;
        background-size: cover;

        &__wrapper {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        &__info {
            width: 594px;
            margin-top: 158px;

            @media screen and (max-width: 1200px) {
                  width: 400px;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
                margin-top: 10px;
            }
        }

        &__title {
            font-style: normal;
            font-weight: 400;
            font-size: 60px;
            line-height: 60px;
            letter-spacing: 1.8px;
            color: #08090A;
            margin-bottom: 27px;
            opacity: 0;
            transform: translateX(-100px);
            transition: all .5s linear;

            & span {
                color: #0093d7;
            }

            @media screen and (max-width: 768px) {
                font-size: 48px;
            }

            @media screen and (max-width: 576px) {
                font-size: 38px;
                text-align: center;
            }
        }

        &__description {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.36px;
            color: #546285;
            width: 500px;
            opacity: 0;
            transform: translateX(-100px);
            transition: all .5s linear;

            @media screen and (max-width: 1200px) {
                  width: 400px;
            }

            @media screen and (max-width: 768px) {
                font-size: 16px;
            }

            @media screen and (max-width: 576px) {
                width: 100%;
                font-size: 14px;
                text-align: center;
            }
        }

        &__btn {
            opacity: 0;
            transform: translateX(-100px);
            transition: all .5s linear;
        }

        &__button {
            margin-top: 53px;
            margin-bottom: 40px;

            @media screen and (max-width: 768px) {
                width: 86%;
            }

            @media screen and (max-width: 576px) {
                width: 80%;
                margin: 20px 0;
            }
        }

        &__trustpilot {
            position: relative;
            display: flex;
            flex-direction: column;
            opacity: 0;
            transform: translateX(-100px);
            transition: all .5s linear;

            &-title {
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 20px;
                color: #000;
                margin: 0 0 10px 30px;

                &::before {
                    content: '';
                    position: absolute;
                    top: -6px;
                    left: 0;
                    width: 25px;
                    height: 26px;
                    background: url("./../../assets/images/icon-star.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            }

            &-txt {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #08090A;
                margin: 0;

                & span {
                    color: #0093d7;
                }
            }
        }

        &__image {
            width: 600px;
            height: 580px;
            background: url("./../../assets/images/mobile-app.png");
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 100px;
            margin-bottom: 140px;
            opacity: 0;
            transition: all .5s linear;
            border-radius: 45% 0 0 45%;

            @media screen and (max-width: 1200px) {
                  width: 500px;
                  height: 544px;
            }

            @media screen and (max-width: 576px) {
                width: 100%;
                background-position-x: center;
                border-radius: 10px;
                margin: 50px 0;
            }
        }
    }
</style>