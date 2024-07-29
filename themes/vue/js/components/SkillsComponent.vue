<template>
    <div class="skills-container">
        <!-- Frontend Skills Section -->
        <div class="frontend-container">
            <div class="skills-grid">
                <div
                    class="skill-card"
                    v-for="skill in frontendSkills"
                    :key="skill.title"
                >
                    <div class="image">
                        <img
                            :src="skill.image"
                            alt="Skill Image"
                            class="skill-image"
                        />
                    </div>
                    <h3 class="skill-title">{{ skill.title }}</h3>
                    <div class="progress-bar-container">
                        <div
                            class="progress-bar"
                            :style="{ width: skill.proficiency + '%' }"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center">Development Tools</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            frontendSkills: [
                {
                    title: "Laravel",
                    image: "/images/laravel.png",
                    proficiency: 95,
                },
                {
                    title: "PHP",
                    image: "/images/php.png",
                    proficiency: 85,
                },
                {
                    title: "SQL",
                    image: "/images/sql-server.png",
                    proficiency: 88,
                },
                {
                    title: "HTML5",
                    image: "/images/html5.png",
                    proficiency: 95,
                },
                {
                    title: "Bootstrap",
                    image: "/images/bootstrap.png",
                    proficiency: 90,
                },
                {
                    title: "JavaScript",
                    image: "/images/java-script.png",
                    proficiency: 90,
                },
                {
                    title: "CSS",
                    image: "/images/css-3.png",
                    proficiency: 90,
                },
                {
                    title: "Vue",
                    image: "/images/vue.png",
                    proficiency: 55,
                },
            ],
        };
    },
    name: "SkillsComponent",
};
</script>

<style scoped>
.skills-container {
    background-color: var(--extra-light);
    padding: 20px;
}

.frontend-container {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.frontend-container {
    background-color: var(--extra-light); /* Light blue */
}

.text-center {
    text-align: center;
    padding-bottom: 10px;
    font-size: 50px;
    font-family: var(--font-anton), sans-serif;
    color: var(--text-dark);
}
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
}

.skill-card {
    background-color: var(--extra-light); /* Card background color */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 8px 8px 15px var(--neumorph-shadow-light); /* Lighter shadow */
    /* Darker shadow */
    padding: 20px;
    text-align: center;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.skill-image {
    width: 100px; /* Adjust size as needed */
    height: 100px; /* Adjust size as needed */
    object-fit: cover;
}

.skill-title {
    font-size: 1.2em;
    margin: 10px 0;
    font-family: var(--font-palatino), sans-serif;
    color: var(--text-dark); /* Card background color */
}

.progress-bar-container {
    background-color: var(--extra-light);
    border-radius: 10px;
    overflow: hidden;
    height: 20px;
    margin-top: 10px;
}

.progress-bar {
    background-color: var(--primary-color);
    height: 100%;
    transition: width 0.3s ease-in-out;
    border-radius: 10px;
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2),
        inset -4px -4px 8px rgba(255, 255, 255, 0.7);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
    .skills-container {
        flex-direction: column;
        align-items: center;
    }

    .frontend-container,
    .backend-container {
        width: 100%;
    }
}
</style>
