<template>
    <div class="schedule-item__icon">
        <i class="fa-solid fa-book-open"></i>
    </div>
    <div class="schedule-item__info">
        <p class="class-name">{{ name }}</p>
        <p class="class-place">Room: <span>{{ room }}</span></p>
        <p class="class-time">Time: <span>{{ time }}</span></p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  name: String,
  room: String,
  time: String
})

</script>

<style lang="scss">
.schedule-item{
    width: 98%;
    padding: .5rem .8rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__icon{
        padding: .5rem;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 10px;
        margin-right: 1rem;
        display: grid;
        place-items: center;

        i{
            font-size: var(--fs-h2);
            color: #ffffff;
        }
    }

    &__info{
        font-family: var(--ff-text);
        font-size: var(--fs-p);
        .class-name{
            color: var(--clr-neutral-900);
            font-weight: bold;
        }

        .class-place, .class-time{
            font-size: var(--fs-footer);
            color: var(--clr-neutral-900);
            opacity: .6;
            line-height: 1.1rem;
        }
    }
}

.variation-1{
    background-color: var(--clr-accent-biw-trans);
    .schedule-item__icon{
        background-color: var(--clr-accent-biw);
    }
}
.variation-2{
    background-color: var(--clr-accent-ecri-trans);
    .schedule-item__icon{
        background-color: var(--clr-accent-ecri);
    }
}
.variation-3{
    background-color: var(--clr-accent-mb-mk-trans);
    .schedule-item__icon{
        background-color: var(--clr-accent-mb-mk);
    }
}
.variation-4{
    background-color: var(--clr-accent-nuw-trans);
    .schedule-item__icon{
        background-color: var(--clr-accent-nuw);
    }
}
.variation-5{
    background-color: var(--clr-accent-ai-trans);
    .schedule-item__icon{
        background-color: var(--clr-accent-ai);
    }
}

</style>