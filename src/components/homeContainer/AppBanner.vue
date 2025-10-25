<template>
  <div class="banner">
    <div class="parent">
      <img src="@/img/banner.jpg" alt="" class="img" />
      <div class="content">
        <h2><span>Huge Saving</span> on Labtops 4K Screens</h2>
        <p class="hint">sales up to 60% off selected items</p>
        <v-btn class="shop-btn" flat> Shop Now </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  .parent {
    height: 390px;
    position: relative;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      color: black;
      padding: 30px 0 0 50px;
      position: absolute;
      top: 20px;
      left: 40px;
      width: 500px;

      h2 {
        font-size: 48px;
        font-weight: 700;
        span {
          color: rgba(40, 6, 121, 0.74);
        }
      }
      .hint {
        margin: 10px 0 20px;
      }
      .shop-btn {
        background-color: rgba(40, 6, 121, 0.74);
        color: #fff;
        padding: 12px 50px;
        border-radius: 30px;
        transition: 0.3s ease;

        &:hover {
          background-color: #c89610;
          transform: translateY(-2px);
          color: black;
        }
      }
    }
  }
}

@media (min-width: 780px) and (max-width: 959px) {
  .banner {
    .parent {
      .content {
        h2 {
          font-size: 30px;
        }
        width: 50%;
        left: 0;
      }
    }
  }
}
@media (min-width: 400px) and (max-width: 779px) {
  .banner {
    .parent {
      height: 280px;
      .content {
        padding: 10px 0 0 30px;
        h2 {
          font-size: 20px;
        }
        width: 50%;
        left: 0;
        .hint {
          margin: 10px 0 20px;
          font-size: 9px;
        }
        .shop-btn {
        padding: 6px 20px;
        }
      }
    }
  }
}
@media (max-width: 399px) {
  .banner {
    .parent {
      height: 200px;
      .content {
        padding: 10px 0 0 30px;
        h2 {
          font-size: 18px;
        }
        width: 75%;
        left: 0;
        .hint {
          margin: 10px 0 20px;
          font-size: 9px;
        }
        .shop-btn {
        padding: 10px 20px;
        font-size: 9px !important;
        }
      }
    }
  }
}
</style>
