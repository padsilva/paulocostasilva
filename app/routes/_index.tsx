import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Paulo da Costa Silva 💻" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <nav>NAV BAR</nav>
      </header>
      <main>MAIN</main>
      <footer>FOOTER</footer>
    </>
  );
}
