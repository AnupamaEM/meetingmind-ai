import { Link } from "react-router-dom";

import MeetingCard from "../components/MeetingCard";

import { meetings } from "../data/mockMeetings";


export default function Dashboard(){

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



    <div className="grid gap-5 mt-10">


    {
        meetings.map(
            meeting=>(

                <MeetingCard
                  key={meeting.id}
                  {...meeting}
                />

            )
        )
    }


    </div>


</div>

)

}