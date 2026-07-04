

export default function MeetingDetails(){


return (

<div className="p-10">


<h1 className="text-3xl font-bold">

Sprint Planning

</h1>



<button

className="bg-purple-600 text-white px-5 py-3 rounded mt-5"

>

Generate AI Summary ✨

</button>



<div className="border p-5 rounded mt-10">


<h2 className="font-bold text-xl">

AI Summary

</h2>


<p className="mt-3">

AI generated summary will appear here...

</p>


</div>



<div className="border p-5 rounded mt-5">


<h2 className="font-bold text-xl">

Action Items

</h2>


<ul>

<li>
Fix login bug - John
</li>

<li>
Deploy backend - Sarah
</li>

</ul>


</div>



</div>

)

}