import { Hero } from '@/components/Hero';
import { data } from '@/data';

export default function Home() {
  return (
    <div className="container py-5">
      <Hero data={data} />
    </div>
  );
}
