import { lazy, Suspense } from "react";

const Heavy = lazy(() => import("./Home"));

function LazyHome() {
  return (
    <div className="lazy-container">
      <div>Buscando Pokemons</div>
      <Suspense fallback={<div>loading...</div>}>
        <Heavy />
      </Suspense>
    </div>
  );
}

export default LazyHome;
