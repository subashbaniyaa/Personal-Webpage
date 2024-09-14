import Link from '@/components/Link';
import SectionContainer from '@/components/SectionContainer';

// TODO: Comment out when https://github.com/vercel/next.js/issues/50566 is fixed.

// export const metadata = {
//   title: '404 - Subash Baniya',
//   description: 'Not Found - Subash Baniya',
// };

export default function FourZeroFour() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <SectionContainer>
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
              404
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">Page not found!</p>
            <p className="mb-8">
              Page under construction! But don't worry, you can find other content on our homepage.
            </p>
            <Link href="/">Back to homepage</Link>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
