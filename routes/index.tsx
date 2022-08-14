/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-4xl font-bold text-center`}>deno-ja</h1>
    </div>
  );
}
