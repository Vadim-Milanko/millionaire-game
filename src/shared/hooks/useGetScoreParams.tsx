import { useSearchParams } from 'next/navigation';

export default function useGetScoreParams(): { score: number } {
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || 0;

  return {
    score: +score,
  };
}
