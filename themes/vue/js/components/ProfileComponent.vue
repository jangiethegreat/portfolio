<template>
    <div class="container">
        <section class="section">
            <div class="section__container">
                <div class="content">
                    <p class="subtitle">HELLO</p>
                    <h1 class="title">
                        I'm <span>Jang<br />a</span> Web Developer
                    </h1>
                    <p class="description">
                        Welcome to my web developer portfolio! I'm Jang, a skilled and
                        creative web developer with a passion for creating beautiful,
                        responsive, and user-friendly websites. I've worked on a variety of
                        web projects, ranging from personal blogs to e-commerce platforms.
                    </p>
                    <div class="action__btns">
                        <button class="hire__me">Hire Me</button>
                        <button class="portfolio">Portfolio</button>
                    </div>
                </div>
                <div class="image">
                    <img :src="profileImage" alt="profile" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profileImage: '/images/profile.jpg', // Path relative to the public directory
        };
    },
    mounted() {
        console.log('Component mounted.');
    }
};
</script>

<style scoped>

.section {
    background-color: var(--extra-light);
}

.section__container {
    min-height: 60vh;
    max-width: 1500px;
    margin: auto;
    padding: 2rem 1rem 1rem; /* Adjusted padding: top right bottom left */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.subtitle {
    letter-spacing: 2px;
    color: var(--text-light);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-family: var(--font-palatino), serif; /* Use Palatino Linotype font */

}

.title {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
    font-family: var(--font-palatino), serif; /* Use Palatino Linotype font */

}

.title span {
    font-weight: 600;
}

.description {
    line-height: 1.5rem;
    color: var(--text-light);
    margin-bottom: 2rem;
}

.action__btns {
    display: flex;
    gap: 1rem;
}

.action__btns button {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 1rem 2rem;
    outline: none;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
}

.hire__me {
    background-color: var(--primary-color);
    color: var(--white-text);
}

.hire__me:hover {
    background-color: var(--primary-color-dark);
}

.portfolio {
    color: #000;
}

.portfolio:hover {
    background-color: var(--primary-color-dark);
    color: var(--white-text);
}

.image {
    display: grid;
    place-items: center;
}

.image img {
    width: min(25rem, 90%);
    border-radius: 100%;
}

@media (max-width: 750px) {
    nav .checkbox {
        display: block;
    }

    ul {
        position: absolute;
        width: 100%;
        height: calc(100vh - 85px);
        left: -100%;
        top: 85px;
        background-color: var(--extra-light);
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }

    nav #check:checked ~ ul {
        left: 0;
    }

    ul li a {
        font-size: 1.25rem;
    }

    .section__container {
        padding: 5rem 1rem 1rem; /* Adjusted padding for smaller screens */
        text-align: center;
        grid-template-columns: repeat(1, 1fr);
    }

    .image {
        grid-area: 1/1/2/2;
    }

    .action__btns {
        margin: auto;
    }
}
</style>
