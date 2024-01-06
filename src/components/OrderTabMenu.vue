<template>
  <div class="tabs-menu" >
        <div class="tabs">
        <input type="radio" id="tab1" name="tab-control" checked>
        <input type="radio" id="tab2" name="tab-control">
        <input type="radio" id="tab3" name="tab-control">  
        <input type="radio" id="tab4" name="tab-control">
        <input type="radio" id="tab5" name="tab-control">
        <ul>
            <li title="Features"><label for="tab1" role="button"><br><span>Formules</span></label></li>
            <li title="Delivery Contents"><label for="tab2" role="button"><span>Entrées</span></label></li>
            <li title="Shipping"><label for="tab3" role="button"><span>Plats</span></label></li>    
            <li title="Returns"><label for="tab4" role="button"><br><span>Desserts</span></label></li>
            <li title="Features"><label for="tab5" role="button"><span>Suppléments</span></label></li>
        </ul>

        <div class="slider"><div class="indicator"></div></div>
        <div class="content" >
            <section>
                <h2>Formules</h2>
                <h1>Menus du jour</h1>
                <BlocManyImages/>
                <h1>Nos formules</h1>
                <div class="first-bloc">
                    <div class="image-bloc"></div>
                </div>
            </section>
                <section>
                <h2>Entrées</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.</section>
                <section>
                <h2>Plats</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam sunt voluptate labore, excepturi numquam! Alias libero optio sed harum debitis! Veniam, quia in eum.</section>
                <section>
                <h2>Desserts</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae architecto libero reprehenderit aliquam magnam ratione quidem? Nobis doloribus molestiae enim deserunt necessitatibus eaque quidem incidunt.</section>
                <section>
                    <h2>Suppléments</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam sunt voluptate labore, excepturi numquam! Alias libero optio sed harum debitis! Veniam, quia in eum.</section>
        </div>
        </div>
    </div>
</template>

<script>
import BlocManyImages from './BlocManyImages.vue'
export default {
 name: 'OrderTabMenu',
 components: {
    BlocManyImages
 }
}
</script>

<style scoped>
@import url('../assets/TabMenuCss/tabmenu.css');
</style>