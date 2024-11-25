import { Hero } from '@/components/Hero';
import { data } from '@/lib/data';

export default async function Home() {
  return (
    <main className="max-w-[1440px] mx-auto py-5 overflow-hidden">
      <div className="lg:flex gap-4 ">
        {/* <div className="hidden w-1/5 lg:block">Sidebar Here</div> */}
        <div className="w-full">
          <Hero data={data} />
        </div>
      </div>
    </main>
  );
}
