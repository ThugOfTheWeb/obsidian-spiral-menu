<script>
    const toggleMenuButton = document.getElementById("toggleMenu");
    const menuButtons = document.querySelectorAll(".menu-button");
    
    let isOpen = false;
    const numButtons = 5; // Number of buttons
    const a = 50; // Spiral starting radius
    const b = 20; // Spiral growth rate

    // Generate positions for buttons along the spiral
    const spiralButtons = Array.from({ length: numButtons }, (_, i) => {
        const theta = i * 1.5; // Angle step
        const r = a + b * theta; // Spiral radius
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        return { id: i, x, y };
    });

    // Toggle the menu
    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<div class="galaxy-container">
    <!-- Black Hole (Main Button) -->
    <button id="toggleMenu" class="main-button" on:click={toggleMenu}>
        SHOOT
    </button>

    <!-- Menu Buttons -->
    {#each spiralButtons as { id, x, y }}
        <div
            class="menu-button"
            style={`
                --x: ${x}px;
                --y: ${y}px;
            `}
            class:is-open={isOpen}
        >
            {id + 1}
        </div>
    {/each}

    <!-- Trails
    <svg class="trail-container">
        {#each spiralButtons as { x, y }}
        <line
        x1="0"
        y1="0"
        x2={isOpen ? x : 0}
        y2={isOpen ? y : 0}
        class="trail"
        />
        {/each}
    </svg>
    -->
</div>

<style>
    .galaxy-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    .main-button {
        position: absolute;
        top: 50%;
        left: -40px;
        width: 80px;
        height: 80px;
        background: red;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
    }

    /* Main Black Hole Styling 
    .main-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: black;
        color: white;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        z-index: 10;
        cursor: pointer;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    }
    
    */
    .menu-button {
        position: absolute;
        top: 55%;
        left: -25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: radial-gradient(circle, #f39c12, #ee490d);
        color: white;
        font-weight: bold;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
        transform: translate(-50%, -50%);

        /* transform: translate(-50%, -50%) scale(0); */
        /* transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55); */
    }

    .menu-button.is-open {
        transform: translate(calc(var(--x)), calc(var(--y))) scale(1);
    }

    /* Trail Styling 
    .trail-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    }

    .   trail {
        stroke: rgba(255, 255, 255, 0.6);
        stroke-width: 2;
        transition: all 0.8s ease-out;
    } */
</style>
