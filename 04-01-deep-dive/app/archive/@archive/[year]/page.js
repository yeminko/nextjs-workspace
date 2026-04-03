import Newslist from "@/components/news-list";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;

  return <Newslist news={[]} />;
}
