<template>
  <div>
    <CartItem v-for="item in list" :key="item.id" :item="item" />
    <p>总价{{ totalPrice }}</p>
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  components: {
    CartItem,
  },
  props: {
    productionList: {
      type: Array,
      default() {
        return [];
      },
    },

    cartList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    //   购物车商品列表
    list() {
      return this.cartList.map((cartListItem) => {
        // 找到对应的productionItem
        const productionItem = this.productionList.find(
          (prdItem) => prdItem.id === cartListItem.id
        );
        // 返回商品信息，外加购物数量
        return {
          ...productionItem,
          quantity: cartListItem.quantity,
        };
      });
    },
    // 总价
    totalPrice() {
      return this.list.reduce(
        (total, curItem) => total + curItem.quantity * curItem.price,
        0
      );
    },
  },
};
</script>