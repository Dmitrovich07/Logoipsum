<template>
  <main id="main-section">
    <div class="container">
        <div class="home">
            <div class="home-info">
                <b class="home-info__title">Grow your subscription business</b>
                <p class="home-info__text">Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                <div class="home-navigation">
                  <button class="home-navigation__btn">Get Started</button>
                  <img class="home-navigation__img" src="../assets/ArrowDown.svg" alt="Arrow-down">
                </div>
            </div>
            <div class="home-image">
              <img src="../assets/home.svg" alt="Home">
            </div>
        </div>
        <div class="partners">
            <ul class="partners-list">
                <li class="partners-list__item">
                  <img class="partners-list__img" src="../assets/partners-logo1.svg" alt="partner1">
                </li>
                <li class="partners-list__item">
                  <img class="partners-list__img" src="../assets/partners-logo2.svg" alt="partner2">
                </li>
                <li class="partners-list__item">
                  <img class="partners-list__img" src="../assets/partners-logo3.svg" alt="partner3">
                </li>
                <li class="partners-list__item">
                  <img class="partners-list__img" src="../assets/partners-logo4.svg" alt="partner4">
                </li>
                <li class="partners-list__item">
                  <img class="partners-list__img" src="../assets/partners-logo5.svg" alt="partner5">
                </li>
            </ul>
        </div>
        <div class="analytics-section">
            <div class="analytics">
                <div class="analytics-images">
                    <img class="" src="../assets/subscription_index.svg" alt="subscription_index">
                </div>
                <div class="analytics-info">
                    <b class="analytics-info__title">Subscription index</b>
                    <p class="analytics-info__text">A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                    <a class="analytics-info__link" href="#">Learn more</a>
                </div>
            </div>
            <div class="analytics">
                <div class="analytics-images">
                    <img class="" src="../assets/In-depth metrics.svg" alt="subscription_index">
                </div>
                <div class="analytics-info">
                    <b class="analytics-info__title">In-depth metrics</b>
                    <p class="analytics-info__text">Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
                    <a class="analytics-info__link" href="#">Learn more</a>
                </div>
            </div>
        </div>
        <div class="tools-section">
            <div class="tool">
                <div class="tool-card">
                    <img class="tool-card__image" src="../assets/Card.jpg" alt="Card">
                    <b class="tool-card__title">Benchmarks</b>
                    <p class="tool-card__text">See how you stack up against comparable companies in similar stages.</p>
                </div>
                <div class="tool-card">
                    <img class="tool-card__image" src="../assets/Calculator.jpg" alt="Calculator">
                    <b class="tool-card__title">Pricing Audit</b>
                    <p class="tool-card__text">Benchmark the health of your monetization and pricing strategy.</p>
                </div>
                <div class="tool-card">
                    <img class="tool-card__image" src="../assets/Camera.jpg" alt="Camera">
                    <b class="tool-card__title">Retention Audit</b>
                    <p class="tool-card__text">Audit where revenue leakage exists and where you can increase retention.</p>
                </div>
            </div>
        </div>
        <div class="subscription-section">
            <div class="plans">
                <b class="plans__title">Get the right plan for future product</b>
                <div class="plans-navigation">
                    <button class="plans-navigation__btn active">Yearly</button>
                    <button class="plans-navigation__btn">Monthly</button>
                </div>
            </div>
            <div class="subscription-card">
                <div class="card">
                    <span class="card__name">Starter</span>
                    <b class="card__price">Free<span class="card__price_month"></span></b>
                    <ul class="options-list">
                        <li class="options-list__item">1 Website</li>
                        <li class="options-list__item">5 GB Hosting</li>
                        <li class="options-list__item">Limited Support</li>
                    </ul>
                    <button class="card__btn">Get Started</button>
                </div>
                <div class="card card_active">
                    <span class="card__name">Premium</span>
                    <b class="card__price">$29<span class="card__price_month">/month</span></b>
                    <ul class="options-list">
                        <li class="options-list__item">10 Website</li>
                        <li class="options-list__item">15 GB Hosting</li>
                        <li class="options-list__item">Premium Support</li>
                    </ul>
                    <button class="card__btn">Get Started</button>
                </div>
                <div class="card">
                    <span class="card__name">Enterprise</span>
                    <b class="card__price">$49<span class="card__price_month">/month</span></b>
                    <ul class="options-list">
                        <li class="options-list__item">Unlimited Website</li>
                        <li class="options-list__item">50 GB Hosting</li>
                        <li class="options-list__item">Premium Support</li>
                    </ul>
                    <button class="card__btn">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  #main-section {
    padding-bottom: 50px;
    .container {
      .home {
        display: flex;
        justify-content: space-between;
        gap: 70px;
        @media(max-width: 1000px) {
          flex-direction: column;
        }
        .home-info {
          max-width: 462px;
          @media(max-width: 1000px) {
            max-width: 700px;
          }
          .home-info__title {
            color: #19191B;
            font-size: 80px;
            font-weight: 700;
            line-height: 77px;
            @media(max-width: 1000px) {
              font-size: 70px;
            }
            @media(max-width: 500px) {
              font-size: 50px;
              line-height: 50px;
            }
          }
          .home-info__text {
            margin: 30px 0 50px;
            color: #696871;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
          }
          .home-navigation {
            display: flex;
            align-items: center;
            gap: 40px;
            @media(max-width: 500px) {
              justify-content: center;
            }
            @media(max-width: 340px) {
              gap: 20px;
            }
            .home-navigation__btn {
              padding: 20px 0;
              width: 210px;
              background-color: #5454D4;
            }
            .home-navigation__img {
                width: 60px;
                height: 60px;
            }
          }
        }
        .home-image {
          max-width: 580px;
          @media(max-width: 1000px) {
            max-width: 100%;
            display: flex;
            justify-content: center;
          }
          @media(max-width: 800px) {
            & img {
              max-width: 400px;
            }
          }
        }
      }
      .partners {
        padding: 100px 0 150px;
        @media(max-width: 1000px) {
          padding: 50px 0 75px;
        }
        .partners-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 120px;
          @media(max-width: 1000px) {
            gap: 80px;
          }
          @media(max-width: 800px) {
            gap: 60px;
          }
          @media(max-width: 700px) {
            gap: 40px;
          }
          @media(max-width: 600px) {
            flex-direction: column;
          }
        }
      }
      .analytics-section {
        padding-bottom: 150px;
        @media(max-width: 600px) {
          padding-bottom: 50px;
        }
        .analytics {
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
          gap: 160px;
          @media(max-width: 730px) {
            gap: 50px;
          }
          @media(max-width: 600px) {
            flex-direction: column;
          }
          .analytics-images {
            max-width: 350px;
            @media(max-width: 600px) {
              display: flex;
              justify-content: center;
              max-width: 100%;
              & img {
                max-width: 350px;
              }
            }
          }
          .analytics-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 555px;
            .analytics-info__title {
              color: #19191B;
              font-size: 50px;
              font-weight: 700;
              line-height: 57px;
            }
            .analytics-info__text {
              color: #696871;
              line-height: 30px;
              max-width: 460px;
              padding: 30px 0;
            }
            .analytics-info__link {
              color: #5454D4;
              font-size: 17px;
              font-weight: 700;
              line-height: normal;
            }
          }
          &:nth-child(2) .analytics-info {
            order: -1;
            @media(max-width: 600px) {
              order: 0;
            }
          }
        }
      }
      .tools-section {
        padding-bottom: 150px;
        @media(max-width: 600px) {
          padding-bottom: 50px;
        }
        .tool {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 75px;
          @media(max-width: 700px) {
            gap: 20px;
          }
          @media(max-width: 600px) {
            flex-direction: column;
            gap: 40px;
          }
          .tool-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 310px;
            gap: 20px;
            .tool-card__image {
              max-width: 150px;
            }
            .tool-card__title {
              color: #19191B;
              font-size: 24px;
              text-align: center;
              font-weight: 700;
              line-height: 36px
            }
            .tool-card__text {
              color: #696871;
              text-align: center;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
            }
          }
        }
      }
      .subscription-section {
        .plans {
          display: flex;
          justify-content: space-between;
          padding-bottom: 100px;
          @media(max-width: 880px) {
            flex-direction: column;
            padding-bottom: 50px;
          }
          .plans__title {
            max-width: 520px;
            font-size: 60px;
            color: #19191B;
            font-weight: 700;
            line-height: 70px;
            @media(max-width: 880px) {
              font-size: 50px;
              line-height: 50px;
            }
          }
          .plans-navigation {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px 0 30px;
            .plans-navigation__btn {
              background-color: #F7F7FB;
              width: 160px;
              height: 55px;
              color: #19191B;
              text-align: center;
              font-weight: 700;
              line-height: normal;
              font-size: 16px;
              &.active {
                color: #fff;
                background-color: #5454D4;
              }
            }
          }
        }
      }
      .subscription-card {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        @media(max-width: 920px) {
          width: 100%;
          flex-direction: column;
          align-items: stretch;
        }
        .card {
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 21px;
          background-color: #F8F8F8;
          font-size: 17px;
          color: #696871;
          font-weight: 400;
          max-width: 330px;
          @media(max-width: 1100px) {
            max-width: 280px;
          }
          @media(max-width: 920px) {
            max-width: 100%;
          }
          &.card_active {
            padding: 50px 50px;
            background-color: #FF7143;
            color: #fff;
            max-width: 380px;
            @media(max-width: 1100px) {
              max-width: 300px;
            }
            @media(max-width: 920px) {
              max-width: 100%;
            }
            & .card__price {
              color: #fff;
            }
            & .card__btn {
              background-color: #9F3919;
              color: #fff;
            }
          }
          .card__price {
            font-size: 60px;
            color: #1D293F;
            font-weight: 700;
            line-height: 56px;
            padding: 22px 0 28px;

            .card__price_month {
              font-size: 28px;
              padding: 0;
              margin: 0;
            }
          }
          .options-list {
            width: 100%;
            text-align: center;
            line-height: 50px;
          }
          .card__btn {
            margin-top: 36px;
            padding: 20px 0;
            background-color: #fff;
            border: 1px #EAE9F2;
            color: #5454D4;
            text-align: center;
            font-size: 17px;
            font-weight: 700;
            width: 285px;
            line-height: normal;
          }
        }
      }
    }
  }
</style>