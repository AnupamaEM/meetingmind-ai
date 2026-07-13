import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface ActionItem {
  task: string;
  owner: string;
  deadline: string;
  status: string;
}

interface Meeting {
  _id: string;
  title: string;
  notes: string;
  summary: string;
  actionItems: ActionItem[];
}

export default function MeetingDetails() {
  const { id } = useParams();
  const [meeting, setMeeting] = useState<Meeting | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadMeeting() {
      if (!id) {
        setError('Meeting id is missing.');
        return;
      }

      try {
        const response = await fetch(`/api/meetings/${id}`);

        if (!response.ok) {
          throw new Error('Unable to load meeting details.');
        }

        const data = await response.json();
        setMeeting(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load meeting details.');
      }
    }

    loadMeeting();
  }, [id]);

  if (error) {
    return <div className="p-10 text-red-600">{error}</div>;
  }

  if (!meeting) {
    return <div className="p-10">Loading meeting details...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{meeting.title}</h1>

      <div className="border p-5 rounded mt-10">
        <h2 className="font-bold text-xl">AI Summary</h2>
        <p className="mt-3">{meeting.summary || 'AI generated summary will appear here...'}</p>
      </div>

      <div className="border p-5 rounded mt-5">
        <h2 className="font-bold text-xl">Notes</h2>
        <p className="mt-3 whitespace-pre-wrap">{meeting.notes || 'No notes available.'}</p>
      </div>

      <div className="border p-5 rounded mt-5">
        <h2 className="font-bold text-xl">Action Items</h2>
        {meeting.actionItems?.length ? (
          <ul className="mt-3 space-y-2">
            {meeting.actionItems.map((item, index) => (
              <li key={`${item.task}-${index}`}>
                {`${item.task} - ${item.owner}`}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3">No action items yet.</p>
        )}
      </div>
    </div>
  );
}