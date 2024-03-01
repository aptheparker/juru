'use client';

import { useRouter } from 'next/navigation';

export default function Button() {
  const navigation = useRouter();

  const handleClick = () => {
    navigation.push('/board-page');
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Go to Board Page
    </button>
  );
}
