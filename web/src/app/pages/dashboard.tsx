import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MeetingCard from "../components/MeetingCard";

interface MeetingSummary {
  _id: string;
  title: string;
  summary: string;
  notes: string;
  createdAt?: string;
}

export default function Dashboard(){
  const [meetings, setMeetings] = useState<MeetingSummary[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMeetings() {
      try {
        const response = await fetch("/api/meetings");

        if (!response.ok) {
          throw new Error("Unable to load meetings.");
        }

        const data = await response.json();
        setMeetings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load meetings.");
      }
    }

    loadMeetings();
  }, []);

return (

<div className="p-10">


    <div className="flex justify-between">

        <h1 className="text-3xl font-bold">
            MeetingMind AI
        </h1>


        <Link
          to="/create"
          className="bg-black text-white px-4 py-2 rounded"
        >

            + New Meeting

        </Link>


    </div>

    {error ? <p className="mt-5 text-red-600">{error}</p> : null}

    <div className="grid gap-5 mt-10">


    {
        meetings.map(
            meeting=>(

                <MeetingCard
                  key={meeting._id}
                  id={meeting._id}
                  title={meeting.title}
                  date={meeting.createdAt ? new Date(meeting.createdAt).toLocaleDateString("en-GB") : ""}
                  summary={meeting.summary || meeting.notes || "No summary yet."}
                />

            )
        )
    }


    </div>


</div>

)

}