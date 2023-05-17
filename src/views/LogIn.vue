<template>
    <div class="login-page">
        <div class="sign-in-container">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 34" fill="none">
                    <path
                        d="M61.2623 0C61.3506 0.396017 61.3041 0.792017 61.3038 1.18805C61.2948 11.9982 61.2906 22.8083 61.3306 33.7237C58.3098 33.8291 55.244 33.8291 52.0476 33.7729C51.8677 33.6519 51.804 33.608 51.7017 33.4743C51.6885 22.2423 51.6993 11.1212 51.7101 0C54.8565 0 58.0028 0 61.2623 0Z"/>
                    <path
                        d="M14.4982 33.829C11.3518 33.829 8.20553 33.829 4.94524 33.7158C4.83127 23.9935 4.83127 14.3844 4.83127 4.76321C8.09445 4.76321 11.2455 4.76321 14.4485 4.76321C14.4485 7.83367 14.4436 10.8105 14.4495 13.7872C14.4629 20.4678 14.4816 27.1484 14.4982 33.829Z"/>
                    <path
                        d="M25.7267 33.8291C25.5718 33.4735 25.4942 33.1179 25.4939 32.7623C25.487 23.7061 25.4875 14.6498 25.4907 5.59353C25.4907 5.3219 25.5326 5.05028 25.5591 4.72775C28.7454 4.72775 31.8664 4.72775 35.0353 4.72775C35.0609 5.0478 35.1018 5.32131 35.1019 5.59484C35.1052 14.7316 35.1049 23.8684 35.1019 33.0051C35.1018 33.2041 35.0633 33.403 35.04 33.7155C31.9715 33.8291 28.9057 33.8291 25.7267 33.8291Z"/>
                    <path
                        d="M16.541 33.8291C16.4103 33.1073 16.3714 32.3856 16.3711 31.6638C16.3669 22.4639 16.3683 13.264 16.3683 4.06407C16.3683 3.62895 16.3683 3.19384 16.3683 2.53336C10.923 2.53336 5.56027 2.53336 0.0987553 2.59568C7.20132e-09 1.77449 0 0.890983 0 0C11.6036 0 23.2072 0 34.924 0C35.0834 0.826548 35.1296 1.6531 35.1813 2.57754C29.6842 2.57754 24.3452 2.57754 18.8711 2.57754C18.8711 3.09791 18.8711 3.52748 18.8711 3.95704C18.8711 13.4138 18.8729 22.8705 18.8654 32.3272C18.865 32.7582 18.7808 33.1892 18.7917 33.7247C18.1153 33.8291 17.383 33.8291 16.541 33.8291Z"/>
                    <path
                        d="M46.7465 33.8291C46.67 31.9472 46.7245 30.0654 46.7338 28.1834C46.75 24.8924 46.7383 21.6013 46.7383 18.1965C43.5443 18.1965 40.4313 18.1965 37.2635 18.1965C37.2635 17.2967 37.2635 16.51 37.2635 15.6508C40.3676 15.6508 43.4552 15.6508 46.7264 15.6508C46.7264 10.4577 46.7264 5.33411 46.6811 0.105274C47.448 -7.74254e-06 48.2602 -7.75694e-06 49.1752 0.112995C49.2832 11.427 49.2885 22.628 49.2938 33.8291C48.4816 33.8291 47.6694 33.8291 46.7465 33.8291Z"/>
                    <path
                        d="M63.792 33.225C77.4202 31.7752 80.2635 21.5862 79.9816 16.5521C79.9816 3.60038 69.1885 0.120818 63.792 0V2.29554C75.1005 3.74536 77.686 12.404 77.5652 16.5521C76.792 27.9573 67.8998 30.2045 63.792 30.6878V33.225Z"/>
                </svg>
            </div>

            <div class="sign-in" v-if="signIn">
                <h1 class="sign-in__title">Welcome Back!</h1>
                <p class="sign-in__description">To access your personal dashboard please sign in with your personal information!</p>
                <form action="/" class="sign-in__form">
                    <div class="form-field">
                        <label for="email">Email:</label>
                        <input type="email" id="sign-in-email" placeholder="Enter your email">
                    </div>
                    <div class="form-field">
                        <label for="password">Password:</label>
                        <input type="password" id="sign-in-password" placeholder="Enter your password">
                    </div>
                    <div class="extra-inputs">
                        <div class="remember-me">
                            <input type="checkbox" name="remember-me" id="sign-in-remember-me">
                            <label for="remember-me">Remember me</label>
                        </div>
                        <div class="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div class="form-field">
                        <input type="submit" class="submit-btn" value="Sign In">
                    </div>
                </form>
                <div class="sign-in__sign-up">
                    <p>Don't have an account? <a href="#" @click="changeView()">Sign Up</a></p>
                </div>
            </div>
        </div> 

        <div class="sign-up-container">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 34" fill="none">
                    <path
                        d="M61.2623 0C61.3506 0.396017 61.3041 0.792017 61.3038 1.18805C61.2948 11.9982 61.2906 22.8083 61.3306 33.7237C58.3098 33.8291 55.244 33.8291 52.0476 33.7729C51.8677 33.6519 51.804 33.608 51.7017 33.4743C51.6885 22.2423 51.6993 11.1212 51.7101 0C54.8565 0 58.0028 0 61.2623 0Z" />
                    <path
                        d="M14.4982 33.829C11.3518 33.829 8.20553 33.829 4.94524 33.7158C4.83127 23.9935 4.83127 14.3844 4.83127 4.76321C8.09445 4.76321 11.2455 4.76321 14.4485 4.76321C14.4485 7.83367 14.4436 10.8105 14.4495 13.7872C14.4629 20.4678 14.4816 27.1484 14.4982 33.829Z" />
                    <path
                        d="M25.7267 33.8291C25.5718 33.4735 25.4942 33.1179 25.4939 32.7623C25.487 23.7061 25.4875 14.6498 25.4907 5.59353C25.4907 5.3219 25.5326 5.05028 25.5591 4.72775C28.7454 4.72775 31.8664 4.72775 35.0353 4.72775C35.0609 5.0478 35.1018 5.32131 35.1019 5.59484C35.1052 14.7316 35.1049 23.8684 35.1019 33.0051C35.1018 33.2041 35.0633 33.403 35.04 33.7155C31.9715 33.8291 28.9057 33.8291 25.7267 33.8291Z" />
                    <path
                        d="M16.541 33.8291C16.4103 33.1073 16.3714 32.3856 16.3711 31.6638C16.3669 22.4639 16.3683 13.264 16.3683 4.06407C16.3683 3.62895 16.3683 3.19384 16.3683 2.53336C10.923 2.53336 5.56027 2.53336 0.0987553 2.59568C7.20132e-09 1.77449 0 0.890983 0 0C11.6036 0 23.2072 0 34.924 0C35.0834 0.826548 35.1296 1.6531 35.1813 2.57754C29.6842 2.57754 24.3452 2.57754 18.8711 2.57754C18.8711 3.09791 18.8711 3.52748 18.8711 3.95704C18.8711 13.4138 18.8729 22.8705 18.8654 32.3272C18.865 32.7582 18.7808 33.1892 18.7917 33.7247C18.1153 33.8291 17.383 33.8291 16.541 33.8291Z" />
                    <path
                        d="M46.7465 33.8291C46.67 31.9472 46.7245 30.0654 46.7338 28.1834C46.75 24.8924 46.7383 21.6013 46.7383 18.1965C43.5443 18.1965 40.4313 18.1965 37.2635 18.1965C37.2635 17.2967 37.2635 16.51 37.2635 15.6508C40.3676 15.6508 43.4552 15.6508 46.7264 15.6508C46.7264 10.4577 46.7264 5.33411 46.6811 0.105274C47.448 -7.74254e-06 48.2602 -7.75694e-06 49.1752 0.112995C49.2832 11.427 49.2885 22.628 49.2938 33.8291C48.4816 33.8291 47.6694 33.8291 46.7465 33.8291Z" />
                    <path
                        d="M63.792 33.225C77.4202 31.7752 80.2635 21.5862 79.9816 16.5521C79.9816 3.60038 69.1885 0.120818 63.792 0V2.29554C75.1005 3.74536 77.686 12.404 77.5652 16.5521C76.792 27.9573 67.8998 30.2045 63.792 30.6878V33.225Z" />
                </svg>
            </div>

            <div class="sign-up" v-if="!signIn">
                <h1 class="sign-up__title">Are you new here?</h1>
                <p class="sign-up__description">Enter your personal details to experience the new way to organize your information!</p>
                <form action="#" class="sign-up__form">
                    <div class="form-field">
                        <label for="name">Name:</label>
                        <input type="text" id="sign-up-name" placeholder="Enter your name">
                    </div>
                    <div class="form-field">
                        <label for="sign-up-couse">Course of studies:</label>
                        <select name="sign-up-course" id="sign-up-course">
                            <option value="ias">Internet of Things</option>
                            <option value="ai">Applied Informatics</option>
                            <option value="im">International Management</option>
                            <option value="mb-mk">Mechaical Enginnering</option>
                        </select>
                    </div>
                    <div class="form-field">
                        <label for="sign-up-semester">Semester:</label>
                        <select name="sign-up-semester" id="sign-up-semester">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                    <div class="form-field">
                        <label for="email">Email:</label>
                        <input type="email" id="sign-up-email" placeholder="Enter your email">
                    </div>
                    <div class="form-field">
                        <label for="password">Password:</label>
                        <input type="password" id="sign-up-password" placeholder="Enter your password">
                    </div>
                    <div class="form-field">
                        <input type="submit" class="submit-btn" value="Sign In">
                    </div>
                </form>
                <div class="sign-up__sign-in">
                    <p>Already have an account? <a href="#" @click="changeView()">Sign In</a></p>
                </div>
            </div>
        </div>

        <LogInIllustration :isRegistered="signIn ? false : true" :title="signIn ? 'Your dashboard is waiting for you' : 'Create your own personal dashboard'" :description="signIn ? 'All of your Information organized for you on one simple dashboard' : 'Organize all your Information in one place'" :image="signIn ? 'signIn.svg' : 'signUp.svg'"/>
        <!-- All of your information organized for you on one simple dashboard -->
    </div>
</template>

<script setup lang="ts">
    import LogInIllustration from '../components/LogIllustration.vue'
    import { ref } from 'vue'
    const signIn = ref(true)
    function changeView(){
        signIn.value = !signIn.value
        console.log(signIn.value);  
    }
</script>

<style lang='scss' scoped>
.login-page{
    background-color: var(--clr-neutral-100);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    .sign-in-container, .sign-up-container{
        width: 50%;
        height: 100%;
        padding: 2rem;

        .logo{
            width: 100%;
            height: fit-content;
            svg{
                width: 4rem;
                fill: var(--clr-primary-dark-blue);
            }
        }

        .sign-in, .sign-up{
            padding: 0 5rem;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            &__title{
                width: 100%;
                text-align: left;
            }

            &__description{
                font-family: var(--ff-headings);
                font-size: var(--fs-subheader);
                margin-bottom: 2rem;
            }

            &__form{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2rem;
                .form-field{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    font-family: var(--ff-text);

                    label{
                        font-size: var(--fs-p);
                        font-weight: bold;
                    }

                    input{
                        appearance: none;
                        width: 100%;
                        background-color: var(--clr-neutral-100);
                        border: 2px solid var(--clr-neutral-300);
                        border-radius: 5px;
                        padding: .5rem 1rem;
                        font-family: inherit;
                    }

                    select{
                        width: 100%;
                        background-color: var(--clr-neutral-100);
                        border: 2px solid var(--clr-neutral-300);
                        border-radius: 5px;
                        padding: .5rem 1rem;
                        font-family: inherit;
                        cursor: pointer;
                    }

                    .submit-btn{
                        background-color: var(--clr-primary-dark-blue);
                        color: var(--clr-neutral-100);
                        font-size: var(--fs-p);
                        font-weight: bold;
                        border: none;
                        cursor: pointer;
                        transition: background-color 250ms ease-in-out;

                        &:hover{
                            background-color: var(--clr-primary-dark-blue-hvr);
                        }
                    }
                }

                .extra-inputs{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: var(--ff-text);
                    .remember-me{
                        display: flex;
                        align-items: center;
                        user-select: none;
                        
                        input{
                            appearance: none;
                            width: 1rem;
                            height: 1rem;
                            border: 2px solid var(--clr-neutral-300);
                            border-radius: 2px;
                            margin-right: .5rem;
                            cursor: pointer;
                            position: relative;

                            &::before{
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                font-family: "Font Awesome 5 Free"; 
                                font-weight: 900; 
                                content: "\f00c";
                                font-size: .5rem;
                                display: grid;
                                place-items: center;
                                color: var(--clr-neutral-100);
                            }

                            &:checked{
                                background-color: var(--clr-primary-dark-blue);
                                border-color: var(--clr-primary-dark-blue);
                            }
                        }
                    }
                    .forgot-password{
                        font-weight: bold;
                        color: var(--clr-primary-dark-blue);

                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
            &__sign-up{
                font-family: var(--ff-text);

                a{
                    font-weight: bold;
                    color: var(--clr-primary-dark-blue);

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }

        .sign-up{
            &__form{
                flex-direction: row;
                flex-wrap: wrap;
                .form-field:nth-child(2){
                    width: calc(50% - 1rem);
                }
                .form-field:nth-child(3){
                    width: calc(50% - 1rem);
                }
            }
            &__sign-in{
                font-family: var(--ff-text);

                a{
                    font-weight: bold;
                    color: var(--clr-primary-dark-blue);

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

</style>