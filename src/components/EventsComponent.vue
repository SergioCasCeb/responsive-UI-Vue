<template>
    <div class="events-component">
        <div class="events-header">
            <div class="events-header__title">
                <i class="fa-regular fa-calendar-days"></i>
                <h2>Upcoming Events</h2>
            </div>
            <!-- <div class="events-header__refresh">
                <button @click="getevents(); showLoader();">
                    <span class="material-icons-round">
                    autorenew
                    </span>
                </button>
            </div> -->
        </div>
        <div class="events-content"></div>
            
            
        <div class="events-loader hidden">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.events-component{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .events-header{
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

        // &__refresh{
        //     button{
        //         height: 24px;
        //         background-color: transparent;
        //         color: inherit;
        //         opacity: .6;
        //         transition: all 200ms ease-in-out;
        //         &:hover{
        //             opacity: 1;
        //             span{
        //                 transition: transform 500ms ease-in-out;
        //                 transform: rotate(.5turn);
        //             }
        //         }
        //         &:active{
        //             transform: scale(0.9);
        //         }
        //     }
        // }
    }

    
}

</style>