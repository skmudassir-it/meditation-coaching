"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faSchool, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { ProjectItem } from "@/lib/data";

const categoryIcons: Record<string, typeof faBuilding> = {
  Corporate: faBuilding,
  Schools: faSchool,
  Workshops: faUsers,
};

const CATEGORIES = ["All", "Corporate", "Schools", "Workshops"];

export default function ProjectsClient({ projects }: { projects: ProjectItem[] }) {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="flex flex-col">
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Work
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of our work bringing mindfulness to schools, workplaces, and communities.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as string)}>
              <TabsList>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger key={cat} value={cat}>
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const icon = categoryIcons[project.category] || faBuilding;
              return (
                <Card key={project.title} className="glass-card overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-[oklch(0.35/0.18/270)] to-[oklch(0.55/0.10/160)] flex items-center justify-center">
                    <FontAwesomeIcon icon={icon} className="w-10 h-10 text-white/50" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
