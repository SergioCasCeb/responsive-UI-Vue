<template>
    <div class="illustration" :class="{register: isRegistered}">
        <div class="illustration__container">
            <h1 class="title">{{ title }}</h1>
            <h3 class="description">{{ description }}</h3>
            <div class="visual">
                <img :src="getImageUrl()" alt="sign in illustration">
            </div>
        </div> 
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  image: String,
  positionR: String,
  positionL: String,
  isRegistered: Boolean
})

function getImageUrl(){
    return new URL(`../img/${props.image}`, import.meta.url)
}

</script>

<style scoped lang="scss">
    .illustration{
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--clr-primary-dark-blue);
        width: 50%;
        height: 100%;
        display: grid;
        place-items: center;
        text-align: center;
        padding: 2rem;
        transition: all 500ms ease-in-out;
        
        &__container{
            color: var(--clr-neutral-100);
            display: grid;
            place-items: center;
            gap: 1rem;
            animation: fade2 1s ease-in-out;
            
            .description{
                margin-bottom: 3rem;
            }
            .visual{
                width: 80%;
                img{
                    width: 100%;
                }
            }
        }

        &.register{
            transform: translateX(-100%);
            .illustration__container{
                animation: fade 1s ease-in-out;
            }
        }
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        90%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }

    @keyframes fade2 {
        0% {
            opacity: 0;
        }
        90%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }

</style>