export default function HomeCard({ title, description, gifUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <h1 className="font-bold text-lg mb-2.5">{title}</h1>
      {gifUrl && (
        <img
          src={gifUrl}
          alt={title}
          className="w-full object-cover rounded-t-lg mb-4"
          width="2"
          height="1"
        />
      )}
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
