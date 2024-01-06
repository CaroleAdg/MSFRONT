<template>
   
  <div class="first-bloc">
  <router-link :to="'/formula'" class="no-link-style">  
    <div class="image-bloc"></div>
        <div class="product--informations">
            <p class="name">Menu poulet</p>
            <p class="price">15€<span></span></p>
        </div>
     
    <button class="order-btn">Commander</button>
  </router-link>
  </div>


   
</template>

<script>
export default {
    name:"BlocImage",
    
}
</script>

<style lang="scss">
.first-bloc {
  height: 310px;
  width: 30%;
  border:1px solid blue;
}
.image-bloc {
  background-image: url("https://vudaf.com/wp-content/uploads/2020/07/Ndole.jpg");
  background-size: cover;
  background-position: center;
  height: 200px;
} 
.order-btn {
  width: 100%;
  height: 40px;
  border: none;
  font-size: 20px;
  font-weight:bold;
  background-color: #9E1B23;
  color: white;
  border-radius: 5px;
  text-align: center;
}
.product--informations {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price {
    background-color: #eeeeee ;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 50px;
    font-size: 20px;
    border-radius: 10%;
  }
}
.no-link-style {
  text-decoration: none;
  color: inherit;
}

</style>