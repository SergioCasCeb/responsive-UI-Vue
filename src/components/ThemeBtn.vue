<template>
    <div class="theme-toggle-container">
        <label for="theme"></label>
        <input type="checkbox" name="theme-toggle" id="theme-toggle" class="theme-toggle" @click="onClick()">
    </div>
</template>

<script lang="ts">
export default{
    name: 'ThemeBtn',
    methods: {
        onClick(){
            this.$emit('btn-click')
        }
    }
}

</script>

<style scoped lang="scss">
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

        &::before{
            content: 'dark_mode';
            left: 2.2rem;
        }
    }
}

</style>