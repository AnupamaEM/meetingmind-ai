import { Link } from "react-router-dom";

interface Props {

    id:string;

    title:string;

    date:string;

    summary:string;
}


export default function MeetingCard(
    {
        id,
        title,
        date,
        summary
    }:Props
)
{

return (

<div className="border rounded-xl p-5 shadow">

    <h2 className="text-xl font-bold">
        {title}
    </h2>


    <p className="text-gray-500">
        {date}
    </p>


    <p className="mt-3">
        {summary}
    </p>


    <Link
      to={`/meeting/${id}`}
      className="text-blue-600"
    >

        View Meeting

    </Link>

</div>

)

}