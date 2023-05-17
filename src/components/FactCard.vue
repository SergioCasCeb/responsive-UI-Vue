<template>
    <div class="fact-card-component">
        <div class="fact-edit">
            <i class="fa-solid fa-pen-to-square" id="fact-edit-btn"></i>
        </div>
        <div class="fact-number" :style="{ background: color }">
            <p> {{value}} </p>
        </div>
        <div class="fact-description">
            <p> {{ title }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  color: String,
  value: String
})
</script>


<style lang="scss" scoped>
    .fact-card-component{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 13rem;

        .fact-edit{
            height: fit-content;
            width: 100%;
            text-align: right;
            i{
                color: var(--clr-primary-dark-blue);
                opacity: .6;
                cursor: pointer;
                transition: opacity 250ms ease-in-out;
                
                &:hover{
                    opacity: 1;
                }
            }
        }

        .fact-number{
            width: 80%;
            max-width: 8rem;
            height: auto;
            aspect-ratio: 1/1;
            border-radius: 50%;
            display: grid;
            place-items: center;

            p{
                color: var(--clr-neutral-100);
                font-size: 3rem;
                font-size: clamp(3rem, 2.8rem + 1vw, 4rem);
                font-family: var(--ff-text);
            }
        }

        .fact-description{
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            text-align: center;
            p{
                font-size: var(--fs-h3);
                color: var(--clr-primary-dark-blue);
                max-width: 8ch;
                font-family: var(--ff-text);
            }
        }
    }

    @media screen and (min-width: 768px) {
        .fact-card-component{
        height: 100%;
        }
    }
</style>