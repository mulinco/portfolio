export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export async function fetchGithubProjects(
  username: string,
): Promise<GithubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, 
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar repositórios do GitHub");
  }

  const data: GithubRepo[] = await response.json();

  // Filtro: Não pode ser fork E precisa ter a tag 'portfolio' nos topics
  return data.filter((repo) => 
    !repo.fork && repo.topics.includes("portfolio")
  );
}