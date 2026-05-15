export default function Skills() {
    const skills = [
        { label: "Web Development", value: 95 },
        { label: "Brand Identity", value: 80 },
        { label: "Logo Design", value: 90 },
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-panel">
                <h2 className="skills-title">Skills</h2>
                <p className="skills-subtitle">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text.
                </p>
                <div className="skills-carousel">
                    <button className="skills-arrow" type="button" aria-label="Previous">&#8249;</button>
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div className="skill-card" key={skill.label}>
                                <div
                                    className="skill-ring"
                                    style={{ "--value": skill.value } as React.CSSProperties}
                                >
                                    <span className="skill-value">{skill.value}%</span>
                                </div>
                                <span className="skill-label">{skill.label}</span>
                            </div>
                        ))}
                    </div>
                    <button className="skills-arrow" type="button" aria-label="Next">&#8250;</button>
                </div>
            </div>
        </section>
    );
}