import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const initialNotes = await fetchNotes({ page: 1, perPage: 12 });

  return <NotesClient initialNotes={initialNotes} />;
}
