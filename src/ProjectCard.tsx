type ProjectCardProps = {
    title: string;
    description: string;
    tone: "one" | "two" | "three";
};

export default function ProjectCard({ title, description, tone }: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className={`project-thumb project-thumb--${tone}`} />
            <div className="project-body">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
        </article>
    );
}