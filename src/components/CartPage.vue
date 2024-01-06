<template>
  <div>
    <h2>Mon panier</h2>
    <div class="cart-page">
        <div class="left-bloc">
            <section class="cart-image">
                <img src="https://vudaf.com/wp-content/uploads/2020/07/Ndole.jpg" alt="Description de l'image" height="100px" width="100px">
            </section>
            <section class="cart-name">Menu Poulet</section>
            <section class="cart-quantity">
                <button id="decrease">-</button>
                <span id="count">0</span>
                <button id="increase">+</button>
            </section>  
            <section class="cart-price">Prix</section> 
            <button class="remove">Retirer</button>  
        </div>
        <div class="right-bloc">
            <h2>RECAPITULATIF</h2>
            <hr>
            <p>Nombre d'article</p>
            <hr>
            <p>Total</p>
            <button class="add-cart">Ajouter au panier</button>
        </div>    
    </div>
    <div class="cart-page-nul">
        <h1>Votre panier est vide</h1>
        <button class="order">Commander</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("../assets/style/cart.css");
</style>