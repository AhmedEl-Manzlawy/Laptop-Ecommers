<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent class="dialog">
      <v-card class="text-center">
        <div class="text-center py-10">
          <v-icon
            style="
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 60px;
              border: 1px solid black;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title style="font-size: 20px; font-weight: bold;white-space: pre-wrap;" class="py-0">Order Placed Successfuly !</v-card-title>
        <v-card-text
        style="
        font-size: 14px;
        "
        class="text-grey-darken-1"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus labore voluptas qui,
          nostrum voluptatum maxime ratione ad pariatur mollitia harum dolor sint saepe, s</v-card-text
        >

        <v-card-actions class="justify-center pb-8">
          <v-btn @click="resetSuccessOrder" style="background-color: #2196F3;color: white;" >GOT IT!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCart';
import { mapActions } from 'pinia';

export default {
  data: () => ({
    dialog: false,
  }),
  props:{
    popup :{
      type : Boolean
    }
  },
  methods:{
    ...mapActions(useCartStore,["resetCartItem"]),
    resetSuccessOrder(){
      this.resetCartItem();
      this.dialog = false;
      this.$router.push({path:'/'})
    }
  },
  watch:{
    dialog(newVal){
      if(!newVal){
        this.$emit('close_popup');
      }
    }
  },
  mounted(){
    this.dialog = this.popup
  }
};
</script>

<style >

</style>
