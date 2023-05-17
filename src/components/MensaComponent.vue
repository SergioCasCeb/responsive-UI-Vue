<template>
    <div class="mensa-component">
        <div class="mensa-header">
            <div class="mensa-header__title">
                <i class="fa-solid fa-utensils"></i>
                <h2>Mensa</h2>
            </div>
            <div class="mensa-header__refresh">
                <button @click="showLoader(); populateItems();">
                    <i class="fa-solid fa-rotate"></i>
                </button>
            </div>
        </div>
        <div class="mensa-content">
            <ul class="mensa-content__list">
            </ul>
            <div class="mensa-content__error hidden">
                <p>No available information for today!</p>
            </div>
        </div>    
        <div class="mensa-loader hidden">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createApp } from 'vue';
import MensaItem from '../components/MensaItem.vue'

let mensaId = 0
const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
const fullDate = `${year}-${month}-${day}`
getMensaId()

setTimeout(() => {
    populateItems()
}, 250)

function showLoader(){
    const loader = document.querySelector<HTMLElement>(".mensa-loader");
    loader!.classList.remove("hidden");
    setTimeout(() => {
        loader!.classList.add("hidden");
    }, 1500);  
}

async function getMensaId(){
    const res = await fetch(`https://openmensa.org/api/v2/canteens?near[lat]=48.8414&near[lng]=12.9572`);
    const data = await res.json()

    mensaId = data[0].id;
}

async function populateItems(){
    const mensaList = document.querySelector(".mensa-content__list");
    const mensaError = document.querySelector(".mensa-content__error");
    while(mensaList?.children.length > 0){
        mensaList?.lastChild?.remove();
    }

    try{
        mensaError?.classList.add("hidden")
        const res = await fetch(`https://openmensa.org/api/v2/canteens/${mensaId}/days/${fullDate}/meals`);
        const items = await res.json();

        items.forEach((item:any) => {
            const newItem = document.createElement("li");
            newItem.classList.add("mensa-item");
            createApp(
                MensaItem, 
                {
                    category: item.category, 
                    dishName: item.name, 
                    dishPrice: item.prices.students, 
                    dishNotes: item.notes
                }).mount(newItem)

            mensaList?.appendChild(newItem);
        });
    } catch(err){
        mensaError?.classList.remove("hidden") 
    }
}
</script>


<style lang="scss" scoped>
.mensa-component{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .mensa-header{
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--clr-primary-dark-blue);

        &__title{
            display: flex;
            align-items: center;
            gap: 1rem;
            i{
                font-size: var(--fs-h3);
            }
        }

        &__refresh{
            button{
                background-color: transparent;
                color: inherit;
                opacity: .6;
                transition: all 200ms ease-in-out;

                i{
                    font-size: 1.2rem;
                }

                &:hover{
                    opacity: 1;
                    i{
                        transition: transform 500ms ease-in-out;
                        transform: rotate(.5turn);
                    }
                }

                &:active{
                    transform: scale(0.9);
                }
            }
        }
    }

    .mensa-content{
        width: 100%;
        height: 100%;
        overflow: auto;
        position: relative;

        &__list{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start; 
        }  

        &__error{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            opacity: 1;
            pointer-events: all;

            p{
                font-family: var(--ff-text);
                font-size: var(--fs-p);
                font-weight: bold;
                color: var(--clr-neutral-500);
            }

            &.hidden{
                opacity: 0;
                pointer-events: none;
            }
        }
    }

    .mensa-loader{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--clr-neutral-100);
        display: grid;
        place-items: center;
        transition: opacity 0ms ease-in-out;

        .loader{
            position: relative;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: 3px solid var(--clr-primary-dark-blue);
            animation: rotate 1s linear infinite;

            &::before{
                position: absolute;
                content: '';
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 4rem;
                height: 4rem;
                border: 3px solid transparent;
                border-bottom-color: var(--clr-primary-light-blue);
                border-radius: 50%;
            }
        }

        &.hidden{
            opacity: 0;
            pointer-events: none;
            .loader{
                animation: none;
            }
        }
    }

    @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
}

</style>


