export async function generateStaticParams() {
  // 여기에서 동적으로 생성할 id 목록을 정의합니다.
  const ids = ['1', '2', '3']; // 예시 id 목록

  // 각 id에 대해 params 객체를 생성하여 배열로 반환합니다.
  return ids.map(id => ({ params: { id } }));
}

export default function Test({ params }) {
  return <>{params.id}</>; // params.id를 사용하여 id를 표시합니다.
}
