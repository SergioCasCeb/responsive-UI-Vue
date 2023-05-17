<template>
    <div class="tasks-component">
        <div class="tasks-header">
            <div class="tasks-header__title">
                <i class="fa-solid fa-list-check"></i>
                <h2>Tasks</h2>
            </div>
            <!-- <div class="tasks-header__refresh">
                <button @click="gettasks(); showLoader();">
                    <span class="material-icons-round">
                    autorenew
                    </span>
                </button>
            </div> -->
        </div>
        <div class="tasks-content">
            <ul class="tasks-content__list">
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Math homework</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Finish software project</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Arrange meeting with professor</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Finish project requirements</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Create user stories</p>
                </li>

                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Finsih software project</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Arrange meeting with professor</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Finish project requirements</p>
                </li>
                <li class="list-item">
                    <input type="checkbox" id="">
                    <p>Create user stories</p>
                </li>
            </ul>
        </div>
        <RouterLink class="see-all" to="/tasks">
            <button class="see-all__btn">See all</button>
        </RouterLink>
        <div class="tasks-loader hidden">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.tasks-component{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .tasks-header{
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

    .tasks-content{
        width: 100%;
        height: 100%;
        margin-bottom: 1rem;
        overflow: auto;
        &__list{
            .list-item{
                display: flex;
                align-items: center;
                justify-content: flex-start;

                input{
                    appearance: none;
                    width: 1rem;
                    height: 1rem;
                    border: 2px solid var(--clr-primary-dark-blue);
                    border-radius: 5px;
                    margin-right: 1rem;
                    cursor: pointer;

                    &:checked{
                        background-color: var(--clr-primary-dark-blue);
                    }
                }

                p{
                    font-family: var(--ff-text);
                    font-size: var(--fs-p);
                    color: var(--clr-neutral-900);
                }
            }
        }
    }

    .see-all{
        width: 100%;
        &__btn{
            width: 100%;
            padding: .5rem 1.5rem;
            background-color: var(--clr-primary-dark-blue);
            color: var(--clr-neutral-100);
            font-family: var(--ff-text);
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 250ms ease-in-out;

            &:hover{
                background-color: var(--clr-primary-dark-blue-hvr);
            }
        }
    }

    // .tasks-loader{
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background-color: var(--clr-neutral-100);
    //     display: grid;
    //     place-items: center;
    //     transition: opacity 250ms ease-in-out;

    //     .loader{
    //         position: relative;
    //         width: 3rem;
    //         height: 3rem;
    //         border-radius: 50%;
    //         border: 3px solid var(--clr-primary-dark-blue);
    //         animation: rotate 1s linear infinite;

    //         &::before{
    //             position: absolute;
    //             content: '';
    //             top: 50%;
    //             left: 50%;
    //             transform: translate(-50%, -50%);
    //             width: 4rem;
    //             height: 4rem;
    //             border: 3px solid transparent;
    //             border-bottom-color: var(--clr-primary-light-blue);
    //             border-radius: 50%;
    //         }
    //     }

    //     &.hidden{
    //         opacity: 0;
    //         pointer-events: none;
    //     }
    // }

    // @keyframes rotate {
    // 0% {
    //     transform: rotate(0deg);
    // }
    // 100% {
    //     transform: rotate(360deg);
    // }
    // } 
}

</style>