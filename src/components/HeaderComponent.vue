<template>
    <header>
        <h1>{{ $route.name }}</h1>

        <div class="user-settings">
            <ThemeBtn @btn-click="$emit('toggle-theme')" class="theme-btn"/>
            <div class="user-container" :class="`${ open ? 'open' : ''}`" @click="userMenu">
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
                        <li><RouterLink to="/login">Log out</RouterLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import ThemeBtn from './ThemeBtn.vue'

import { ref } from 'vue'
const open = ref(false)
const userMenu = () => {
    open.value = !open.value
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

        .theme-btn{
            display: none;
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
                z-index: 100;
                top: 4rem;
                right: -.8rem;
                width: 9rem;
                height: 0;
                background-color: var(--clr-neutral-100);
                border-radius: 10px;
                pointer-events: none;
                overflow: hidden;
                transition: all 250ms ease-in-out 100ms;
                
                ul{
                    opacity: 0;
                    font-family: var(--ff-text);
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
                    height: 8rem;
                    pointer-events: all;
                    border: 1px solid var(--clr-neutral-300);
                    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
                    transition: all 250ms ease-in-out 0ms;

                    ul{
                        opacity: 1;
                        transition: opacity 100ms ease-in-out 250ms;
                    }
                }
            }
        }
        
    }
}

@media screen and (min-width: 500px) {
    header{
        .user-settings{
            .theme-btn{
                display: block;
            }
        }
    }
}

</style>