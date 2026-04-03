import Link from "next/link";

export default function Newslist({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <h2>{newsItem.title}</h2>
            <p>{newsItem.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
