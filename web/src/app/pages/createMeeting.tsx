export default function CreateMeeting(){


return (

<div className="p-10">


<h1 className="text-3xl font-bold">

Create Meeting

</h1>



<input

className="border p-3 w-full mt-5"

placeholder="Meeting title"

/>



<textarea

className="border p-3 w-full mt-5 h-60"

placeholder="Paste meeting notes here"

/>



<button

className="bg-black text-white px-5 py-3 rounded mt-5"

>

Create

</button>


</div>

)

}