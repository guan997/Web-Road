<template>
  <div>
    <ProductionList :list="productionList" />
    <hr />
    <CartList :productionList="productionList" :cartList="cartList" />
  </div>
</template>
<script>
import ProductionList from "./ProductionList/index";
import CartList from "./CartList/index";
import event from "./event";
export default {
  components: {
    ProductionList,
    CartList,
  },
  data() {
    return {
      isDisplay: true,
      productionList: [
        {
          id: 1,
          title: "商品A",
          price: 10,
          inventory: 3,
        },
        {
          id: 2,
          title: "商品B",
          price: 20,
          inventory: 1,
        },
        {
          id: 3,
          title: "商品C",
          price: 22,
          inventory: 31,
        },
      ],
      cartList: [
        // {
        //   id: 1,
        //   quantity: 1,
        //   price: 10,
        //   inventory: 3,
        // },
      ],
    };
  },
  methods: {
    // 加入购物车
    addToCart(id) {
      // 购物车中是否有该商品
      const prd = this.cartList.find((item) => item.id === id);
      
      // 遗留待解决bug 库存不够时 依然可以加入购物车

      var prdInventory = this.productionList.find((item) => item.id === id)
        .inventory--;
      // eslint-disable-next-line
      console.log(prdInventory);
      if (prdInventory > 0) {
        if (!prd) {
          // 购物车没有该商品
          this.cartList.push({
            id,
            quantity: 1, //默认购物数量为1
          });
        } else {
          // 再次添加购物车，增加数量即可
          if (prd) {
            // 数量加1
            prd.quantity++;
            return;
          }
        }
        // prdInventory--;
      } else {
        // 根据库存控制加入购物车按钮是否可以点击
        document.getElementById("my-click").style.cursor = "not-allowed";
      }
    },
    // 从购物车删除一个商品
    delFromCart(id) {
      // 从购物车中找出商品
      const prd = this.cartList.find((item) => item.id === id);
      var prdInventory = this.productionList.find((item) => item.id === id)
        .inventory++;
      // eslint-disable-next-line
      console.log(prdInventory);
      if (prd == null) {
        return;
      }
      // 数量加1
      prd.quantity--;
      //   库存加一
      //   prdInventory.inventory++;
      // 如果数量减少到0
      if (prd.quantity <= 0) {
        this.cartList = this.cartList.filter((item) => item.id !== id);
      }
    },
  },
  mounted() {
    event.$on("addToCart", this.addToCart);
    event.$on("delFromCart", this.delFromCart);
  },
};
</script>