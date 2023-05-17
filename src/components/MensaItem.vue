<template>
    <div class="mensa-item__icon">
        <i v-if="category === 'Hauptgerichte'" class="fa-solid fa-burger"></i>
        <i v-if="category === 'Beilagen'" class="fa-solid fa-bowl-food"></i>
        <i v-if="category === 'Nachspeisen'" class="fa-solid fa-ice-cream"></i>
    </div>
    <div class="mensa-item__info">
        <p class="item-name">{{ dishName }}</p>
        <p class="item-price">Price: ${{ dishPrice }}</p>
    </div>
    <div class="mensa-item__notes">
        <i v-if="dishNotes?.includes('Fisch')" class="fa-solid fa-fish"></i>
        <i v-if="dishNotes?.includes('Eier')" class="fa-solid fa-egg"></i>
        <i v-if="dishNotes?.includes('vegan')" class="fa-solid fa-seedling" style="color: green;"></i>
        <i v-if="dishNotes?.includes('vegetarisch')" class="fa-solid fa-seedling" style="color: yellow;"></i>
        <i v-if="dishNotes?.includes('Gluten')" class="fa-solid fa-bread-slice"></i>
        <i v-if="dishNotes?.includes('Geflügel')" class="fa-solid fa-drumstick-bite"></i>
        <i v-if="dishNotes?.includes('Rindfleisch')" class="fa-solid fa-bacon"></i>
        <i v-if="dishNotes?.includes('Milch und Milchprodukte')" class="fa-solid fa-cheese"></i>
    </div>
</template>

<script setup lang="ts">
 
 const props = defineProps({
  category: String,
  dishName: String,
  dishPrice: Number,
  dishNotes: Array
})
</script>


<style lang="scss">

.mensa-item{
    width: 98%;
    background-color: var(--clr-primary-light-blue-trans);
    padding: .5rem;
    margin-bottom: .5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__icon{
        background-color: var(--clr-primary-light-blue);
        padding: .5rem;
        border-radius: 10px;
        i{
            font-size: var(--fs-h2);
            color: #FFFFFF;
        }
    }

    &__info{
        flex: 1;
        margin: 0 1rem;
        font-family: var(--ff-text);
        font-size: var(--fs-p);
        color: var(--clr-neutral-900);
        .item-name{
            font-weight: bold;
        }
    }

    &__notes{
        min-height: 3rem;
        width: 4rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: .25rem;

        i{
            
            text-align: center;
            color: #FFFFFF;
            font-size: var(--fs-footer);
        }
    }
}
</style>