<script>
    import { onMount } from "svelte";
    import MainMenu from "./MainMenu.svelte";

    export let onButtonClick;

    onMount(() => {
        console.log("SlidingPane mounted!");
    });

    const handleClick = () => {
        if (onButtonClick) {
            onButtonClick();
        }
    };
    console.log(handleClick);
</script>

<div class="sliding-pane">
    <h1>Sliding Pane</h1>
    <MainMenu />
</div>

<style>
    .sliding-pane {
        padding: 16px;
        background-color: var(--background-primary);
    }

   
</style>
