import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — StillMind Meditation Co.",
  description:
    "Explore our past projects including corporate wellness programs, school mindfulness initiatives, and community workshops.",
};

export default function ProjectsPage() {
  return <ProjectsClient projects={PROJECTS} />;
}
