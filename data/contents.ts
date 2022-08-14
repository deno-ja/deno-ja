import * as Icons from "../components/Icons.tsx";

interface Content {
  title: string;
  icon: typeof Icons.Academic;
  href: string;
  description: string;
  author: string;
  authorUrl?: string;
  class: string;
}
export const contents: Content[] = [
  {
    title: "Effective Deno",
    icon: Icons.Academic,
    href: "https://zenn.dev/uki00a/books/effective-deno",
    description: `Denoを有効に活用するためのノウハウを一通り得られる包括的なドキュメントです。`,
    author: "uki00a",
    authorUrl: "https://twitter.com/uki00a",
    class: "bg-green-200 text-green-700",
  },
  {
    title: "週刊Deno",
    icon: Icons.NewsPaper,
    href: "https://uki00a.github.io/deno-weekly/",
    description: `毎週日曜日にその週のDenoの最新情報を発信しています。`,
    author: "uki00a",
    authorUrl: "https://twitter.com/uki00a",
    class: "bg-blue-200 text-blue-700",
  },
  {
    title: "deno-ja Scrapbox",
    icon: Icons.Pencil,
    href: "https://scrapbox.io/deno-ja/",
    description: `Denoに関してなんでもまとめているWiki的なページです。deno-jaコミュニティで管理されています。`,
    author: "deno-ja",
    class: "bg-yellow-200 text-yellow-700",
  },
];
