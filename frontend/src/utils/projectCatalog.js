
import { projects } from '@/data/projects.js'

export { projects }

export function projectSlug(project) {
  return String(project.id)
}

export function projectTitle(project) {
  return project.title ?? 'Untitled Project'
}

export function projectDescription(project) {
  return project.description ?? ''
}

export function projectCategory(project) {
  return project.category ?? 'Other'
}

export function projectTechnologies(project) {
  return Array.isArray(project.tech) ? project.tech : []
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.id === slug) ?? null
}
