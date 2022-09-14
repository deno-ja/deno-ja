export interface Project {
  title: string;
  link: string;
  github: string;
  image: string;
  description: string;
  tags: string[];
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/deno-ja/showcase/main/showcase.json",
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
  return [];
}
