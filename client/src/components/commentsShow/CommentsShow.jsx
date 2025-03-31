export default function CommentsShow() {
  return (
    <div className="details-comments bg-gray-900 text-white px-4 md:px-10 py-8 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Reviews
      </h2>

      <ul className="space-y-3">
        <li className="comment bg-gray-800 border border-gray-700 p-2 rounded shadow-sm">
          <p className="text-gray-300 text-sm">
            <span className="font-medium text-white">Content:</span> I rate this one quite highly.
          </p>
        </li>
        <li className="comment bg-gray-800 border border-gray-700 p-2 rounded shadow-sm">
          <p className="text-gray-300 text-sm">
            <span className="font-medium text-white">Content:</span> The best game.
          </p>
        </li>
      </ul>

      <p className="no-comment text-center text-gray-500 italic text-sm mt-6">
        No reviews.
      </p>
    </div>
  );
}
