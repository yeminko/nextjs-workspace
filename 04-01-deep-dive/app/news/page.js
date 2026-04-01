import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage() {
    return (
      <>
        <h1>News Page</h1>
        <ul className="news-list">
          { DUMMY_NEWS.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.slug}`}>
               <img src={`/images/news/${news.image}`} alt={news.title} />
               <h2>{news.title}</h2>
               <p>{news.summary}</p>
              </Link>
            </li>
          )) }
        </ul>
      </>
    );
}