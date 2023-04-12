<template>
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 34" fill="none">
                <path
                    d="M61.2623 0C61.3506 0.396017 61.3041 0.792017 61.3038 1.18805C61.2948 11.9982 61.2906 22.8083 61.3306 33.7237C58.3098 33.8291 55.244 33.8291 52.0476 33.7729C51.8677 33.6519 51.804 33.608 51.7017 33.4743C51.6885 22.2423 51.6993 11.1212 51.7101 0C54.8565 0 58.0028 0 61.2623 0Z"
                    fill="white" />
                <path
                    d="M14.4982 33.829C11.3518 33.829 8.20553 33.829 4.94524 33.7158C4.83127 23.9935 4.83127 14.3844 4.83127 4.76321C8.09445 4.76321 11.2455 4.76321 14.4485 4.76321C14.4485 7.83367 14.4436 10.8105 14.4495 13.7872C14.4629 20.4678 14.4816 27.1484 14.4982 33.829Z"
                    fill="white" />
                <path
                    d="M25.7267 33.8291C25.5718 33.4735 25.4942 33.1179 25.4939 32.7623C25.487 23.7061 25.4875 14.6498 25.4907 5.59353C25.4907 5.3219 25.5326 5.05028 25.5591 4.72775C28.7454 4.72775 31.8664 4.72775 35.0353 4.72775C35.0609 5.0478 35.1018 5.32131 35.1019 5.59484C35.1052 14.7316 35.1049 23.8684 35.1019 33.0051C35.1018 33.2041 35.0633 33.403 35.04 33.7155C31.9715 33.8291 28.9057 33.8291 25.7267 33.8291Z"
                    fill="white" />
                <path
                    d="M16.541 33.8291C16.4103 33.1073 16.3714 32.3856 16.3711 31.6638C16.3669 22.4639 16.3683 13.264 16.3683 4.06407C16.3683 3.62895 16.3683 3.19384 16.3683 2.53336C10.923 2.53336 5.56027 2.53336 0.0987553 2.59568C7.20132e-09 1.77449 0 0.890983 0 0C11.6036 0 23.2072 0 34.924 0C35.0834 0.826548 35.1296 1.6531 35.1813 2.57754C29.6842 2.57754 24.3452 2.57754 18.8711 2.57754C18.8711 3.09791 18.8711 3.52748 18.8711 3.95704C18.8711 13.4138 18.8729 22.8705 18.8654 32.3272C18.865 32.7582 18.7808 33.1892 18.7917 33.7247C18.1153 33.8291 17.383 33.8291 16.541 33.8291Z"
                    fill="white" />
                <path
                    d="M46.7465 33.8291C46.67 31.9472 46.7245 30.0654 46.7338 28.1834C46.75 24.8924 46.7383 21.6013 46.7383 18.1965C43.5443 18.1965 40.4313 18.1965 37.2635 18.1965C37.2635 17.2967 37.2635 16.51 37.2635 15.6508C40.3676 15.6508 43.4552 15.6508 46.7264 15.6508C46.7264 10.4577 46.7264 5.33411 46.6811 0.105274C47.448 -7.74254e-06 48.2602 -7.75694e-06 49.1752 0.112995C49.2832 11.427 49.2885 22.628 49.2938 33.8291C48.4816 33.8291 47.6694 33.8291 46.7465 33.8291Z"
                    fill="white" />
                <path
                    d="M63.792 33.225C77.4202 31.7752 80.2635 21.5862 79.9816 16.5521C79.9816 3.60038 69.1885 0.120818 63.792 0V2.29554C75.1005 3.74536 77.686 12.404 77.5652 16.5521C76.792 27.9573 67.8998 30.2045 63.792 30.6878V33.225Z"
                    fill="white" />
            </svg>
        </div> 

        <div class="menu-toggle-wrap">
            <div class="menu-toggle" @click="ToggleMenu">
                <i class="material-icons-round">
                    double_arrow
                </i>
            </div>
        </div>

        <nav class="navigation">
            <RouterLink class="btn" to="/">
                <i class="material-icons-round">
                    dashboard
                </i>
                <p class="txt">Home</p>
            </RouterLink>

            <RouterLink class="btn" to="/lectures">
                <i class="material-icons-round">
                    menu_book
                </i>
                <p class="txt">Lectures</p>
            </RouterLink>

            <RouterLink class="btn" to="/calendar">
                <i class="material-icons-round">
                    calendar_month
                </i>
                <p class="txt">Calendar</p>
            </RouterLink>

            <RouterLink class="btn" to="/Analytics">
                <i class="material-icons-round">
                    leaderboard
                </i>
                <p class="txt">Analytics</p>
            </RouterLink>

            <RouterLink class="btn" to="/tasks">
                <i class="material-icons-round">
                    checklist
                </i>
                <p class="txt">Tasks</p>
            </RouterLink>

        </nav>

        <div class="log-out-container">
            <RouterLink class="btn" to="/logout">
                <i class="material-icons-round">
                    logout
                </i>
                <p class="txt">Logout</p>
            </RouterLink>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isExpanded = ref(false)
const ToggleMenu = () => {
    isExpanded.value = !isExpanded.value
}
</script>

<style lang="scss" scoped>
aside{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: var(--clr-primary-dark-blue);
    padding: .8rem;
    border-radius: 10px;

    .logo, .menu-toggle-wrap, .log-out-container{
        display: none;
    }

    .logo {
        margin-bottom: 2rem;
        padding: 0 1rem;
        width: fit-content;
        transition: 200ms ease-in-out;

        svg {
            width: 60px;
        }
    }

    .menu-toggle-wrap {
        width: 100%;
        margin-bottom: 2rem;
        padding: 0 1rem;
        position: relative;
        top: 0;
        transition: all 250ms ease-in-out;

        .menu-toggle {
            cursor: pointer;
            transform: rotate(0);
            transition: transform 250ms ease-in-out;
            .material-icons-round {
                font-size: 1.5rem;  
                transform: translateX(0);
                transition: transform 250ms ease-in-out;
            }

            &:hover .material-icons-round {
                transform: translateX(5px);
            }
        }
    }

    .material-icons-round {
        cursor: pointer;
        color: var(--clr-neutral-500);
    }

    .navigation{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .btn{
            // --size-icon: 2rem:
            height: 2.8rem;
            width: 2.8rem;
            gap: 0;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;

            .material-icons-round {
                font-size: 2rem;
            }
            .txt{
                display: none;
                width: 0;
                height: 0;
                transform: scaleX(0);
                transform-origin: left;
                color: var(--clr-neutral-500);
            }

            &.router-link-exact-active{
                background-color: #009fe32e;
                .material-icons-round {
                    color: var(--clr-primary-light-blue);
                }
                .txt {
                    color: var(--clr-primary-light-blue);
                }
            }
        }
    }

    .log-out-container {
        height: 100%;
        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            gap: 0;

            .material-icons-round {
                font-size: 2rem;
            }
            .txt{
                display: none;
                width: 0;
                height: 0;
                transform: scaleX(0);
                transform-origin: left;
                color: var(--clr-neutral-500);
            }
        }
    }
}

@media screen and (min-width: 768px) {
    aside {
        position: unset;
        width: calc(60px + 2rem);
        height: 100%;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        transition: width 200ms ease-in-out;

        .logo{
            display: block;
        }

        .menu-toggle-wrap{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
        }

        .navigation{
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            padding-left: 2rem;

            .btn{
                width: 100%;
                border-radius: 0;
                justify-content: flex-start;
                
                .material-icons-round, .txt{
                    transition: color 250ms ease-in-out;
                }

                .txt{
                    display: block;
                    height: auto;
                    width: 0;
                }

                &:hover, &.router-link-exact-active{
                    background-color: unset;
                    .material-icons-round {
                        color: var(--clr-primary-light-blue);
                    }
                    .txt {
                        color: var(--clr-primary-light-blue);
                    }
                }

                &.router-link-exact-active{
                    border-right: 3px solid var(--clr-primary-light-blue);
                }
            }
        }
        .log-out-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding-left: 2rem;

            .btn{
                .txt{
                    display: block;
                    height: auto;
                }
            }
        }

        &.is-expanded {
            width: 12rem;
            .menu-toggle-wrap {
                top: -4.5rem;
                .menu-toggle {
                    transform: rotate(180deg);
                }
            }
            .navigation {
                .btn {
                    gap: 1rem;
                    .txt {
                        opacity: 1;
                        transform: scaleX(1);
                        width: 100%;
                        transition: transform 250ms ease-in-out 200ms, opacity 250ms ease-in-out 200ms, width 0s;
                    }
                }
            }
            .log-out-container {
                .btn {
                    gap: 1rem;
                    .txt {
                        opacity: 1;
                        transform: scaleX(1);
                        width: 100%;
                        transition: transform 250ms ease-in-out 200ms, opacity 250ms ease-in-out 200ms, width 0s;
                    }
                }
            }
        }
    }
} 
</style>