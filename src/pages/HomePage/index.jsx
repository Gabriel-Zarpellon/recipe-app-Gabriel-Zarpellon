import { Nav } from "../../components/NavMenu";
import { RecipeList } from "../../components/RecipeList";
import { SearchSection } from "../../components/SearchSection";

export function HomePage() {
  return (
    <>
      <header>
        <h2>RecipeApp</h2>
        <h1>Recipe Blog Application</h1>
      </header>
      <main>
        <Nav />
        <SearchSection />
        <section>
          <RecipeList/>
        </section>
      </main>
    </>
  );
}
