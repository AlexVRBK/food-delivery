<template>
    <div class="footer">
        <app-container>
            <div class="footer__wrapper">
                <div class="footer__left">
                    <div class="footer__logo"></div>
                    <div class="footer__text">
                        <span>© 2022 <br> All rights reserved. </span>
                    </div>
                    <div class="footer-bank">
                <img
                            src="@/assets/images/visa.svg"
                            alt="Description of the image"
                            class="footer-images"
                            />
                            <img
                            src="@/assets/images/privat.svg"
                            alt="Description of the image"
                            class="footer-images"
                        />
                        <img
                            src="@/assets/images/mc.svg"
                            alt="Description of the image"
                            class="footer-images"
                        />
            </div>
                </div>
                <div class="footer__right">
                    <div
                        v-for="item in category"
                        :key="item.name"
                        class="category"
                    >
                        <div class="category__title">{{ item.name }}</div>
                        <div v-for="link in item.links" 
                            :key="link.name" 
                            class="category__link">
                            <a @click="redirectToPage(link.url)">{{ link.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__separator"></div>
            
            <div class="footer__legal">
                <div class="footer__copyright">
                    Built by <a href="https://github.com/AlexVRBK">AlexVRBK</a>
                </div>
                <div class="footer__socials">
                    <div class="footer__social _instagram"></div>
                    <div class="footer__social _twitter"></div>
                    <div class="footer__social _youtube"></div>
                </div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from './components/AppContainer.vue';

export default {
    name: 'TheFooter',

    components: {
        AppContainer
    },

    data() {
        return {
            category: [
                {
                    name: 'Навігація:',
                    links: [
                        {
                            name: 'Головна',
                            url: '/'
                        },
                         {
                            name: 'Меню',
                            url: '/menu'
                        },
                        {
                            name: 'Про нас',
                            url: '/about'
                        },
                        {
                            name: 'Доставка',
                            url: '/delivery'
                        }
                    ]
                },
                {
                    name: 'Оформити замовлення:',
                    links: [
                        {
                            name: '+38 (050) 030-20-33',
                            url: ''
                        },
                        {
                            name: '+38 (095) 030-20-33',
                            url: ''
                        },
                        {
                            name: '+38 (066) 031 76 30',
                            url: ''
                        },
                        {
                            name: '+38 (093) 924 98 28',
                            url: ''
                        }
                    ]
                },
                {
                    name: 'Графік роботи:',
                    links: [
                        {
                            name: 'з 11:00 до 22:30',
                            url: ''
                        },
                        {
                            name: 'вул.Грушевського 45',
                            url: ''
                        },
                    ]
                }
            ]
        }
    },
    methods: {
  redirectToPage(url) {
    this.$router.push(url);
  }
}

}
</script>

<style lang="scss">
    .footer {
        // background: url("./../assets/images/bg-footer.png");
        // background-repeat: no-repeat;
        // background-size: cover;
        background: black;
        padding-top: 100px;

        @media screen and (max-width: 576px) {
           padding-top: 60px;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 118px;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                gap: 20px 0;
                margin-bottom: 80px;
            }

            @media screen and (max-width: 576px) {
                margin-bottom: 50px;   
            }
        }

        &__left {
            display: flex;
            flex-direction: column;
            width: 17%;

            @media screen and (max-width: 992px) {
                width: 30%; 
            }

            @media screen and (max-width: 576px) {
                width: 60%;
            }
        }

        &__logo {
            width: 180px;
            height: 50px;
            background: url("./../assets/images/logoo.png");
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 28px;
            cursor: pointer;
        }

        &__text {
            font-size: 15px;
            line-height: 27px;
            letter-spacing: 0.36px;
            color: #0093d7;
        }

        &__right {
            display: flex;
            justify-content: space-between;
            width: 620px;

            @media screen and (max-width: 992px) {
                width: 60%; 
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }

            @media screen and (max-width: 576px) {
                flex-wrap: wrap;
            }
        }

        &__separator {
            width: 100%;
            height: 1px;
            background: #0093d7;
        }

        &__legal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 60px;
            padding-bottom: 70px;
        }

        &__copyright {
            font-size: 15px;
            line-height: 20px;
            color: #0093d7;

            & a {
                color: #e0e0e0;
                text-decoration: none;
            }
        }

        &__socials {
            display: flex;
        }
            .footer__social._instagram {
                background-color: white;
                }

                .footer__social._instagram:hover {
                background-color: #0093d7
                }

                .footer__social._twitter {
                background-color: white;
                }

                .footer__social._twitter:hover {
                background-color: #0093d7
                }

                .footer__social._youtube {
                background-color: white;
                }

                .footer__social._youtube:hover {
                background-color: #0093d7
                }

        &__social {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid #0093d7;
            border-radius: 100px;
            cursor: pointer;


            &._instagram::before {
                content: '';
                position: absolute;
                top: 26%;
                left: 28%;
                width: 18px;
                height: 18px;
                background: url("./../assets/images/instagram.svg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            &._twitter::before {
                content: '';
                position: absolute;
                top: 26%;
                left: 28%;
                width: 18px;
                height: 15px;
                background: url("./../assets/images/twitter.svg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            &._youtube::before {
                content: '';
                position: absolute;
                top: 30%;
                left: 28%;
                width: 18px;
                height: 13px;
                background: url("./../assets/images/youtube.svg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            &._instagram::before:hover,
            &._twitter::before:hover,
            &._youtube::before:hover {
                transform: scale(1.4);
            }
        }

        &__social:not(:last-child) {
            margin-right: 24px;
        }


    }

    .footer-images{
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }

    .footer-bank{
        margin-top: 50px;
    }

    .category {
        display: flex;
        flex-direction: column;

        &__title {
            font-weight: 600;
            font-size: 13px;
            line-height: 20px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #0093d7;
            margin-bottom: 28px;
        }

        &__link {
            margin-bottom: 28px;
            
            & a {
                font-size: 16px;
                line-height: 20px;
                text-decoration: none;
                color: white;

                & a:hover {
                    color: #0093d7;
                }
            }
             &:hover {
             color: #0093d7;
             cursor: pointer;
            }

            
        }
        
    }
</style>