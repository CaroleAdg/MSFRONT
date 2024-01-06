<template>
    <div class="top">  <button @click="alert('111');"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
    </div>
  <div class="page">
    <div class="left" >
        <img src="https://vudaf.com/wp-content/uploads/2020/07/Ndole.jpg" alt="Description de l'image" height="400px" width="100%">
        <button class="add-cart">Ajouter au panier</button>
    </div>
    
        
    <div class="right">
      <div class="description"> 
      <h2>Menu poulet</h2>
      <p class="description">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
        en page avant impression. Le Lorem Ipsum est le faux texte standard de
        l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
        des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a
        pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
        informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les
        anellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
      </p>
    </div> 
    <section class="detailSection">
        <h3>Accompagnements au choix</h3>
        <div class="detailChild">
            <label>Riz</label>
            <input type="radio" name="acccompagnement" value="riz">
        </div>
        <br>
        <div class="detailChild">
            <label>Frites</label>
            <input type="radio" name="acccompagnement" value="riz">
        </div>
    </section>
    <section class="detailSection">
        <h3>Boisson au choix</h3>
        <div class="detailChild">
            <label>Riz</label>
            <input type="radio" name="boisson" value="boisson">
        </div><br>
        <div class="detailChild">
            <label>Frites</label>
            <input type="radio" name="acccompagnement" value="riz">
        </div>
    </section>
    <section class="detailSection">
        <h3>Dessert au choix</h3>
        <div class="detailChild">
            <label>Riz</label>
            <input type="radio" name="dessert" value="dessert">
        </div><br>
        <div class="detailChild">
            <label>Frites</label>
            <input type="radio" name="acccompagnement" value="riz">
        </div>
    </section>
  </div>
</div>
 

  
</template>

<script>
export default {
  name: "FormulaDetail",
};
</script>

<style scoped>
@import url("../assets/style/detail.css");
</style>
