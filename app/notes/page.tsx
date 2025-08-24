import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { getQueryClient } from '@/lib/tanstack';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function NotesPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, ''],
    queryFn: () => fetchNotes({ page: 1, perPage: 12 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />;
    </HydrationBoundary>
  );
}
