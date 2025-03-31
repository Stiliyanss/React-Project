import commentService from "../../services/commentService";

export default function CommentsCreate({email,carId, onCreate}) {
const commentAction = async(formData) =>{
  const comment = formData.get('comment');
   
  const createdComment = await commentService.create(email, carId, comment);
  onCreate(createdComment);
}

  return (
    <article className="create-comment bg-gray-900 text-white px-4 md:px-10 py-6 rounded-md shadow-sm mt-6">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Add new review:
      </label>
      <form className="form space-y-3" action={commentAction}>
        <textarea
          name="comment"
          placeholder="Write your review..."
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 p-2 rounded border border-gray-700 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
          rows="3"
        ></textarea>
        <input
          className="btn submit bg-gray-700 hover:bg-gray-600 text-white py-1.5 px-4 rounded text-sm cursor-pointer transition"
          type="submit"
          value="Add Review"
        />
      </form>
    </article>
  );
}
