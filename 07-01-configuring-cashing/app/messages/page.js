import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 5; // Revalidate every 5 seconds
// export const dynamic = 'force-dynamic'; // Force dynamic rendering (no caching)

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     tags: ['msg'], // Tag for cache invalidation
  //   }
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
