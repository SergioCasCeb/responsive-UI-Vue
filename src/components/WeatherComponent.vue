<template>
    <div class="weather-component">
        <div class="weather-header">
            <div class="weather-header__title">
                <i class="fa-solid fa-cloud"></i>
                <h2>Weather</h2>
            </div>
            <div class="weather-header__refresh">
                <button @click="getWeather(); showLoader();">
                    <i class="fa-solid fa-rotate"></i>
                </button>
            </div>
        </div>
        <div class="weather-content">
            <div class="weather-content__icon">
                <i class="fa-solid fa-cloud" id="weather-icon"></i>
            </div>
            <div class="weather-content__info">
                <div class="temp">
                    <p>25.33°</p>
                </div>
                <div class="min-max">
                    <p>20°/28°</p>
                </div>
                <div class="weather-description">
                    <p>Moderate Rain</p>
                </div>
            </div>
        </div>
        <div class="weather-loader hidden">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

getWeather()

async function getWeather() {
    let long = 12.961127;
    let lat = 48.833195;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3c38602965ecee640ec8f7a54b41f0de`);
    const data = await res.json()

    const {temp, temp_max, temp_min} = data.main;
    const {description, id, main, icon} = data.weather[0];

    const tempC = (temp - 273.15).toFixed(2);
    const tempCMax = Math.round(temp_max - 273.15);
    const tempCMin = Math.round(temp_min - 273.15);
    
    const tempContainer = document.querySelector<HTMLElement>(".temp p");
    const minMaxTemp = document.querySelector<HTMLElement>(".min-max p");
    const weatherDesc = document.querySelector<HTMLElement>(".weather-description p");

    tempContainer!.innerText = tempC+"°";
    minMaxTemp!.innerText = tempCMax.toString()+"°"+"/"+ tempCMin.toString()+"°";
    weatherDesc!.innerText = description;

    switch (true) {
        //Clear sky cases
        case ((main === "Clear") && (icon === "01n")) : {
            changeIcon("fa-moon")
            break;
        }
        case ((main === "Clear") && (icon === "01d")) : {
            changeIcon("fa-sun")
            break;
        }
        //Cloudy cases
        case (((main === "Clouds") && (icon === "02d")) || ((main === "Clouds") && (icon === "03d"))) : {
            changeIcon("fa-cloud-sun")
            break;
        }
        case (((main === "Clouds") && (icon === "02n")) || ((main === "Clouds") && (icon === "03n"))) : {
            changeIcon("fa-cloud-moon")
            break;
        }
        case (((main === "Clouds") && (icon === "04d")) || ((main === "Clouds") && (icon === "04n"))) : {
            changeIcon("fa-cloud")
            break;
        }
        case (main === "Squall") : {
            changeIcon("fa-wind")
            break;
        }
        case (main === "Tornado") : {
            changeIcon("fa-tornado")
            break;
        }
        case ((main === "Mist") || (main === "Smoke") || (main === "Haze") || (main === "Dust") || (main === "Fog") || (main === "Sand") || (main === "Ash")) : {
            changeIcon("fa-smog")
            break;
        }
        case ((main === "Thunderstorm")) : {
            changeIcon("fa-cloud-bolt")
            break;
        }
        case ((main === "Snow")) : {
            changeIcon("fa-snowflake")
            break;
        }
        case (((main === "Rain") && (icon === "10d"))) : {
            changeIcon("fa-cloud-sun-rain")
            break;
        }
        case (((main === "Rain") && (icon === "10n"))) : {
            changeIcon("fa-cloud-moon-rain")
            break;
        }
        case (((main === "Rain") && (id === 502)) || ((main === "Rain") && (id === 503)) || ((main === "Rain") && (id === 504)) || ((main === "Rain") && (id === 511)) || ((main === "Rain") && (id === 521)) || ((main === "Rain") && (id === 522)) || ((main === "Rain") && (id === 531))) : {
            changeIcon("fa-cloud-showers-heavy")
            break;
        }
        case ((main === "Drizzle")) : {
            changeIcon("fa-cloud-rain")
            break;
        }
    }
}

function changeIcon(iconName:any){
    const iconComponent = document.querySelector<HTMLElement>("#weather-icon");
    iconComponent!.className = '';
    iconComponent!.classList.add("fa-solid", iconName);  
}

function showLoader(){
    const loader = document.querySelector<HTMLElement>(".weather-loader");
    loader!.classList.remove("hidden");
    setTimeout(() => {
        loader!.classList.add("hidden");
    }, 1500);  
}

</script>

<style lang="scss" scoped>
.weather-component{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .weather-header{
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

    .weather-content{
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        color: var(--clr-primary-dark-blue);

        &__icon{
            width: 100%;
            text-align: center;
            i{
                font-size: 6rem;
                font-size: clamp(6rem, 5.6rem + 2vw, 8rem);
            }
        }

        &__info{
            width: 100%;
            text-align: center;
            .temp{
                font-size: var(--fs-h1);
                font-family: var(--ff-headings);
            }
            .min-max{
                font-family: var(--ff-text);
                font-size: var(--fs-p);
                font-weight: bold;
                margin-bottom: 1rem;
            }

            .weather-description{
                font-size: var(--fs-h3);
                font-family: var(--ff-headings);
                display: grid;
                place-items: center;
                p{
                    max-width: 10ch;
                }
            }
        }
    }

    .weather-loader{
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