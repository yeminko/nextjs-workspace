import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite meals from our menu</p>
        <p className={classes.cta}>
          <Link href="/meals/share" className={classes.link}>
            Share your own meal
          </Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
