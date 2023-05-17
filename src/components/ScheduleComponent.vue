<template>
    <div class="schedule-component">
        <div class="schedule-header">
            <div class="schedule-header__title">
                <i class="fa-solid fa-book"></i>
                <h2>Schedule</h2>
                <p class="current-date"></p>
            </div>
            <div class="schedule-header__refresh">
                <button @click="showLoader(); getDate();">
                    <i class="fa-solid fa-rotate"></i>
                </button>
            </div>
        </div>
        <div class="schedule-content">
            <ul class="schedule-content__list">
            </ul>
        </div>
            
            
        <div class="schedule-loader hidden">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createApp } from 'vue';
import ScheduleItem from '../components/ScheduleItem.vue'

const weekdayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let fullDate = '';

setTimeout(() => {
    getDate();
    const scheduleList = document.querySelector(".schedule-content__list");
    const newItem = document.createElement("li");
    newItem.classList.add("schedule-item");
    newItem.classList.add("variation-1");
    createApp(
        ScheduleItem, 
        {
            name: "Wahlplichtfach Projekt", 
            room: "Smartlab", 
            time: "8:00 - 9:30"
        }).mount(newItem)

    scheduleList?.appendChild(newItem);
}, 250)

function getDate(){
    const date = new Date();
    const weekday = weekdayList[date.getDay()];
    const month = monthsList[date.getMonth()];
    const day = date.getDate();
    fullDate = `${weekday}, ${month} ${day}`;

    const currentDate =  document.querySelector(".current-date");
    currentDate!.innerText = fullDate;
}

function showLoader(){
    const loader = document.querySelector<HTMLElement>(".schedule-loader");
    loader!.classList.remove("hidden");
    setTimeout(() => {
        loader!.classList.add("hidden");
    }, 1500);  
}

// async function getSemesterEvents(){
//     const res = await fetch(`http://thabella.th-deg.de/thabella/opn/api/events/20230517/IAS-6`, {
//         method: "GET",
//         headers: {
//             'Accept': '	text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
//             'Accept-Encoding': 'gzip, deflate, br',
//             'Host': 'thabella.th-deg.de',
//             'Sec-Fetch-Site': 'cross-site',
//             'Upgrade-Insecure-Requests': '1'
//             // 'Access-Control-Allow-Origin': 'http://thabella.th-deg.de',
//             // 'Content-Type': 'application/json'
//         },
//         credentials: "include"
//     });
//     const data = await res.json()

//     console.log(data);
    
// }

// async function populateItems(){
//     const mensaList = document.querySelector(".mensa-content__list");
//     const mensaError = document.querySelector(".mensa-content__error");
//     while(mensaList?.children.length > 0){
//         mensaList?.lastChild?.remove();
//     }

//     try{
//         mensaError?.classList.add("hidden")
//         const res = await fetch(`https://openmensa.org/api/v2/canteens/${mensaId}/days/${fullDate}/meals`);
//         const items = await res.json();

//         items.forEach((item:any) => {
            // const newItem = document.createElement("li");
            // newItem.classList.add("mensa-item");
            // createApp(
            //     MensaItem, 
            //     {
            //         category: item.category, 
            //         dishName: item.name, 
            //         dishPrice: item.prices.students, 
            //         dishNotes: item.notes
            //     }).mount(newItem)

            // mensaList?.appendChild(newItem);
//         });
//     } catch(err){
//         mensaError?.classList.remove("hidden") 
//     }
// }
</script>

<style lang="scss" scoped>
.schedule-component{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .schedule-header{
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        color: var(--clr-primary-dark-blue);

        &__title{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;

            p{
                width: 100%;
                margin-top: .5rem;
                font-size: var(--fs-footer);
                font-family: var(--ff-text);
            }

            i{
                font-size: var(--fs-h3);
                margin-right: 1rem;
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

    .schedule-content{
        width: 100%;
        height: 100%;
        overflow: auto;

        &__list{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            gap: 1rem;
        }
        
    }

    .schedule-loader{
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