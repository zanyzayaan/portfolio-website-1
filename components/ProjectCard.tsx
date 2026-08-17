import type { Project } from "../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-${index + 1}`} data-cursor="interactive">
      <div className={`project-visual visual-${project.visual}`}>
        <span className="visual-index">0{index + 1}</span>
        <span className="visual-mark" aria-hidden="true" />
      </div>
      <div className="project-info">
        <div>
          <p>{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-hover-copy">Explore project <span>↗</span></div>
    </article>
  );
}
