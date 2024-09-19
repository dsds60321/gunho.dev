export default function ErrorHooks({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-200">{title}</h1>
      {children}
    </div>
  );
}
