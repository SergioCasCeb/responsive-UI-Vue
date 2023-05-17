<template>
    <div class="container">
        <SidebarComponent />
        <div class="dashboard-page">
            <HeaderComponent @toggle-theme="$emit('toggle-theme')" class="header"/>
            <main class="dashboard">
                <div class="cards">
                <div class="card">
                    <FactCardComponent title="Semester Progress" color="var(--clr-primary-dark-blue)" value=""/>
                </div>
                <div class="card">
                    <FactCardComponent title="Lectures" color="var(--clr-primary-light-blue)" value="6"/>
                </div>
                <div class="card">
                    <FactCardComponent title="ECTs" color="var(--clr-primary-dark-blue)" value="83"/>
                </div>
                <div class="card">
                    <FactCardComponent title="Average Grade" color="var(--clr-neutral-500)" value="2.3"/>
                </div>
                </div>
                <div class="tasks">
                    <TasksComponent />
                </div>
                <div class="mensa">
                    <MensaComponent />
                </div>
                <div class="schedule">
                    <ScheduleComponent />
                </div>
                <div class="events">
                    <EventsComponent />
                </div>
                <div class="weather">
                    <WeatherComponent />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/HeaderComponent.vue'
    import SidebarComponent from '../components/SidebarComponent.vue'
    import WeatherComponent from '../components/WeatherComponent.vue'
    import FactCardComponent from '../components/FactCard.vue'
    import TasksComponent from '../components/TasksComponent.vue'
    import MensaComponent from '../components/MensaComponent.vue'
    import ScheduleComponent from '../components/ScheduleComponent.vue'
    import EventsComponent from '../components/EventsComponent.vue'
    
</script>

<style lang='scss' scoped>
.dashboard-page{
    height: 100%;
    padding-bottom: 5rem;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .dashboard{
        margin-top: 1rem;
        width: 100%;
        height: 100%;
        display: grid;
        gap: 1rem;
        grid-template-areas: 
            "cards"
            "schedule"
            "tasks"
            "mensa"
            "events"
            "weather";
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;

        .tasks, .mensa, .schedule, .events, .weather{
            background-color: var(--clr-neutral-100);
            border-radius: 10px;
            width: 100%;
            height: fit-content;
            padding: 1rem;
            box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
        }
        .cards{
            grid-area: cards;
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
            .card{
                background-color: var(--clr-neutral-100);
                border-radius: 10px;
                width: calc(50% - .5rem);
                padding: 1rem;
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
            }
        }
        .tasks{
            grid-area: tasks;
        }
        .mensa{
            grid-area: mensa;
        }
        .schedule{
            grid-area: schedule;
        }
        .events{
            grid-area: events;
        }
        .weather{
            grid-area: weather;
        }
    }
}


@media screen and (min-width: 1024px) {
    .dashboard-page{
        padding-bottom: 0;
        height: 100%;
        .dashboard{
            max-height: 100%;
            overflow: hidden;
            grid-template-areas: 
                "cards cards schedule"
                "tasks mensa schedule"
                "events events weather";

            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: calc(33% - .65rem) calc(33% - .65rem) calc(33% - .65rem);

            .cards, .tasks, .mensa, .schedule, .events, .weather{
                height: 100%;
                max-height: 100%;
            }

            .cards{
                .card{
                    width: calc(25% - 1rem);
                    height: 100%;
                    max-height: 100%;
                }
            }
        }
    }
}
</style>