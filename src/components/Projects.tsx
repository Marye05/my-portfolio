import ProjectCard from "@/src/components/ProjectCard";


export default function Projects() {
    const projects = [
        {
            title: "Travel Landing Page",
            description: "Modern landing page with bold gradients and a strong hero message.",
            tone: "one" as const,
        },
        {
            title: "Team Collaboration",
            description: "Clean layout highlighting teams, calls to action, and product value.",
            tone: "two" as const,
        },
        {
            title: "Product Showcase",
            description: "Minimal interface focused on product visuals and clarity.",
            tone: "three" as const,
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Projects</h2>
            <p className="projects-subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="projects-tabs" role="tablist" aria-label="Project categories">
                <button className="tab-button active" type="button">Tab One</button>
                <button className="tab-button" type="button">Tab Two</button>
                <button className="tab-button" type="button">Tab Three</button>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}