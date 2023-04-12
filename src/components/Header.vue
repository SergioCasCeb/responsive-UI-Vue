<template>
    <header>
        <h1>Dashboard</h1>

        <div class="user-settings">
            <div class="theme-toggle-container">
                <label for="theme"></label>
                <input type="checkbox" name="theme-toggle" id="theme-toggle" class="theme-toggle">
            </div>
            <div class="user-container" :class="`${open ? 'open' : ''}`" @click="UserMenu">
                <i class="material-icons-round user-icon">
                account_circle
                </i>
                <i class="material-icons-round arrow-icon">
                arrow_drop_down
                </i>
                <div class="user-menu">
                    <ul>
                        <li><RouterLink to="/">Profile</RouterLink></li>
                        <li><RouterLink to="/">Settings</RouterLink></li>
                        <li><RouterLink to="/">Log out</RouterLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const open = ref(false)
const UserMenu = () => {
    open.value = !open.value
    console.log(open.value);
}

</script>

<style scoped lang="scss">

header{
    width: 100%;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding: .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-primary-dark-blue);

    .user-settings{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .theme-toggle-container{
            margin-right: 1rem;
            height: 1.5rem;
            label{
                display: block;
                width: 0;
                height: 0;
            }

            input[type="checkbox"]{
                appearance: none;
                width: 3.5rem;
                height: 1.5rem;
                border-radius: 50vw;
                background-color: var(--clr-neutral-500);
                position: relative;
                cursor: pointer;
                transition: background-color 250ms ease-in-out;

                &::before{
                    position: absolute;
                    font-family: 'Material Icons Round';
                    content: 'light_mode';
                    font-size: .8rem;
                    background-color: var(--clr-neutral-100);
                    border-radius: 50%;
                    top: 50%;
                    left: .3rem;
                    transform: translateY(-50%);
                    width: 1rem;
                    height: 1rem;
                    display: grid;
                    place-items: center;
                    transition: all 350ms ease-in-out;
                }
            }

            input[type="checkbox"]:checked{
                background-color: var(--clr-neutral-700);

                &::before{
                    content: 'dark_mode';
                    left: 2.2rem;
                    background-color: var(--clr-neutral-900);
                    color: var(--clr-neutral-100);
                }
            }
        }

        .user-container{
            height: 2rem;
            position: relative;
            cursor: pointer;
            user-select: none;
            .user-icon{
                font-size: 2rem;
            }
            .arrow-icon{
                font-size: 2rem;
                transform: rotate(0);
                transition: transform 250ms ease-in-out;
            }

            .user-menu{
                position: absolute;
                top: 4rem;
                right: -.8rem;
                width: 8.5rem;
                height: 0;
                background-color: var(--clr-neutral-100);
                border-radius: 10px;
                pointer-events: none;
                transition: height 250ms ease-in-out 100ms;

                ul{
                    opacity: 0;
                    transition: opacity 100ms ease-in-out 0ms;

                    li{
                        padding: .5rem;
                        transition: background-color 250ms ease-in-out;
                        &:not(:last-child){
                            border-bottom: 2px solid var(--clr-neutral-300);
                        }

                        &:hover{
                            background-color: var(--clr-neutral-300);
                        }
                    }
                }
            }
            &.open{
                .arrow-icon{
                    transform: rotate(-90deg);
                }

                .user-menu{
                    height: calc(8rem - 2px);
                    transition: height 250ms ease-in-out 0ms;
                    pointer-events: all;

                    ul{
                        opacity: 1;
                        transition: opacity 100ms ease-in-out 250ms;
                    }
                }
            }
        }
        
    }
}

</style>