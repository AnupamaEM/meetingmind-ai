import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateMeeting() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError('Please enter a meeting title.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          notes: notes.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to create meeting.');
      }

      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to create meeting.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Create Meeting</h1>

      <form onSubmit={handleSubmit} className="mt-5">
        <input
          className="border p-3 w-full"
          placeholder="Meeting title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          className="border p-3 w-full mt-5 h-60"
          placeholder="Paste meeting notes here"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />

        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          className="bg-black text-white px-5 py-3 rounded mt-5 disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
}