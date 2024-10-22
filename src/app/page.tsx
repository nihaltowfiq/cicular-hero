import { Hero } from '@/components/Hero';
import { data } from '@/lib/data';

export default function Home() {
  return (
    <div className="container py-5 overflow-hidden">
      <Hero data={data} />
    </div>
  );
}
