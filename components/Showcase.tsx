import GitHub from "tabler-icons/brand-github.tsx";
import { Project } from "../routes/api/showcase.ts";

interface ShowcaseProps {
  projects: Project[];
}

export default function Showcase(props: ShowcaseProps) {
  return (
    <>
      <div class="max-w-screen-lg mx-auto my-16">
        <h2 class="text-3xl text-center text-gray-400">
          Showcase by deno-ja
        </h2>

        <div>
          <Projects items={props.projects} />
        </div>

        <p class="p-4 mt-8 text-center">
          <a
            class="text-blue-500 hover:underline"
            href="https://github.com/deno-ja/showcase"
          >
            サイトの追加はこちらから
          </a>
        </p>
      </div>
    </>
  );
}

interface ProjectProps {
  items: Project[];
}

export function Projects(props: ProjectProps) {
  return (
    <div
      class={`p-4 pt-8 grid grid-cols-1 md:grid-cols-3 items-start gap-8`}
    >
      {props.items.map((project) => (
        <div class="w-full max-w-sm mx-auto group">
          <a href={project.link} tabIndex={-1}>
            <img
              loading="lazy"
              src={`https://deno-ja-showcase.deno.dev/screenshot/${project.image}1x.jpg`}
              srcset={`https://deno-ja-showcase.deno.dev/screenshot/${project.image}2x.jpg 2x, https://deno-ja-showcase.deno.dev/screenshot/${project.image}1x.jpg 1x`}
              alt={project.title}
              width={600}
              height={337}
              style={{ aspectRatio: "16/9" }}
              class="object-cover shadow-lg group-hover:(shadow-xl opacity-70) rounded-lg"
            />
          </a>
          <div class="mt-4 flex items-center">
            <div class="text(lg gray-600) flex-1 group-hover:text-underline">
              <a href={project.link}>{project.title}</a>
            </div>
            {project.github && (
              <a
                href={`https://github.com/${project.github}`}
                class="ml-2 text-gray-500 hover:text-gray-700"
              >
                <GitHub />
                <span class="sr-only">GitHub</span>
              </a>
            )}
          </div>
          <div>
            {project.tags.map((tag) => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            ))}
          </div>
          <div class="mt-2 text-gray-600">{project.description}</div>
        </div>
      ))}
    </div>
  );
}
