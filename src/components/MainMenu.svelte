<script>
    let isOpen = false;

    const buttonPositions = [
        { angle: -66, radius: 180 }, // Button 1
        { angle: -34, radius: 165 }, // Button 2
        { angle: -0, radius: 160 }, // Button 3
        { angle: -18, radius: 240 }, // Button 4
        { angle: -50, radius: 270 }, // Button 5
        { angle: -77, radius: 300 }, // Button 6
        { angle: -82, radius: 400 }, // Button 7
        { angle: -60, radius: 375 }, // Button 8
        { angle: -30, radius: 330 }, // Button 9
    ];

    // Toggles menu visibility
    function toggleMenu() {
        isOpen = !isOpen;
    }

    // Handles button click behavior
    function handleButtonClick(index) {
        alert(`Button ${index + 1} clicked!`);
        toggleMenu(); // Close the menu after a button is clicked
    }
</script>

<div class="galaxy-container">
    <!-- Main Button (Black Hole) -->
    <button id="toggleMenu" class="main-button" on:click={toggleMenu}>
        SHOOT
    </button>

    <!-- Menu Buttons -->
    {#each buttonPositions as { angle, radius }, index}
    <button
        class="menu-button"
        style={`
            --angle: ${angle}deg;
            --radius: ${radius}px;
            visibility: ${isOpen ? 'visible' : 'hidden'};
            opacity: ${isOpen ? 1 : 0};
        `}
        class:is-open={isOpen}
        on:click={() => handleButtonClick(index)}
    >
        {index + 1}
    </button>
{/each}
</div>

<style>
    .galaxy-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    /* Main Button Styling */
    .main-button {
        position: absolute;
        top: 50%;
        left: -40px;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, #d97832, #ea2910);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        font-size: 14px;
        color: white;
    }

    /* Menu Button Styling */
    .menu-button {
        position: absolute;
        top: 55%;
        left: -25px;
        width: 50px;
        height: 50px;
        background: radial-gradient(circle, #f39c12, #e67e22);
        color: white;
        font-weight: bold;
        text-align: center;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%) rotate(0deg) translateX(0) rotate(0deg);
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 5;
        pointer-events: none;
    }

    .menu-button.is-open {
        animation: circlePath 0.6s ease-out forwards;
        pointer-events: auto;
    }

    @keyframes circlePath {
        from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(0px)
                rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(var(--angle))
                translateX(var(--radius)) rotate(0deg);
        }
    }
    
</style>
